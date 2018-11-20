const app = (() => {
  function init() {
    // Authentication
    const apiUser = process.env.API_USER;
    const apiKey = process.env.API_KEY;

    // Create app container
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    document.body.prepend(container);

    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Authorization', 'Token TOKEN_KEY');

    request.onload = function () {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response);

      if (request.status >= 200 && request.status < 400) {
        data.forEach(entry => {
          // Create a div with a card class
          const card = document.createElement('div');
          card.setAttribute('class', 'card');

          // Create an h1 and set the text content to the film's title
          const h1 = document.createElement('h1');
          h1.textContent = entry.title;

          // Create a p and set the text content to the film's description
          const p = document.createElement('p');
          entry.description = entry.description.substring(0, 300); // Limit to 300 chars
          p.textContent = `${entry.description}...`; // End with an ellipses

          // Append the cards to the container element
          container.appendChild(card);

          // Each card will contain an h1 and a p
          card.appendChild(h1);
          card.appendChild(p);
        });
      } else {
        const errorMessage = document.createElement('div');
        errorMessage.setAttribute('class', 'error');
        errorMessage.innerHTML = `<h1>${String.fromCodePoint(0x2620)}</h1>` +
          `The application returned the following error while processing your request:<br>` +
          `<code>Error ${request.status} (${request.statusText})</code>`;
        container.appendChild(errorMessage);
      }
    }

    // Send request
    request.send();
  }

  return {
    init,
  };
})();

module.exports = app;
