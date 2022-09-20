import {
  fetchRequests,
  fetchPlumbers,
  fetchCompletions,
} from "./dataAccess.js";
import { SinkRepair } from "./SinkRepair.js";

const mainContainer = document.querySelector("#container");

const render = async () => {
  await fetchRequests();
  await fetchPlumbers();
  await fetchCompletions();
  mainContainer.innerHTML = SinkRepair();
};

render();

mainContainer.addEventListener("stateChanged", (e) => render());
