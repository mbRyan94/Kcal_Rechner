
function calcKcal() {
  const size = document.getElementById('size').value;
  const age = document.getElementById('age').value;
  const weight = document.getElementById('weight').value;
  document.getElementById('kcal').innerHTML = Math.floor(66.47 +(13.7 * weight) + (5 * size) - (6.8 * age));
};

 //calcKcal(size, age, weight);
