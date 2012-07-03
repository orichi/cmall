require 'spec_helper'

describe "messages/new" do
  before(:each) do
    assign(:message, stub_model(Message,
      :title => "MyString",
      :category => "MyString",
      :content_id => 1
    ).as_new_record)
  end

  it "renders new message form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => messages_path, :method => "post" do
      assert_select "input#message_title", :name => "message[title]"
      assert_select "input#message_category", :name => "message[category]"
      assert_select "input#message_content_id", :name => "message[content_id]"
    end
  end
end
