// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Ambil parameter dari URL
const params = new URLSearchParams(window.location.search);
const produk = params.get("produk") || "";
const harga = params.get("harga") || "";
const gambar = params.get("gambar") || "img/default.jpg";

// Tampilkan di form
document.getElementById("namaProduk").value = produk;
document.getElementById("hargaProduk").value = "Rp " + harga;
document.getElementById("gambarProduk").src = gambar;

// Event submit form
document
  .getElementById("formTransaksi")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Redirect ke halaman invoice sambil bawa data lewat URL
    window.location.href = `invoice.html?produk=${encodeURIComponent(
      produk
    )}&harga=${encodeURIComponent(harga)}&gambar=${encodeURIComponent(gambar)}`;
  });


  