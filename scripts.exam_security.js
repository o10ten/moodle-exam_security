<script>
  document.addEventListener('DOMContentLoaded', function () {
    function launchFullScreen(element) {
      if (element.requestFullscreen) element.requestFullscreen();
      else if (element.mozRequestFullScreen) element.mozRequestFullScreen();
      else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen();
      else if (element.msRequestFullscreen) element.msRequestFullscreen();
    }

    launchFullScreen(document.documentElement);

    document.addEventListener('contextmenu', e => e.preventDefault());

    document.addEventListener('keydown', function (e) {
      const key = e.key.toLowerCase();
      if (
        (e.ctrlKey && ['c', 'x', 'v', 'u'].includes(key)) ||
        (e.key === 'PrintScreen') ||
        (e.key === 'F12') ||
        (e.ctrlKey && e.shiftKey && ['i', 'j'].includes(key))
      ) {
        e.preventDefault();
        alert("Akses shortcut diblokir selama ujian.");
      }
    });

    document.body.style.userSelect = 'none';
    document.body.setAttribute("onselectstart", "return false");
    document.body.setAttribute("ondragstart", "return false");

    function isFullScreen() {
      return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
    }

    function checkExit() {
      if (!isFullScreen()) {
        alert("Anda keluar dari fullscreen. Ujian ditutup.");
        window.location.href = 'https://blc.mahkamahagung.go.id/logout';
      }
    }

    document.addEventListener('fullscreenchange', checkExit);
    document.addEventListener('webkitfullscreenchange', checkExit);
    document.addEventListener('mozfullscreenchange', checkExit);
    document.addEventListener('msfullscreenchange', checkExit);

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        alert("Kamu meninggalkan tab ujian. Ujian akan ditutup.");
        window.location.href = 'https://blc.mahkamahagung.go.id/logout'; 
      }
    });

    /*
    setInterval(function () {
      const devtools = window.outerWidth - window.innerWidth > 160 || window.outerHeight - window.innerHeight > 160;
      if (devtools) {
        alert("Tutup Developer Tools untuk melanjutkan ujian.");
        window.location.reload();
      }
    }, 2000);
    */
  });
</script>
