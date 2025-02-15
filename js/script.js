document.addEventListener("DOMContentLoaded", function () {
  //Текст сайдбара в анимации палочки в sidebar
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
  //Кнопка "Читать далее"
  const btnOpenReadMore = document.getElementById("info-btn-open");
  const btnCloseReadMore = document.getElementById("info-btn-close");

  const mobileText = document.querySelector(".info__subtitle_mobile");
  const softwareText = document.querySelector(".info__subtitle_software");
  const desctopText = document.querySelector(".info__subtitle_desctop");
  const hiddenText = document.querySelector(".info__subtitle_hidden");

  btnOpenReadMore.addEventListener("click", function () {
    toggleText(true);
  });

  btnCloseReadMore.addEventListener("click", function () {
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
      } else if (screenWidth >= 768 && screenWidth < 1440) {
        softwareText.style.display = "inline";
        desctopText.style.display = "inline";
        hiddenText.style.display = "inline";
      } else if (screenWidth >= 1440) {
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
      } else if (screenWidth >= 768 && screenWidth < 1440) {
        softwareText.style.display = "inline";
        desctopText.style.display = "none";
        hiddenText.style.display = "none";
      } else if (screenWidth >= 1440) {
        desctopText.style.display = "inline";
        hiddenText.style.display = "none";
      }
    }

    btnOpenReadMore.classList.toggle("hidden", show);
    btnCloseReadMore.classList.toggle("hidden", !show);
  }

  //Показать и скрыть wrapper
  const btnOpenName = document.getElementById("name-btn-open");
  const btnCloseName = document.getElementById("name-btn-close");
  const wrapperName = document.querySelector(".brands__wrapper");
  const btnOpenTech = document.getElementById("tech-btn-open");
  const btnCloseTech = document.getElementById("tech-btn-close");
  const wrapperTech = document.querySelector(".brands__wrapper-tech");
  // Общая функция для открытия и закрытия
  function toggleVisibility(
    openButton,
    closeButton,
    wrapper,
    openHeight,
    closeHeight
  ) {
    openButton.addEventListener("click", function () {
      wrapper.style.maxHeight = openHeight;
      openButton.classList.add("hidden");
      closeButton.classList.remove("hidden");
    });

    closeButton.addEventListener("click", function () {
      wrapper.style.maxHeight = closeHeight;
      closeButton.classList.add("hidden");
      openButton.classList.remove("hidden");
    });
  }
  // Инициализация для каждого блока
  toggleVisibility(btnOpenName, btnCloseName, wrapperName, "600px", "170px");
  toggleVisibility(btnOpenTech, btnCloseTech, wrapperTech, "600px", "170px");

  // Модальное окно
  function hiddenModal() {
    document.getElementById("modal-feedback").classList.remove("open")
  }
  document.getElementById("modal-btn").addEventListener("click", function () {
    document.getElementById("modal-feedback").classList.add("open");
  });
  document.getElementById("modal-close").addEventListener("click", function () {
    hiddenModal();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      hiddenModal();
    }
  });
  document.querySelector(".body").addEventListener("click", event => {
    if (event.target.className === "feedback open") hiddenModal();
  })
});
