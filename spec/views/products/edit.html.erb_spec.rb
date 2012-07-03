require 'spec_helper'

describe "products/edit" do
  before(:each) do
    @product = assign(:product, stub_model(Product,
      :title => "MyString",
      :price => "9.99",
      :min_price => "9.99",
      :max_price => "9.99",
      :content_id => 1
    ))
  end

  it "renders the edit product form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => products_path(@product), :method => "post" do
      assert_select "input#product_title", :name => "product[title]"
      assert_select "input#product_price", :name => "product[price]"
      assert_select "input#product_min_price", :name => "product[min_price]"
      assert_select "input#product_max_price", :name => "product[max_price]"
      assert_select "input#product_content_id", :name => "product[content_id]"
    end
  end
end
