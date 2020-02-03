import { url_base } from "./../Constants/apiUrl";

export const getUrlSeachDocument = docNumb => {
  docNumb = docNumb ? docNumb : 0;

  return `${url_base}query/Document/${docNumb}`;
};

export const getUrlSaveDocument = () => {
  return `${url_base}Command/Document`;
};
