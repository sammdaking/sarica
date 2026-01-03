// ===================================
// Components Loader
// ===================================

function loadHeader() {
  const headerContent = `
    <!-- Header -->
    <header class="header">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <!-- Logo -->
          <a href="index.html" class="navbar-brand logo">
            <span class="logo-top">levent</span>
            <span class="logo-bottom">SARICAOĞLU</span>
          </a>

          <!-- Mobile Hamburger Button -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Navigation Menu -->
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a href="index.html" class="nav-link active">Ana Sayfa</a>
              </li>

              <!-- Sigortalarımız Dropdown -->
              <li class="nav-item dropdown">
                <a href="sigortalarimiz.html" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Sigortalarımız
                </a>
                <ul class="dropdown-menu">
                  <li><a href="sigortalarimiz.html#kasko" class="dropdown-item">Kasko Sigortası</a></li>
                  <li><a href="sigortalarimiz.html#trafik" class="dropdown-item">Zorunlu Trafik Sigortası</a></li>
                  <li><a href="sigortalarimiz.html#konut" class="dropdown-item">Konut & DASK</a></li>
                  <li><a href="sigortalarimiz.html#saglik" class="dropdown-item">Tamamlayıcı Sağlık</a></li>
                  <li><a href="sigortalarimiz.html#ozel-saglik" class="dropdown-item">Özel Sağlık Sigortası</a></li>
                  <li><a href="sigortalarimiz.html#seyahat" class="dropdown-item">Seyahat & Ferdi Kaza</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a href="sigortalarimiz.html" class="dropdown-item fw-bold">Tüm Sigortalar</a></li>
                </ul>
              </li>

              <!-- Kurumsal Çözümler Mega Menu -->
              <li class="nav-item dropdown">
                <a href="kurumsal-cozumler.html" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Kurumsal Çözümler
                </a>
                <div class="dropdown-menu mega-menu">
                  <div class="mega-menu-container">
                    <!-- Sol taraf - Ana kart -->
                    <div class="mega-menu-left">
                      <div>
                        <h3 class="mega-menu-title">İşletmeniz İçin Tam Güvence</h3>
                        <p class="mega-menu-desc">İşletmenizin ihtiyaçlarına özel sigorta çözümleri ile riskleri yönetin, geleceğe güvenle bakın.</p>
                      </div>
                      <a href="kurumsal-cozumler.html" class="mega-menu-cta">
                        <span>Kurumsal Ürünler</span>
                        <i class="fas fa-arrow-right"></i>
                      </a>
                    </div>

                    <!-- Sağ taraf - Kategoriler -->
                    <div class="mega-menu-right">
                      <div class="mega-menu-grid">
                        <div class="mega-menu-column collapsed">
                          <h6>İŞYERİ & MÜLK</h6>
                          <a href="kurumsal-cozumler.html#isyeri-paket" class="dropdown-item">İşyeri Paket Sigortası</a>
                          <a href="kurumsal-cozumler.html#yangin" class="dropdown-item">Yangın & Kâr Kaybı</a>
                          <a href="kurumsal-cozumler.html#hirsizlik" class="dropdown-item">Hırsızlık & Kasa</a>
                        </div>
                        
                        <div class="mega-menu-column collapsed">
                          <h6>MÜHENDİSLİK & SANAYİ</h6>
                          <a href="kurumsal-cozumler.html#insaat" class="dropdown-item">İnşaat All-Risk</a>
                          <a href="kurumsal-cozumler.html#makine" class="dropdown-item">Makine Kırılması</a>
                          <a href="kurumsal-cozumler.html#elektronik" class="dropdown-item">Elektronik Cihaz</a>
                        </div>
                        
                        <div class="mega-menu-column collapsed">
                          <h6>ÇALIŞAN YAN HAKLARI</h6>
                          <a href="kurumsal-cozumler.html#grup-saglik" class="dropdown-item">Grup Sağlık Sigortası</a>
                          <a href="kurumsal-cozumler.html#bes" class="dropdown-item">Otomatik Katılım (BES)</a>
                          <a href="kurumsal-cozumler.html#ferdi-kaza" class="dropdown-item">Grup Ferdi Kaza</a>
                        </div>
                      </div>
                      
                      <div class="mega-menu-grid" style="margin-top: 1.5rem;">
                        <div class="mega-menu-column collapsed">
                          <h6>SORUMLULUK SİGORTALARI</h6>
                          <a href="kurumsal-cozumler.html#isv-mali" class="dropdown-item">İşveren Mali Mesuliyet</a>
                          <a href="kurumsal-cozumler.html#ucuncu-sahis" class="dropdown-item">3. Şahıs Sorumluluğu</a>
                          <a href="kurumsal-cozumler.html#mesleki" class="dropdown-item">Mesleki Sorumluluk</a>
                        </div>
                        
                        <div class="mega-menu-column collapsed">
                          <h6>NAKLİYAT & LOJİSTİK</h6>
                          <a href="kurumsal-cozumler.html#emtia" class="dropdown-item">Emtia Nakliyat</a>
                          <a href="kurumsal-cozumler.html#tasiyici" class="dropdown-item">Taşıyıcı Sorumluluk (FFL/CMR)</a>
                        </div>
                        
                        <div class="mega-menu-column collapsed">
                          <h6>FİLO & DİĞER</h6>
                          <a href="kurumsal-cozumler.html#filo" class="dropdown-item">Filo Kasko & Trafik</a>
                          <a href="kurumsal-cozumler.html#siber" class="dropdown-item">Siber Güvenlik</a>
                          <a href="kurumsal-cozumler.html#tekne" class="dropdown-item">Tekne & Havacılık</a>
                        </div>
                      </div>
                      
                      <!-- Tüm Kurumsal Ürünler butonu (sadece mobil/tablet) -->
                      <a href="kurumsal-cozumler.html" class="mega-menu-all-products d-lg-none">
                        Tüm Kurumsal Ürünler
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              <!-- Hakkımızda Dropdown -->
              <li class="nav-item dropdown">
                <a href="hakkimizda.html" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Hakkımızda
                </a>
                <ul class="dropdown-menu">
                  <li><a href="hakkimizda.html#hikayemiz" class="dropdown-item">Hikayemiz</a></li>
                  <li><a href="hakkimizda.html#misyon" class="dropdown-item">Misyon & Vizyon</a></li>
                  <li><a href="hakkimizda.html#ekip" class="dropdown-item">Ekibimiz</a></li>
                  <li><a href="hakkimizda.html#referanslar" class="dropdown-item">Referanslarımız</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a href="hakkimizda.html" class="dropdown-item fw-bold">Tüm Bilgiler</a></li>
                </ul>
              </li>

              <li class="nav-item">
                <a href="sigorta-rehberi.html" class="nav-link">Sigorta Rehberi</a>
              </li>

              <li class="nav-item">
                <a href="iletisim.html" class="nav-link">İletişim</a>
              </li>
            </ul>

            <!-- Contact Button -->
            <div class="d-none d-lg-block ms-3">
              <a href="iletisim.html" class="btn btn-primary">İletişime Geçin</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  `;

  document.getElementById("header-placeholder").innerHTML = headerContent;
}

