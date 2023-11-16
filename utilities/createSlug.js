module.exports = function (text, list) {
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
