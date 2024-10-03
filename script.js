var swiper = new Swiper(".mySwiper", {
    loop: true,
    centeredSlides: true,
    // grabCursor: true, // Menambahkan opsi ini agar kursor bisa berganti saat menggeser
    autoplay: {
        delay: 2000,
        disableOnInteraction: true, // Memperbaiki typo "disabledonINteraction" menjadi "disableOnInteraction"
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 1,
        },
    },
});

var swiper = new Swiper(".my_rss_items", {
    loop: true,
    centeredSlides: true,
    // grabCursor: true, // Menambahkan opsi ini agar kursor bisa berganti saat menggeser
    autoplay: {
        delay: 2000,
        disableOnInteraction: true, // Memperbaiki typo "disabledonINteraction" menjadi "disableOnInteraction"
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".testimonials__swiper", {
    loop: true,
    centeredSlides: true,
    // grabCursor: true, // Menambahkan opsi ini agar kursor bisa berganti saat menggeser
    autoplay: {
        delay: 2000,
        disableOnInteraction: true, // Memperbaiki typo "disabledonINteraction" menjadi "disableOnInteraction"
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
        },
    },
});
