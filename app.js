import axios from "axios";

async function getData(n) {
    try {
        const {data : users} = await axios("https://jsonplaceholder.typicode.com/users/" +n)
        const {data : posts} = await axios("https://jsonplaceholder.typicode.com/posts?id=" +n)

        console.log("USERS : ", users)
        console.log("POSTS : ", posts)
    }
    catch(e) {
        console.log(e)
    }
}


export default getData



