
function calcKcal() {
  const size = document.getElementById('size').value;
  const age = document.getElementById('age').value;
  const weight = document.getElementById('weight').value;
/*
  if (!Number.isInteger(size) || size < 0) {
    document.getElementById('size').value = prompt("Bitte trage eine gültige Köpergröße in cm an.");
  }
*/
  if (document.getElementById('gender_female').checked == true) {
    document.getElementById('kcal').innerHTML ="Dein Grundumsatz liegt bei: " + Math.floor(655.1 +(9.6 * weight) + (1.8 * size) - (4.7 * age)) + " Kcal";
  } else {
    document.getElementById('kcal').innerHTML ="Dein Grundumsatz liegt bei: " + Math.floor(66.47 +(13.7 * weight) + (5 * size) - (6.8 * age)) + " Kcal";
  }
}
