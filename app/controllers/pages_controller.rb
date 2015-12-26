class PagesController < ApplicationController
  def home
    render layout: 'home'
  end

  def coaching_panel
  end

  def committee
    @alignments = %w(left right)
    @committee_members = [
      'Joseph Wong', 
      'Michael C.S. Tan', 
      'Bobby Pang', 
      'Linda Tan', 
      'Daryle Teng', 
      'Tan Kah Hong',
      'Dave Phua',
      'Kelvin Kan',
      'Chubs Low - Mabel',
      'Boa Ho Man', 
      'Darryl Tan',
      'Bryan Tan'
    ]
  end
end
