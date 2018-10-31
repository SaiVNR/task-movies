class FetchData {

  buildUrl(searchString, type = "title", sortBy = "vote_average") {
    let url = "http://react-cdp-api.herokuapp.com/movies?sortBy=" + sortBy +
              "&search=" + searchString +
              "&sortOrder=desc" +
              "&searchBy=" + type +
              "&limit=" + 15;
    return url;
  }

  getData(url) {
    return new Promise(function (resolve, reject) {
      var req = new XMLHttpRequest();
      req.open('GET', url);
      req.onload = function () {
        if (req.status === 200) {
          resolve(JSON.parse(req.response));
        } else {
          reject(Error(req.statusText));
        }
      };
      req.onerror = function () {
        reject(Error("Network Error"));
      };
      req.send();
    });

  }
}

const fetchData = new FetchData();
export default fetchData;