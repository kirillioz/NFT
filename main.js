// burger

let nftBurger = document.querySelector('.nft__header__burger');
let nftList = document.querySelector('.nft__header__list');

nftBurger.addEventListener('click', function(){
    nftBurger.classList.toggle('active');
    nftList.classList.toggle('active');
});

// slider

$(document).ready(function(){
    $('.nft__featured__block').slick({
        arrows: true,
        dots: true,
        speed: 1000,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2500,
                    speed: 1000,
                    pauseOnClick: true,
                }
            },
            // {
            //     breakpoint: 830,
            //     settings: {
            //         slidesToShow: 1,
            //     }
            // }
        ],
    });
});



