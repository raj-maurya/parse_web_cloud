var _ = require('underscore');



var Issue = Parse.Object.extend('Issue');


/*exports.index = function(req, res){
	var query = new Parse.Query(Issue);
   query.descending('createdAt');
    query.include("course");
    query.include("subject");
    //var tquery = new Parse.Query("Issue");
   // query.include("topic");
   // console.log("objectId", );
    query.find().then(function(results){

// for testing logs on parse
  for (var i = 0; i < results.length; i++) {
                var object = results[i];
                console.log(object.id + ' - ' + object.get('status'));
    //             console.log(object.id + ' - ' + object.get('course'));
      //            console.log(object.id + ' - ' + object.get('subject'));
        //           console.log(object.id + ' - ' + object.get('topic'));
                //   console.log(object.id + ' - ' + object.get('file').url());
                //object.get('status');
            }



        res.render('default', {

            status: results[0].get('status'),
            course: results[0].get('title'),
            subject: results[1].get('title'),
            topic: "Hitler"
        });
    }, 
    function(){
        res.send(500, 'Failed  loading issue');
    });
};*/


/*
exports.index = function(req, res){
    var id = req.query.issueId;
    var issue = Parse.Object.extend('Issue');
    var query = new Parse.Query(issue);

    query.include("status");
     query.include("course") ;
    query.include("subject");
    query.include("topic");
    query.get(id, {
        success: function(results){
            var status;
            status = results.get('status');
            res.render('default', {
                status: status
            });
        },
        error: function(error){
            console.log(error);
        }
    });
};

*/
exports.hello = function(req, res){
    res.render('hello', {});

};

exports.landing = function(req, res){
    res.render('landing', {});

};

exports.post = function(req, res){
    res.render('post', {});

};
exports.privacy = function(req, res){
    res.render('privacy', {});

};

exports.tos = function(req, res){
    res.render('tos', {});

};
