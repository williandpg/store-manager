const sinon = require('sinon');
const chai = require('chai');

const sinonChai = require('sinon-chai');

const { expect } = chai;
const saleServices = require('../../../src/services/sale.services');
const saleControllers = require('../../../src/controllers/sale.controllers');
const { saleMocks, newMocks } = require('../mocks/sale.mocks');

chai.use(sinonChai);

describe('Testes na controller de vendas', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Testa se o controller de vendas retorna a lista de vendas', async function () {
    sinon.stub(saleServices, 'findAll').resolves({
      status: 'SUCCESSFULL',
      data: saleMocks,
    });
    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub().returnsThis(),
    };
    await saleControllers.findAll(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(saleMocks);
  });

  it('Testa se retorna a venda pelo id', async function () {
    const id = 1;
    sinon.stub(saleServices, 'findById').resolves({
      status: 'SUCCESSFULL',
      data: saleMocks[0],
    });
    const req = {
      params: { id },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub().returnsThis(),
    };
    await saleControllers.findById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(saleMocks[0]);
  });

  it('Testa se adiciona uma venda', async function () {
    sinon.stub(saleServices, 'register').resolves({
      status: 'SUCCESSFULL',
      data: newMocks,
    });
    const req = {
      body: [
        {
          productId: 1,
          quantity: 1,
        },
        {
          productId: 2,
          quantity: 5,
        },
      ],
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub().returnsThis(),
    };
    await saleControllers.register(req, res);
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newMocks);
  });
});