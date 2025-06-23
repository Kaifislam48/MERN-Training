let root=document.getElementById("root");

async function fetchData(){
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);

    // Extracting titles from the data
    const titles = data.map((item) => item.title);
    const urls = data.map((item) => item.url);
    // console.log(titles);
    // console.log(urls);

    //Displaying the titles and URLs in the HTML
    // titles.forEach((title, index) => {
    //     const titleElement = document.createElement("h3");
    //     titleElement.textContent = title;
    //     root.appendChild(titleElement);
    //     const imgElement = document.createElement("img");
    //     imgElement.src=urls[index];
    //     imgElement.alt=title;
    //     imgElement.style.width="200px";
    //     imgElement.style.height="100px";
    //     root.appendChild(imgElement);

    //     console.log(urls[index]);
    // }); 

    // for(let i=0; i<titles.length; i++){
    //     let h1=document.createElement("h1");
    //     h1.textContent=i+1+" "+titles[i];
    //     root.appendChild(h1);
    // }

    for(let i=0; i<data.length; i++){
        let h1=document.createElement("h1");
        h1.textContent=i + 1 + " " +data[i].title;
        root.appendChild(h1);
    }

}
fetchData();