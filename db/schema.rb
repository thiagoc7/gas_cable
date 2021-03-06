# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160210152731) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "plans", force: :cascade do |t|
    t.date     "date"
    t.integer  "tank_id"
    t.integer  "initial_volume", default: 0
    t.integer  "buy_volume",     default: 0
    t.integer  "sell_volume",    default: 0
    t.integer  "final_volume"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.index ["tank_id"], name: "index_plans_on_tank_id", using: :btree
  end

  create_table "stations", force: :cascade do |t|
    t.text     "name"
    t.string   "strong_days"
    t.string   "weak_days"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "tanks", force: :cascade do |t|
    t.text     "gasoline"
    t.integer  "station_id"
    t.integer  "capacity"
    t.integer  "min"
    t.integer  "max"
    t.text     "number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["station_id"], name: "index_tanks_on_station_id", using: :btree
  end

  create_table "tasks", force: :cascade do |t|
    t.date     "date"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_foreign_key "plans", "tanks"
  add_foreign_key "tanks", "stations"
end
