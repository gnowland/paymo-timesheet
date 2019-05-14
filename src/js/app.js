// function (error, response, body) {
//   if (!error) {
//     // List project names
//     JSON.parse(body).projects.forEach(function (project) {
//       console.log(project.name);
//     });
//   } else {
//     console.log(error);
//   }
// }

const app = (() => {
  // const apiUser = process.env.API_USER;
  // const apiPass = process.env.API_PASS;
  // const apiKey = process.env.API_KEY;

  // const request = async () => {
  //   const response = await fetch('https://app.paymoapp.com/api/sessions', {
  //       method: "POST",
  //       auth: {
  //         user: apiUser,
  //         pass: apiKey
  //       },
  //       credentials: 'same-origin',
  //       headers: {
  //         'Accept': 'application/json'
  //       }
  //     });
  //   //.then(response => response.json());
  //   const json = await response.json();
  //   console.log(json);
  // }

  function init() {
    // request();
  }

  return {
    init
  };
})();

export default app;
