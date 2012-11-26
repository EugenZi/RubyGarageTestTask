class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.primary_key :id
      t.integer :user_id
      t.string :name

      t.timestamps
    end
  end
end
