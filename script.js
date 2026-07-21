// Mengambil elemen tombol toggle
const toggleSwitch = document.getElementById('toggleSwitch');

// Menambahkan interaksi klik
toggleSwitch.addEventListener('click', () => {
    // 1. Menggeser lingkaran pada tombol toggle (animasi visual)
    toggleSwitch.classList.toggle('active');
    
    // 2. Mengubah tema keseluruhan (mengaktifkan/menonaktifkan Light Mode)
    document.body.classList.toggle('light-theme');
});
// --- Logika Pop-up Skill ---
const skillBtns = document.querySelectorAll('.skill-btn');
const modalOverlay = document.getElementById('skillModal');
const closeBtn = document.querySelector('.close-btn');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');

// Data teks untuk masing-masing skill
const skillData = {
    'modal-web': {
        title: 'Web Development',
        desc: 'Berpengalaman dalam merancang dan membangun website responsif menggunakan HTML, CSS, dan JavaScript modern. Fokus pada performa tinggi, struktur kode yang bersih, serta pengalaman pengguna yang optimal.'
    },
    'modal-laravel': {
        title: 'Laravel Framework',
        desc: 'Menguasai pengembangan aplikasi web berbasis PHP menggunakan framework Laravel. Terbiasa membangun sistem backend yang aman, pengelolaan basis data, serta pembuatan RESTful API.'
    }
};

// Ketika tombol skill diklik
skillBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        
        // Masukkan teks berdasarkan data di atas
        modalTitle.textContent = skillData[target].title;
        modalDesc.textContent = skillData[target].desc;
        
        // Tampilkan modal
        modalOverlay.classList.add('active');
    });
});

// Menutup modal saat tombol 'X' diklik
closeBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

// Menutup modal saat area gelap di luar kotak diklik
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});
// --- Animasi Fade In on Scroll ---
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target); 
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});