class Api::V1::FixturesController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    @fixtures = Fixture.all
    render json: @fixtures
  end

end
