# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# cat_attributes = [
#     {
#         name: 'Garfield',
#         age: '41',
#         enjoys: 'Lasagna, lasagna and lasagna.'
#     },
#     {
#         name: 'Mr. Bigglesworth',
#         age: 20,
#         enjoys: "Taking over the world with giant freaking laser beams."
#     },
#     {
#         name: 'Orion',
#         age: 12,
#         enjoys: "Holding the power of the universe on his collar."
#     },
#     {
#         name: 'Princess',
#         age: 4,
#         enjoys: "Snuggling by the fire."
#     },
#     {
#         name: 'Maureen',
#         age: 2,
#         enjoys: "Long walks on the beach."
#     }
# ]
#
# cat_attributes.each do |attributes|
#     Cat.create(attributes)
# end
dog_attributes = [
    {
        name: 'Scooby Doo',
        age: '7',
        enjoys: 'Solving mysteries and Scooby Snacks.'
    },
    {
        name: 'Air Bud',
        age: '4',
        enjoys: "Playin' hoops."
    },
    {
        name: 'Lassie',
        age: '28',
        enjoys: 'Barking into wells.'
    },
    {
        name: 'Brian Griffin',
        age: '8',
        enjoys: 'Getting into trouble with Stewie.'
    },
    {
        name: 'Lady',
        age: '6',
        enjoys: 'Eating spaghetti.'
    },
]

dog_attributes.each do |attributes|
    Dog.create(attributes)
end 
