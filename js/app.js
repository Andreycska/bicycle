$(function(){

    // BURGER MENU

    const navToggle = $("#navToggle"); //кнопка бургер меню
    const navBurger = $("#navBurger"); // полоски бургера
    const nav = $("#nav"); // навигация
    let widthDocument = $("#intro").width();//смотрим ширину окна

    navToggle.on("click", function(event) { // При клике на бургер
        event.preventDefault();
        navBurger.toggleClass("active"); //делаем крест из полосок
        widthDocument = $("#intro").width();
        if (widthDocument <= "767") { // если ширина меньше или ровна тогда
            $("body").toggleClass("no-scroll");//при раскрытом меню убираем скролл у body
        }
        nav.toggleClass("active"); //обавляем навигации класс active
    });

    // FIXED MENU 

    let header = $("#header"); //Позиция header 
    let intro = $("#intro"); // Позиция intro
    let introH = intro.innerHeight(); // Высота интро
    let scrollPos = $(window).scrollTop(); // Сколько проскроли от интро

    checkScroll(introH,scrollPos); //Вызываем функцию проверки где скролл

    $(window).on("scroll resize", function(){ // когда происходит скролл
        introH = intro.innerHeight(); // смотрим какое сейчас растояние от интро
        scrollPos = $(this).scrollTop(); // и вычесляем это значение

        checkScroll(introH,scrollPos); // вызываем функцию
    });

    function checkScroll (introH,scrollPos) { // функция 
        if (scrollPos > introH) {  // если позиция скрола больше чем высота интро
            header.addClass("fixed"); // тогда header фиксируется
        }else {
            header.removeClass("fixed"); // если нет то отменяем фиксацию
        }
    }

    // SMOOTH SCROLL

    $("[data-scroll]").on("click", function(event){ //по клику на элемент меню
        event.preventDefault(); // отменяем стандартное поведение ссылки
        let elementId = $(this).data("scroll"); // Смотрим по какому элементу меню точно шелкнули
        let elementOffset = $(elementId).offset().top; // куда ехать

        nav.removeClass("active"); // убираем класс
        widthDocument = $("#intro").width();
        if (widthDocument <= "767") { // если ширина меньше или ровна тогда
            $("body").toggleClass("no-scroll");//при раскрытом меню убираем скролл у body
            navBurger.toggleClass("active");
        }
        
        $("html, body").animate({ // анимацию движения
            scrollTop: elementOffset - 100 // едим куда - 70 пикселей
        }, 700); // едим с какой скоростью
    });

});