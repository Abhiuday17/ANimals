function startClassification() {
navigator.mediaDevices.getUserMedia({audio:true})
classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/9NB8nVIRK/model.json" , modelLoaded)
}

function modelLoaded(){
    classifier.classify( gotResults)
}

function gotResults(error , results){

    if(error){
        console.log(error)
    }
    else{
        console.log(results)
        r = Math.floor(Math.random()*255)
        g =  Math.floor(Math.random()*255)
        b =  Math.floor(Math.random()*255)
        document.getElementById("result_label").style.color = "rgb(" + r + "," + g + "," + b + ")" 
        document.getElementById("result_confidence").style.color = "rgb(" + r + "," + g + "," + b + ")"
        var result = results[0].label;
        var confidence = results[0].confidence.toFixed(3) ; 


        document.getElementById("result_label").innerHTML = " I can hear " + result
        document.getElementById("result_confidence").innerHTML = " Accuracy " + confidence

        image = document.getElementById("image")
        if(result == "barking"){
            image.src = "dog img.jpg"
        }
        if(result == "meowing"){
            image.src = "cat.jpg"
        }
        if(result ==  "Background Noise"){
            image.src = "listen.gif"
        }
    }
}

