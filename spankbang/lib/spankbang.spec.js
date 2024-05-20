const chai = require('chai')
const spankbang = require('.')
const { describe, before, it } = require('mocha')

before(()=>{
    chai.should()
})

describe('spankbang', () =>{
    it('should spankbang api functions', async ()=>{
        spankbang.should.be.an('object')
        spankbang.videos.should.be.an('object')
        spankbang.videos.fresh.should.be.a('function')

    }).timeout(10000)
})