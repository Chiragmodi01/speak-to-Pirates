var btnTranslate = document.querySelector("#btn-translate");

var outputDiv = document.querySelector("#text-output");


var serverURL = "https://api.funtranslations.com/translate/pirate.json"


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}


function clickHandler() {
  var inputText = document.querySelector("#input-text");
    var text = inputText.value; // taking input

    // calling server for processing
    fetch(getTranslationURL(text))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; // output
           })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)