class PagesController < ApplicationController
  def home
    render layout: 'home'
  end

  def coaching_panel
    @committee_members = [
      'Joseph Wong', 
      'Michael C.S. Tan', 
      'Bobby Pang', 
      'Linda Tan', 
      'Daryle Teng', 
      'Tan Kah Hong',
      'Dave Phua',
      'Kelvin Kan',
      'Mabel Low',
      'Boa Ho Man', 
      'Darryl Tan',
      'Bryan Tan'
    ]
  end
end
