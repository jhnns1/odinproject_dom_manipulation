const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hoped you enjoyed the ride";

sect.appendChild(para);

const text = document.createTextNode(
  " - the premier source for web dev knowledge."
);

const linkPara = document.querySelector("p");
linkPara.appendChild(text);
