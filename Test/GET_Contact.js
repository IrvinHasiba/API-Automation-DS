const { expect } = require('chai');
const { getContact } = require('../API/objects');


describe('GET CONTACT', () => {

    it("Succes GET CONTACT", async () => {
        const response = await getContact()
        console.log(response.body)
        expect(response.status).to.equal(200)
        //expect(response.body)
        
    })
})
