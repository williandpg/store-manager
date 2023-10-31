const sinon = require('sinon');
const chai = require('chai');

const sinonChai = require('sinon-chai');

const { expect } = chai;
const { nameMiddleware, productMiddleware } = require('../../../src/middlewares/product.middlewares');
const { productIdMiddleware, quantityMiddleware, lengthMiddleware } = require('../../../src/middlewares/sale.middlewares');

chai.use(sinonChai);

describe('Testes dos middlewares', function () {
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

  it('Testa se o productId não for fornecido', async function () {
    const req = { 
      body: [
        { quantity: 2 },
      ], 
    };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const next = sinon.stub().returns();
    await productIdMiddleware(req, res, next);
    expect(next).not.to.have.been.calledWith();
  });

  it('Testa se o quantity não for fornecido', async function () {
    const req = { 
      body: [
        { productId: 1 },
      ], 
    };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const next = sinon.stub().returns();
    await quantityMiddleware(req, res, next);
    expect(next).not.to.have.been.calledWith();
  });

  it('Testa se quantity tem um valor válido', async function () {
    const req = { 
      body: [
        { productId: 1,
          quantity: -10,
        },
      ], 
    };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const next = sinon.stub().returns();
    await lengthMiddleware(req, res, next);
    expect(next).not.to.have.been.calledWith();
  });

  it('Testa se existe o produto', async function () {
    const req = { 
      body: [
        { productId: 99,
          quantity: 2,
        },
      ], 
    };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const next = sinon.stub().returns();
    await productMiddleware(req, res, next);
    expect(next).not.to.have.been.calledWith();
  });
});