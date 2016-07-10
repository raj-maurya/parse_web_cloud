
var _ = require('underscore');



var Quest = Parse.Object.extend('Question');

exports.question = function(req, res){


    var Quest = Parse.Object.extend("Question");
    var query = new Parse.Query(Quest);

    var p = req.param('id');
    // query.ascending('createdAt');
    query.include("course");
    query.include("subject");
    query.include("topic");

  // var myid = 101;
query.equalTo('questionId', parseInt(p));
 query.first(function(results){
    questionObj= results;
    //console.log(results.get("questionPic").url());

    /////////////////////////////////////////Setting up the Number of Days 
var now = new Date();
var created_at= results.createdAt;
//console.log(results.id + results.createdAt + "Todays date" + d);
//console.log(d-d1);

var now_date = (now.getUTCMonth()+1) + "/" + now.getUTCDate() + "/" + now.getUTCFullYear();

var created_at_date = (created_at.getUTCMonth()+1) + "/" + created_at.getUTCDate() + "/" + created_at.getUTCFullYear();

//function parseDate(str) {
  //  var mdy = str.split('/')
    //return new Date(mdy[2], mdy[0]-1, mdy[1]);
//}

//function daydiff(first, second) {
  //  return (second-first)/(1000*60*60*24)
//}
var parse_d1 = now_date.split('/');
var parse_d1_return = new Date(parse_d1[2], parse_d1[0]-1, parse_d1[1]);
var parse_d2 = created_at_date.split('/');
var parse_d2_return = new Date(parse_d2[2], parse_d2[0]-1, parse_d2[1]);

//var dif_days = daydiff(parseDate(created_at_date), parseDate(now_date));
var dif_days = (parse_d1_return - parse_d2_return)/(1000*60*60*24);
console.log("DateDiffrence" + dif_days);
//////////////////////////////////Fetching options//////////////////////////
console.log(questionObj.id);

         ListItem = Parse.Object.extend("Options");
    oquery = new Parse.Query(ListItem);
     oquery.equalTo("question", questionObj);
    //query.include("pUser");
   oquery.ascending('createdAt');
   // oquery.include("course");
   // oquery.include("subject");
   // oquery.include("topic");
   // var uimg = null;


    oquery.find({
        success: function(result) {

             var aArray = ["A","B","C","D"];
            for (var i = 0; i < result.length; i++) {
                object = result[i];
                console.log(object.get("content"));
                console.log(aArray[i]);
                      
            }
            
     //   alert("Please download the NEET Prep App from Google Play store to know the Answer");
    







///////////////////////////////////////////////////////////////////////////

    res.render('question', { 
       text:p,
         itime:dif_days,
    content: results.get("content"),
    result:result,
     course: results.get("course").get("name"),
            subject: results.get("subject").get("name"),
            topic:results.get("topic").get("name"),
            results:results,
            url_id:p
            
   
    });




        },
        error: function(error) {
            console.log("Error: " + error.message);
            notify(standardErrorMessage, "error", standardErrorDuration);
        }
    });




    },

     function(){
        res.send(500, 'Failed  loading issue');
   
    });

};





/*var pair;
function getQueryVariable(id){
   var query = window.location.search.substring(1);
   var vars = query.split("?");
   for (var i=0;i<vars.length;i++) {
           pair = vars[i].split("=");
           if(pair[0] == id){return pair[1]}
   }
   return(false);
}

var qNum;
var qObj;
var timelineView = $('#timelineview');

function getQuestion(id){
    var GameScore = Parse.Object.extend("Question");
    var query = new Parse.Query(GameScore);
    query.include("pUser");
    query.include("course");
    query.include("subject");
    query.include("topic");
    query.equalTo("questionId", parseInt(id));

    query.first({
      success: function(result) {
        questionObj=result;
        $('#ititle').html("<small>#"+questionObj.get("questionId")+"</small> "+questionObj.get("content"));
        if(questionObj.get("file")){
            $('#iimg').html("<img src="+questionObj.get("file").url()+" class='s-ws-top'>").slideDown();
        }
        else{
            $('#iimg').slideUp();
        }
        if(questionObj.get("pUser")){
            $('#iuname').html(questionObj.get("pUser").get("name")+"<small> asked</small>");
            if(questionObj.get("pUser").get("pic")){
                $('#iuimg').html("<img src="+questionObj.get("pUser").get("pic").url()+" class='circle-img'>");    
            }
        }
        
        else{
            $('#iuimg').html('<i class="icon-user f-2x scolor2"></i>');
        }
        $('#itime').html(timeSince(questionObj.createdAt));
        $('#istatus').html(questionObj.get("status"));

        $('#cst').html(questionObj.get("subject").get("name")+"  |  "+questionObj.get("topic").get("name"));

        populateOptions(questionObj);
        
      },
      error: function(error) {
        notify("Error: " + error.code + " " + error.message,"alert",5);
      }
    });
}


function timeSince(date) {

    var seconds = Math.floor(Math.abs(new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}


function toTime(sec) {

    var seconds = Math.floor(Math.abs(sec) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}
// 
function populateOptions(questionObj) {
    //console.log("populateUpdates");
    timelineView.html(loaders);
    ListItem = Parse.Object.extend("Options");
    query = new Parse.Query(ListItem);
    query.equalTo("question", questionObj);
    //query.include("pUser");
    //query.ascending('createdAt');
    var uimg = null;
    query.find({
        success: function(results) {
            //console.log("Size:" + results.length);
            timelineView.html("");
            var d;
            var ago;
            var user;
            var assignee;
            var aArray = ["A","B","C","D"];
            for (var i = 0; i < results.length; i++) {
                object = results[i];
                d = new Date(object.createdAt);
                ago = timeSince(d);
                
                user = object.get("pUser");
                
                timelineView.append('<div class="panel opt"><div class="row"><div class="small-2 columns f-1-5x scolor2">'+aArray[i]+'</div><div class="small-2 columns"><input type="radio" name="options"></div><div class="small-8 columns scolor">'+object.get("content")+'</div></div></div>');    
                
            }
            $('.opt').click(function(){
        alert("Please download the NEET Prep App from Google Play store to know the Answer");
    });

        },
        error: function(error) {
            console.log("Error: " + error.message);
            notify(standardErrorMessage, "error", standardErrorDuration);
        }
    });

} */
