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

  def create_todo_list
  	@project = Project.new
  	input_params = params[:project]
  	@project.name = input_params[:name]
  	@project.user_id = current_user.id
  	@project.save()
  	respond_to do |format|
      format.json { render :json => @projects }
    end
  end

  def update_todo_list
  	@project = Project.find(params[:id])
  	@project.name = params[:name]
  	@project.save()
  	@projects = Project.all
  	respond_to do |format|
      format.json { render :json => @projects }
    end
  end

  def delete_todo_list
  	@project = Project.find(params[:id])
  	@project.delete()
  	respond_to do |format|
      format.json { render :json => Project.all }
    end
  end

  def create_todo
  	@project = Project.new
  	@project.name = params[:project[:name]]
  	@project.user_id = current_user.id
  	@project.save()
  end

  def update_list
  	
  end

  def delete_todo

  end

end
