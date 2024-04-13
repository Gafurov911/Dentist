// Открыть модальное окно
document.getElementById("open-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open")
})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal").classList.remove("open")
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

// Modal Form------------------------------
document.getElementById('sign_form').addEventListener('submit', checkForm)
const domains = ["google", "yandex", "mail", "gmail", "inbox"]
function checkForm(event) {
    event.preventDefault()
    let el = document.getElementById('sign_form');
    let name = el.name.value;
    let email = el.email.value;
    let pass = el.pass.value;
    let repass = el.repass.value;
    

    let fail = '';

    if (name == "" || email == "" || pass == "")
        fail = 'Заполните все поля';
    else if (name.length <= 2 || name.length > 6)
        fail = 'Мин и Макс кол-во символов: 2 - 6';
    else if (pass !== repass)
        fail = 'Пароли не совпадают';
    else if (pass.split('&').length > 1)
        fail = 'Некоректный пароль';



    if (fail != "")
        document.getElementById('error').innerHTML = fail;
    else {
        document.getElementById('error').innerHTML = '';
        alert('Форма успешно заполнена!')
    }

    return false;
}
