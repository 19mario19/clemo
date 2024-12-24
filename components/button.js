function Button(name, callback, appendTo = document.body){
    const btn = document.createElement("button")

    btn.textContent = name

    btn.addEventListener("click", callback)

    appendTo.appendChild(btn)
}

export {
    Button
}