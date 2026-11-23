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

  var pubCards = document.querySelectorAll(".pub-grid .pub-card");
  pubCards.forEach(function (card) {
    card.addEventListener("click", function () {
      pubCards.forEach(function (c) { c.classList.remove("is-active"); });
      card.classList.add("is-active");
    });
  });

  var projectCards = document.querySelectorAll(".project-grid .project-card");
  projectCards.forEach(function (card) {
    card.addEventListener("click", function () {
      projectCards.forEach(function (c) { c.classList.remove("is-active"); });
      card.classList.add("is-active");
    });
  });

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
