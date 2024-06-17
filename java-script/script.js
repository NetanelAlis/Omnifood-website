// **************************************************************
// Functions creation
// **************************************************************
function toggleNavigationMenu() {
  const el_Header = document.querySelector(".header");
  el_Header.classList.toggle("main-nav-is-open");
}
function setCurrentYear() {
  const el_SetCurrenyYear = document.querySelector(".year");
  const currentYear = new Date().getFullYear();
  el_SetCurrenyYear.textContent = currentYear;
}
function creatingNavigationToggle() {
  const el_buttonForNavigation = document.querySelector(
    ".btn-mobile-navigation"
  );

  el_buttonForNavigation.addEventListener("click", function () {
    toggleNavigationMenu();
  });
}
function smoothScrollingAnimation() {
  const el_AllWebstieLinks = document.querySelectorAll("a:link");

  el_AllWebstieLinks.forEach(function (webstieLink) {
    webstieLink.addEventListener("click", function (event) {
      event.preventDefault();
      const webstieLinkHref = this.getAttribute("href");

      if (webstieLinkHref === "#") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else if (webstieLinkHref.startsWith("#")) {
        const scrollLocation = document.querySelector(webstieLinkHref);
        scrollLocation.scrollIntoView({ behavior: "smooth" });
      }

      if (webstieLink.classList.contains("main-nav-btn")) {
        toggleNavigationMenu();
      }
    });
  });
}
function stickyNav() {
  const el_SectionHero = document.querySelector(".section-hero");
  const observer = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting == false) {
        document.body.classList.add("sticky");
      } else {
        document.body.classList.remove("sticky");
      }
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "-80px",
    }
  );

  observer.observe(el_SectionHero);
}
// **************************************************************
// Functions call
// **************************************************************
creatingNavigationToggle();
setCurrentYear();
smoothScrollingAnimation();
stickyNav();

// **************************************************************
// Fixing flexbox gap property missing in some Safari versions
// **************************************************************

(function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
})();
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*

*/
