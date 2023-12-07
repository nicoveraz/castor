document.addEventListener('DOMContentLoaded', () => {
    console.log("El Castor está listo!");

    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
});