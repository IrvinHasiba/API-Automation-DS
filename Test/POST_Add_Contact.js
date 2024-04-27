const { expect } = require('chai');
const { postAddContact } = require('../API/objects');


describe('ADD CONTACT', () => {

    it("Succes ADD CONTACT", async () => {
        const response = await postAddContact()
        console.log(response.body)
        expect(response.status).to.equal(201)
        //expect(response.body)
        
    })
})
