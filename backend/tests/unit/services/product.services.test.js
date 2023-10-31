const sinon = require('sinon');
const chai = require('chai');

const sinonChai = require('sinon-chai');

const { expect } = chai;
const productServices = require('../../../src/services/product.services');
const productModels = require('../../../src/models/product.models');
const { productMocks, newMocks } = require('../mocks/product.mocks');

chai.use(sinonChai);

describe('Testes no service de produtos', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Testa se retorna a lista de produtos', async function () {
    sinon.stub(productModels, 'findAll').resolves(productMocks);
    const response = await productServices.findAll();
    expect(response).to.be.deep.equal({ status: 'SUCCESSFULL', data: productMocks });
  });

  it('Testa se retorna o produto pelo id', async function () {
    sinon.stub(productModels, 'findById').resolves(productMocks);
    const response = await productServices.findById(1);
    expect(response).to.be.deep.equal({ status: 'SUCCESSFULL', data: productMocks[0] });
  });

  it('Testa se retorna um produto não encontrado', async function () {
    sinon.stub(productModels, 'findById').resolves([]);
    const response = await productServices.findById(99);
    expect(response).to.be.deep.equal({ status: 'NOT_FOUND', data: { message: 'Product not found' } });
  });

  it('Testa se registra um produto', async function () {
    sinon.stub(productModels, 'register').resolves(newMocks);
    const response = await productServices.register();
    expect(response).to.be.deep.equal({ status: 'SUCCESSFULL', data: newMocks });
  });
});