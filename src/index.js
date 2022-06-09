const fetchPostsBtn = document.querySelector(".btn");
const userList = document.querySelector(".posts");
const form = document.querySelector(".form");
const input = document.querySelector(".input");

fetchPostsBtn.addEventListener("click", () => {
    fetchPosts()
    .then((posts) => renderPosts(posts))
    .catch((error) => console.log(error));
});



function inputValue (e) {
    console.log(e.target.value);
    return e.target.value;
}

console.log(inputValue());
function fetchPosts() {
// Change the number of items in the group here  
    input.addEventListener("input", inputValue);
    return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${input.value}`).then(
    (response) => {
        if (!response.ok) {
        throw new Error(response.status);
        }
        return response.json();
    }
    );
}

function renderPosts(posts) {
    const markup = posts
    .map(({ id, title, body, userId }) => {
        return `<li>
            <h2 class="post-title">${title.slice(0, 30)}</h2>
            <p><b>Post id</b>: ${id}</p>
            <p><b>Author id</b>: ${userId}</p>
            <p class="post-body">${body}</p>
        </li>`;
    })
    .join("");
    userList.innerHTML = markup;
}