let url = "https://morimorihoge.github.io/teu2022f/tweets.json";

fetch(url)
    .then((response) => response.json())
    .then(
        function (json) {
            console.log("工事中です");
            let answerHtml = "";
            json.forEach(function (tweet) {
                answerHtml += `<li><b>${tweet.name}</b>: <i>${tweet.message}</i> <i>${tweet.tweetedAt}</i></li>`;
            });
            document.querySelector("#answer").innerHTML = answerHtml
        }
    )
function ALL() {
    fetch(url)
        .then((response) => response.json())
        .then(
            function (json) {
                console.log("ALL");
                let answerHtml = "";
                json.forEach(function (tweet) {
                    answerHtml += `<li><b>${tweet.name}</b>: <i>${tweet.message}</i> <i>${tweet.tweetedAt}</i></li>`;
                });
                document.querySelector("#answer").innerHTML = answerHtml
            }
        )
}
function Saburo() {
    fetch(url)
        .then((response) => response.json())
        .then(
            function (json) {
                console.log("Saburo");
                let answerHtml = "";
                console.log(json);
                console.log(json[0].name);
                json.forEach(function (tweet) {
                    console.log(tweet);
                    if (tweet.name === "三郎BOT") {
                        answerHtml += `<li><b>${tweet.name}</b>: <i>${tweet.message}</i> <i>${tweet.tweetedAt}</i></li>`;
                    }

                    document.querySelector("#answer").innerHTML = answerHtml;
                })
            }
        )
}
function Jiro() {
    fetch(url)
        .then((response) => response.json())
        .then(
            function (json) {
                console.log("Jiro");
                let answerHtml = "";
                console.log(json);
                console.log(json[0].name);
                json.forEach(function (tweet) {
                    console.log(tweet);
                    if (tweet.name === "次郎") {
                        answerHtml += `<li><b>${tweet.name}</b>: <i>${tweet.message}</i> <i>${tweet.tweetedAt}</i></li>`;
                    }
                    document.querySelector("#answer").innerHTML = answerHtml;
                })
            }
        )
}
function Taro() {
    fetch(url)
        .then((response) => response.json())
        .then(
            function (json) {
                console.log("Taro");
                let answerHtml = "";
                console.log(json);
                console.log(json[0].name);
                json.forEach(function (tweet) {
                    console.log(tweet);
                    if (tweet.name === "太郎") {
                        answerHtml += `<li><b>${tweet.name}</b>: <i>${tweet.message}</i> <i>${tweet.tweetedAt}</i></li>`;
                    }
                    document.querySelector("#answer").innerHTML = answerHtml;
                })
            }
        )
}



