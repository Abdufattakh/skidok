class Scroll {
    constructor(elem) {

        if (typeof elem.el == 'string') {//проверка на строку
            this.el = document.querySelector(elem.el) // если строка то через document.querySelector() делаем привязку

        } else if (elem.el instanceof HTMLElement) {
            // проверяем принадлежность к HTML
            this.el = elem.el

        }
        this.unit = elem.unit;
        this.top = elem.top; // присваиваем отступы
        this.el.style.position = 'fixed'; // делаем у элемента '.header__nav' position = 'fixed'
        this.el.style.background = 'red';
        this.el.style.top = this.scroll(); // даем отступ путем вызова метода this.scroll() который делает вычисления 


        window.addEventListener('scroll', () => this.scroll()); // вешаем событие скрол и вызываем метод scroll()
        window.addEventListener('resize', () => this.scroll());// вешаем событие изменение размера и вызываем метод scroll()


    }
    scroll() {
        this.window = this.ScrollNumber() // метод вычисления отступов
            // pageYOffset возвращает расстояние от верха страницы до скрола
        console.log(pageYOffset);
        if (this.window - pageYOffset > 0) {
            this.el.style.top = this.window - pageYOffset + 'px'
        } else {
            this.el.style.top = 0
        }

    }
    ScrollNumber() {
        if (this.unit == 'px') {

            return this.top >= 0 ? this.top : 0;

        }
        else if (this.unit == '%' || this.unit == undefined) {

            return this.el.clientHeight;
        }
    }
}


const myScroll = new Scroll({
    el: '.header_nav',
    top: 100,
    unit: '%'
})






























