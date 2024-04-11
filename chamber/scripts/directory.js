const section = document.querySelector("#cards-div");
const url = "https://Zamarr0n.github.io/wdd230/chamber/data/members.json";

//async function to get the data:
async function getLink(){
    //fetching data 
    const respond = await fetch(url);
    //converting data to a json object:
    const data = await respond.json();
    //displaying the information:
    displayData(data.members);
}

const displayData = (data) => {
    data.forEach(element => {
        element.info.forEach(data => {
            //mapping data
            const name = data.name;
            const Gender = data.Gender;
            const Address = data.address;
            const Phone = data.phone;
            const url = data.url;
            const image = data.image;
            console.log(image)
            const membership = data.membership;
            //Creating elements to implement the data inside them.
            const div = document.createElement("div");
            const h1 = document.createElement("h1");
            const paragraph = document.createElement("p");
            const paragraph2 = document.createElement("p");
            const link = document.createElement("a");
            const portrait = document.createElement("img");
            const paragraph3 = document.createElement("p");
            const paragraph4 = document.createElement("p");
            //implementing the data with the objects created inside the html
            h1.textContent = name;
            paragraph.textContent = Gender;
            paragraph2.textContent = Address;
            paragraph3.textContent = Phone;
            paragraph4.textContent = membership;
            link.setAttribute("href", url);
            link.textContent = 'web-page';
            portrait.setAttribute("src", data.image);
            portrait.setAttribute("alt", "members image");
            portrait.setAttribute("width", '300');
            portrait.setAttribute("loading", 'lazy');
            portrait.setAttribute("height", '300');
            //apending the childs so evrything is inside the div
            div.appendChild(h1);
            div.appendChild(portrait);
            div.appendChild(paragraph);
            div.appendChild(paragraph2);
            div.appendChild(paragraph3);
            div.appendChild(link);
            div.appendChild(paragraph4);
            section.appendChild(div);
            div.classList.add("style");
        });
        
    });
}


getLink();

const hamButton = document.querySelector("#menu")
const navigation = document.querySelector(".navigation");
const visits = document.getElementById("visits")

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});



