const sinon = require('sinon');
const chai = require('chai');

const sinonChai = require('sinon-chai');

const { expect } = chai;
const { productServices } = require('../../../src/services/index');
const { productControllers } = require('../../../src/controllers/index');
const { productMocks } = require('../mocks/product.mocks');

chai.use(sinonChai);

describe('Testes na controller de produtos', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Testa se o controller de produtos retorna a lista de produtos', async function () {
    sinon.stub(productServices, 'getAll').resolves({
      status: 'SUCCESS',
      data: productMocks,
    });
    const req = { 
      params: {}, 
      body: {},
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await productControllers.getAll(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productMocks);
  });
  
  it('Testa se retorna o produto pelo id', async function () {
    sinon.stub(productServices, 'findById').resolves({
      status: 'SUCCESS',
      data: productMocks,
    });
    const req = {
      params: { id: 1 },
      body: {},
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await productControllers.findById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productMocks);
  });

  it('Testa se retorna um produto caso o id não exista', async function () {
    sinon.stub(productServices, 'findById').resolves({
      status: 'NOT_FOUND',
      data: { message: 'Product not found' },
    });
    const req = {
      params: { id: 10 },
      body: {},
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    await productControllers.findById(req, res);
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(sinon.match.has('message', 'Product not found'));
  });
});