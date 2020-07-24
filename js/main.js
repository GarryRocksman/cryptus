window.onload = function () {
    var openButton = document.getElementById('open-button');
    var toggleMenue = document.getElementById('navbar-nav');
    var closeButton = document.getElementById('close-button');
    var setBorder = document.getElementById('border');
    var htext = document.getElementById('h-text');
    
    window.addEventListener("resize", centered);
    centered ();
    function centered (){
        if (innerWidth < 1000) {
            htext.classList.toggle('text-center');
        }
        else {
            htext.classList.delete('text-center');
        }
    }


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
            setBorder.classList.remove('border');
            document.getElementsByClassName('collapse').item(0).classList.remove("show");
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    };

    document.getElementsByClassName('collapse').item(0)
        .onclick = function () {
            if (innerWidth < 1200) {
                setBorder.classList.remove('border');
                openButton.style.display = 'block';
                document.getElementsByClassName('collapse').item(0).classList.remove("show");
            }
        };



};