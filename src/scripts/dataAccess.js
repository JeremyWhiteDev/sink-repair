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
