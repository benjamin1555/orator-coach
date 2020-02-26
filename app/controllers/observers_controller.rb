class ObserversController < ApplicationController

  def new
    @observer = Observer.new
    @access_key = params[:access_key]
  end

  def create
    # Create a new (empty) observer instance
    @observer = Observer.new

    # Get access_key entered by observer and search for corresponding recording
    @input_key = params[:observer][:client_key]
    @recording = Recording.find_by(access_key: @input_key)
    
    # If the key entered by the observer matches a recording key, then create a new observer, else render new
    if @recording
      # Set keys of the observer instance
      @observer.user = current_user
      @observer.recording = @recording
      @observer.save
      redirect_to new_observer_review_path(@observer)
    else
      redirect_to new_observer_path
    end

  end
end
