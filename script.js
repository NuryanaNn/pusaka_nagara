var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 30,
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

var swiper = new Swiper(".items_blog", {
    loop: true,
    spaceBetween: 30,
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

var swiper = new Swiper(".swiperArtikel", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    // grabCursor: true, // Menambahkan opsi ini agar kursor bisa berganti saat menggeser
    autoplay: {
        delay: 2000,
        disableOnInteraction: true, // Memperbaiki typo "disabledonINteraction" menjadi "disableOnInteraction"
    },
    breakpoints: {
        0: {
            slidesPerView: 4,
        },
        480: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

var swiper = new Swiper(".professional__swiper", {
    loop: true,
    spaceBetween: 30,
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
    spaceBetween: 20,
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

var swiper = new Swiper(".program__interior_items", {
    loop: true,
    spaceBetween: 20,
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
            slidesPerView: 2,
        },
    },
});

var swiper = new Swiper(".leader", {
    loop: true,
    spaceBetween: 20,
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

document.addEventListener('DOMContentLoaded', function() {
    const productItem = document.querySelector('.product');
    const popupProduct = productItem.querySelector('.popup');
    const solutionItem = document.querySelector('.solution');
    const popupSolution = solutionItem.querySelector('.popup-solution');
    const resourceItem = document.querySelector('.resource');
    const popupResource = resourceItem.querySelector('.popup-resource');

    const productTabs = popupProduct.querySelectorAll('.tab');
    const productTabContents = popupProduct.querySelectorAll('.tab__content');

    const resourceTabs = popupResource.querySelectorAll('.tab');
    const resourceTabContents = popupResource.querySelectorAll('.tab__content');

    // Popup Product hover events
    productItem.addEventListener('mouseover', () => {
        popupProduct.style.display = 'flex';
    });

    productItem.addEventListener('mouseleave', () => {
        popupProduct.style.display = 'none';
    });

    // Popup Solution hover events
    solutionItem.addEventListener('mouseover', () => {
        popupSolution.style.display = 'flex';
    });

    solutionItem.addEventListener('mouseleave', () => {
        popupSolution.style.display = 'none';
    });

    // Popup Resource hover events
    resourceItem.addEventListener('mouseover', () => {
        popupResource.style.display = 'flex';
    });

    resourceItem.addEventListener('mouseleave', () => {
        popupResource.style.display = 'none';
    });

    // Tab click event for Product
    productTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove 'active' class from all tabs and tab contents
            productTabs.forEach(t => t.classList.remove('active'));
            productTabContents.forEach(content => content.classList.remove('active'));

            // Add 'active' class to the clicked tab and corresponding content
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
            tab.classList.add('active');
        });
    });

    // Tab click event for Resource
    resourceTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove 'active' class from all tabs and tab contents
            resourceTabs.forEach(t => t.classList.remove('active'));
            resourceTabContents.forEach(content => content.classList.remove('active'));

            // Add 'active' class to the clicked tab and corresponding content
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
            tab.classList.add('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const mekariItem = document.querySelector('.mekari');
    const popupMekari = mekariItem.querySelector('.popup-mekari');

    // Popup Mekari hover events
    mekariItem.addEventListener('mouseover', () => {
        popupMekari.style.display = 'flex';
    });

    mekariItem.addEventListener('mouseleave', () => {
        popupMekari.style.display = 'none';
    });
});

