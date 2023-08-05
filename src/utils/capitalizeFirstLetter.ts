function capitalizeFirstLetter(str: string) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

export default capitalizeFirstLetter;
