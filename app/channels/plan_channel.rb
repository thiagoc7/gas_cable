# Be sure to restart your server when you modify this file. Action Cable runs in an EventMachine loop that does not support auto reloading.
class PlanChannel < ApplicationCable::Channel
  def subscribed
    stream_from "plan_channel"
  end

  def unsubscribed
    stop_all_streams
  end

  # def update_plan(plan)
  #   plan = Plan.find(plan['id'])
  #   plan.plan['param']
  #   Task.create! date: plan['date'], description: plan['description']
  # end
end
