function pepoleOnTheBus(stationsArr) {
  let remainOnTheBus = 0;

  for (const station of stationsArr) {
    remainOnTheBus += station[0] - station[1];
  }
  return remainOnTheBus;
}

console.log(
  pepoleOnTheBus([
    [14, 0],
    [3, 1],
    [1, 2],
    [4, 1],
    [1, 8],
    [3, 2],
    [4, 2],
    [1, 4],
    [0, 10],
  ])
);

console.log(
  pepoleOnTheBus([
    [14, 0],
    [3, 1],
    [1, 2],
    [0, 1],
  ])
);

console.log(
  pepoleOnTheBus([
    [1, 0],
    [2, 4],
    [3, 3],
    [4, 2],
    [0, 1],
  ])
);
