const renderHeader = content => {
    

    const header = document.createElement("div")
    header.id = "header"

    const logo = document.createElement("img")
    logo.id = "logo"
    logo.src = "css/logo.png"
    logo.alt = "Golden Mountain Chinese Restarant"

    const name = document.createElement("h1")
    name.id = "name"
    name.textContent = "GOLDEN MOUNTAIN"

    const location = document.createElement("h2")
    location.id = "location"
    location.textContent = "Whistler, BC"

    const tabs = document.createElement("div")
    tabs.id = "tabs"

    const tabNames = ["HOME", "MENU", "CONTACT"]
    tabNames.forEach(name => {
        let tab = document.createElement("a")
        tab.href = "#"
        tab.classList.add("tab")
        if(name === "HOME"){
            tab.classList.add("active")
        }
        tab.id = name.toLowerCase()
        tab.textContent = name

        tabs.appendChild(tab)
    })

    header.appendChild(logo)
    header.appendChild(name)
    header.appendChild(location)
    header.appendChild(tabs)
    content.appendChild(header)
}

export default renderHeader