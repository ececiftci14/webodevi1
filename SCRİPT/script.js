window.onload = function() {
  alert("Ecetta Giyim'e Hoş Geldiniz! 🛍️");
};
function kayitOl() {
  const email = document.getElementById("email").value;
  if (email.includes("@") && email.includes(".")) {
    alert("Teşekkürler! E-posta adresiniz kaydedildi.");
  } else {
    alert("Lütfen geçerli bir e-posta adresi girin.");
  }
}