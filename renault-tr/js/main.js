// Swiper galeri fonksiyonu
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Navbar yükleme fonksiyonu
function loadNavbar() {
    return fetch('navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Navbar yüklenirken hata oluştu: ' + response.status);
            }
            return response.text();
        })
        .then(data => {
            console.log('Navbar HTML içeriği yüklendi:', data); // Yüklendiğini izlemek için log
            document.body.insertAdjacentHTML('afterbegin', data);
        })
        .catch(error => console.error('Navbar yüklenirken hata:', error));
}

// Footer yükleme fonksiyonu
function loadFooter() {
    return fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Footer yüklenirken hata oluştu: ' + response.status);
            }
            return response.text();
        })
        .then(data => {
            console.log('Footer HTML içeriği yüklendi:', data); // Yüklendiğini izlemek için log
            document.body.insertAdjacentHTML('beforeend', data);

            // Footer yüklendikten sonra mevcut dili tekrar uygula
            const currentLang = localStorage.getItem('language') || 'tr';  // Varsayılan olarak Türkçe
            changeLanguage(currentLang);
        })
        .catch(error => console.error('Footer yüklenirken hata:', error));
}


// Sayfa yüklendiğinde çağırılacak
window.addEventListener('DOMContentLoaded', () => {
    loadNavbar().then(() => {
        console.log('Navbar başarıyla yüklendi.');
        initializeMenu();  // Navbar yüklendikten sonra menüyü başlatıyoruz.
        initializeLanguageSwitcher(); // Navbar yüklendikten sonra dil değiştiriciyi başlatıyoruz.
    }).catch(error => console.error('Navbar yükleme hatası:', error));

    loadFooter().then(() => {
        console.log('Footer başarıyla yüklendi.');
    }).catch(error => console.error('Footer yükleme hatası:', error));
});

// Navbar yüklendikten sonra menü kontrol fonksiyonu
function initializeMenu() {
    let menuIcon = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");
    let navbarLinks = document.querySelectorAll(".navbar a");

    if (menuIcon && navbar) {
        console.log("Menü öğeleri bulundu."); // Ek bilgi için log
        menuIcon.onclick = () => {
            menuIcon.classList.toggle("bx-x");
            navbar.classList.toggle("active");
        };

        navbarLinks.forEach(link => {
            link.onclick = () => {
                menuIcon.classList.remove("bx-x");
                navbar.classList.remove("active");
            };
        });
    } else {
        console.error("Menü öğeleri bulunamadı.");
    }
}

// Dil değiştirme işlevi başlatma
function initializeLanguageSwitcher() {
    const btnTR = document.getElementById('btn-tr');
    const btnEN = document.getElementById('btn-en');

    if (btnTR && btnEN) {
        btnTR.onclick = () => changeLanguage('tr');
        btnEN.onclick = () => changeLanguage('en');
    } else {
        console.error('Dil butonları bulunamadı.');
    }
}

// Dil değiştirme kismi
const translations = {
    tr: {
        discover: "Keşfedin",
        catalog: "Katalog",
        simulation: "3D Simülasyon",
        about: "Hakkımızda",
        contact: "Bize Ulaşın",
        copyright:"&copy; <span>Renault 2017 - 2024</span> | Tüm Hakları Saklıdır",
        discoverButton:"Test Sürüşüne Çıkın"
    },
    en: {
        discover: "Discover",
        catalog: "Catalog",
        simulation: "3D Simulation",
        about: "About Us",
        contact: "Contact Us",
        copyright:"&copy; <span>Renault 2017 - 2024</span> | All Rights Reserved",
        discoverButton:"Take a Test Drive"
    }
};

function changeLanguage(lang) {
    // Dil seçimini localStorage'da sakla
    localStorage.setItem('language', lang);


    // Tüm data-translate öğelerini bul ve içeriklerini güncelle
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach((element) => {
        const key = element.getAttribute('data-translate');  // data-translate değeri anahtar olarak kullanılır
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];  // Uygun dili kullanarak metni güncelle
        }
    });

    // Navbar içeriği güncelleme
    document.getElementById("discover").textContent = translations[lang].discover;
    document.getElementById("catalog").textContent = translations[lang].catalog;
    document.getElementById("simulation").textContent = translations[lang].simulation;
    document.getElementById("about").textContent = translations[lang].about;
    document.getElementById("contact").textContent = translations[lang].contact;

    // Footer içeriği güncelleme
    const footerDiscover = document.querySelector("footer #discover");
    const footerCatalog = document.querySelector("footer #catalog");
    const footerSimulation = document.querySelector("footer #simulation");
    const footerAbout = document.querySelector("footer #about");
    const footerContact = document.querySelector("footer #contact");
    const footerCopyright = document.querySelector("footer .copyright");

    if (footerDiscover) footerDiscover.textContent = translations[lang].discover;
    if (footerCatalog) footerCatalog.textContent = translations[lang].catalog;
    if (footerSimulation) footerSimulation.textContent = translations[lang].simulation;
    if (footerAbout) footerAbout.textContent = translations[lang].about;
    if (footerContact) footerContact.textContent = translations[lang].contact;
    if (footerCopyright) footerCopyright.innerHTML = translations[lang].copyright;  // Copyright güncelleme
}

