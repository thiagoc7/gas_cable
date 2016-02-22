class Station < ApplicationRecord
  has_many :tanks
  has_many :plans, through: :tanks

  validates_presence_of :name
  validates_uniqueness_of :name

  def last_plan_date
    plans.order('date DESC').limit(1).pluck(:date)[0] || Date.today - 1
  end
end
