import renderHeader from "./header.js"
import renderHome from "./home.js"
import renderMenu from"./menu.js"
import renderContact from "./contact.js"

const content = document.getElementById("content");
renderHeader(content)

const tabContent = document.createElement("div")
tabContent.id = "tab-content"
content.appendChild(tabContent)

renderHome(tabContent)


const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
    tab.addEventListener("click", e => {
        tabContent.removeChild(tabContent.lastChild)
        tabs.forEach(page => page.classList.remove("active"))
        tab.classList.add("active")

        let name = e.target.textContent

        if(name === "MENU"){
            renderMenu(tabContent)
        } else if(name === "CONTACT"){
            renderContact(tabContent)
        } else {
            renderHome(tabContent)
        }
    })
})
