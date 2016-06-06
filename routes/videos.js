var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    //var collection = db.get('videos');
	var cursor = VideosGbl.find().sort({"title":1});
    cursor.exec(function(err, videos){
        if (err) throw err;
      	res.json(videos);
    });
});

router.post('/', function(req, res){
   //var collection = db.get('videos');
    var video = new VideosGbl({
		title: req.body.title,
		description: req.body.description
	});

	video.save(function(err, video) {
	  if (err) return console.error(err);
	  res.json(video);
	});
});

router.get('/:id', function(req, res) {
    //var collection = db.get('videos');
    VideosGbl.findOne({ _id: req.params.id }, function(err, video){
        if (err) throw err;

      	res.json(video);
    });
});

router.put('/:id', function(req, res){
    //var collection = db.get('videos');
    VideosGbl.update({
        _id: req.params.id
    },
    {
        title: req.body.title,
        description: req.body.description
    }, function(err, video){
        if (err) throw err;

        res.json(video);
    });
});

router.delete('/:id', function(req, res){
    //var collection = db.get('videos');
    VideosGbl.remove({ _id: req.params.id }, function(err, video){
        if (err) throw err;

        res.json(video);
    });
});

module.exports = router;