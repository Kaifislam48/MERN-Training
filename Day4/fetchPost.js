// fetching data from the server or api

async function fetchPosts(){
    let posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    //console.log(posts); // Output: Response {ok: true, status: 200, statusText: "OK", headers: Headers…}
    let data = await posts.json();
    console.log(data); 
}

fetchPosts();  // Output: Promise {[[PromiseStatus]]: "resolved", [[PromiseValue]]: Response}

 