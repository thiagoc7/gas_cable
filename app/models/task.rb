class Task < ApplicationRecord
  after_create_commit { TaskBroadcastJob.perform_later self }
end
