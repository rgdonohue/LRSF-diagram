// const dispatch = d3.dispatch('orange', 'jonquil', 'blue');
// dispatch.on('orange', orangeBox);
// dispatch.on('jonquil', jonquilBox);
// dispatch.on('blue', blueBox);

// const orange = d3.select('#orange');
// const jonquil = d3.select('#jonquil');
// const blue = d3.select('#blue');

const modalClose = d3.selectAll('.modal .close');
const modals = d3.selectAll('.modal');
modalClose.on('click', function () {
  modals.style('display', 'none');
});

// orange.on('click', function () {
//   dispatch.call('orange');
//   modal.style('display', 'block');
//   modal.style('background', '#f17105');
// });

// jonquil.on('click', function () {
//   dispatch.call('jonquil');
//   modal.style('display', 'block');
//   modal.style('background', '#e6c229');
// });

// blue.on('click', function () {
//   dispatch.call('blue');
//   modal.style('display', 'block');
//   modal.style('background', '#1a8fe3');
// });

// function orangeBox() {
//   console.log('orange');
// }

// function blueBox() {
//   console.log('blue');
// }

// function jonquilBox() {
//   console.log('jonquil');
// }

const dispatch = d3.dispatch('retailRestaurants');
dispatch.on('retailRestaurants', retailRestaurantsBox);

const retailRestaurants = d3.select('#retail-restaurants');
const retailModal = d3.select('#modal-retail');
retailRestaurants.on('click', function () {
  dispatch.call('retailRestaurants');
  retailModal.style('display', 'block');
});

function retailRestaurantsBox() {
  console.log('retail restaurants');
}
