

new slider({
    el : document.querySelector('#sliders'),
    slideClass : 'slider',
    currentSlider : (slider) => {
        console.log(slider,"slides");
    },
    auto : 3000
})
