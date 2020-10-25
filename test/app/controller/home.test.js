const { app, assert } = require('egg-mock/bootstrap');

// eslint-disable-next-line no-undef
describe('test/app/controller/home.test.js', () => {
  // eslint-disable-next-line no-undef
  it('should assert', () => {
    // eslint-disable-next-line global-require
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  // eslint-disable-next-line no-undef
  it('should GET /', () => app.httpRequest()
    .get('/')
    .expect('hi, egg')
    .expect(200));
});
