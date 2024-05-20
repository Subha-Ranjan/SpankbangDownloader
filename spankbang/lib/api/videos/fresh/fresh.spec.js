const chai = require('chai')
const fresh = require('./fresh')
const { describe, before, it } = require('mocha')

before(()=>{
    chai.should()
})

describe('api/videos/fresh',()=>{
    it('should list fresh video pages',async ()=>{
        const list = await fresh()
        list.should.be.an('object')
        list.favorites.forEach((video)=>{
            video.should.be.an('object')
            
        })
    }).timeout(10000)
})