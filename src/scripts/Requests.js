import { getRequests } from "./dataAccess.js";

export const Requests = () => {
  const requests = getRequests();

  const convertRequestToListItems = (obj) => {
    return `
        <li>Description: ${obj.description}</li>
        <li> Address: ${obj.address}</li>
        <li> Budget: ${obj.budget}</li>
        <li> Needed By: ${obj.neededBy}`;
  };

  let html = `
        <ul>
            ${requests.map(convertRequestToListItems).join("")}
				</ul>
    `;

  return html;
};