function loadFooter() {
  const footerContent = `
    <!-- Footer -->
    <footer class="site-footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-column">
            <div class="footer-logo">
              <span class="logo-top">levent</span>
              <span class="logo-bottom">SARICAOĞLU</span>
            </div>
            <div class="footer-contact-info">
              <p>Atakum, Samsun</p>
              <p>Beypınar Mah. 1931 Sk. Baran Ellipse İş Merkezi Kat: 1 Daire: 5</p>
              <br>
              <p>info@saricaoglu.com</p>
              <p>+90 (555) 999 21 85</p>
            </div>
            <a href="iletisim.html" class="footer-contact-btn">
              <span>Bize Ulaşın</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div class="footer-column">
            <h4>SİGORTALARIMIZ</h4>
            <ul>
              <li><a href="sigortalarimiz.html#kasko">Kasko Sigortası</a></li>
              <li><a href="sigortalarimiz.html#trafik">Zorunlu Trafik Sigortası</a></li>
              <li><a href="sigortalarimiz.html#konut">Konut & DASK</a></li>
              <li><a href="sigortalarimiz.html#saglik">Tamamlayıcı Sağlık</a></li>
              <li><a href="sigortalarimiz.html#ozel-saglik">Özel Sağlık Sigortası</a></li>
              <li><a href="sigortalarimiz.html#seyahat">Seyahat & Ferdi Kaza</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>KURUMSAL ÇÖZÜMLER</h4>
            <ul>
              <li><a href="kurumsal-cozumler.html#isyeri">İşyeri & Mülk</a></li>
              <li><a href="kurumsal-cozumler.html#muhendislik">Mühendislik & Sanayi</a></li>
              <li><a href="kurumsal-cozumler.html#calisan">Çalışan Yan Hakları</a></li>
              <li><a href="kurumsal-cozumler.html#sorumluluk">Sorumluluk Sigortaları</a></li>
              <li><a href="kurumsal-cozumler.html#nakliyat">Nakliyat & Lojistik</a></li>
              <li><a href="kurumsal-cozumler.html#filo">Filo & Diğer</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>HIZLI BAĞLANTILAR</h4>
            <ul>
              <li><a href="hakkimizda.html">Hakkımızda</a></li>
              <li><a href="hakkimizda.html#insan-kaynaklari">İnsan Kaynakları</a></li>
              <li><a href="hakkimizda.html#cozum-ortaklarimiz">Çözüm Ortaklarımız</a></li>
              <li><a href="sigorta-rehberi.html">Sigorta Rehberi</a></li>
              <li><a href="hakkimizda.html#sartlar">Şartlar & Koşullar</a></li>
              <li><a href="hakkimizda.html#gizlilik">Gizlilik Politikası</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="footer-bottom-left">
            <p>&copy; 2025 LEVENT SARICAOĞLU</p>
          </div>
          <div class="footer-bottom-center">
            <span>mrbax.com</span>
          </div>
          <div class="footer-bottom-right">
            <div class="social-links">
              <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
              <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
              <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
              <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;

  document.getElementById("footer-placeholder").innerHTML = footerContent;
}

// Load components when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  loadHeader();
  loadFooter();
});
// Mobile mega menu accordion functionality
document.addEventListener("DOMContentLoaded", function () {
  // Sadece mobil/tablet görünümde çalışacak
  function setupMobileMegaMenu() {
    if (window.innerWidth <= 991) {
      const megaMenuColumns = document.querySelectorAll(".mega-menu-column");

      megaMenuColumns.forEach((column) => {
        const header = column.querySelector("h6");

        if (header) {
          header.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();

            // Toggle current column
            column.classList.toggle("collapsed");
            column.classList.toggle("expanded");
          });
        }
      });
    }
  }

  // İlk yükleme
  setupMobileMegaMenu();

  // Pencere boyutu değiştiğinde yeniden ayarla
  window.addEventListener("resize", setupMobileMegaMenu);
});

// Header menü link düzeltmesi - Ana menü itemlerine tıklandığında sayfaya gitsin
document.addEventListener("DOMContentLoaded", function () {
  // Masaüstü görünümde ana menü linklerine tıklandığında sayfaya git
  function handleMainMenuClicks() {
    const mainMenuLinks = document.querySelectorAll(
      ".nav-link.dropdown-toggle"
    );

    mainMenuLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        // Sadece masaüstü görünümde (992px ve üzeri) direkt link işlevi
        if (window.innerWidth >= 992) {
          // Dropdown açılmasını engelle
          e.stopPropagation();

          // Sayfaya git
          const href = this.getAttribute("href");
          if (href && href !== "#") {
            window.location.href = href;
          }
        }
        // Mobil görünümde normal dropdown davranışı devam eder
      });

      // Hover ile dropdown açılması için
      if (window.innerWidth >= 992) {
        const parentLi = link.closest(".nav-item.dropdown");

        parentLi.addEventListener("mouseenter", function () {
          const dropdown = this.querySelector(".dropdown-menu");
          if (dropdown) {
            dropdown.classList.add("show");
          }
        });

        parentLi.addEventListener("mouseleave", function () {
          const dropdown = this.querySelector(".dropdown-menu");
          if (dropdown) {
            dropdown.classList.remove("show");
          }
        });
      }
    });
  }

  // Sayfa yüklendiğinde ve pencere boyutu değiştiğinde çalıştır
  handleMainMenuClicks();

  window.addEventListener("resize", function () {
    // Resize olduğunda event listener'ları yeniden ayarla
    setTimeout(handleMainMenuClicks, 100);
  });
});
