document.addEventListener("DOMContentLoaded", () => {
  const radioButtons = document.querySelectorAll('input[name="anim"]');
  radioButtons.forEach(radio => {
    radio.addEventListener("change", (e) => {
      const areaMap = {
        nome: document.querySelector("strong"),
        cabecalho: document.querySelector("header h1"),
        corpo: document.querySelector("main"),
        rodape: document.querySelector("footer")
      };

      Object.values(areaMap).forEach(el => el?.classList.remove("animated"));
      areaMap[e.target.value]?.classList.add("animated");
    });
  });
});
