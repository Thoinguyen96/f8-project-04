const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const item = $$(".vacation__item");
const desc = $$(".vacation__description");

const tabActive = $(".vacation__item.vacation__item--active");
const dash = $(".vacation__dash");
dash.style.width = tabActive.offsetWidth + "px";
dash.style.left = tabActive.offsetLeft + "px";
item.forEach((tab, index) => {
    const description = desc[index];
    tab.onclick = function (e) {
        const descriptionActive = $(
            ".vacation__description.vacation__description--active"
        );
        descriptionActive.classList.remove("vacation__description--active");
        dash.style.left = this.offsetLeft + "px";
        dash.style.width = this.offsetWidth + "px";
        description.classList.add("vacation__description--active");
    };
});

// -----Choice -------------------------------------------------------------
const buttons = $$(".choice__btn");
const lists = $$(".choice__list");

buttons.forEach((element, index) => {
    element.onclick = function () {
        const listActive = $(".choice__list.active");
        listActive.classList.remove("active");
        lists[index].classList.add("active");
    };
});
//----------------- Reviews-----------------------------------------------
const center = $$(".review__wrap-center");
const wrap = $(".review__wrap-small");
const back = $(".review__vector-switch-back");
const next = $(".review__vector-switch-next");
let index = 0;
back.onclick = function () {
    index--;
    if (index < 0) {
        index = center.length - 1;
    }
    wrap.style.right = index * 100 + "%";
};

next.onclick = function () {
    index++;
    if (index > center.length - 1) {
        index = 0;
    }
    wrap.style.right = index * 100 + "%";
};
// back.onclick = function () {
//     index = index - 1;
//     if (index < 0) {
//         index = review.length - 1;
//     }
//     wrap.style.right = index * 100 + "%";
// };

// next.onclick = function () {
//     index = index + 1;
//     if (index > review.length - 1) {
//         index = 0;
//     }
//     wrap.style.right = index * 100 + "%";
// };

// const review = $$(".review__wrap-center");
// const menu = $$(".review__switch");

// let index = 0;
// const back = $(".review__vector-switch-back");
// const next = $(".review__vector-switch-next");
// const wrap = $(".review__wrap-small");
// next.addEventListener("click", function () {
//     index = index + 1;
//     if (index > review.length - 1) {
//         index = 0;
//     }
//     wrap.style.right = index * 100 + "%";
// });
// back.addEventListener("click", function () {
//     index = index - 1;
//     console.log(index);

//     if (index < 0) {
//         index = review.length - 1;
//     }
//     wrap.style.right = index * 100 + "%";
// });

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function () {
//         // lắng nghe sự kiện onclick
//         const activeButton = document.querySelector(".btnChoice.active"); //lấy ra btn đang được active
//         const activeList = document.querySelector(".choice__list.active"); //lấy ra thẻ div đang được active

//         if (activeButton) {
//             // nếu có class là active thì xóa đi
//             activeButton.classList.remove("active");
//         }
//         if (activeList) {
//             //có thẻ div nào đang có class là active thì xóa

//             activeList.classList.remove("active");
//         }

//         buttons[i].classList.add("active"); //thêm class actie
//         lists[i].classList.add("active"); //thêm class active
//     });
// }

// // review --------------------------------------
