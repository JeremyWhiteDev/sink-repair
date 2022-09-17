const applicationState = {
  requests: [],
};
const mainContainer = document.getElementById("container");

const API = "http://localhost:8088";

export const fetchRequests = async () => {
  const data = await fetch(`${API}/requests`);
  const jsonData = await data.json();
  applicationState.requests = jsonData;
};

export const getRequests = () => {
  return applicationState.requests.map((x) => ({ ...x }));
};

export const sendRequest = async (userServiceRequest) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userServiceRequest),
  };
  const response = await fetch(`${API}/requests`, fetchOptions);
  const responseJson = await response.json();
  mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
  return responseJson;
};

export const deleteRequest = async (id) => {
  await fetch(`${API}/requests/${id}`, { method: "DELETE" });
  mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
};
