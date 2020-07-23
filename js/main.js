
window.onload = function () {
    var openButton = document.getElementById('open-button');
    var closeButton = document.getElementById('close-button');
    

    openButton.onclick = function () {
        openButton.style.display = 'none';
        closeButton.style.display = 'block';
    };

    closeButton.onclick = function () {
        openButton.style.display = 'block';
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
        });
    };

    
};