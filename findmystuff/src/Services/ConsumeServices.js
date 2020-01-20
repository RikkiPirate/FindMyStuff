import { timeout } from "q";

export const post = "POST";
export const get = "GET";
export const put = "PUT";
export const detele = "DELETE";
export const noCors = "no-cors";
export const cors = "cors";
export const same = "same-origin";

function PostData(url, data, verb = get, mode = cors) {
  // Default options are marked with *

  const response = fetch(url, {
    method: verb, // *GET, POST, PUT, DELETE, etc.
    mode: mode, // no-cors, *cors, same-origin
    //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json" // 'application/x-www-form-urlencoded',
    },
    //redirect: "follow",  manual, *follow, error
    //referrer: "no-referrer",  no-referrer, *client
    body: data ? JSON.stringify(data) : null // body data type must match "Content-Type" header
  })
    .then(message => {
      return message.json();
    })
    .then(dataService => {
      timeout(1000);
      return dataService.json();
    });
  return response; // parses JSON response into native JavaScript objects
}

export default PostData;
