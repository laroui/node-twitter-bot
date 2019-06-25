var Twit = require('twit');

var T = new Twit({
	consumer_key: 'qfKt8TQisJv4kEbWrvqiLZuRR'
	, consumer_secret: '8On1e6fW3df4o1ZJPfaX34szjuXMFRiRfFpsGrL6v1iDDtln7t'
	, access_token: '1133723453251608579-VMsOaPmuaxBdW80JnneVyonOCaumaS'
	, access_token_secret: 'etVB4L7fmfWg5ABz0dFjiz4rxRy6vsJk7y370D94P2VWM'
});
function retweetRecent() {
	T.get('search/tweets', {q: "#coldfusion OR #cfml", result_type: "recent"}, function (err, data,response) {
		if (!err) {
			var retweetId = data.statuses[0].id_str;
			T.post('statuses/retweet/' + retweetId, { }, function (err, response) {
				if (response) {
					console.log('Retweeted Tweet ID: ' + retweetId);
				}
				if (err) {
					console.log('Retweet Error: ', err);
				}
			});
		} else {
			console.log('Search Error: ', err);
		}
	});
}

retweetRecent();
setInterval(retweetRecent, 1800000);