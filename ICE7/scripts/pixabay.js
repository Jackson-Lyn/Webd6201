console.log("pixabay.js loaded");

PIXABAY_KEY = '34297873-b92fb9416e0cead9858e0d0f0';

PIXABAY_URL = 'https://pixabay.com/api/?key=<KEY>&q=dramatic&landscape&image_type=photo&per_page=30';


const url = PIXABAY_URL.replace('<KEY>', PIXABAY_KEY);



const makePosts = () => {
    for(let j = 0; j < 20; j++){
       let id_no = j;
   
       let card = $('<div class="card blog"></div>')
       .attr("id", 'card-' + id_no)
       .appendTo($('.blog-column'));
    }
   };
   

makePosts();