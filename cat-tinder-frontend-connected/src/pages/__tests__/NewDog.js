import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import NewDog from '../NewDog'
import { mount } from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter()})

it('NewDog renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<NewDog />, div)
})
