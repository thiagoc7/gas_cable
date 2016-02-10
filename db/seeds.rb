oliveira = Station.create! name: 'Oliveira', strong_days: '1, 16', weak_days: '15, last'
outeiro = Station.create! name: 'Outeiro'

Tank.create! station: oliveira, gasoline: 'S500', capacity: 30000, min: 20000, max: 55000, number: '1, 3, 6'
Tank.create! station: oliveira, gasoline: 'S10', capacity: 15000, min: 6500, max: 17000, number: 4
Tank.create! station: oliveira, gasoline: 'GC', capacity: 15000, min: 4500, max: 16000, number: 5
Tank.create! station: oliveira, gasoline: 'ET', capacity: 10000, min: 2500, max: 10500, number: 2

Tank.create! station: outeiro, gasoline: 'GC', capacity: 30000, min: 6000, max: 31000, number: '4, 5'
Tank.create! station: outeiro, gasoline: 'GA', capacity: 15000, min: 3000, max: 15000, number: 6
Tank.create! station: outeiro, gasoline: 'ET', capacity: 15000, min: 3000, max: 15000, number: 3
Tank.create! station: outeiro, gasoline: 'S10', capacity: 15000, min: 3000, max: 15000, number: 2
Tank.create! station: outeiro, gasoline: 'S500', capacity: 15000, min: 3000, max: 15000, number: 1
