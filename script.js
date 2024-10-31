// Daftar tebakan hadiah lucu
const hadiah = [
    "I LOVE YOU DITA CAHYA KAMILA❤️😊",
];

// Fungsi untuk menebak hadiah
function tebakKado() {
    // Pilih hadiah secara acak
    const randomHadiah = hadiah[Math.floor(Math.random() * hadiah.length)];
    
    // Ganti teks tombol menjadi kalimat cinta
    const tombol = document.querySelector("button"); // Mengambil elemen tombol
    tombol.innerText = "Giving you all my love💘. Bubuuuubb, aku tuh bingung mau ngasih apa ke kamu, aku tuh takut kalau barang yang aku kasih engga kepake. jadiii aku bakal kirim uangnya aja, jadi kamu bisa beli barang atau sesuatu yang kamu butuhin atau yang kamu mau. kirim no e-wallet kamu atau rekening kamu di wa aku ya bubub..";
    
    // Tampilkan hasil tebakan hadiah sebagai pop-up
    alert(randomHadiah);
}
