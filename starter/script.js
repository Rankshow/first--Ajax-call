'use strict';
// const getCountryData = function(country){
    const btn = document.querySelector('.btn-country');
    const countriesContainer = document.querySelector('.countries');
    
    const renderCountry = function(data, className = '') {
      const html = `
      <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
          <div class="country__data">
              <h3 class="country__name">${data.name}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
              <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
              <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
      </article>
      `;
      countriesContainer.insertAdjacentHTML('beforeend', html);
      countriesContainer.style.opacity = 1;
    }
    const renderError = function(msg) {
      countriesContainer.insertAdjacentText('beforeend', msg);
      countriesContainer.style.opacity = 1;
    };

//     ///////////////////////////////////////
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v2/name/${country}`);
//     request.send();

//   request.addEventListener('load', function(){
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);


//     const html = `
//     <article class="country">
//     <img class="country__img" src="${data.flag}" />
//         <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//         </div>
//     </article>
//     `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);

//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('nigeria');
// getCountryData('canada');
// getCountryData('france');

// //////////////////////////////////////



// const getCountryAndNeighbour = function(country){
//   const btn = document.querySelector('.btn-country');
//   const countriesContainer = document.querySelector('.countries');

// //   ///////////////////////////////////////

// //   // Ajax call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

// request.addEventListener('load', function(){
//   const [data] = JSON.parse(this.responseText);
//   console.log(data);

//   // Render country 1
//   renderCountry(data);

//   // Get the neighbour country (2)
//   const [neighbour] = data.borders;

//    // Ajax call country 2
//     if(!neighbour) return;
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function() {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data, 'neighbour');
//     })
// });
// };


// getCountryAndNeighbour('usa');


// setTimeout(() =>{
//   console.log('1 seconds passed');

// }, 1000)

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/
// name/${country}`);
// request.send();

// =====Using promises+++++++++++++
// const request = fetch('https://restcountries.com/v2/name/nigeria');
// console.log(request);

// const getCountryData = function(country) {
//   fetch(`https://restcountries.com/v2/name/${country}`).then(function(response){
//       console.log(response);
//       return response.json();
//     }).then(function(data){
//       console.log(data);
//       renderCountry(data[0]);
//     });
//   };
//   getCountryData('portugal');
//   debugger;

// ====Handling Rejected promises==========
// const getJSON = function (url, errorMsg = 'Something went wrong') {
//  return fetch(url).then(response => {
//     if(!response.ok)
//   throw new Error(`Country Not found (${errorMsg} ${response.statusw})`)

//    return response.json();
//   });
// }

//  const getCountryData = function(country) {
// //   Main country 
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
//     .then(data =>  {
//     renderCountry(data[0]);
//     // const neighbour = data[0].borders[0];

//     if(!neighbour) throw new Error('No neighbour found!');

// //  The first neigbouring country.
//    return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`,
//     'Country not found');
//   })
//   .then(data => renderCountry(data, 'neighbour')).catch(err => {
//     console.error(`${err} \u{1F4A3}\u{1F4A3}`);
//     renderError(`Something went wrong \u{1F4A3}\u{1F4A3} ${err.message}.Try again!`)
//   }).finally(() => {
//     countriesContainer.style.opacity = 1;
//   })

// };

// btn.addEventListener('click', function() {
//   getCountryData('nigeria');
// });


// ===challenge coding 1======

const whereAmI = function (lat, lng){
  // Get the location Api
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
  .then(res => {

    // throw an Error
    if(!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
    return res.json()
  })
  // fetch the city and counrty data.
  .then(data => {
    console.log(data);
    console.log(`You are in ${data.city}, ${data.country}`);

    return fetch(`https://restcountries.com/v2/name/${data.country}`);
  })
  // It gives the status of the respose
  .then(res => {
    if (!res.ok)
    throw new Error(`Counrty not found (${res.status})`);

    return response.json();
  })
  .then(data => renderCountry(data))
  // catch the error in the console
  .catch(err => console.log(`${err.message} \u{1F4A3}`));
};
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);


