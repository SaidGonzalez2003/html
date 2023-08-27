
const PintarAnimacion = (id, loop, autoplay, lottieIcon) => {
    
    LottieHtmlIcon(id, loop, autoplay, lottieIcon)
    
};

const LottieHtmlIcon = (id, loop, autoplay, lottieIcon) =>{

    let animar = document.getElementById(id);
    
    let animationOptions = {
        container: animar,
        renderer: "svg", // Opciones: svg / canvas / html
        loop: loop,
        autoplay: autoplay,
        path: "./assets/lottie/lottie_" + lottieIcon + ".json" // Ruta de tu archivo JSON de animación
    };

    // Cargar la animación utilizando Lottie
    let animation = lottie.loadAnimation(animationOptions);

}

export default PintarAnimacion;