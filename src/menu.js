

const renderMenu = (tabDiv, menu) => {

    let requestURL = './menu.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = () => {
       const menu = request.response;
       const menuDivs = ["Soups", "Starters", "Fried Rice Dishes", "Chow Mein Dishes"]

        let page = document.createElement("div")
        page.id = "menu-page"
        page.classList.add("active", "page")

        for(let i = 0; i < menuDivs.length; i++){
            let section = document.createElement("div")
            
            let sectionName = document.createElement("h3")
            sectionName.classList.add("items")
            sectionName.textContent = menuDivs[i].toUpperCase()

            let table = document.createElement("table")

            for(let j = 0; j < menu[menuDivs[i]].length; j++){
                let row = document.createElement("tr")
                let item = menu[menuDivs[i]][j][0]
                let price = menu[menuDivs[i]][j][1]
                let arr = [item, price]
                arr.forEach(x => {
                    let td = document.createElement("td")
                    td.textContent = x
                    isNaN(x) ? td.classList.add("item") : td.classList.add("price")
                    row.appendChild(td)
                })
                table.appendChild(row)
            }

            section.appendChild(sectionName)
            section.appendChild(table)
            page.appendChild(section)
        } 

        tabDiv.appendChild(page)
    }

}

export default renderMenu