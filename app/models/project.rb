class Project < ActiveRecord::Base
  attr_accessible :id, :name, :user_id
  belongs_to :user
  has_many :tasks
  validates :name, :presence => true
  validates :name, :uniqueness => true
end
