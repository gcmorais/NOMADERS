const ProductRepository = require('../repositories/ProductRepository');

/* eslint-disable class-methods-use-this */
class ProductController {
  async index(request, response) {
    const products = await ProductRepository.findAll();
    response.json(products);
  }

  async store(request, response) {
    const {
      name, ean, cost, salePrice,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Nome é obrigatório!!' });
    }
    if (!ean) {
      return response.status(400).json({ error: 'Ean é obrigatório!!' });
    }
    if (!cost) {
      return response.status(400).json({ error: 'Cost é obrigatório!!' });
    }
    if (!salePrice) {
      return response.status(400).json({ error: 'SalePrice é obrigatório!!' });
    }

    const eanExists = await ProductRepository.findByEan(ean);

    if (eanExists) {
      return response.status(400).json({ error: 'Ean já está em uso.' });
    }

    const product = await ProductRepository.create({
      name, ean, cost, salePrice,
    });

    response.json(product);
  }

  async show(request, response) {
    const { id } = request.params;

    const product = await ProductRepository.findById(id);

    if (!product) {
      response.status(404).json({ error: 'Produto não encontrado.' });
    }

    response.json(product);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      name, ean, cost, salePrice,
    } = request.body;

    const findProductById = await ProductRepository.findById(id);

    if (!findProductById) {
      response.status(404).json({ error: 'Produto não encontrado.' });
    }

    const productEan = await ProductRepository.findByEan(ean);

    if (productEan && productEan.id !== id) {
      return response.status(400).json({ error: 'Ean já está em uso.' });
    }

    if (!name) {
      response.status(404).json({ error: 'Nome é obrigatório.' });
    }
    if (!ean) {
      response.status(404).json({ error: 'Ean é obrigatório.' });
    }
    if (!cost) {
      response.status(404).json({ error: 'Cost é obrigatório.' });
    }
    if (!salePrice) {
      response.status(404).json({ error: 'SalePrice é obrigatório.' });
    }

    const product = await ProductRepository.update(id, {
      name, ean, cost, salePrice,
    });

    response.json(product);
  }

  async delete(request, response) {
    const { id } = request.params;

    const findProductById = await ProductRepository.findById(id);

    if (!findProductById) {
      return response.status(404).json({ error: 'Produto não existe.' });
    }

    await ProductRepository.delete(id);
    response.status(200).json({ sucess: 'product deleted' });
  }
}

module.exports = new ProductController();
