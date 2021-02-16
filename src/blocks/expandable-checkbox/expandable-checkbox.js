document.querySelectorAll('.expandable-checkbox__triger').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;
        parent.classList.toggle('expandable-checkbox--active');
    })
);