require 'test_helper'

class TankTest < ActiveSupport::TestCase
  test "belongs to a station" do
    tank = tanks(:oliv_gc)
    assert tank.station == stations(:oliveira)
  end

  test "all fields are required" do
    tank = Tank.new
    refute tank.valid?

    tank.gasoline = 'GG'
    refute tank.valid?

    tank.capacity = 1
    refute tank.valid?

    tank.max = 1
    refute tank.valid?

    tank.min = 1
    refute tank.valid?

    tank.number = '1, 2'
    refute tank.valid?

    tank.station = stations(:outeiro)
    assert tank.valid?
  end
end
