import HttpCLient from "./utils/HttpClient";

class UsersService {
  constructor() {
    this.httpClient = new HttpCLient("http://localhost:5174");
  }

  createUser(user) {
    return this.httpClient.post("/user", user);
  }

  authUser(user) {
    return this.httpClient.post("/auth", user);
  }
}

export default new UsersService();
