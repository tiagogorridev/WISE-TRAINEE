emailjs.init('0KJS76dgre6od2OtZ');
emailjs.init('0KJS76dgre6od2OtZ');

document.getElementById('contact-form').addEventListener('submit', function (event) {
event.preventDefault();

const overlay = document.getElementById('overlay');
const successMessage = document.getElementById('success-message');
const loadingText = document.getElementById('loading-text');

overlay.style.display = 'block';
setTimeout(() => (overlay.style.opacity = '1'), 10);

loadingText.textContent = "Enviando Email...";
successMessage.classList.add('show');
successMessage.style.display = 'block';

emailjs.sendForm('service_t0oolnp', 'template_1l91m72', this)
    .then(() => {
        console.log('Mensagem enviada com sucesso');
        loadingText.textContent = "Mensagem enviada com sucesso!";
        setTimeout(() => {
            successMessage.classList.remove('show');
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.style.display = 'none';
                successMessage.style.display = 'none';
            }, 300);
        }, 1500);
    })
    .catch((error) => {
        console.error('Erro ao enviar:', error);
        loadingText.textContent = "Erro ao enviar a mensagem.";
        setTimeout(() => {
            successMessage.classList.remove('show');
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.style.display = 'none';
                successMessage.style.display = 'none';
            }, 300);
        }, 1500);
    });
});
