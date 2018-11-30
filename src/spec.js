const app = require('.');

describe('app', () => {
  it('runs', () => {
    expect(app.run()).toBeTruthy();
  });
});
