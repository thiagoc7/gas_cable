class Station < ApplicationRecord
  has_many :tanks
  has_many :plans, through: :tanks

  validates_presence_of :name
  validates_uniqueness_of :name

  def last_plan_date
    plans.order('date DESC').limit(1).pluck(:date)[0]
  end

  def self.create_all_plans_until(date)
    PlanCreator.new(date).create!
  end
end
