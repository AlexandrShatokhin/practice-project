document.addEventListener("DOMContentLoaded", function () {
  //Текст сайдбара в анимации палочки
  document.querySelectorAll(".sidebar__links_item").forEach((item) => {
    item.addEventListener("click", function () {
      document
        .querySelectorAll(".sidebar__links_item")
        .forEach((el) => el.classList.remove("active"));
      this.classList.add("active");
    });
  });
  //Языки для переключения
  document.querySelectorAll(".sidebar__lang_text").forEach((item) => {
    item.addEventListener("click", function () {
      document
        .querySelectorAll(".sidebar__lang_text")
        .forEach((el) => el.classList.remove("sidebar__lang_active"));
      this.classList.add("sidebar__lang_active");
    });
  });
  //Показывает элементы
  function fadeIn(element) {
    element.style.display = "flex";
    element.style.opacity = 0;
    let opacity = 0;
    const fade = setInterval(() => {
      opacity += 0.1;
      element.style.opacity = opacity;
      if (opacity >= 1) clearInterval(fade);
    }, 20);
  }
  //Скрывает элементы
  function fadeOut(element) {
    let opacity = 1;
    const fade = setInterval(() => {
      opacity -= 0.1;
      element.style.opacity = opacity;
      if (opacity <= 0) {
        clearInterval(fade);
        element.style.display = "none";
      }
    }, 20);
  }
  //Вызов функции при клике
  function toggleVisibility(btnOpen, btnClose, items) {
    btnOpen.addEventListener("click", function () {
      fadeOut(btnOpen);
      fadeIn(btnClose);
      items.forEach(fadeIn);
    });

    btnClose.addEventListener("click", function () {
      fadeOut(btnClose);
      fadeIn(btnOpen);
      items.forEach(fadeOut);
    });
  }
  //Элементы для функции вызова
  toggleVisibility(
    document.getElementById("name-btn-open"),
    document.getElementById("name-btn-close"),
    document.querySelectorAll(".brands__name-hidden")
  );
  toggleVisibility(
    document.getElementById("tech-btn-open"),
    document.getElementById("tech-btn-close"),
    document.querySelectorAll(".brands__tech-hidden")
  );

const btnOpen = document.getElementById("info-btn-open");
const btnClose = document.getElementById("info-btn-close");

const mobileText = document.querySelector(".info__subtitle_mobile");
const softwareText = document.querySelector(".info__subtitle_software");
const desctopText = document.querySelector(".info__subtitle_desctop");
const hiddenText = document.querySelector(".info__subtitle_hidden");

btnOpen.addEventListener("click", function () {
  toggleText(true);
});

btnClose.addEventListener("click", function () {
  toggleText(false);
});

function toggleText(show) {
  const screenWidth = window.innerWidth;

  if (show) {
    if (screenWidth >= 320 && screenWidth < 768) {
      mobileText.style.display = "inline";
      softwareText.style.display = "inline";
      desctopText.style.display = "inline";
      hiddenText.style.display = "inline";
    }
    if (screenWidth >= 768 && screenWidth < 1440) {
      softwareText.style.display = "inline";
      desctopText.style.display = "inline";
      hiddenText.style.display = "inline";
    }
    if (screenWidth >= 1440) {
      desctopText.style.display = "inline";
      hiddenText.style.display = "inline";
    }
  } else {

    // Возвращаем те элементы, которые должны быть видны по умолчанию
    if (screenWidth >= 320 && screenWidth < 768) {
      mobileText.style.display = "inline";
      softwareText.style.display = "none";
      desctopText.style.display = "none";
      hiddenText.style.display = "none";
    }
    if (screenWidth >= 768 && screenWidth < 1440) {
      softwareText.style.display = "inline";
      desctopText.style.display = "none";
      hiddenText.style.display = "none";
    }
    if (screenWidth >= 1440) {
      desctopText.style.display = "inline";
      hiddenText.style.display = "none";
    }
  }

  btnOpen.classList.toggle("hidden", show);
  btnClose.classList.toggle("hidden", !show);
}

});
