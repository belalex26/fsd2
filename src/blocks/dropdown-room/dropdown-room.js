document.querySelectorAll('.dropdown__triger').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;
        parent.classList.toggle('dropdown--active');
    })
);