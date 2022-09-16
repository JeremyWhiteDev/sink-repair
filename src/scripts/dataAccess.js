const applicationState = {
  requests: [],
};

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
  return responseJson;
};
