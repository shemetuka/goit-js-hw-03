function slugify(title) {
  const words = title.split(' ');
  let slug = '';
  for (let i = 0; i < words.length; i += 1) {
    if (i > 0) {
      slug += '-';
    }
    slug += words[i].toLowerCase();
  }
  return slug;
}

console.log(slugify('Arrays for begginers')); // "arrays-for-begginers"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"
