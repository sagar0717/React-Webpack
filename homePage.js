Array.from(document.getElementsByClassName("letter")).forEach(letter => {
  letter.addEventListener("mouseover", e => {
    letter.classList.add("hovered");
  });
  letter.addEventListener("animationend", e => {
    letter.classList.remove("hovered");
  });
});
