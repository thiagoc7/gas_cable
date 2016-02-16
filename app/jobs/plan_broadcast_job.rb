class PlanBroadcastJob < ApplicationJob
  queue_as :default

  def perform(plan)
    ActionCable.server.broadcast 'plan_channel', plan: plan.as_json
  end
end
