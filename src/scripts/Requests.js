import {
  getRequests,
  deleteRequest,
  getPlumbers,
  saveCompletion,
  getCompletions,
} from "./dataAccess.js";

export const Requests = () => {
  const requests = getRequests();
  const plumbers = getPlumbers();
  const completions = getCompletions();

  const convertRequestToListItems = (obj) => {
    if (completions.find((x) => x.requestId == obj.id)) {
      return `<ul class="request complete">
      <li>
        ${obj.description}
        <button class="request__delete" id="request--${obj.id}">
        Delete
        </button>
        </li>
        </ul>`;
    } else {
      return `<ul class="request"><li>
      ${obj.description} <select class="plumbers" id="plumbers">
      <option value="">Choose</option>
      ${plumbers
        .map((plumber) => {
          return `<option value="${obj.id}--${plumber.id}">${plumber.name}</option>`;
        })
        .join("")}
  </select>
      <button class="request__delete" id="request--${obj.id}">
      Delete
      </button>
      </li>
      </ul>`;
    }
  };

  let html = `<h3 class="header request">description</h3>
            ${requests.map(convertRequestToListItems).join("")}
            

    `;

  return html;
};
const mainContainer = document.querySelector("#container");

mainContainer.addEventListener("click", (click) => {
  if (click.target.id.startsWith("request--")) {
    const [, requestId] = click.target.id.split("--");
    deleteRequest(parseInt(requestId));
  }
});

mainContainer.addEventListener("change", (event) => {
  if (event.target.id === "plumbers") {
    const [requestId, plumberId] = event.target.value.split("--");

    const completion = {
      requestId: requestId,
      plumberId: plumberId,
      date_created: Date.now(),
    };
    //if request id is found in array of completions. then add aditional class of complete to HTML?

    saveCompletion(completion);
    document.dispatchEvent(new CustomEvent("stateChanged"));
  }
});

//comparing logic of for loop vs .map method
// import { getRequests } from "./dataAccess.js";

// export const Requests = () => {
//   const requests = getRequests();

//   let html = "";
//   html += "<ul>";
//   for (const request of requests) {
//     html += `<li>${request.description}</li>`;
//   }
//   html += "</ul>";
// };

// export const Requests = () => {
//   const requests = getRequests();

//   const convertRequestToListElement = (request) => {
//     return `<li>${request.description}</li>`;
//   };

//   return `<ul>${requests.map(convertRequestToListElement).join("")}</ul>`;
// };
