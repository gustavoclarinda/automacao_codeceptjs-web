var validacao = require('assert')

Feature('login');

Scenario('Login Test Example', async ({I}) => {
    I.amOnPage('/')
    I.click('.login')
    I.waitForEnabled('#SubmitCreate')
    I.click('#SubmitCreate')
    I.wait(10) 
    I.see('Invalid email address.')
    I.fillField('#email_create', 'tavinho.bagacera@gmail.com')
    I.click('#SubmitCreate')
    I.wait(5) 

    //armazenar titulo
    I.waitForElement('.page-heading', 10)
    var title = await I.grabTitle()
    validacao.equal(title, 'Login - My Store')
    //Teste 001

    I.see('CREATE AN ACCOUNT')
});
