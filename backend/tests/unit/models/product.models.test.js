const sinon = require('sinon');
const chai = require('chai');

const sinonChai = require('sinon-chai');

const { expect } = chai;
const connection = require('../../../src/models/connection');
const productModels = require('../../../src/models/product.models');
const { productMocks } = require('../mocks/product.mocks');

chai.use(sinonChai);

describe('Testes na model de produtos', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Testa se retorna a lista de produtos', async function () {
    sinon.stub(connection, 'execute').resolves([productMocks]);
    const products = await productModels.findAll();
    expect(products).to.been.equal(productMocks);
  });

  it('Testa se retorna o produto pelo id', async function () {
    sinon.stub(connection, 'execute').resolves([productMocks[0]]);
    const product = await productModels.findById(1);
    expect(product).to.been.equal(productMocks[0]);
  });
});