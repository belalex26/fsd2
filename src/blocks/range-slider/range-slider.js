import noUiSlider from './nouislider';

const slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [5000, 10000],
    connect: true,
    range: {
        'min': 0,
        'max': 16700
    },

    // step: 1,
});