export const benefits = (() => {
    const cards = document.querySelectorAll('.benefits-section .card');

    let _instance = {};

    _instance.init = () => {
        cards.forEach(el => {
            el.style.height = `${_instance.initHeight(cards)}px`;
        })
    };

    _instance.initHeight = ($el) => {
        let height = 0;

        $el.forEach(el => {
            if (el.clientHeight > height) {
                height = el.clientHeight;
            }
        });

        return height;
    }

    _instance.resize = () => {
        cards.forEach(el => {
            el.style.height = 'auto';
        });

        _instance.init();
    }

    return _instance;
})();
