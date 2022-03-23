import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';
import UserModel from '../database/models/UserModel';

import { Response } from 'superagent';
import IUser from '../interfaces/User';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando rota /login', () => {
  /**
   * Exemplo do uso de stubs com tipos
   */

  let chaiHttpResponse: Response;

  const userMock: any = {
    id: 1,
    username: 'Admin',
    role: 'admin',
    email: 'admin@admin.com',
    password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
  }

  describe('Testando caso de sucesso método get', () => {
    before(async () => {
      sinon
        .stub(UserModel, "findOne")
        .resolves(userMock);
      chaiHttpResponse = await chai.request(app).get('/login');
    });
  
    after(()=>{
      (UserModel.findOne as sinon.SinonStub).restore();
    });
  
    it('O endpoint get /login deve retornar o status 200', async () => {
      expect(chaiHttpResponse).to.have.status(200);
    });
  
    it('O endpoint get /login deve retornar um objeto', async () => {
      expect(chaiHttpResponse).to.be.an('object');
    });
  });

  describe('Testando caso de sucesso do método post', () => {
    before(async () => {
      sinon
        .stub(UserModel, "findOne")
        .resolves(userMock);
      chaiHttpResponse = await chai.request(app).post('/login').send({
        "email": "admin@admin.com",
        "password": "secret_admin"
      });
    });
  
    after(()=>{
      (UserModel.findOne as sinon.SinonStub).restore();
    });
  
    it('O endpoint post /login deve retornar o status 200', async () => {
      expect(chaiHttpResponse).to.have.status(200);
    });
  
    it('O endpoint post /login deve retornar um objeto', async () => {
      expect(chaiHttpResponse).to.be.an('object');
    });
  });
});
