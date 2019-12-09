document.addEventListener("DOMContentLoaded",function() {
    var button = document.querySelector("#submit");
    var memes = document.querySelector(".memes");
    var form = document.querySelector("form");
    var inputImage = document.querySelectorAll("input")[0];
    var inputTop = document.querySelectorAll("input")[1];
    var inputBottom = document.querySelectorAll("input")[2];

    form.addEventListener("submit", function(event) {
        
      event.preventDefault();
        
      if (inputImage.value === "" )   {
        alert("Please enter an image url!");
      } else {
        var meme = document.createElement("div");
        meme.className = "meme";

        var imgDiv = document.createElement("div");
        var image = document.createElement("img");

        image["src"] = inputImage["value"];

        var topText = document.createElement("div");
        topText["innerText"] = inputTop["value"];
        topText.className = "textTop";

        var bottomText = document.createElement("div");
        bottomText["innerText"] = inputBottom["value"];
        bottomText.className = "textBottom";
        
        imgDiv.appendChild(image);
        meme.appendChild(imgDiv);
        meme.appendChild(topText);
        meme.appendChild(bottomText);

        reset();

        memes.appendChild(meme);

        meme.addEventListener("click", function(e) {
            this.parentNode.removeChild(this);
         });
        
    }
        
    });
   
    function reset() {
        var inputs = document.querySelectorAll("input");
        for (var i = 0; i < inputs.length; i++) {
            inputs[i]["value"] = ""
        }
        button.value = "Submit";
    }
    
})