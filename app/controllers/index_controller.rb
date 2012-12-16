class IndexController < ApplicationController
  def index
  	@project = Project.new
  	@task = Task.new
  end

  def list
    @projects = Project.where("user_id = #{current_user.id}")
    respond_to do |format|
      format.json { render :json => @projects }
    end
  end

  def create_todo

  end

  def delete_todo

  end

end
