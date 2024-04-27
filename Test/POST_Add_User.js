const { expect } = require('chai');
const { postAddUser } = require('../API/objects');


describe('ADD USER', () => {

    it("Succes ADD USER", async () => {
        const response = await postAddUser()
        console.log(response.body)
        expect(response.status).to.equal(201)
        //expect(response.body)
        
    })
})
