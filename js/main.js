window.onload = function () {
    var openButton = document.getElementById('open-button');
    var toggleMenue = document.getElementById('navbar-nav');
    var closeButton = document.getElementById('close-button');
    var setBorder = document.getElementById('border');
    var htext = document.getElementById('h-text');
    var textArea = document.getElementById('text-area');
    var bottomMenu = document.getElementById('bottom-menu');
    var bottomMenuOpenIcon = document.getElementsByClassName('navbar-bottom-open').item(0);
    var bottomMenuCloseIcon = document.getElementsByClassName('navbar-bottom-close').item(0);
    var bottomContainer = document.getElementById('navbarToggleExternalContent');


    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        openButton.classList.toggle('hide');
        bottomMenu.classList.toggle('hide');
        document.getElementsByClassName('top-menu').item(0).classList.toggle('hide');
    }

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("bottom-menu").style.bottom = "0";
            if(bottomContainer.classList.contains('show')){
                bottomContainer.classList.toggle('show');
                openClose();
            }
            
        } else {
            document.getElementById("bottom-menu").style.bottom = "-1000px";
        }
        prevScrollpos = currentScrollPos;
    };




    bottomMenuOpenIcon.onclick = openClose;
    bottomMenuCloseIcon.onclick = openClose;


    function openClose () {
        bottomMenuOpenIcon.classList.toggle('hide');
        bottomMenuCloseIcon.classList.toggle('hide');
        bottomMenu.classList.toggle('color');
    }

    function centered() {
        if (innerWidth < 992) {
            if (!htext.classList.contains('text-center')) {
                htext.classList.toggle('text-center');
                textArea.classList.toggle('text-center');
            }
        } else {
            if (htext.classList.contains('text-center')) {
                htext.classList.toggle('text-center');
                textArea.classList.toggle('text-center');
            }
        }
    }

    window.addEventListener("resize", centered);

    centered();

    openButton.onclick = function () {
        openButton.style.display = 'none';
        closeButton.style.display = 'block';
        if (innerWidth > 800) {
            setBorder.classList.toggle('border');
        }
    };

    closeButton.onclick = function () {
        openButton.style.display = 'block';
        if (innerWidth > 1200) {
            setBorder.classList.toggle('border');
            document.getElementsByClassName('top-menu').item(0).classList.remove("show");
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    };

    document.getElementsByClassName('top-menu').item(0)
        .onclick = function () {
            if (innerWidth < 1200) {
                setBorder.classList.remove('border');
                openButton.style.display = 'block';
                document.getElementsByClassName('top-menu').item(0).classList.remove("show");
            }
        };




};