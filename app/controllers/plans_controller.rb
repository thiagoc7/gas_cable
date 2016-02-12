class PlansController < ApplicationController

  def index
    initial_date = (params[:initial_date] || Date.today).to_date
    final_date = (params[:final_date] || Date.today + 1).to_date

    Station.create_all_plans_until(final_date)
    @plans = Plan.in_range(initial_date, final_date)

    respond_to do |format|
      format.html # show.html.erb
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
