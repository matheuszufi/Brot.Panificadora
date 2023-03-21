const whatspopup = document.getElementById('popupwhats')
const whatsmodal = document.getElementById('popupwhatsmodal')
const whatsmodalheader = document.getElementById('popupwhatsmodal-header')

whatspopup.addEventListener('click', () => {
    if (whatsmodal.style.display === 'flex') {
        whatsmodal.style.height = '0px';
        whatsmodalheader.style.opacity = '0'
        setTimeout(closemodalfx, 700)
       
    } else {

        whatsmodal.style.display = 'flex';
        setTimeout(openmodalfx, 200)

    }

})

function closemodalfx() {
    whatsmodal.style.display = 'none';

}

function openmodalfx() {
    whatsmodal.style.height = '350px';
    setTimeout(openmodalheaderfx, 200)
}

function openmodalheaderfx() {
    whatsmodalheader.style.opacity = '1'
}

