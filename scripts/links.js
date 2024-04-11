const baseURL = "https://github.com/Zamarr0n/wdd230";

const linksURL = "https://Zamarr0n.github.io/wdd230/data/links.json"


async function getLinks(){
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

const list = document.getElementById("learning_activities_list");
const displayLinks = (weeks) => {
    weeks.forEach(weekData => {
        var section = document.createElement('div');
        var numWeek = document.createElement("li");

        const week = weekData.week;
        numWeek.textContent = `${weekData.week}: `;
        var linksContainer = document.createElement('div'); 
        weekData.links.forEach(link => {
            var linkContent = document.createElement("a"); 
            linkContent.setAttribute("href", `${link.url}`);
            linkContent.textContent = ` ${link.title}`;
            linkContent.classList.add("links")
            linksContainer.appendChild(linkContent);
            
        });
        numWeek.textContent = `${weekData.week}:`;
        section.appendChild(numWeek);
        section.appendChild(linksContainer); 
        list.appendChild(section);
    });
}

getLinks();
