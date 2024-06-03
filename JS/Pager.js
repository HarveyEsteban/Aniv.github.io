function hardship () {
    document.getElementById("avatar1").src = "img/argue.png";
    document.getElementById("avatar2").src = "img/mad.png";
    document.getElementById("title-desc").innerHTML = "Arguments/Fights";
    document.getElementById("img-side").style.display = "flex";
        
    document.getElementById("content").innerHTML = "Yes we have plenty of fights, arguments and misunderstandings, there are times that are communication is limited due to this events that are occuring, if you think about it we've face countless of obstacles and challenges, but at the end of the day we've manage to find ourselves with one another.";

    document.getElementById("avatar1").style.display = "flex";
    document.getElementById("avatar2").style.display = "flex";
    document.getElementById("description").style.display = "flex";
    document.getElementById("card").style.display = "none";
    document.getElementById("card2").style.display = "none";
}

function started () {
    document.getElementById("avatar1").src = "img/Started.png";
    document.getElementById("avatar2").src = "img/meWalk.png";
    document.getElementById("img-side").style.display = "flex";
    document.getElementById("title-desc").innerHTML = "How it Started";

    document.getElementById("content").innerHTML = "No one could expect that we would come a long way from where we started, as you said back then it all started with a simple act of giving me a lolipop, but for me it started, when you ask me to teach you how sql works, who would have thought that before u and me are strangers with nothing to talk about and now look how far we've come.";

    document.getElementById("avatar1").style.display = "flex";
    document.getElementById("avatar2").style.display = "flex";
    document.getElementById("description").style.display = "flex";
    document.getElementById("card").style.display = "none"
    document.getElementById("card2").style.display = "none";;
}


function present () {
    document.getElementById("avatar1").style.display = "none";
    document.getElementById("avatar2").style.display = "none";
    document.getElementById("description").style.display = "none";
    document.getElementById("img-side").style.display = "none";
    
    document.getElementById("card").style.display = "block";
    document.getElementById("card2").style.display = "block";

}