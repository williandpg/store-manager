const sinon = require('sinon');
const chai = require('chai');

const sinonChai = require('sinon-chai');

const { expect } = chai;
const productServices = require('../../../src/services/product.services');
const productControllers = require('../../../src/controllers/product.controllers');
const { productMocks, newMocks } = require('../mocks/product.mocks');

chai.use(sinonChai);

describe('Testes na controller de produtos', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Testa se o controller de produtos retorna a lista de produtos', async function () {
    sinon.stub(productServices, 'findAll').resolves({
      status: 'SUCCESSFULL',
      data: productMocks,
    });
    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub().returnsThis(),
    };
    await productControllers.findAll(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productMocks);
  });

  it('Testa se retorna o produto pelo id', async function () {
    const id = 1;
    sinon.stub(productServices, 'findById').resolves({ 
      status: 'SUCCESSFULL',
      data: productMocks[0],
    });
    const req = {
      params: { id },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub().returnsThis(),
    };
    await productControllers.findById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productMocks[0]);
  });

  it('Testa se retorna um produto caso o id não exista', async function () {
    sinon.stub(productServices, 'register').resolves({ 
      status: 'SUCCESSFULL',
      data: newMocks,
    });
    const req = {
      body: { name: 'ProdutoX' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub().returnsThis(),
    };
    await productControllers.register(req, res);
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newMocks);
  });
});