class Station < ApplicationRecord
  has_many :tanks

  validates_presence_of :name
  validates_uniqueness_of :name
end
