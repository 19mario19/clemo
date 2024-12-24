import { searchQuery } from "../search.js";
import routes from "./routes.js";

function createNav(parent) {
    const mainContainer = document.createElement("div")
    mainContainer.className = "main-container"


    const nav = document.createElement("nav")


    nav.appendChild(mainContainer)

    const logo = document.createElement("img");

    const logoAnchor = document.createElement("a")

    logoAnchor.href = "../index.html"

    logo.src = "../assets/logo.png";

    logo.alt = "Website logo"

    mainContainer.appendChild(logoAnchor);

    logoAnchor.appendChild(logo)

    const ul = document.createElement("ul")
    mainContainer.appendChild(ul)

    for (let i = 0; i < routes.length; i++) {
        const route = routes[i];

        const li = document.createElement("li")

        const anchor = document.createElement("a")

        anchor.textContent = route.name

        anchor.href = route.link

        ul.appendChild(li)

        li.appendChild(anchor)
    }


    parent.insertBefore(nav, parent.firstChild)


    // search query
    const container = document.createElement("div")
    container.className = "search-container"
    ul.appendChild(container)

    const search = document.createElement("input")
    container.appendChild(search)


    const ulQuery = document.createElement("ul")
    search.addEventListener("input", (e) => {
        let query = e.target.value.trim()


        if (query) {

            const result = searchQuery(query, routes)
            ulQuery.className = "query"
            container.appendChild(ulQuery)

            console.log(query, result)

            ulQuery.innerHTML = ""
            for (let i = 0; i < result.length; i++) {
                const el = result[i];

                console.log(el)
                const a = document.createElement("a")
                a.href = el.link

                const li = document.createElement("li")
                a.textContent = el.name

                li.appendChild(a)
                ulQuery.appendChild(li)
            }
        } else {
            ulQuery.innerHTML = ""
        }


    })
}

function createFooter(parent) {
    const footer = document.createElement("footer")
    parent.appendChild(footer)

    const paragraph = document.createElement("p")

    paragraph.textContent = "Made with JavaScript by Mario 2024.All Rights Reserved"

    footer.appendChild(paragraph)


}


function setDocumentTile() {
    const currentPath = window.location.pathname

    if (currentPath === "/index.html") {
        document.title = "home"
    }

    for (let i = 0; i < routes.length; i++) {
        const route = routes[i]

        if (currentPath == route.link.slice(1)) {
            document.title = route.name

        }

    }
}

document.addEventListener("DOMContentLoaded", () => {
    createNav(document.body)
    createFooter(document.body)
    setDocumentTile()
})
