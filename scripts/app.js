const whatspopup = document.getElementById('popupwhats')
const whatsmodal = document.getElementById('popupwhatsmodal')
const whatsmodalheader = document.getElementById('popupwhatsmodal-header')
const whatsmodalbody = document.getElementById('popupwhatsmodal-body')

whatspopup.addEventListener('click', () => {
    if (whatsmodal.style.display === 'flex') {
     
        whatsmodalheader.style.opacity = '0'
        whatsmodalbody.style.opacity = '0'
        setTimeout(closemodalfx, 700)
       
    } else {
        whatsmodal.style.display = 'flex';
        setTimeout(openmodalfx, 200)
    }

    function closemodalfx() {
        whatsmodal.style.height = '0px';
    
        setTimeout(closemodalfx2, 300)
    
    }
    
    function openmodalfx() {
        whatsmodal.style.height = '350px';
        setTimeout(openmodalheaderfx, 400)
    }
    
    function openmodalheaderfx() {
        whatsmodalheader.style.opacity = '1'
        whatsmodalbody.style.opacity = '1'
    }
    
    function closemodalfx2() {
        whatsmodal.style.display = 'none';
    }
    
})



const navBtn = document.getElementById('navbar-list-hidden');
const navHidden = document.getElementById('nav-hidden')

navBtn.addEventListener('click', () => {
    navHidden.style.transform = "translatey(0px)";

})


const navCloseBtn = document.getElementById('navclosebtn');

navCloseBtn.addEventListener('click', () => {
    navHidden.style.transform = "translatey(-300px)";
})