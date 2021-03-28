class slider {

    slideIndex = 1;

    constructor(options) {
        this.options = options

        this.intialStuff()
        this.createNextAndPrevButtons()
        this.createDots()
        this.showSliders(1)
        this.setTimerAuto()
    }

    intialStuff() {
        let { el: sliderElement, slideClass, auto } = this.options
        if (!sliderElement) throw Error("element is not exist")
        slideClass ? slideClass : alert("class list is not exist")
        Number.isInteger(auto) ? this.auto = auto : this.auto = 0
        this.sliders = [...sliderElement.children].filter(el => el.classList.contains(slideClass))

    }
    
    createNextAndPrevButtons() {
        let { el: sliderElement } = this.options
        sliderElement.insertAdjacentHTML('beforeend', `
        <a class="next">&#10095</a>
        <a class="prev">&#10094</a>
        `)
        sliderElement.querySelector(".next").addEventListener("click", () => this.nextAndPrevcrements(this.slideIndex += 1))
        sliderElement.querySelector(".prev").addEventListener("click", () => this.nextAndPrevcrements(this.slideIndex -= 1))
    }

    nextAndPrevcrements = (n) => {
        this.resetinterval()
        this.showSliders(n)

    }
    currentSlide = n => {
        this.resetinterval()
        this.showSliders(this.slideIndex = n)
    }


    // dots

    createDots() {
        let { el: sliderElement } = this.options
        let dotElement = [...this.sliders].map((slide, index) => `<span class="dot" data-slide=${index + 1}></span>`)
        let dots = document.createElement("div")
        dots.classList.add("dots")
        dots.innerHTML = `${dotElement.join('')}`
        sliderElement.after(dots)

        this.dots = dots.querySelectorAll(".dot")
        this.dots.forEach(dot => dot.addEventListener("click", (e) => this.currentSlide(parseInt(e.target.dataset.slide))))
        console.log(dots);
    }
    showSliders(number) {
        let { el: sliderElement, slideClass, currentSlider } = this.options
        if (number > this.sliders.length) this.slideIndex = 1
        if (number < 1) this.slideIndex = this.sliders.length

        console.log(this.slideIndex);



        sliderElement.querySelector(`.${slideClass}.active`).classList.remove("active")
        this.dots.forEach(dot => dot.classList.remove("active"))

        this.sliders[this.slideIndex - 1].classList.add("active")
        this.dots[this.slideIndex - 1].classList.add("active")


        if (currentSlider) currentSlider(this.sliders[this.slideIndex - 1])
    }

    setTimerAuto() {
        if (this.auto) {
            this.inerId = setInterval(() => this.showSliders(this.slideIndex += 1), this.auto);
        }
    }
    resetinterval() {
        clearInterval(this.inerId)
        this.setTimerAuto()
    }
}