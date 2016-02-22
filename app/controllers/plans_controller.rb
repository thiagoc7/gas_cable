class PlansController < ApplicationController

  def index
    initial_date = (params[:initialDate] || Date.today).to_date
    final_date = (params[:finalDate] || Date.today + 1).to_date

    PlanCreator.new(final_date).create!
    @plans = Plan.in_range(initial_date, final_date)

    respond_to do |format|
      format.html
      format.json { render json: @plans }
    end
  end

  def update
    plan = Plan.find(params[:id])
    if plan.update(plan_params)
      head :no_content
    else
      render json: plan.errors, status: :unprocessable_entity
    end
  end

  private
  def plan_params
    params.require(:plan).permit(:date, :gasoline, :initial_volume, :buy_volume, :sell_volume, :final_volume)
  end
end
