/* eslint-disable class-methods-use-this */
class UserController {
  index(request, response) {
    response.send('ok - index');
  }

  store(request, response) {
    response.send('ok - store');
  }

  show(request, response) {
    response.send('ok - show');
  }

  update(request, response) {
    response.send('ok - update');
  }

  delete(request, response) {
    response.send('ok - delete');
  }
}

export default new UserController();
