const renderHome = pageDiv => {

    let page = document.createElement("div")
    page.id = "home-page"
    page.classList.add("active", "page")

    let title = document.createElement("h3")
    title.id = "home-title"
    title.textContent = "The Story of Golden Mountain"
    page.appendChild(title)

    let imageDiv = document.createElement("a")
    imageDiv.id = "imageDiv"
    let img = document.createElement("img")
    img.id = "image"
    img.src = "css/golden-mountain.jpg"
    img.alt = "Golden Mountain"
    imageDiv.appendChild(img)
    page.appendChild(imageDiv)

    let hometext = [
        "When gold was discovered in the lower Fraser Valley in 1857 and in the years that followed, tens of thousands of miners from around the world joined the gold rush. Amongst the hopefuls were a large group of Chinese from San Francisco who arrived in Victoria by boat in June 1858.",
        "Soon after, more Chinese came from California and directly from China, seeking riches both from digging gold and creating businesses that provided services to other miners. Even when the prosperous period of the gold rush ended in the 1860s and British Columbia faced adverse economic conditions, Chinese continued to migrate to what they called 'Gum San' – 'Golden Mountain' – a name they used for California, British Columbia and the Australian colonies.", 
        "Although the discovery of gold in these places sparked global gold rushes, the name Golden Mountain lasted long after the gold was gone, signifying for the Chinese the dream of wealth and a better life", 
        "The mostly male Chinese migrants often worked alongside and sometimes married into First Nations communities up the Fraser River and throughout British Columbia. They sought a better livelihood by building early industries such as market farming, logging, fishing and mining, and providing services through businesses such as general stores, cafés, laundries and restaurants. Bringing their authentic style of food, which became immensely popular with all.", 
        "The Golden Mountain restaurant stands here today because of recipes past down through generations. The Golden Mountain is the only Chinese restaurant in Whistler, BC and the only truly authentic one in the Sea 2 Sky corridor."
    ]
    for(let i =  0; i < hometext.length; i++){
        let text = document.createElement("p")
        text.id = "home-para"
        text.textContent = hometext[i]
        page.appendChild(text)
    }

    pageDiv.appendChild(page)
}

export default renderHome