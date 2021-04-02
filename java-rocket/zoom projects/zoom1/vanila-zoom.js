(function (window) {

    let defineLibrary = () => ({
        init: function (galleryId) {
            let container = document.querySelector(galleryId)
            if (!container) {
                console.error("please add a container")
                return;
            }
            let firstImage = container.querySelector(".small-preview")
            let zoomedImage = container.querySelector(".zoomed-image")
            if (!firstImage) {
                console.error("pleae add your image");
            }
            if (!zoomedImage) {
                console.error("pleae add your zoomedImage tag");
            }
            zoomedImage.style.backgroundImage = `url(${firstImage.src})`

            container.addEventListener("click", function (e) {
                let elem = e.target
                if (elem.classList.contains("small-preview")) {
                    zoomedImage.style.backgroundImage = `url(${elem.src})`
                }
            })
            zoomedImage.addEventListener("mouseenter", function () {
                this.style.backgroundSize = "250%"
            })
            zoomedImage.addEventListener("mousemove", function (e) {
                // console.log(this.getBoundingClientRect());
                let dimentions = this.getBoundingClientRect();
                let x = e.clientX - dimentions.left;
                let y = e.clientY - dimentions.top;
                x = Math.round(100 / (dimentions.width / x))
                y = Math.round(100 / (dimentions.height / y))
                this.style.backgroundPosition=`${x}% ${y}%`
                console.log(x, y);
            })
            zoomedImage.addEventListener("mouseleave",function(){
                this.style.backgroundSize="cover";
                this.style.backgroundPosition="center"
            })
            //or 
            // let images = document.querySelectorAll(".small-preview")
            // if (images) {
            //     images.forEach(image => image.addEventListener("click", function (e) {
            //         let elem = e.target;
            //         zoomedImage.style.backgroundImage = `url(${elem.src})`

            //     }))
            // }

        }
    })
    if (typeof (vanillaZoom) == "undefined") {
        window.vanillaZoom = defineLibrary()
    }
    else {
        console.log("vanillaZoom is already definded");
    }
})(window)