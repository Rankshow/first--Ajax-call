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
const getJSON = function (url, errorMsg = 'Something went wrong') {
 return fetch(url).then(response => {
    if(!response.ok)
  throw new Error(`Country Not found (${errorMsg} ${response.statusw})`)

   return response.json();
  });
}

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

// const whereAmI = function (lat, lng){
//   // Get the location Api
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//   .then(res => {

//     // throw an Error
//     if(!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//     return res.json()
//   })
//   // fetch the city and counrty data.
//   .then(data => {
//     console.log(data);
//     console.log(`You are in ${data.city}, ${data.country}`);

//     return fetch(`https://restcountries.com/v2/name/${data.country}`);
//   })
//   // It gives the status of the respose
//   .then(res => {
//     if (!res.ok)
//     throw new Error(`Counrty not found (${res.status})`);

//     return response.json();
//   })
//   .then(data => renderCountry(data))
//   // catch the error in the console
//   .catch(err => console.log(`${err.message} \u{1F4A3}`));
// };
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// ==========================================



// Promise.resolve('resolved promis 2').then(res => {
//   for (let i = 0; i < 100; i++){
//     console.log(res)
//   }
// })

// ======= building simple promise========
// const lotteryPromise = new Promises(function(resolve, reject){

//   console.log('lottery draw is happening')
//   setTimeout(function() {
//   if(Math.random() >= 0.5){
//    resolve('you win the game');
//   } else {
//     reject(new Error('You loat your money'));
//   }

//   }, 2000)

// });

// lotteryPromise.then(res  => console.log(res)).catch(err => console.error(err));

// // Promisifying setTimeout
// const wait = function(seconds){
//   return new Promise(function(resolve){
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2).then(() => {
//   console.log('i waited for 2 seconds');
//   return wait(1);
// }).then(() => console.log('i waited for 1 second'));

// Promise.resolve('You win').then(x => console.log(x));
// Promise.resolve(new Error('problem....')).catch(x => console.log(x));

// =======promisifying geolocation api=========


// const getPosition = function(){
//   return new Promise(function(resolve, reject){
//     // navigator.geolocation.getCurrrentPosition(
//     //   position => resolve(position), 
//     //   err => reject(err)
//     // ); 
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// // getPosition().then(pos => console.log(pos));

// const whereAmI = function (l){
//   getPosition().then(pos => {
//     const {latitude: lat, longitude: lng} = pos.coords;

//   return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//   })
//     .then(res => {
//       if(!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     // fetch the city and counrty data.
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
  
//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     // It gives the status of the respose
//     .then(res => {
//       if (!res.ok)
//       throw new Error(`Counrty not found (${res.status})`);
  
//       return response.json();
//     })
//     .then(data => renderCountry(data))
//     // catch the error in the console
//     .catch(err => console.log(`${err.message} \u{1F4A3}`));
//   };
//   btn.addEventListener('click', whereAmI);

// ==================== coding challege===============================
// const wait = function(seconds){
//   return new Promise(function(resolve){
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath){
//   return new Promise(function(resolve, reject){
//     const img = document.createElement('img');
//      img.src = imgPath;
    
//      img.addEventListener('load', function(){
//       imgContainer.append(img);
//       resolve(img);
//      });

//      img.addEventListener('error', function(){
//       reject(new Error('Image not found'));
//      });
//   });
// };

// let currentImg;
// createImage('/img/img-1.jpg')
// .then(img => {
//   currentImg = img;
//   console.log('Image 1 loaded');
//   return wait(2)
// })
// .then(() =>{
//  currentImg.style.display = 'none';
//  return createImage('img/img-2.jpg')
// })
// .then(img => {
//   currentImg = img;
//    console.log('Image 2 loaded');
// })
// .then(() =>{
//   currentImg.style.display = 'none';
// })
// .catch(err => console.log(err));
// 
//================+++++++Async Await promises---++++++++++++
// const getPosition = function(){
//   return new Promise(function(resolve, reject){
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// const whereAmI = async function() {
//  // Geolocation
// try {const pos = await getPosition();
//   const {latitude: lat, longitude: lng} = pos.coords;

//   // Reverse Geocoding
//   const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//   if(!resGeo.ok) throw new Error('Promblem getting locationd data')

//   const dataGeo = await resGeo.json();
//   // Country data
//   const res =  await fetch(`https://restcountries.com/v2/name/${dataGeo.country}`);
//   const data = await res.json();
//   renderCountry(data[0]);

//   return `You are in ${dataGeo.city}, ${dataGeo.country}`;

// } catch (err) {
//    renderError(`${err.message}`);
  //  Reject promise from async function
//   throw err;
//   }
// }
// const city = whereAmI();
// whereAmI()
// .then(city => console.log(city))
// .catch(err => console.error(`${err.message}`));
// .finally(() => console.log('finally location'));

// (async function(){
//   try{
//    const city = await whereAmI();
//    console.log(city);
//   }catch(err){
//   console.error(`${err.message}`);
//   }
//   console.log('3: finishiong getting location')
// }());

// ==== Runing promises in parallel=====+++++++++++++++++++
const get3Countries = async function(c1, c2, c3){
  try{
// const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
// const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
// const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);


const data = Promise.all([getJSON(`https://restcountries.com/v2/name/${c1}`),
getJSON(`https://restcountries.com/v2/name/${c2}`),
  getJSON(`https://restcountries.com/v2/name/${c3}`),
]);
console.log(data.map(d => d[0].capital));
  }catch (err){
    console.error(err)
  }

get3Countries('nigeria', 'benin', 'ghana');
}

