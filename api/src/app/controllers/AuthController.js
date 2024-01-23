const UserRepository = require("../repositories/UserRepository");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class AuthController {
  async authenticate(request, response) {
    const { email, password } = request.body;

    const user = await UserRepository.findByEmail(email);

    if (!user) {
      return response.status(400).json({ error: "user not found" });
    }

    const isPasswordValid = bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return response.status(400).json({ error: "password invalid" });
    }

    const token = jwt.sign({ id: user.id }, "secret", { expiresIn: "1h" });

    const { id } = user;

    return response.json({ user: { id, email }, token });
  }
}

module.exports = new AuthController();
