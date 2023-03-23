const nodemailer = require('nodemailer');

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


let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'seuemail@gmail.com',
        pass: 'suasenha'
    }
});

function sendEmail() {
    let name = document.getElementById('nomeemail').value;
    let email = document.getElementById('emailemail').value;
    let subject = document.getElementById('subjectemail').value;
    let message = document.getElementById('messageemail').value;

    let mailOptions = {
        from: 'seuemail@gmail.com',
        to: 'destinatario@gmail.com',
        subject: subject,
        text: `Nome: ${name}\nEmail: ${email}\n\nMensagem: ${message}`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email enviado: ' + info.response);
        }
    });
}