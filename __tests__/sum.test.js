'use strict'

import { expect } from 'chai'
import Sum from '../sum'

describe('Inicializing Math tests', () => {
    it('Sum should be a Function', () => { expect(Sum).to.be.a('function') })
    it('Sum(1,3) should return 3', () => { expect(Sum(1,2)).to.be.equal(3) })
})