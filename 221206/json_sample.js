fetch("https://morimorihoge.github.io/teu2022f/tweets.json")
    .then((response) => response.json())
    .then(
        function(json){
            let answerHtml = "";
            json.forEach(function(tweet){
                answerHtml += `<li><b>${tweet.name}</b>: <i>${tweet.message}</i> <i>${tweet.tweetedAt}</i></li>`;
            });
            document.querySelector("#answer").innerHTML = answerHtml
        }
    )
function all(){
    html = "";
    json.forEach(tweet);
    html += "";
    tweet.innerHTML = html;
}
function sabu() {
    html = "";
    for (let i = 0; i < tweet.length; i++) {
        if (tweet.name === "三郎BOT") {
            html += "<hr>"
            html += `<b>${tweet.name}</b><br> ${tweet.message}<br><i>${tweet.tweetedAt}</i>`;
        }
    }
    tweet.innerHTML = html;
}