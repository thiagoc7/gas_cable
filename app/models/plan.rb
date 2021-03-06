class Plan < ApplicationRecord
  belongs_to :tank

  validates_presence_of :date
  validates_uniqueness_of :date, scope: :tank

  before_save :set_initial_volume
  before_validation :set_defaults
  after_commit :update_next_plan_initial_volume
  after_update_commit { PlanBroadcastJob.perform_later self }

  def self.at(date, tank)
    where(date: date, tank: tank).first
  end

  def self.in_range(initial_date, final_date)
    where(date: initial_date..final_date).order(:date)
  end

  def as_json
    PlanSerializer.new(self).as_json['plan']
  end

  def finished?
    self[:final_volume] != nil
  end

  def final_volume
    finished? ? self[:final_volume] : initial_volume + buy_volume - sell_volume
  end

  def sell_volume
    finished? ? initial_volume - final_volume + buy_volume : self[:sell_volume]
  end

  protected
  def set_initial_volume
    last_plan = Plan.at(self.date - 1, self.tank)
    self.initial_volume = last_plan.final_volume if last_plan
  end

  def update_next_plan_initial_volume
    next_plan = Plan.at(self.date + 1, self.tank)
    next_plan.save! if next_plan
  end

  def set_defaults
    self.buy_volume ||= 0
    self.sell_volume ||= 0
  end
end
