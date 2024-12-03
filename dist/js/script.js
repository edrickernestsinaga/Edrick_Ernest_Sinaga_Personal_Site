document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Mencegah halaman reload

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Kirim data ke server atau API Anda di sini
  // Misalnya: menggunakan fetch untuk mengirim data
  fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, message }),
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = 'thankyou.html'; // Arahkan ke halaman terima kasih
      } else {
        // Tangani error jika ada
        alert('Pesan anda telah di kirim, mohon menunggu untuk informasi lebih lanjut. Terimakasih ☺☺☺☺');
      }
    })
    .catch((error) => {
      // Tangani error jika fetch gagal
      alert('Terjadi kesalahan: ' + error.message);
    });
});

// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

// Hamburger Menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
  if (e.target !== hamburger && e.target !== navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// Darkmode Toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
});

// Pindahkan posisi toggle sesuai mode
if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
