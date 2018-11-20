const axios = require('axios');

const app = (() => {
  function init() {
    // Check for Axios
    if (typeof axios === 'undefined') { return; }

    // Authentication
    const apiUser = process.env.API_USER;
    const apiKey = process.env.API_KEY;
    
    // Set up API request
    const request = axios.create({
      baseURL: 'https://app.paymoapp.com/api/',
      auth: {
        username: apiKey,
        // password: 'X'
      }
    });

    // Create app container
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    document.body.prepend(container);

    // Open a new connection, using the GET request on the URL endpoint
    request.get('/me')
      .then(function (response) {
        response.data.users.forEach(user => {
          // Create a div with a card class
          const card = document.createElement('div');
          card.setAttribute('class', 'card');

          // Create an h1 and set the text content to the user's name
          const h1 = document.createElement('h1');
          h1.textContent = user.name;

          // Create a p and set the text content to the user's position
          const p = document.createElement('p');
          p.textContent = user.position;

          // Append the cards to the container element
          container.appendChild(card);

          // Add content to each card
          card.appendChild(h1);
          card.appendChild(p);
        });
      })
      .catch(function (error) {
        const errorMessage = document.createElement('div');
        errorMessage.setAttribute('class', 'error');
        errorMessage.innerHTML = `<h1>${String.fromCodePoint(0x2620)}</h1>` +
          `The application returned the following error while processing your request:<br>` +
          `<code>${error}</code>`;
        container.appendChild(errorMessage);
      });
  }

  return {
    init,
  };
})();

module.exports = app;
