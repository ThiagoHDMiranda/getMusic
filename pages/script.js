const list = document.querySelector("#toggle-button");
list.addEventListener(
  "click",
  (ev) => {
    if (ev.target.tagName === "DIV") {
      console.log(ev);
      ev.target.classList.toggle("done");
    }
  },
  false
);
