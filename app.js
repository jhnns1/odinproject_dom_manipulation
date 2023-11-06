const container = document.querySelector("#container");

//add div
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// add paragraph
const paragraph = document.createElement("p");
paragraph.classList.add("paragraph");
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";

container.appendChild(paragraph);

//add h3
const headline3 = document.createElement("h3");
headline3.classList.add("h3");
headline3.textContent = "I'm a blue h3!";
headline3.style.color = "blue";

container.appendChild(headline3);

// add another div with a h1, p
const content2 = document.createElement("div");
const headline1 = document.createElement("h1");
headline1.classList.add("h1");
headline1.textContent = "I'm in a div";
const paragraph2 = document.createElement("p");
paragraph2.classList.add("p");
paragraph2.textContent = "Me too!";

content2.appendChild(headline1);
content2.appendChild(paragraph2);

content2.style.backgroundColor = "pink";
content2.style.borderColor = "black";
content2.style.borderStyle = "solid";

container.appendChild(content2);

// EVENTS
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World");
});
//btn.onclick = () => alert("Hello World");
