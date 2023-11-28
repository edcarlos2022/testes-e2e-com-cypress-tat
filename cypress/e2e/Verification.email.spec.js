const serverId = 'l2xuyzoo';
const testEmail = '91eba393-1636-4ac2-b77b-49f217e5c428@l2xuyzoo.mailosaur.net'

cy.mailosaurGetMessage(serverId, {
  sentTo: testEmail
}).then(email => {
  expect(email.subject).to.equal('Your verification code');
})