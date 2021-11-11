function nbYear(
  population,
  populationPercent,
  newInhabitants,
  populationTarget
) {
  let years = 0;
  if (populationTarget <= population) return years;

  populationPercent = populationPercent / 100;
  for (; population < populationTarget; years++) {
    population += population * populationPercent + newInhabitants;
  }

  return years;
}

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
console.log(nbYear(1000, 2, 50, 1200));
