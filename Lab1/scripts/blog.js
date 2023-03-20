console.log("Js check")


// Define a function to display each post
function displayPost(post) {
  // Create a div element for the post
  const Card = document.createElement("div");
  Card.classList.add("card", "col-lg-4", "col-md-6", "col-sm-12");

  // Add the post's image to the card
  const imageElement = document.createElement("img");
  imageElement.src = post.imageURL;
  imageElement.alt = post.title;
  imageElement.classList.add("card-img-top");
  Card.appendChild(imageElement);

  // Add the post's content to the card
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  Card.appendChild(cardBody);

  // Add the post's title to the card
  const titleElement = document.createElement("h5");
  titleElement.textContent = post.title;
  titleElement.classList.add("card-title");
  cardBody.appendChild(titleElement);

  // Add the post's date to the card
  const dateElement = document.createElement("p");
  dateElement.textContent = post.date;
  dateElement.classList.add("card-text");
  cardBody.appendChild(dateElement);

  // Add the post's author to the card
  const authorElement = document.createElement("p");
  authorElement.textContent = `By ${post.author}`;
  authorElement.classList.add("card-text");
  cardBody.appendChild(authorElement);

  // Add the post's content to the card
  const contentElement = document.createElement("p");
  contentElement.textContent = post.content;
  contentElement.classList.add("card-text");
  cardBody.appendChild(contentElement);

  // Add the post's category to the card
  const categoryElement = document.createElement("p");
  categoryElement.textContent = post.category;
  categoryElement.classList.add("card-text");
  cardBody.appendChild(categoryElement);

  // Add the post card to the container on the page
  const container = document.getElementById("blog-container");
  container.appendChild(Card);
}

// Define a function to fetch the posts and display them on the page
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

// Call the function to get and display the posts
getAndDisplayPosts();

