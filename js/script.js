const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
}

const contactForm = document.querySelector('#contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const data = new FormData(contactForm);

        const name = data.get('name');
        const email = data.get('email');
        const service = data.get('service');
        const message = data.get('message');

        const subject = encodeURIComponent(
            `Phantoms Development enquiry - ${service}`
        );

        const body = encodeURIComponent(
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Service: ${service}\n\n` +
            `Project details:\n${message}`
        );

        window.location.href =
            `mailto:phantom-csg1246@outlook.com?subject=${subject}&body=${body}`;
    });
}
