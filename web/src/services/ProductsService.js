import HttpCLient from './utils/HttpClient';

class ProductsService {
  constructor() {
    this.httpClient = new HttpCLient('http://localhost:5174');
  }

  async listProducts() {
    return this.httpClient.get('/product');
  }

  async createProduct(product) {
    return this.httpClient.post('/product', product);
  }
}

export default new ProductsService();
