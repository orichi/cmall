require 'spec_helper'

describe "messages/index" do
  before(:each) do
    assign(:messages, [
      stub_model(Message,
        :title => "Title",
        :category => "Category",
        :content_id => 1
      ),
      stub_model(Message,
        :title => "Title",
        :category => "Category",
        :content_id => 1
      )
    ])
  end

  it "renders a list of messages" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Title".to_s, :count => 2
    assert_select "tr>td", :text => "Category".to_s, :count => 2
    assert_select "tr>td", :text => 1.to_s, :count => 2
  end
end
