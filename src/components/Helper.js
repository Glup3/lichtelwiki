export const capitalizeFirstCharacter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getPokedexNumber = (number) => {
  var s = String(number);
  while (s.length < (3)) {s = '0' + s;}
  return '#' + s;
}