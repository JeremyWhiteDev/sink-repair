import { Requests } from "./Requests.js";

export const SinkRepair = () => {
  return `
    <h1>Maude and Merle's Sink Repair</h1>
    <section class="serviceForm">
    </section>

    <section class="serviceRequests">
        <h2>Service Requests</h2>
        ${Requests()}
    </section>
    `;
};
