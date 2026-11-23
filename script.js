(function () {
  var html = document.documentElement;
  var langToggle = document.getElementById("lang-toggle");
  var menuToggle = document.getElementById("menu-toggle");
  var navLinks = document.getElementById("nav-links");

  function setLang(lang) {
    html.setAttribute("data-lang", lang);
    html.setAttribute("lang", lang);
    localStorage.setItem("lang", lang);
  }

  var saved = localStorage.getItem("lang");
  if (saved === "en" || saved === "ko") {
    setLang(saved);
  }

  if (langToggle) {
    langToggle.addEventListener("click", function () {
      var next = html.getAttribute("data-lang") === "en" ? "ko" : "en";
      setLang(next);
    });
  }

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("nav--open");
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("nav--open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
})();
