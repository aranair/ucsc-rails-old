class AddNameIntroductionToUsers < ActiveRecord::Migration
  def change
    add_column :users, :name, :string
    add_column :users, :introduction, :text
  end
end
