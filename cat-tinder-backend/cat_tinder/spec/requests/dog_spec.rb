require 'rails_helper'

describe "Dogs API", :type => :request do
     it "gets a list of Dogs" do
         # Create a new cat in the Test Database
          Dog.create(name:'Felix', age: '2', enjoys: 'Walks in the park')
          # Make a request to the API
          get '/dogs'
          # Convert the response into a Ruby Hash
          json = JSON.parse(response.body)
          # Assure that we got a succesful response
          expect(response).to have_http_status(:ok)
          # Assure that we got one result back as expected
          expect(json.length).to eq 1
    end

    it "creates a dog" do
        # The params we are going to send with the request
        dog_params = {
            dog: {
                name: 'Buster',
                age: '4',
                enjoys: 'Meow Mix and plenty of sunshine.'
            }
        }
        # Send the request to the server
        post '/dogs', params: dog_params
        # Assure that we get a success back
        expect(response).to have_http_status(:ok)
        # Look up the cat we expect to be created in the Database
        new_dog = Dog.first
        # Assure that the created cat has the correct attributes
        expect(new_dog.name).to eq('Buster')
    end

    it "doesn't create a dog without a name" do
        # define cat params to send in request
        dog_params = {
            dog: {
                age: 4,
                enjoys: 'Meow Mix, and plenty of sunshine.'
            }
        }
        # send request to create new cat with cat_params
        post '/dogs', params: dog_params
        # expect reponse status to be 422
        expect(response.status).to eq 422
        # Convert the response into a Ruby Hash
        json = JSON.parse(response.body)
        # Assure there is an error message that includes "can't be blank"
        expect(json['name']).to include "can't be blank"
    end

    it "doesn't create a dog without an age" do
        # define cat params that is not adding an age
        dog_params = {
            dog: {
                name: 'Princess',
                enjoys: 'Eating plants'
            }
        }
        #send request
        post '/dogs', params: dog_params
        #expect response status to be 422
        expect(response.status).to eq 422
        #convert the response into a Ruby Hash
        json = JSON.parse(response.body)
        #assure there is an error message
        expect(json['age']).to include "can't be blank"
    end

    it "doesn't create a dog without an enjoys" do
        # define cat params that is not adding an enjoys
        dog_params = {
            dog: {
                name: 'Yoshi',
                age: '4'
            }
        }
        #send request
        post '/dogs', params: dog_params
        #expect response status to be 422
        expect(response.status).to eq 422
        #convert the response into a Ruby Hash
        json = JSON.parse(response.body)
        #assure there is an error message
        expect(json['enjoys']).to include "can't be blank"
    end

end
