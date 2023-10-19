class ProductsService {
  async listProducts() {
    const response = await fetch(
      'http://localhost:5174/product',
    );

    return response.json();
  }
}

export default new ProductsService();
