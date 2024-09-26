//1
const section = document.createElement("section");
section.id = "root";
section.textContent =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem fugiat harum eveniet! Eveniet amet velit magnam suscipit ipsam. Molestias illo, hic temporibus velit culpa nemo repellendus labore optio incidunt atque.";
section.style.color = "blue";
document.body.appendChild(section);

//2
const el = document.getElementById("text");
el.setAttribute("style", "background-color: purple; color: white;");

//3
const name = prompt("Ваше ім'я: ");
const h1 = document.createElement("h1");
h1.textContent = `Вітаю, ${name}`;
document.body.prepend(h1);
