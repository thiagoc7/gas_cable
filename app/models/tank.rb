class Tank < ApplicationRecord
  belongs_to :station
  has_many :plans

  validates_presence_of :gasoline, :capacity, :max, :min, :number
  validates_uniqueness_of :gasoline, scope: :station

end
