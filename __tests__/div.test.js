'use strict'

import { expect } from 'chai'
import Div from '../div'

it('div should to be a function', () => {
    expect(Div).to.be.a('function')
})
it('div(10,2) should return 5', () => {
    expect(Div(10,2)).to.be.eq(5)
})