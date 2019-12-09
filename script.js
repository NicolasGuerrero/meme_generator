document.addEventListener("DOMContentLoaded",function() {
    var button = document.querySelector("#submit");
    var memes = document.querySelector(".memes");
    var form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        var inputImage = document.querySelectorAll("input")[0];
        var inputTop = document.querySelectorAll("input")[1];
        var inputBottom = document.querySelectorAll("input")[2];
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
        topText.style.position = "absolute";
        topText.style.top = 0;
        topText.className = "textmeme";

        var bottomText = document.createElement("div");
        bottomText["innerText"] = inputBottom["value"];
        bottomText.style.position = "absolute";
        bottomText.style.bottom = 0;
        bottomText.className = "textmeme";

        imgDiv.appendChild(image);

        meme.appendChild(imgDiv);
        meme.appendChild(topText);
        meme.appendChild(bottomText);

        

        memes.appendChild(meme);

        reset();
        
    }
        
    }); 
    memes.addEventListener("mouseover", function() {
 
         if (event.target.className === "meme") {
             var memeTarget = event.target;
             var cancelButton = document.createElement("button");
             alert("hello");
            // memeTarget.remove();
             cancelButton.style.position = "absolute";
             cancelButton.right = 0;
             cancelButton.innerText = "Remove";
             event.target.appendChild(cancelButton);
             
             cancelButton.addEventListener("click", function() {
                 memeTarget.remove();
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