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
