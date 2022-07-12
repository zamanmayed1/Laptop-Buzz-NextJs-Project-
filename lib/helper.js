// const url = "http://localhost:3000/api/posts"
// export default async function getPost(id) {
//     const res = await fetch(`${url}`)
//     const posts = await res.json()

//     if (id) {

//         return posts.find(value => value.id == id)
//     }
//     return posts;
// }


// -------------------------------------------------------------------------

const baseURL = "http://localhost:3000/api/posts";

export default async function getPost(id) {
    const res = await fetch(`${baseURL}`)
    const posts = await res.json()
    console.log( posts);
    if (id) {
        return posts.find(value => value.id == id)
    }

    else {
        return posts;
    }
}

// --------------------------------------------------------------
