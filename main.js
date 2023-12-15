var qoutes= [
    [`“To live is the rarest thing in the world. Most people exist, that is all.”`,`Oscar Wilde`],
    [`“The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.”`,`Bob Marley`],
    [`“Live as if you were to die tomorrow. Learn as if you were to live forever.”`,`Mahatma Gandhi`],
    [`“We accept the love we think we deserve.”`,`Stephen Chbosky`],
    [`“Without music, life would be a mistake.”`,`Friedrich Nietzsche`],
    [`“It is better to be hated for what you are than to be loved for what you are not.”`,`Andre Gide`],
    [`“All you need is love. But a little chocolate now and then doesn't hurt.”`,`Charles M. Schulz`],
    [`“To the well-organized mind, death is but the next great adventure.”`,`J.K. Rowling`],
    [`“Logic will get you from A to Z; imagination will get you everywhere.”`,`Albert Einstein`],
    [`“Whenever I feel the need to exercise, I lie down until it goes away.”`,`Paul Terry`]
]


var click = document.getElementById("start");
click.onclick = getQuote;


function getQuote() {

    var qouteIndex = Math.floor(Math.random()*10);

    document.getElementById("quote").innerHTML = qoutes[qouteIndex][0] ;
    document.getElementById("author").innerHTML = qoutes[qouteIndex][1];

 
    
}



