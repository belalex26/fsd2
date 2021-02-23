document.querySelectorAll('.dropdown-field__wrapper').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;
        parent.classList.toggle('dropdown--active');
    })
);