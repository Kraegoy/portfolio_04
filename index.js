window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.animate');
    elements.forEach(element => {
        element.classList.add('fade-in');
    });


    const textElement = document.querySelector('.animated-text');
    const text = textElement.textContent;
    textElement.textContent = '';
    textElement.style.opacity = 1;

    let index = 0;
    const interval = setInterval(() => {
        if (index < text.length) {
            textElement.textContent += text[index];
            index++;
        } else {
            clearInterval(interval);
        }
    }, 100); // Adjust the speed here (100ms per character)
});