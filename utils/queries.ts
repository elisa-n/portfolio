const projectFields = `
  _id,
  name,
  title,
  coverImage,
  "slug": slug.current,
`;

const aboutMeFields = `
  _id,
  name,
  title,
  content,
  image,
`;

const headerFields = `
  _id,
  image,
  title,
  subtitle,
`;

export const indexQuery = `
*[_type == "project"] | order(title desc, _updatedAt desc) {
  content,
  ${projectFields}
}`;

export const aboutMeQuery = `
*[_type == "aboutMe"] | order(title desc, _updatedAt desc) {
  content,
  ${aboutMeFields}
}`;

export const headerQuery = `
*[_type == "header"] | order(title desc, _updatedAt desc) {
  content,
  ${headerFields}
}`;

export const footerQuery = `*[_type == "footer"]`;

export const projectQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${projectFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${projectFields}
  }
}`;
