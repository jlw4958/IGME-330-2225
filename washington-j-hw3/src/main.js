import { MyBookmark } from "./myBookmark.js";

// submit button function
const submitClicked = (evt) => {
  console.log("submitClicked");
  evt.preventDefault();
  return false;
}

const clearFormFields = (evt) => {
  let fields = document.querySelectorAll("input");

  for (let f of fields){
    f.value = "";
  }

  evt.preventDefault();

  return false;
}

// calling submitClicked when submit button is called
let submitButton = document.querySelector("#favorite-submit-button");
submitButton.onclick = (e) => submitClicked(e);

// calling clearFormFields when cancel is clicked
let cancelButton = document.querySelector("#favorite-cancel-button");
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