var Twit = require('twit');

var T = new Twit({
	consumer_key: 'qfKt8TQisJv4kEbWrvqiLZuRR'
	, consumer_secret: '8On1e6fW3df4o1ZJPfaX34szjuXMFRiRfFpsGrL6v1iDDtln7t'
	, access_token: '1133723453251608579-VMsOaPmuaxBdW80JnneVyonOCaumaS'
	, access_token_secret: 'etVB4L7fmfWg5ABz0dFjiz4rxRy6vsJk7y370D94P2VWM'
});

function retweetRecent() {
	T.get('search/tweets', {q: "#france OR #auto-entrepreneur OR #entrepreneur", result_type: "recent"}, function (err, data,response) {
		if (!err) {
			var tweet = data.statuses[0];
			var retweetBody = 'Gagnez des euros avec amazon https://amzn.to/2Yb4JBN RT @' + tweet.text;
			T.post('statuses/update',{status:retweetBody}, function (err,response) {
				if (response) {
					console.log('Quote Tweeted Tweet ID: ' + tweet.id_str);
				}
				if (err) {
					console.log('Quote Tweet Error: ', err);
				}
			});
		} else {
			console.log('Search Error: ', err);
		}
	});
}

retweetRecent();
setInterval(retweetRecent, 1800000);
