module.exports = function (text, list) {
  if (typeof text !== "string" || !text) {
    throw new Error("Il titolo non è presente o in formato errato");
  }

  if (!list) {
    throw new Error("La lista non è presente");
  }

  let counter = 0;
  let baseSlug = text.toLowerCase().replaceAll(" ", "-");
  let slug = baseSlug;

  for (const post of list) {
    if (post.title == text) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }
  }

  return slug;
};
