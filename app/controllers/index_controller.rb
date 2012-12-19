class IndexController < ApplicationController
  def index
  	@project = Project.new
  	@task = Task.new
  end

  def list
    @projects = Project.where("user_id = #{current_user.id}")
    respond_to do |format|
      format.json { render :json => @projects.to_json({:include => :tasks}) }
    end
  end

  def create_todo_list
  	@project = Project.new
  	input_params = params[:project]
  	@project.name = input_params[:name]
  	@project.user_id = current_user.id
  	@project.save()
  	render :nothing => true
  end

  def update_todo_list
  	@project = Project.find(params[:id])
  	@project.name = params[:name]
  	@project.save()
  	@projects = Project.all
  	render :nothing => true
  end

  def delete_todo_list
  	@project = Project.find(params[:id])
  	@project.delete()
  	render :nothing => true
  end

  def create_todo
  	@task = Task.create(params[:task])
  	@task.save()
    render :nothing => true
  end

  def update_todo
  	render :nothing => true
  end

  def delete_todo
    render :nothing => true
  end

  def replace_todos
    render :nothing => true
  end

end
