export const checkHtmlForScript = (html) => {
  if (html.includes("<script>")) {
    return "Content is unavailable";
  }
  return html.replace(/(<([^>]+)>)/gi, "");
};
