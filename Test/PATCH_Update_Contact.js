const { expect } = require('chai');
const { patchUpdateContact } = require('../API/objects');


describe('PATCH UPDATE', () => {

    it("Succes PATCH UPDATE CONTACT", async () => {
        const response = await patchUpdateContact()
        console.log(response.body)
        expect(response.status).to.equal(200)
        //expect(response.body)
        
    })
})
