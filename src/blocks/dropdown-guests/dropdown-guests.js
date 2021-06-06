const buttons = document.querySelectorAll('.dropdown-guests__btn');
const buttonClear = document.querySelectorAll('.dropdown-guests__btn-clear');
const buttonApply = document.querySelectorAll('.dropdown-guests__btn-apply');
const dataGuest = document.querySelectorAll('.dropdown-guests__counter');
let countGuests = [];
let sumCountGuests = 0;

for (let i = 0; i < dataGuest.length; i++ ) {
    countGuests.push( dataGuest[i].value);

    dataGuest[i].addEventListener('input', function() {
        countGuests[i] = this.value;
        updateResults(); 
    });
}

updateResults();

function updateResults() {
    sumCountGuests = sumArr(countGuests);
    return sumCountGuests;
}

function sumArr(arr) {
    let x = 0;
    for( let i = 0; i < arr.length; i++ ){
      x += +arr[i];
    }
    return x;
}

if(sumCountGuests===0) {
    buttonClear.addClassName("dropdown-guests__btn-clear--disable")
}
  

buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        const direction = this.dataset.direction;
        const input = this.parentElement.querySelector('.dropdown-guests__counter');
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
        updateResults();
    })
});

buttonClear.forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.dropdown-guests__counter')
            .forEach(function (item) {
                item.value = "0";
        });
        updateResults();
    });
});
