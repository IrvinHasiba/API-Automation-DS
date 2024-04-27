const { expect } = require('chai');
const { getUser } = require('../API/objects');


describe('GET USER', () => {

    it("Succes GET USER", async () => {
        const response = await getUser()
        console.log(response.body)
        expect(response.status).to.equal(200)
        //expect(response.body)
        
    })
})
