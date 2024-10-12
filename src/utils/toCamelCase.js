export function toCamelCase(sentence) {
  return sentence
    .split(" ") // Split the sentence into words
    .map((word, index) => {
      // Convert the first word to lowercase and capitalize the others
      if (index === 0) {
        return word.toLowerCase(); // First word in lowercase
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize subsequent words
    })
    .join(""); // Join all words together
}
