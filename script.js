const sections = document.querySelectorAll(".section");
window.addEventListener("scroll", checkSections);
checkSections();
function checkSections() {
  const triggerBottomPos = (window.innerHeight / 5) * 4;
  sections.forEach((section) => {
    const sectionTopPos = section.getBoundingClientRect().top;

    if (sectionTopPos < triggerBottomPos) {
      section.classList.add("section--show");
    } else section.classList.remove("section--show");
  });
}
