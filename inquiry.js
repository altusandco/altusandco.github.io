const inquiryForm = document.querySelector('.inquiry-form');
const serviceSelect = document.querySelector('#inquiry-service');

for (const link of document.querySelectorAll('[data-service]')) {
    link.addEventListener('click', () => {
        serviceSelect.value = link.dataset.service;
    });
}

inquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(inquiryForm);
    const subject = 'Altus & Co project inquiry: ' + data.get('service');
    const body = [
        'Name: ' + data.get('name'),
        'Email: ' + data.get('email'),
        'Business: ' + data.get('business'),
        'Service: ' + data.get('service'),
        '',
        'Project details:',
        data.get('message')
    ].join('\r\n');

    window.location.href = 'mailto:info@altusandco.com?subject=' +
        encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
});

inquiryForm.hidden = false;
