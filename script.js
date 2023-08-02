const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

const modal = document.getElementById("modal");
const button = document.getElementById("button");
const closeModalButton = document.getElementById("close-button");
const form = document.getElementById("form");
const submitButton = document.getElementById("submit");

const toggleModal = (e) => {
    if (e.target.id === "button") {
        modal.style.display = "flex";
    } else {
        modal.style.display = "none";
    }
}

button.addEventListener("click", toggleModal);
closeModalButton.addEventListener("click", toggleModal);

async function handleSubmit(event) {
    event.preventDefault();
    toggleModal(event);
    var data = new FormData(form);
    fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
        'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            form.reset()
        } else {
            console.log("Error");
        }
    })
}

submitButton.addEventListener("click", handleSubmit);