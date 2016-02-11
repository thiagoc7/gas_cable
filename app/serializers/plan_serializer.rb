class PlanSerializer < ActiveModel::Serializer
  attributes :id, :date, :gasoline, :initial_volume, :buy_volume, :sell_volume, :final_volume, :finished

  def gasoline
    object.tank.gasoline
  end

  def finished
    object.finished?
  end
end
