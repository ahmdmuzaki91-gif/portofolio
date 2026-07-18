// Mengambil elemen tombol toggle
const toggleSwitch = document.getElementById('toggleSwitch');

// Menambahkan interaksi klik
toggleSwitch.addEventListener('click', () => {
    // 1. Menggeser lingkaran pada tombol toggle (animasi visual)
    toggleSwitch.classList.toggle('active');
    
    // 2. Mengubah tema keseluruhan (mengaktifkan/menonaktifkan Light Mode)
    document.body.classList.toggle('light-theme');
});