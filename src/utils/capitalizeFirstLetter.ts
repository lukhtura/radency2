/* THIS FUNC RETURNS STRING WITH EVERY FIRST LETTER CAPITALIZED */

function capitalizeFirstLetter(str: string) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

export default capitalizeFirstLetter;
