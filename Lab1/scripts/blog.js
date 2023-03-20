/* 
 * File: blog.js
 * Author: Jackson lyn
 * Date: 03/19/2023
 * Description: Javascript for my blog page
 */


// check if js is loaded
console.log("Js check")


// Function to display each post
function displayPost(post) {
  // Create a div element for the post
  const Card = document.createElement("div");
  Card.classList.add("card", "col-lg-4", "col-md-6", "col-sm-12");

  // for the picture
  const imageElement = document.createElement("img");
  imageElement.src = post.imageURL;
  imageElement.alt = post.title;
  imageElement.classList.add("card-img-top");
  Card.appendChild(imageElement);

  // for the content
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  Card.appendChild(cardBody);

  // for the title
  const titleElement = document.createElement("h5");
  titleElement.textContent = post.title;
  titleElement.classList.add("card-title");
  cardBody.appendChild(titleElement);

  // For the date
  const dateElement = document.createElement("p");
  dateElement.textContent = post.date;
  dateElement.classList.add("card-text");
  cardBody.appendChild(dateElement);

  // For the author
  const authorElement = document.createElement("p");
  authorElement.textContent = post.author;
  authorElement.classList.add("card-text");
  cardBody.appendChild(authorElement);

  // the post's content
  const contentElement = document.createElement("p");
  contentElement.textContent = post.content;
  contentElement.classList.add("card-text");
  cardBody.appendChild(contentElement);

  // the post's category
  const categoryElement = document.createElement("p");
  categoryElement.textContent = post.category;
  categoryElement.classList.add("card-text");
  cardBody.appendChild(categoryElement);

  // adds the post card to the container on the page
  const container = document.getElementById("blog-container");
  container.appendChild(Card);
}

//function to fetch the posts and display them on the page
async function getAndDisplayPosts() {
  const response = await fetch(
    "https://pixabay.com/api/?key=34297873-b92fb9416e0cead9858e0d0f0&q=beautiful+landscape&image_type=photo&per_page=20"
  );
  const data = await response.json();
  const posts = data.hits.map((hit) => ({
    title: "Jackson's Post",
    imageURL: hit.webformatURL,
    content: "Part of my amazing photo collection",
    date: "March 17th, 2023",
    author: "Jackson"
  }));
  posts.forEach(displayPost);
}

// calling the function
getAndDisplayPosts();

