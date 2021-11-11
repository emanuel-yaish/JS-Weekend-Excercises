function centuryFromYear(years) {
  if (years <= 100) return 1;
  return years % 100 === 0 ? years / 100 : Math.floor(years / 100) + 1;
}

console.log(centuryFromYear(1705));
console.log(centuryFromYear(1900));
console.log(centuryFromYear(1601));
console.log(centuryFromYear(2000));
console.log(centuryFromYear(100));
