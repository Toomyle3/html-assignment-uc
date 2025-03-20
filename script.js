document.addEventListener("DOMContentLoaded", () => {
    const slide = document.getElementById("slide");
    const loadbar = document.getElementById("loadbar");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");
    const seeMoreButtons = document.querySelectorAll(".seeMore");
    let loadingProgress = 0;
  
    const handleClickNext = () => {
      const items = slide.querySelectorAll(".item");
      slide.appendChild(items[0]);
    };
  
    const handleClickPrev = () => {
      const items = slide.querySelectorAll(".item");
      slide.prepend(items[items.length - 1]);
    };
  
    const updateLoadingBar = () => {
      if (loadingProgress < 100) {
        loadingProgress += 1;
        loadbar.style.width = `${loadingProgress}%`;
        setTimeout(updateLoadingBar, 50);
      }
    };
  
    const openLink = (event) => {
      const url = event.target.getAttribute("data-url");
      window.open(url, "_blank");
    };
    nextBtn.addEventListener("click", handleClickNext);
    prevBtn.addEventListener("click", handleClickPrev);
    seeMoreButtons.forEach((button) =>
      button.addEventListener("click", openLink)
    );
  
    updateLoadingBar();
  });
  