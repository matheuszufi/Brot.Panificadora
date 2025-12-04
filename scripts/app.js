// Popup WhatsApp
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



// Menu hamburguer - abrir e fechar
const navBtn = document.getElementById('navbar-list-hidden');
const navHidden = document.getElementById('nav-hidden');

if (navBtn) {
    navBtn.addEventListener('click', () => {
        console.log('Menu hamburguer clicado');
        navHidden.style.transform = "translatey(0px)";
    });
}

const navCloseBtn = document.getElementById('navclosebtn');

if (navCloseBtn) {
    navCloseBtn.addEventListener('click', () => {
        console.log('Botão fechar clicado');
        navHidden.style.transform = "translatey(-300px)";
    });
}

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('#nav-hidden ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navHidden.style.transform = "translatey(-300px)";
    });
});


// Função de envio de email (precisa de backend para funcionar)
function sendEmail() {
    let name = document.getElementById('nomeemail').value;
    let email = document.getElementById('emailemail').value;
    let subject = document.getElementById('subjectemail').value;
    let message = document.getElementById('messageemail').value;

    // Por enquanto, apenas exibe um alerta
    alert(`Mensagem recebida!\n\nNome: ${name}\nEmail: ${email}\nAssunto: ${subject}\n\nMensagem: ${message}`);
    
    // Para implementar o envio real, você precisará de um backend (PHP, Node.js, etc)
    return false;
}