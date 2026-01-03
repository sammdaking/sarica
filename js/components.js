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
                  <div class="d-flex align-items-center justify-content-between mb-3">
                    <h5 class="mb-0">İşletmeniz İçin Tam Güvence</h5>
                    <a href="kurumsal-cozumler.html" class="btn btn-sm btn-outline-primary">Tüm Ürünler</a>
                  </div>
                  <div class="mega-menu-grid">
                    <div class="mega-menu-column">
                      <h6>İşyeri & Mülk</h6>
                      <a href="kurumsal-cozumler.html#isyeri-paket" class="dropdown-item">İşyeri Paket Sigortası</a>
                      <a href="kurumsal-cozumler.html#yangin" class="dropdown-item">Yangın & Kâr Kaybı</a>
                      <a href="kurumsal-cozumler.html#hirsizlik" class="dropdown-item">Hırsızlık & Kasa</a>
                      <a href="kurumsal-cozumler.html#elektronik" class="dropdown-item">Elektronik Cihaz</a>
                      
                      <h6 class="mt-3">Mühendislik & Sanayi</h6>
                      <a href="kurumsal-cozumler.html#insaat" class="dropdown-item">İnşaat All-Risk</a>
                      <a href="kurumsal-cozumler.html#makine" class="dropdown-item">Makine Kırılması</a>
                    </div>
                    
                    <div class="mega-menu-column">
                      <h6>Çalışan Yan Hakları</h6>
                      <a href="kurumsal-cozumler.html#grup-saglik" class="dropdown-item">Grup Sağlık Sigortası</a>
                      <a href="kurumsal-cozumler.html#bes" class="dropdown-item">Otomatik Katılım (BES)</a>
                      <a href="kurumsal-cozumler.html#ferdi-kaza" class="dropdown-item">Grup Ferdi Kaza</a>
                      
                      <h6 class="mt-3">Sorumluluk Sigortaları</h6>
                      <a href="kurumsal-cozumler.html#isv-mali" class="dropdown-item">İşveren Mali Mesuliyet</a>
                      <a href="kurumsal-cozumler.html#ucuncu-sahis" class="dropdown-item">3. Şahıs Sorumluluğu</a>
                      <a href="kurumsal-cozumler.html#mesleki" class="dropdown-item">Mesleki Sorumluluk</a>
                    </div>
                    
                    <div class="mega-menu-column">
                      <h6>Nakliyat & Lojistik</h6>
                      <a href="kurumsal-cozumler.html#emtia" class="dropdown-item">Emtia Nakliyat</a>
                      <a href="kurumsal-cozumler.html#tasiyici" class="dropdown-item">Taşıyıcı Sorumluluk (FFL/CMR)</a>
                      
                      <h6 class="mt-3">Filo & Diğer</h6>
                      <a href="kurumsal-cozumler.html#filo" class="dropdown-item">Filo Kasko & Trafik</a>
                      <a href="kurumsal-cozumler.html#siber" class="dropdown-item">Siber Güvenlik</a>
                      <a href="kurumsal-cozumler.html#tekne" class="dropdown-item">Tekne & Havacılık</a>
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
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <div class="footer-logo">
              <span class="logo-top">levent</span>
              <span class="logo-bottom">SARICAOĞLU</span>
            </div>
            <p class="footer-description">
              25 yıllık deneyimimizle, bireysel ve kurumsal sigorta ihtiyaçlarınıza en uygun çözümleri sunuyoruz.
            </p>
          </div>

          <div class="footer-section">
            <h4 class="footer-title">Hızlı Linkler</h4>
            <ul class="footer-links">
              <li><a href="index.html">Ana Sayfa</a></li>
              <li><a href="sigortalarimiz.html">Sigortalarımız</a></li>
              <li><a href="kurumsal-cozumler.html">Kurumsal Çözümler</a></li>
              <li><a href="hakkimizda.html">Hakkımızda</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4 class="footer-title">İletişim</h4>
            <ul class="footer-contact">
              <li>📍 Merkez Mahallesi, İş Bankası Caddesi No: 123</li>
              <li>📞 +90 (212) 555 0123</li>
              <li>✉️ info@leventsaricaoglu.com</li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2024 Levent Sarıcaoğlu Sigorta. Tüm hakları saklıdır.</p>
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
