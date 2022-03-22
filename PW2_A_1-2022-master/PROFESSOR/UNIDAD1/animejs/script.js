var animationController;

class AnimationController {
    constructor() {
        this.ball = document.querySelector('#ball');
        this.logo = document.querySelector('#logo');
        this.menuContainer = document.querySelector('.menu-container');
        this.menuList = document.querySelector('.menu-list');
        this.menuWidth = window.innerWidth;
        this.menuHeight = window.innerHeight;
        this.menuShown = false;

        let path = anime.path('#spiral');
        let timeline = anime.timeline();

        let menuClickCall = this.menuClick.bind(this);
        this.menuContainer.addEventListener('click', menuClickCall);

        this.logo.style.left = `${window.innerWidth / 2 - 200}px`;
        this.logo.style.top = `${window.innerHeight / 2 - 100}px`;

        timeline.add({
            targets: '#ball',
            translateX: path('x'),
            translateY: path('y'),
            rotate: path('angle'),
            width: '300px',
            height: '300px',
            duration: 2500,
            easing: 'easeInSine'
        }).add({
            targets: '#ball',
            width: '200%',
            height: '400%',
            left: `-${window.innerWidth}px`,
            top: `-${window.innerHeight * 2}px`,
            duration: 1000
        }).add({
            targets: '#ball',
            opacity: 0,
            duration: 500,
            easing: 'linear'
        }).add({
            targets: '#logo',
            opacity: 1,
            duration: 500,
            easing: 'linear'
        });

        /**
         * Ejercicio:
         * 
         * Mostrar el logo de la universidad al final del timeline
         * 16:15
         */
    }

    menuClick() {
        let timeline = anime.timeline();

        if (this.menuShown) {
            /**
                Ejercicio:

                Crear los efectos de animación para hacer que el menú
                colapse a su posición original.

                15:05
            */

            timeline.add({
                targets: '.menu-container',
                width: '50px',
                height: '50px',
                borderRadius: '100%',
                backgroundColor: '#00f',
                duration: 500,
                easing: 'easeInSine',
                complete(anim) {
                    animationController.menuList.style.display = 'none';
                    animationController.menuShown = false;
                }
            })
            .add({
                targets: '.el',
                opacity: 0,
                easing: 'easeInSine',
                duration: function(element, i) {
                    return i * 1000;
                }
            })
        } else {

            timeline.add({
                targets: '.menu-container',
                width: this.menuWidth + 'px',
                height: this.menuHeight + 'px',
                borderRadius: {
                    value: '0%',
                    duration: 300,
                    easing: 'linear'
                },
                backgroundColor: {
                    value: 'rgba(20, 20, 20, 0.8)',
                    easing: 'linear'
                },
                duration: 500,
                easing: 'easeInSine',
                complete(anim) {
                    animationController.menuList.style.display = 'block';
                    animationController.menuShown = true;
                }
            })
            .add({
                targets: '.el',
                opacity: 1,
                easing: 'easeInSine',
                duration: function(element, i) {
                    return i * 1000;
                }
            })
        }
    }
}

window.onload = function() {
    animationController = new AnimationController();
}