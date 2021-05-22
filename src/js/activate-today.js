export const activateToday = (() => {
    let _instance = {};

    _instance.init = () => {
        const activateTodaySection = document.querySelector('.activate-today');
        const footerHeight = _instance.initFooterHeight(activateTodaySection.querySelectorAll('.card--footer'));

        activateTodaySection.querySelectorAll('.card').forEach(el => {
            const cardFooter = el.querySelector('.card--footer');

            if (el.classList.contains('card__no-bg')) {
                el.style.paddingBottom = `${footerHeight}px`;
            }

            if (cardFooter) {
                cardFooter.style.height = `${footerHeight}px`;
            }
        });
    };

    _instance.initFooterHeight = ($el) => {
        let footerHeight = 0;

        $el.forEach(el => {
            if (el.clientHeight > footerHeight) {
                footerHeight = el.clientHeight;
            }
        });

        return footerHeight;
    }

    return _instance;
})();
