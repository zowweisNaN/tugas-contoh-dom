



// Fungsi untuk mengurus data yang di input agar bisa di munculkan pada alert
function submitBiodata() {
  var nama = document.getElementById("nama").value;
  var age = document.getElementById("age").value;
  var alamat = document.getElementById("alamat").value;

  // Membuat alert (notif pop up) dengan data yang sudah saya input
  alert(
    "Biodata Anda:\nNama: " + nama + "\nUmur: " + umur + "\nAlamat: " + alamat
  );
}
