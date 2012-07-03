require 'spec_helper'

describe "messages/edit" do
  before(:each) do
    @message = assign(:message, stub_model(Message,
      :title => "MyString",
      :category => "MyString",
      :content_id => 1
    ))
  end

  it "renders the edit message form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => messages_path(@message), :method => "post" do
      assert_select "input#message_title", :name => "message[title]"
      assert_select "input#message_category", :name => "message[category]"
      assert_select "input#message_content_id", :name => "message[content_id]"
    end
  end
end
