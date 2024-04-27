const supertest = require('supertest');

//USER
const getUser = () => supertest('https://thinking-tester-contact-list.herokuapp.com/users/me')
.get('')
.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJjZGRmYjFlY2Q4YzAwMTM3MTJjMDAiLCJpYXQiOjE3MTQyMTY0NDN9.G1ZvtCE1K98x33BUh7vOTOxH1L-89leHLDi0u3-y7mY')

const postAddUser = () => supertest('https://thinking-tester-contact-list.herokuapp.com/users')
.post('/')
.send(
    {
        "firstName": "joko",
        "lastName": "susanto",
        "email": "jokosusanti@test.com",
        "password": "securepassword"
    }
)

//Contact
const getContact = () => supertest('https://thinking-tester-contact-list.herokuapp.com/contacts')
.get('')
.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJjZGRmYjFlY2Q4YzAwMTM3MTJjMDAiLCJpYXQiOjE3MTQyMTY0NDN9.G1ZvtCE1K98x33BUh7vOTOxH1L-89leHLDi0u3-y7mY')

const postAddContact = () => supertest('https://thinking-tester-contact-list.herokuapp.com/contacts')
.post('/')
.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJjZGRmYjFlY2Q4YzAwMTM3MTJjMDAiLCJpYXQiOjE3MTQyMTY0NDN9.G1ZvtCE1K98x33BUh7vOTOxH1L-89leHLDi0u3-y7mY')
.send(
    {
        "firstName": "Irvinn",
        "lastName": "Hasibaa",
        "birthdate": "1998-03-12",
        "email": "ETSTSETaATEASTE@yahoo.com",
        "phone": "8005553555",
        "country": "INDONESIAA"
    }
)

const patchUpdateContact = () => supertest('https://thinking-tester-contact-list.herokuapp.com/contacts')
.patch('')
.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJjZGRmYjFlY2Q4YzAwMTM3MTJjMDAiLCJpYXQiOjE3MTQyMTY0NDN9.G1ZvtCE1K98x33BUh7vOTOxH1L-89leHLDi0u3-y7mY')
.send(
    {
        "firstName": "Irvin",
    }
)
module.exports = {
    getUser,getContact,
    postAddUser,postAddContact,
    patchUpdateContact
}