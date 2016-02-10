require 'test_helper'

class PlanTest < ActiveSupport::TestCase

  setup do
    tank = plans(:oliveira).tank
    date = plans(:oliveira).date
    @plan = Plan.new date: date, tank: tank
  end

  test 'belongs to a tank' do
    plan = plans(:oliveira)
    assert plan.tank = tanks(:oliv_gc)
  end

  test 'is unique for each date/tank' do
    refute @plan.valid?
  end

  test 'initial volume == 0 if it is the first day' do
    @plan.date = plans(:oliveira).date - 1
    @plan.save!
    assert @plan.initial_volume == 0
  end

  test 'initial volume == previous day final volume' do
    @plan.date = plans(:oliveira).date + 1
    @plan.save!
    assert_equal @plan.initial_volume, 13000
  end

  test 'is finished when have final volume' do
    plans(:oliveira).save!
    assert plans(:oliveira).finished?
    refute @plan.finished?
  end

  test 'final volume is calculated if not in db' do
    @plan.date = plans(:oliveira).date + 1
    @plan.sell_volume = 3000
    @plan.buy_volume = 1500
    @plan.save!
    assert_equal @plan.final_volume, plans(:oliveira).final_volume - 3000 + 1500
    assert_equal plans(:oliveira).final_volume, 13000
  end

  test 'initial volume is synced with day before final volume' do
    @plan.date = plans(:oliveira).date + 1
    @plan.sell_volume = 3000
    @plan.save!

    @plan2 = Plan.create! date: @plan.date + 1, tank: @plan.tank, sell_volume: 2000

    plans(:oliveira).final_volume = 12000
    plans(:oliveira).save!

    @plan2 = Plan.where(date: @plan.date + 1, tank: @plan.tank).first!
    assert_equal @plan2.final_volume, 12000 - 3000 - 2000
  end

  test 'sell volume is calculated when finished' do
    plan = plans(:outeiro)
    assert_equal plan.sell_volume, 3000

    plan.final_volume = 8000
    plan.save!

    assert_equal plan.sell_volume, 2000
  end
end
