const sinon = require('sinon');
const chai = require('chai');

const sinonChai = require('sinon-chai');

const { expect } = chai;
const { nameMiddleware } = require('../../../src/middlewares/product.middlewares');

chai.use(sinonChai);

describe('Testa middleware de produtos', function () {
  it('Testa nameMiddleware se o nome for válido', function () {
    const req = {
      body: {
        name: 'ProdutoX',
      },
    };
    const res = {};
    const next = sinon.stub().returns();
    nameMiddleware(req, res, next);
    expect(next).to.have.been.calledWith();
  });

  it('Testa se o nome for menor que 5', function () {
    const req = {
      body: {
        name: 'Teste',
      },
    };
    const res = {
      status(code) {
        expect(code).to.equal(422);
        return this;
      },
      json(data) {
        expect(data).to.deep.equal({ message: '"name" length must be at least 5 characters long' });
      },
    };
    const next = sinon.spy();
    nameMiddleware(req, res, next);
    expect(next).to.have.been.calledWith();
  });
});