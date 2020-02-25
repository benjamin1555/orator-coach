class RemoveSessionIdColumnToReviews < ActiveRecord::Migration[6.0]
  def change
    remove_reference :reviews, :session, index: true, foreign_key: true
  end
end
