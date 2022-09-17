import { getRequests, deleteRequest } from "./dataAccess.js";

export const Requests = () => {
  const requests = getRequests();

  const convertRequestToListItems = (obj) => {
    return `<ul class="request">
        <li>
        ${obj.description}
        <button class="request__delete" id="request--${obj.id}">
        Delete
        </button>
        </li>
        </ul>`;
  };

  let html = `
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
