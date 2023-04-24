import { MyBookmark } from "./myBookmark.js";
import { Favorite } from "./favorite.js";

// **************** variables ****************

// submit and cancel buttons
let submitButton = document.querySelector("#favorite-submit-button");
let cancelButton = document.querySelector("#favorite-cancel-button");

// favorites
let favorites = [];
favorites.push(new Favorite(crypto.randomUUID(), "RIT", "https://www.rit.edu", "A private university located new Rochester, NY"));

// input fields
let fields = document.querySelectorAll("input");

// number of favorites
let numFavs = favorites.length;
let numFavDisplay = document.querySelector("#num-favorites");
numFavDisplay.innerHTML = `Number of Favorites: ${numFavs}`;


// **************** functions ****************

// submit button function
const submitClicked = (evt) => {
  console.log("submit clicked");

  let newFav;
  let name = document.querySelector("#favorite-text");
  let url = document.querySelector("#favorite-url");
  let comments = document.querySelector("#favorite-comments");
  let error = document.querySelector("#error-message");

  console.log(`Name: ${name.value} URL: ${url.value} Comments: ${comments.value}`)

  if (name.value.trim() == "" || url.value.trim() == "" || comments.value.trim() == ""){
     error.innerHTML = "Fill required fields!!";
  }
  else{
    error.innerHTML = "";
    newFav = new Favorite(crypto.randomUUID(), name.value, url.value, comments.value);
    console.log(newFav);
    favorites.push(newFav);
    console.log(favorites);
    createBookmarkComponent(newFav.fid, newFav.text, newFav.url, newFav.comments);
  }

  // clearing form fields
  name.value = "";
  url.value = "";
  comments.value = "";

  // updating number of favorites
  numFavs = favorites.length;
  numFavDisplay.innerHTML = `Number of Favorites: ${numFavs}`;

  evt.preventDefault();
  return false;
}

// cancel button function
const clearFormFields = (evt) => {
  for (let f of fields){
    f.value = "";
  }

  let error = document.querySelector("#error-message");
  error.innerHTML = "";

  evt.preventDefault();

  return false;
}

// delete button function
const deleteFavorite = (fid) => {
  for (let f of favorites){
    if (f.fid == fid){
      // get the index of the favorite to delete
      let index = favorites.indexOf(f);

      // remove chosen favorite using splice; https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript
      favorites.splice(index, 1);
    }
  }

  // updating number of favorites
  numFavs = favorites.length;
  numFavDisplay.innerHTML = `Number of Favorites: ${numFavs}`;
}

// bookmark creation function
const createBookmarkComponent = (fid, text, url, comments) => {
  // make a new bookmark elements
  const bookmark = document.createElement("my-bookmark");

  // set attributes
  bookmark.dataset.fid = fid;
  bookmark.dataset.text = text;
  bookmark.dataset.url = url;
  bookmark.dataset.comments = comments;

  // set up callbacks
  bookmark.callback = deleteFavorite(fid);

  // add to bookmarks
  const newLI = document.createElement("li");
  newLI.appendChild(bookmark);
  document.querySelector("#bookmarks").appendChild(newLI);

}

// load in favorites
const loadFavoritesFromStorage = () => {
  for (let f of favorites){
    createBookmarkComponent(f.fid, f.text, f.url, f.comments);
  }
}

// **************** other stuff ****************

//load favorites
loadFavoritesFromStorage();

// calling submitClicked when submit button is called
submitButton.onclick = (e) => submitClicked(e);

// calling clearFormFields when cancel is clicked
cancelButton.onclick = (e) => clearFormFields(e);
/*
const bookmarks = [
    {
      text: "Bing",
      url: "https://www.bing.com",
      comments: "Bing is a web search engine owned and operated by Microsoft."
    },
    {
      text: "Google",
      url: "https://www.google.com",
      comments: "Google Search is a search engine provided and operated by Google."
    },
    {
      text: "DuckDuckGo",
      url: "https://duckduckgo.com/",
      comments: "DuckDuckGo (DDG) is an internet search engine that emphasizes protecting searchers' privacy."
    }
];

window.onload = () => {

    for (let b of bookmarks){
        // make the element
        const bookmark = document.createElement("my-bookmark");

        // populate the element using the array values
        bookmark.dataset.text = b.text;
        bookmark.dataset.url = b.url;
        bookmark.dataset.comments = b.comments;

        // add to list
        const newLI = document.createElement("li");
        newLI.appendChild(bookmark);
        document.querySelector("#bookmarks").appendChild(newLI);
    }

    // // Create a MyBookmark and add it to the list
    // const bing = document.createElement("my-bookmark");

    // // ANOTHER way to set custom attributes, the .dataset property
    // // note that these 2 lines of code will also trigger attributeChangedCallback()
    // bing.dataset.text = "Bing";
    // bing.dataset.url = "https://www.bing.com/";

    // const newLI = document.createElement("li");
    // newLI.appendChild(bing);
    // document.querySelector("#bookmarks").appendChild(newLI);
};
*/