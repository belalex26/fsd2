const buttons = document.querySelectorAll('.dropdown__guests-btn');
const buttonClear = document.querySelectorAll ('.dropdown__guests-btn-clear');
const buttonApply = document.querySelectorAll ('.dropdown__guests-btn-apply');

document.querySelectorAll('.dropdown__triger').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;
        parent.classList.toggle('dropdown--active');
    })
);

buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        const direction = this.dataset.direction;
        const input = this.parentElement.querySelector('.dropdown__guests-counter');
        const currentValue = +input.value;
        let newValue;

        if (direction === 'plus') {
            newValue = currentValue + 1 > 10 ?
            10 : currentValue + 1;
        } else {
            newValue = currentValue - 1 > 0 ?
              currentValue - 1 : 0;
        }

        input.value = newValue;
    })
});

buttonClear.forEach(btn => {
    btn.addEventListener('click', function() {
        input.value = 0;
    });
});
