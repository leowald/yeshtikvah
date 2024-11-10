import axios from "axios";


async function post(url, data) {
  const response =await axios.post(url,data,{headers: {Accept: "application/json", "Content-Type": "application/json;charset=UTF-8",},}).then({data});

  return response;
}

async function put(url, data) {
  const response =await axios.put(url,data,{headers: {Accept: "application/json", "Content-Type": "application/json;charset=UTF-8",},}).then({data});

  return response;
}

async function get(url) {
  const resData = await axios.get(url).then((response) => {return response.data});
  return resData;
}

async function remove(url, data) {
  await axios.delete(url,data,{headers: {Accept: "application/json", "Content-Type": "application/json;charset=UTF-8",},}).then({data});

  const resData = "resource deleted...";
  return resData;
}

export { put, get, post, remove };
