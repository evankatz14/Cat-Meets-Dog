import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Dogs from '../Dogs'
import { mount } from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter()})

it('Dogs renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Dogs />, div)
})
