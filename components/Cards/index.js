// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


const insertCards = document.querySelector('.cards-container')
axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then (response => {
        console.log(response.data)

        const articlesObject= response.data.articles
        return articlesObject
    })
    .then (articles=> {
        const articlesObject = []
        const jsArticle = articles['javascript']
        articlesObject.push(jsArticle)
        const bsArticle = articles.bootstrap
        articlesObject.push(bsArticle)
        const jqueryArticle = articles.jquery
        articlesObject.push(jqueryArticle)
        const nodeArticle = articles.node
        articlesObject.push(nodeArticle)
        const techArticle = articles.technology
        articlesObject.push(techArticle)
        return articlesObject;
    })
    .then (articles=>{
        articles.forEach(newArticle => {
            newArticle.forEach(article => {
                insertCards.appendChild(cardComponent(article));
            });
            
        });
    })
    

function cardComponent(data) {
    const cardBody = document.createElement('div');
    const headline= document.createElement('div');
    const author = document.createElement('div');
    const imageDiv = document.createElement('div');
    const byAuthor = document.createElement('span');
    const image = document.createElement('img'); //make elements


    cardBody.appendChild(headline);
    cardBody.appendChild(author);
    author.appendChild(byAuthor);
    author.appendChild(imageDiv);
    imageDiv.appendChild(image);
    //append

    cardBody.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imageDiv.classList.add('img-container')//add classes

    image.src = data.authorPhoto
    headline.textContent = data.headline
    byAuthor.textContent = data.authorName
    //add content

    return cardBody;
}


