class PagesController < ApplicationController
  def home
    render layout: 'home'
  end

  def coaching_panel
  end

  def committee
    @alignments = %w(left right)
    @committee_members = CommitteeMember.get_all_members
  end
end
