import { fetchRequests } from "./dataAccess.js";
import { SinkRepair } from "./SinkRepair.js";

const mainContainer = document.querySelector("#container");

const render = async () => {
  await fetchRequests();
  mainContainer.innerHTML = SinkRepair();
};

render();

mainContainer.addEventListener("stateChanged", (e) => render());
