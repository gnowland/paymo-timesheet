const app = (() => {
  function init() {
    // Scripts go here
    const apiUser = process.env.API_USER;
    const apiKey = process.env.API_KEY;
  }

  return {
    init,
  };
})();

module.exports = app;
