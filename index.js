const form = document.querySelector("#index-form")
const name = document.querySelector("#name")
const email = document.querySelector("#email")
const message = document.querySelector("#message")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const response = {
        name: name.value.trim(),
        email: email.value.trim(),
        message: email.value.trim()
    }

    console.log(response)

    name.value = ""
    email.value = ""
    message.value = ""

})