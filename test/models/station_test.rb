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

  test 'create all plans for all stations' do
    date = Date.today + 1
    Station.create_all_plans_until(date)
    assert_equal Plan.count, 6

    last_date = Station.first.last_plan_date
    assert_equal date, last_date
  end
end
