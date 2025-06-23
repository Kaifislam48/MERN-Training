// fetching data from the server or api

async function fetchPosts(){
    let posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await posts.json();
    console.log(data); 

    let titles = data.map((obj) => {
        return obj.title;
    });

    let userinput = "sunt";
    const filterPost = titles.filter((title) => title.includes(userinput));
    filterPost.sort().reverse().map((title) => console.log(title));
}

fetchPosts();
