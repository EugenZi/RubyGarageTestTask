class IndexController < ApplicationController
  def index
  end

  def list
    @projects = Project.all
    respond_to do |format|
      format.json { render :json => @projects }
    end
  end


end
