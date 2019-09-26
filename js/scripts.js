window.onload = function () {
    const logo = document.querySelector(".logo"),
        logoRed = document.querySelector(".logo-red"),
        wrapp = document.querySelector(".wrapper"),
        wrapp_img = document.querySelector(".wrapper__img"),
        elems_1 = document.querySelector(".elems__description"),
        elems_2 = document.querySelector(".elems__tv"),
        elems_3 = document.querySelector(".tv-big__arrow"),
        elems_4 = document.querySelector(".elems__size"),
        elems_5 = document.querySelector(".tv-big"),
        item_01 = document.querySelector(".item-01"),
        item_02 = document.querySelector(".item-02"),
        item_03 = document.querySelector(".item-03"),
        item_04 = document.querySelector(".item-04"),
        sentence_1 = document.querySelector(".sentence__circle"),
        sentence_2 = document.querySelector(".sentence__installment"),
        sentence_3 = document.querySelector(".sentence__sale"),
        buy_1 = document.querySelector(".buy__text"),
        buy_2 = document.querySelector(".buy__btn"),
        buy_3 = document.querySelector(".buy__btn-active"),
        buy_5 = document.querySelector(".buy__arrow"),
        buy_6 = document.querySelector(".buy__specialprice");

    let timeline = new TimelineMax({repeat: -1, yoyo: false});

    function restartAnimation() {
        timeline.restart();
    }

    (function () {
        timeline
            .to(elems_2, 1.1, {left: '-72px', ease: Power1.easeInOut}, .5)
            .to(wrapp_img, 1.1, {left: '-172px', ease: Power1.easeInOut}, .5)                       
            .to(elems_2, 2.5, {opacity: 0, ease: Power1.easeInOut}, .5)
            .to(elems_5, 0.5, {opacity: 1, scale: 1.0, ease: Power1.easeInOut}, 3.2)
            .to(wrapp_img, 0.5, {opacity: 0, ease: Power1.easeInOut}, 3.2) 
            .to(elems_1, 1, {opacity: 1, ease: Power1.easeInOut}, 3.5)
            .to(elems_3, 1, {opacity: 1, ease: Power1.easeInOut}, 4)
            .to(elems_4, 1, {opacity: 1, ease: Power1.easeInOut}, 4.2) 
            .to([elems_1, elems_5, elems_3], 1, {opacity: 0, ease: Power1.easeInOut}, 5)
            .to(elems_4, 1, {opacity: 0, display: 'none', ease: Power1.easeInOut}, 5)
            .to(item_01, .5, {opacity: 1, ease: Power1.easeInOut}, 5.7)
            .to(item_02, .5, {opacity: 1, ease: Power1.easeInOut}, 5.9)
            .to(item_03, .5, {opacity: 1, ease: Power1.easeInOut}, 6.1)
            .to(item_04, .5, {opacity: 1, ease: Power1.easeInOut}, 6.3)            
            .to([item_04, item_03, item_02, item_01], .5, {opacity: 0, ease: Power1.easeInOut}, 7.5)
            .to(sentence_1, 1, {opacity: 1, bottom: "10%", ease: Power1.easeInOut}, 8.5)
            .to(sentence_2, 1, {opacity: 1, ease: Power1.easeInOut}, 9.5)
            .to(sentence_1, 1, {scale: 1.7, ease: Power1.easeInOut}, 10)
            .to(sentence_2, 1, {top: "96px", ease: Power1.easeInOut}, 10)            
            .to(sentence_3, 1, {opacity: 1, ease: Power1.easeInOut}, 10.5)
            .to(logo, 1, {opacity: 0, ease: Power1.easeInOut}, 11.5)
            .to(elems_5, 1, {top: "146px", ease: Power1.easeInOut}, 11.5)
            .to([sentence_1, sentence_2, sentence_3,], 1, {opacity: 0, ease: Power1.easeInOut}, 11.5)
            .to(wrapp, .5, {backgroundColor:"#EA3431", ease: Power1.easeInOut}, 12.5)
            .to(logoRed, 1, {opacity: 1, ease: Power1.easeInOut}, 12.5)
            .to(buy_1, 1, {opacity: 1, ease: Power1.easeInOut}, 13)
            .to(elems_5, 1, {opacity: 1, ease: Power1.easeInOut}, 13.4)
            .to(buy_2, 1, {opacity: 1, ease: Power1.easeInOut}, 13.8)
            .to(buy_6, 1, {opacity: 1, ease: Power1.easeInOut}, 14.2)
            .to(buy_5, 1, {right: "33px", ease: Power1.easeInOut}, 14.6)
            .to(buy_2, .1, {opacity: 0, ease: Power1.easeInOut}, 15.5)
            .to(buy_3, .1, {opacity: 1, ease: Power1.easeInOut}, 15.5)
            .to(buy_2, .1, {opacity: 1, ease: Power1.easeInOut}, 16.5)
            .to(wrapp, .5, {opacity: 0, onComplete: restartAnimation, ease: Power1.easeInOut}, 17)
    }());

};