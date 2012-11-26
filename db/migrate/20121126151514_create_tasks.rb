class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.primary_key :id
      t.integer :user_id
      t.string :name
      t.text :description
      t.boolean :status
      t.integer :project_id
      t.datetime :deadline

      t.timestamps
    end
  end
end
