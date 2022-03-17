var boxes = document.getElementsByClassName("box"),

    productBtns = document.getElementsByClassName("btn");

showImages('all', 0);

function showImages(word, i) {

    activateBtn(i);

    if (word === "all") {

        for (let i = 0; i < boxes.length; i++) {

            boxes[i].style.display = "block";
        }
    } else {
        for (let i = 0; i < boxes.length; i++) {

            if (boxes[i].classList.contains(word)) {

                boxes[i].style.display = "block";

            } else {

                boxes[i].style.display = "none";
            }
        }
    }
}

function showProducts(product, i) {
    changeView(2);
    showImages(product, i);
}

function activateBtn(i) {
    document.querySelector('.btn.active').classList.remove('active');
    productBtns[i].classList.add("active");
}

function addProduct(element) {
    element.disabled = true;
    element.nextSibling.classList.remove('disabled');
    document.querySelector('.products-count').innerText = ++count;
}

function deleteItem(element) {

    if (element.previousSibling.disabled) {

        document.querySelector('.products-count').innerText = --count;

        element.previousSibling.disabled = false;

        element.classList.add('disabled');
    }

}