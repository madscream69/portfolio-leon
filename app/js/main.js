const burger = document.querySelector('.header__catalog-btn');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    if (burger.classList.contains('active')) {
        document
            .querySelector('.header__catalog')
            .classList.add('header__catalog--open');
        setTimeout(() => {
            document.querySelector('.header__catalog').style.zIndex = '1';
        }, 1000);
    } else {
        document
            .querySelector('.header__catalog')
            .classList.remove('header__catalog--open');
        document.querySelector('.header__catalog').style.zIndex = '-1';
    }
});
document
    .querySelector('.header__icon-search')
    .addEventListener('click', (e) => {
        e.preventDefault();
        document
            .querySelector('.header__search')
            .classList.toggle('header__search--open');
        if (document.querySelector('.header__search--open')) {
            setTimeout(() => {
                document.querySelector('.header__search').style.zIndex = '1';
            }, 600);
        } else {
            document.querySelector('.header__search').style.zIndex = '-1';
        }
    });
document.querySelector('.header__search-btn').addEventListener('click', () => {
    document
        .querySelector('.header__search')
        .classList.remove('header__search--open');
    document.querySelector('.header__search').style.zIndex = '-1';
});
document.querySelector('.header__icon-link').addEventListener('click', (e) => {
    e.preventDefault();
    document
        .querySelector('.header__icon-img')
        .classList.toggle('header__icon-img--active');
    if (document.querySelector('.header__icon-img--active')) {
        document.querySelector('.header__icon-img--active').src =
            'images/phone_gold.svg';
        document
            .querySelector('.header__phone')
            .classList.add('header__phone--open');
        setTimeout(() => {
            document.querySelector('.header__phone').style.zIndex = '1';
        }, 500);
    } else {
        document.querySelector('.header__icon-img').src = 'images/phone.svg';
        document
            .querySelector('.header__phone')
            .classList.remove('header__phone--open');
        document.querySelector('.header__phone').style.zIndex = '-1';
    }
});
