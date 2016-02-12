require 'test_helper'

class PlansControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get '/plans.json', params: { initial_date: Date.today, final_date: Date.today + 2 }
    assert_response :success

    json = JSON.parse(response.body)
    assert_equal json.length, 6
  end

  test 'should update plan' do
    patch plan_url(plans(:outeiro)), params: { plan: { final_volume: 1234 } }
    assert_response :success
    assert_empty response.body
  end

  test 'should return error if don t validate' do
    patch plan_url(plans(:outeiro)), params: { plan: { date: nil } }
    assert_response :unprocessable_entity
  end
end
