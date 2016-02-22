class PlanSerializer < ActiveModel::Serializer
  attributes :id,
             :date,
             :gasoline,
             :station,
             :initial_volume,
             :buy_volume,
             :sell_volume,
             :final_volume,
             :finished,
             :above_max,
             :below_min,
             :references

  def gasoline
    object.tank.gasoline
  end

  def station
    object.tank.station.name
  end

  def initial_volume
    object.initial_volume.round(-2)
  end

  def final_volume
    object.final_volume.round(-2)
  end

  def finished
    object.finished?
  end

  def above_max
    (object.initial_volume + object.buy_volume - (object.sell_volume * 0.3)) > object.tank.capacity
  end

  def below_min
    object.final_volume < object.tank.min
  end

  def references
    [
        [Date.today - 1, 1000],
        [Date.today - 2, 2000],
        [Date.today - 3, 3000],
        [Date.today - 4, 4000]
    ]
  end
end
