require 'test_helper'

class StationTest < ActiveSupport::TestCase
  test 'name is required and unique' do
    station = Station.new
    refute station.valid?

    station.name = 'Oliveira'
    refute station.valid?

    station.name = 'Oliveira 2'
    assert station.valid?
  end
end
