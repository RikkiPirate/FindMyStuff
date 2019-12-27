import { url_base } from "./../Constants/apiUrl";

const getUrlSeachDocument = docNumb => {
  docNumb = docNumb ? docNumb : 0;

  return `${url_base}query/Document/${docNumb}`;
};

export default getUrlSeachDocument;
