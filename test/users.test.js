import { expect, server, BASE_URL } from './setup.js';
describe('Users', () => {
  it('get users page', (done) => {
    server
      .get(`${BASE_URL}/user`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.messages).to.be.instanceOf(Array);
        res.body.messages.forEach((m) => {
          expect(m).to.have.property('email');
          expect(m).to.have.property('created_date');
        });
        done();
      });
  });
});

it('posts user', (done) => {
  const data = { email: 'keita.momo1@yahoo.com', password: 'testme' };
  server
    .post(`${BASE_URL}/user`)
    .send(data)
    .expect(200)
    .end((err, res) => {
      expect(res.status).to.equal(200);
      expect(res.body.messages).to.be.instanceOf(Array);
      res.body.messages.forEach((m) => {
        expect(m).to.have.property('id');
        expect(m).to.have.property('email', data.email);
        expect(m).to.have.property('password');
      });
      done();
    });
});