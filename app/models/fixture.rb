class Category < ApplicationRecord
  validates :home_team, presence: true
  validates :away_team, presence: true
  validates :location, presence: true
  validates :kickoff, presence: true
end
