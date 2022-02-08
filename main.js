function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/CGZvQc9kD/model.json', modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}

if(error)
    {
        
        console.error(error);
    }

