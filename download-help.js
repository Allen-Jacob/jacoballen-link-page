(() => {
  const downloadButton = document.querySelector("[data-download-button]");
  const helpBox = document.querySelector("[data-download-help]");
  const closeButton = document.querySelector("[data-download-help-close]");

  if (!downloadButton || !helpBox || !closeButton) return;

  downloadButton.addEventListener("click", () => {
    helpBox.hidden = false;
    window.setTimeout(() => helpBox.focus({ preventScroll: true }), 0);
  });

  closeButton.addEventListener("click", () => {
    helpBox.hidden = true;
    downloadButton.focus();
  });
})();
