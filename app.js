const modalClose = d3.selectAll('.close-button');
const modals = d3.selectAll('.modal');
modalClose.on('click', function () {
  modals.style('display', 'none');
});

d3.select('#retail').on('click', function () {
  d3.select('#modal-retail').style('display', 'block');
});

d3.select('#institutions').on('click', function () {
  d3.select('#modal-institutions').style('display', 'block');
});

d3.select('#government').on('click', function () {
  d3.select('#modal-government').style('display', 'block');
});

d3.select('#non-commodity').on('click', function () {
  d3.select('#modal-non-commodity').style('display', 'block');
});

d3.select('#direct').on('click', function () {
  d3.select('#modal-direct').style('display', 'block');
});

d3.select('#community').on('click', function () {
  d3.select('#modal-community').style('display', 'block');
});
