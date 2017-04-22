class CreateFixtures < ActiveRecord::Migration[5.0]
  def change
    create_table :fixtures do |t|
      t.string :home_team, null: false
      t.string :away_team, null: false
      t.integer :home_score
      t.integer :away_score
      t.string :location, null: false
      t.datetime :kickoff, null: false

      t.timestamps
    end
  end
end
