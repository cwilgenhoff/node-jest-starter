const app = require('./app');

describe('app', () => {
  it('runs', () => {
    expect(app.run()).toBeTruthy();
  });
});
