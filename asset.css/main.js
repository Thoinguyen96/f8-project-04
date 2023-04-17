const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const item = $$(".vacation__item");
const desc = $$(".vacation__description");

const tabActive = $(".vacation__item.vacation__item--active");
const dash = $(".vacation__dash");
dash.style.left = tabActive.offsetLeft + "px";
dash.style.width = tabActive.offsetWidth + "px";

item.forEach((tab, index) => {
    const description = desc[index];
    tab.onclick = function () {
        $(".vacation__item.vacation__item--active").classList.remove(
            "vacation__item--active"
        );
        $(
            ".vacation__description.vacation__description--active"
        ).classList.remove("vacation__description--active");

        dash.style.left = this.offsetLeft + "px";
        dash.style.width = this.offsetWidth + "px";

        this.classList.add("vacation__item--active");
        description.classList.add("vacation__description--active");
    };
});

// review ---------------------------------------
