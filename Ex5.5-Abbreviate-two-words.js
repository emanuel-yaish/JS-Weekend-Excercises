function nameIntoInitials(fullName) {
  nameArray = fullName.toUpperCase().split(" ");
  const nameInitials = `${nameArray[0].charAt(0)}.${nameArray[1].charAt(0)}`;
  return nameInitials;
}

console.log(nameIntoInitials("Sam Harris"));
console.log(nameIntoInitials("Patrick Feeney"));
