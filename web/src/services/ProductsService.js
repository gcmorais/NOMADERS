import HttpCLient from './utils/HttpClient';

class ProductsService {
  constructor() {
    this.httpClient = new HttpCLient('http://localhost:5174');
  }

  listProducts() {
    return this.httpClient.get('/product');
  }

  getProductById(id) {
    return this.httpClient.get(`/product/${id}`);
  }

  createProduct(product) {
    return this.httpClient.post('/product', product);
  }

  updateProduct(id, product) {
    return this.httpClient.put(`/product/${id}`, product);
  }
}

export default new ProductsService();
