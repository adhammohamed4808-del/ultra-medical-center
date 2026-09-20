/* =========================================================
   ULTRA MEDICAL CENTER - BASIC FRONTEND CONTENT PROTECTION
   ========================================================= */

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.addEventListener("keydown", function (e) {
  const key = e.key.toUpperCase();

  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(key)) ||
    (e.ctrlKey && ["U", "S", "P"].includes(key))
  ) {
    e.preventDefault();
    return false;
  }
});