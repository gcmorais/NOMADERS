/* eslint-disable consistent-return */
class HttpCLient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    const response = await fetch(`${this.baseURL}${path}`);

    let body = null;
    const contentType = response.headers.get('Content-Type');
    if (contentType.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }

    throw new Error(body?.error || `${response.status}`);
  }

  async post(path, body) {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });
    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers,
    });

    throw new Error(body?.error || `${response.status}`);
  }

  async put(path, body) {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });
    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers,
    });

    throw new Error(body?.error || `${response.status}`);
  }
  // async makeRequest(path, options) {
  //   const headers = new Headers();

  //   if (options.body) {
  //     headers.append('Content-Type', 'application/json');
  //   }
  //   if (options.headers) {
  //     Object.entries(options.headers).forEach(([name, value]) => {
  //       headers.append(name, value);
  //     });
  //   }
  //   const response = await fetch(`${this.baseURL}${path}`, {
  //     method: options.method,
  //     body: JSON.stringify(options.body),
  //     headers,
  //   });

  //   let responseBody = null;
  //   const contentType = response.headers.get('Content-Type');
  //   if (contentType.includes('application/json')) {
  //     responseBody = await response.json();
  //   }

  //   if (response.ok) {
  //     return responseBody;
  //   }

  //   throw new Error(responseBody?.error || `${response.status}`);
  // }
}

export default HttpCLient;
