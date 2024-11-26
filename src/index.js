let timer = 90;
const timerElement = document.getElementById("timer");
const headerOne = document.getElementById('header-one');
const headerTwo = document.getElementById('header-two');
const footerOne = document.getElementById('footer-one');
const footerTwo = document.getElementById('footer-two');
const scrollToTopBtn = document.getElementById('scroll-to-top');
scrollToTopBtn.hidden = true;

function updateTimer() {
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  timerElement.textContent = `Time left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  timer--;

  if (timer < 0) {
    toggleHeadersFooters();
    timer = 90;
  }
}

function toggleHeadersFooters() {
  headerOne.classList.toggle('visible');
  headerOne.classList.toggle('hidden');
  footerOne.classList.toggle('visible');
  footerOne.classList.toggle('hidden');
  
  headerTwo.classList.toggle('visible');
  headerTwo.classList.toggle('hidden');
  footerTwo.classList.toggle('visible');
  footerTwo.classList.toggle('hidden');
}

(() => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollToTopBtn.hidden = false;
        } else {
            scrollToTopBtn.hidden = true;
        };
    });

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
})();

setInterval(updateTimer, 1000);
