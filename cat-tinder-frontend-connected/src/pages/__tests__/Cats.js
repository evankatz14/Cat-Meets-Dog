import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Cats from '../Cats'
import { mount } from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter()})

const cats = [
    {
        id: 1,
        name: 'Morris',
        age: 2,
        enjoys: "Long walks on the beach."
    },
    {
        id: 2,
        name: 'Paws',
        age: 4,
        enjoys: "Snuggling by the fire."
    },
    {
        id: 3,
        name: 'Mr. Meowsalot',
        age: 12,
        enjoys: "Being in charge."
    },
    {
        id: 4,
        name: 'Mr. Bigglesworth',
        age: 20,
        enjoys: "Taking over the world with giant freaking laser beams."
    },
    {
        id: 5,
        name: 'Garfield',
        age: 41,
        enjoys: "Lasagna, lasagna, and lasagna."
    }
]

it('Cats renders without crashing', () => {
    const div = document.createElement('Container')
    ReactDOM.render(<Cats cats={cats}/>, div)
})

it('Renders the cats', () => {
    const component = mount(<Cats cats={cats} />)
    const headings = component.find('h4 > .cat-name')
    expect(headings.length).toBe(5)
})

it("Renders the cats' ages", () => {
    const component = mount(<Cats cats={cats} />)
    const ages = component.find('h4 > .cat-age')
    expect(ages.length).toBe(5)
})

it("Renders the cats' likes", () => {
    const component = mount(<Cats cats={cats} />)
    const enjoys = component.find('a > .cat-enjoys')
    expect(enjoys.length).toBe(5)
})
