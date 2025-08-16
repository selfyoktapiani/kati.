// Ambil parameter dari URL
const params = new URLSearchParams(window.location.search);
const produk = params.get("produk") || "Produk Tidak Diketahui";
const harga = parseInt(params.get("harga")) || 0;
const gambar = params.get("gambar") || "img/default.jpg";

// Tampilkan tanggal & nomor invoice
document.getElementById("invoiceDate").textContent =
  new Date().toLocaleDateString("id-ID");
document.getElementById("invoiceNumber").textContent = "INV" + Date.now();

// Tampilkan data produk
document.getElementById("productName").textContent = produk;
document.getElementById("productPrice").textContent =
  "Harga: Rp " + harga.toLocaleString();
document.getElementById("totalPrice").textContent =
  "Total: Rp " + harga.toLocaleString();
document.getElementById("productImage").src = gambar;

// Cetak Invoice
document.getElementById("printBtn").addEventListener("click", () => {
  window.print();
});
