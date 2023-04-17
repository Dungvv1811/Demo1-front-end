//DOM

const divDom = document.createElement("div");
divDom.className = "post-item";

const headingDom = document.createElement("h2");
headingDom.title = "Hoc lap trinh tai f8";
headingDom.innerHTML = "Hoc ReactJs";

const pDom = document.createElement("p");
pDom.innerHTML = "hoc ReactJs tu co ban den nang cao";

divDom.appendChild(headingDom);
divDom.appendChild(pDom);

document.body.appendChild(divDom);

//React
const divReact = document.createElement(
  "div",
  {
    className: "post-item",
  },
  React.createElement(
    "h2",
    {
      title: "Hoc React tai f8",
    },
    "Hoc ReactJs"
  ),
  React.createElement("p", null, "Hoac ReactJs tu co ban toi nang cao")
);
