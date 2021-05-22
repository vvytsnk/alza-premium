export const calculateButton = (() => {
    let _instance = {};

    _instance.init = () => {
        const calcBtn = document.querySelectorAll('[js-calculate-btn]');

        calcBtn.forEach(el => {
            el.addEventListener('click', (e) => {
                _instance.toggleClass(calcBtn, 'btn--light', 'btn--dark');

                e.target.classList.add('btn--dark');
                e.target.classList.remove('btn--light');

                const calculateVal = document.querySelector('[js-calculate-val]');

                if (e.target.dataset.calculate === 'month') {
                    calculateVal.textContent = calculateVal.dataset.value;
                }

                if (e.target.dataset.calculate === 'year') {
                    calculateVal.textContent = calculateVal.dataset.value * 12;
                }

                calculateVal.textContent = calculateVal.textContent.toString().replace(
                    /(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '
                );
            });
        });
    };

    _instance.toggleClass = ($el, $addClassName, $removeClassName) => {
        $el.forEach(el => {
            el.classList.add($addClassName);
            el.classList.remove($removeClassName);
        });
    };

    return _instance;
})();
