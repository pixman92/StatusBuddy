function nudgeCSS (select, changeMe, changeTo) {
    elem = document.querySelector(select);
    elem.style[changeMe] = changeTo;
}