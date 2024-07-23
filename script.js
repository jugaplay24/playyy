document.addEventListener('DOMContentLoaded', function() {
    const whatsappLink = document.getElementById('whatsapp-link');
    const whatsappNumber = '+541171756051'; // Aquí debes colocar el número de WhatsApp
  
    whatsappLink.addEventListener('click', function(event) {
      event.preventDefault();
      window.location.href = 'https://api.whatsapp.com/send?phone=' + encodeURIComponent(whatsappNumber);
    });
  });
  