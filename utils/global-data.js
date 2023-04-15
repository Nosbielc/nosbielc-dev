export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Cleibson Gomes';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Códigos, Jogos e Café';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'Made with ❤️ in Quebec, CA.';
  const emailContact = process.env.EMAIL_CONTACT
      ? decodeURI(process.env.EMAIL_CONTACT)
      : 'blog@nosbielc.com';

  return {
    name,
    blogTitle,
    footerText,
    emailContact
  };
};
