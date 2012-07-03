require 'spec_helper'

describe "brands/index" do
  before(:each) do
    assign(:brands, [
      stub_model(Brand,
        :name => "Name",
        :content => "MyText",
        :image_id => 1
      ),
      stub_model(Brand,
        :name => "Name",
        :content => "MyText",
        :image_id => 1
      )
    ])
  end

  it "renders a list of brands" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
    assert_select "tr>td", :text => 1.to_s, :count => 2
  end
end
