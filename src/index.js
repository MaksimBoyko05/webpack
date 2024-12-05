import './style.css';

console.log('Webpack проект успішно налаштовано!');

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    app.textContent = 'Вітаю в моєму Webpack проекті!';
});