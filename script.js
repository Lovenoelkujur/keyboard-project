document.addEventListener("keydown", (e) => {
    const keyName = document.querySelector("#key-name");
    keyName.innerHTML = e.key;

    const keyNumber = document.querySelector("#key-num");
    keyNumber.innerHTML = e.keyCode;
})