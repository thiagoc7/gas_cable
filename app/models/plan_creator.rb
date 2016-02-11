class PlanCreator

  def initialize(final_date, stations = Station.all)
    @final_date = final_date
    @stations = stations
  end

  def create!
    @stations.each { |station| create_plans_for(station) }
  end

  protected
  def create_plans_for(station)
    start_date = station.last_plan_date
    station.transaction do
      while start_date < @final_date
        start_date += 1
        station.tanks.each { |tank| Plan.create! date: start_date, tank: tank }
      end
    end
  end
end