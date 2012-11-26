class Task < ActiveRecord::Base
  attr_accessible :deadline, :description, :id, :name, :project_id, :status, :user_id
  belongs_to :user
  belongs_to :project
end
