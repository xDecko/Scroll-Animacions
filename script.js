

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



//BOLAS DE NIEVE

function handleHover() {
    var circles = document.getElementsByClassName("circles");
    var images = document.getElementsByClassName("image");

    for (var i = 0; i < circles.length; i++) {
        // Utilizar setTimeout para agregar un retraso a cada objeto
        (function(index) {
            setTimeout(function() {
                circles[index].classList.toggle("hover");
            }, index * 0); // Cambia el valor 200 por el retraso deseado (en milisegundos)
        })(i);
    }

    for (var j = 0; j < images.length; j++) {
        // Utilizar setTimeout para agregar un retraso a cada objeto
        (function(index) {
            setTimeout(function() {
                images[index].classList.toggle("yolo");
            }, index * 0); // Cambia el valor 200 por el retraso deseado (en milisegundos)
        })(j);
    }
}




