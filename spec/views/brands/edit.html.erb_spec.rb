require 'spec_helper'

describe "brands/edit" do
  before(:each) do
    @brand = assign(:brand, stub_model(Brand,
      :name => "MyString",
      :content => "MyText",
      :image_id => 1
    ))
  end

  it "renders the edit brand form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => brands_path(@brand), :method => "post" do
      assert_select "input#brand_name", :name => "brand[name]"
      assert_select "textarea#brand_content", :name => "brand[content]"
      assert_select "input#brand_image_id", :name => "brand[image_id]"
    end
  end
end
