const { Controller } = require('egg');

class configController extends Controller {
  async createToken() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = configController;
