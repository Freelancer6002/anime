const act = document.querySelectorAll("span");

for (let i = 0; i < act.length; i++) {
  act[i].addEventListener("click", () => {
    act[i].classList.toggle("active");
    act[i].classList.remove("js-hover");
  });

  act[i].addEventListener("mouseover", () => {
    if (!act[i].classList.contains("active")) {
      act[i].classList.add("js-hover");
    }
  });

  act[i].addEventListener("mouseout", () => {
    act[i].classList.remove("js-hover");
  });
}