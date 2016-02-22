require 'test_helper'

class StationTest < ActiveSupport::TestCase
  test 'create all plans for all stations' do
    date = Date.today + 1
    PlanCreator.new(date).create!
    assert_equal Plan.count, 6

    last_date = Station.first.last_plan_date
    assert_equal date, last_date
  end
end
