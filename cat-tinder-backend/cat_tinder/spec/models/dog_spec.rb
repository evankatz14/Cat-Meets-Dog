require 'rails_helper'

RSpec.describe Dog, type: :model do
  it "should validate name" do
      dog = Dog.create
      expect(dog.errors[:name]).to_not be_empty
  end

  it "should validate age" do
      dog = Dog.create
      expect(dog.errors[:age]).to_not be_empty
  end

  it "should validate enjoys" do
      dog = Dog.create
      expect(dog.errors[:enjoys]).to_not be_empty
  end 
end
