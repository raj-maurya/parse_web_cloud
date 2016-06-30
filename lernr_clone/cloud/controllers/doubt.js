var _ = require('underscore');



var Issue = Parse.Object.extend('Issue');


exports.index = function(req, res){

var Issue = Parse.Object.extend("Issue");
    var query = new Parse.Query(Issue);
 //  query.descending('createdAt');
   // query.include("Course");
    query.include("course");
    query.include("subject");
   query.include("pUser");
   query.include("topic");
    //var tquery = new Parse.Query("Issue");
   // query.include("topic");
   // console.log("objectId", );
   //query.equalTo('issueId', parseInt(101));
  //var pointerset = new Parse.Object("Issue");
 

var p = req.param('id');

  // var myid = 101;
query.equalTo('issueId', parseInt(p));

    query.first(function(results){

            action = results;
//pointerset.set("Subject", subject);


console.log(results.id);
//query.equalTo('course', )
//console.log( results.get("file").url());
//console.log( results.get("course"));
//console.log( results.get("subject").get("name"));
//console.log( results.get("status"));
//var text = " ";
//text = results.get("issueId");
//////////////////////////////////////////////////////////////////////////////////////
var ListItem = Parse.Object.extend("Update");
var query = new Parse.Query(ListItem);
    query.include("pUser");
  query.descending('createdAt');
  query.find().then(function(results) {
    for (var i = 0; i < results.length; i++) {
                var object = results[i];
                console.log(object.id + ' - ' + object.get("pUser").get("username"));
    console.log("Then function");
    console.log(object.get("content"));
}
console.log(object.get("content"));
  },
  function() {
    res.send(500, 'Failed loading comments');
  });


//////////////////////////////////////////////////////////////////////////////////////  

var ListItem = Parse.Object.extend("Update");
            var squery = new Parse.Query(ListItem);
            squery.include("pUser");
            //query.include("User");
           // unitq.equalTo("project", cpObj);
          
            squery.descending("createdAt");
            squery.equalTo("type", "action");
           // console.log("Before function");

            squery.find(function(result){
                 for (var i = 0; i < result.length; i++) {
                object = result[i];

             //     console.log("Successfully retrieved " + object.length + " scores.");
               //   console.log(object.get("content")); 
                 //  console.log(object.get("file").url()); 
                  //console.log("Hello " +  object.get("pUser").get("username"));


}

        res.render('default', {
            text:results.get("issueId") , //"zoo", //req.param.('id'),
            content: results.get("content"),
            asker: results.get("pUser").get("name"),//results.get(" "),
            status:results.get("status"),//"zoo1",// results[0].get('status'),
            course: results.get("course").get("name"), //"zoo2", //results[0].get('title'),
            subject: results.get("subject").get("name"),//results.get("pUser").get("name"),//results.get("subject"),//"zoo3", //results[1].get('title'),
            topic: results.get("topic").get("name"),
            image:results.get("file").url(),
            content1: result[0].get("content"),
            asker1: result[0].get("pUser").get("name"),
            image1: result[0].get("file").url(),
          //   content1: result[1].get("content"),
          //  asker1: result[1].get("pUser").get("name"),
          //  image1: result[1].get("file").url()

        });  
                     
               }   
                ,
                 function(error) {
                    console.log(error);
                    console.log("Error function");
                });


/*query.equalTo('objectId', results.id);
query.find(function(result){

    console.log(result.get('course'));

});*/


     /*   res.render('default', {
            text:results.get("issueId") , //"zoo", //req.param.('id'),
            content: results.get("content"),
            asker: results.get("pUser").get("name"),//results.get(" "),
            status:results.get("status"),//"zoo1",// results[0].get('status'),
            course: results.get("course").get("name"), //"zoo2", //results[0].get('title'),
            subject: results.get("subject").get("name"),//results.get("pUser").get("name"),//results.get("subject"),//"zoo3", //results[1].get('title'),
            topic: results.get("topic").get("name"),
            image:results.get("file").url()

        }); */
    }, 
    function(){
        res.send(500, 'Failed  loading issue');
    });
};

//////////////////////////////////////////////
/*exports.index = function(req, res){
//var ListItem = Parse.Object.extend('Update');
 var ListItem = Parse.Object.extend("Update");
            var squery = new Parse.Query(ListItem);
           // unitq.equalTo("project", cpObj);
          squery.equalTo("type", "action");
            squery.descending("createdAt");
            console.log("Before function");
            squery.find(function(result){
                 for (var i = 0; i < result.length; i++) {
                object = result[i];

                  console.log("Successfully retrieved " + object.length + " scores.");
                  console.log(object.get("content")); 
                   console.log(object.get("file").url()); 
                  console.log("Hello");  
                     
               }   
                },
                 function(error) {
                    console.log(error);
                    console.log("Error function");
                });


 console.log("Out of success and Error function");
};*/




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
            text:"zoo", //req.param.('id'),
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





/*StatusEnum = {
    OPEN : 0,
    PROGRESS : 1,
    VERIFY : 3,
    CLOSE : 2
}

TypeEnum = {
    CLAIM : 0,
    ASSIGNED : 1,
    UNASSIGNED : 2,
    CLOSED : 3,
    COMMENT : 4,
    VERIFIED : 5,
    WORKING : 6,
    FINISHED : 7
}
var pair;
function getQueryVariable(id){
   var query = window.location.search.substring(1);
   var vars = query.split("?");
   for (var i=0;i<vars.length;i++) {
           pair = vars[i].split("=");
           if(pair[0] == id){return pair[1]}
   }
   return(false);
}

var issueNum;
var issueObj;
var timelineView = $('#timelineview');

function getDoubt(id){
    var GameScore = Parse.Object.extend("Issue");
    var query = new Parse.Query(GameScore);
    query.include("pUser");
    query.include("course");
    query.include("subject");
    query.include("topic");
    query.equalTo("issueId", parseInt(id));

    query.first({
      success: function(result) {
        issueObj=result;
        $('#ititle').html("<small>#"+issueObj.get("issueId")+"</small> "+issueObj.get("content"));
        if(issueObj.get("file")){
            $('#iimg').html("<img src="+issueObj.get("file").url()+" class='s-ws-top'>").slideDown();
        }
        else{
            $('#iimg').slideUp();
        }
        $('#iuname').html(issueObj.get("pUser").get("name")+"<small> asked</small>");
        if(issueObj.get("pUser").get("pic")){
            $('#iuimg').html("<img src="+issueObj.get("pUser").get("pic").url()+" class='circle-img'>");    
        }
        else{
            $('#iuimg').html('<i class="icon-user f-2x scolor2"></i>');
        }
        $('#itime').html(timeSince(issueObj.createdAt));
        $('#istatus').html(issueObj.get("status"));

        $('#cst').html(issueObj.get("subject").get("name")+"  |  "+issueObj.get("topic").get("name"));

        populateUpdates(issueObj);
        
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
function populateUpdates(issueObj) {
    //console.log("populateUpdates");
    timelineView.html("");
    ListItem = Parse.Object.extend("Update");
    query = new Parse.Query(ListItem);
    var pointer = new Parse.Object("Issue");
    pointer.id = issueObj.id;
    query.equalTo("issue", issueObj);
    query.include("pUser");
    query.ascending('createdAt');
    var uimg = null;
    query.find({
        success: function(results) {
            //console.log("Size:" + results.length);
            var d;
            var ago;
            var content;
            var user;
            var assignee;
            for (var i = 0; i < results.length; i++) {
                object = results[i];
                d = new Date(object.createdAt);
                ago = timeSince(d);
                if (object.get("content") != undefined) {
                    content = object.get("content");
                } else {
                    content = "";
                }
                user = object.get("pUser");
                if(user!=undefined){
                    // if (object.get("assignee") != undefined) {
                    //     assignee = object.get("assignee");
                    //     c//onsole.log("comments" + assignee.get("pUser"));
                    // } else {
                    //     assignee = "";
                    // }
                    var pphoto1;
                    if (user.get("pic") != undefined) {
                        pphoto1 = '<img src="'+user.get("pic").url()+'" class="circle-img profileimg">';
                    } else {
                        pphoto1 = '<i class="icon-user f-2x scolor2"></i>';
                    }
                    var align;

                    if(user.get("type")=="neta"){
                        align=" ";   
                    }
                    else{
                        align=" right";
                    }
                    uimg=object.get("file");
                    if(user.get("name")){
                        if(uimg){
                            timelineView.append('<div class="row"><div class="small-2 columns'+align+'">'+pphoto1+'</div><div class="small-10 columns"><div class="panel"><div class="s scolor">'+user.get("name")+'</div><div><img src="'+uimg.url()+'" class="fullwidth s-ws-bottom s-ws-top">'+object.get("content")+'</div></div></div></div>');
                        }
                        timelineView.append('<div class="row"><div class="small-2 columns'+align+'">'+pphoto1+'</div><div class="small-10 columns"><div class="panel"><div class="s scolor">'+user.get("name")+'</div><div>'+object.get("content")+'</div></div></div></div>');    
                    }
                    else{
                        if(uimg){
                            timelineView.append('<div class="row"><div class="small-2 columns'+align+'">'+pphoto1+'</div><div class="small-10 columns"><div class="panel"><div class="s scolor">'+user.get("name")+'</div><div><img src="'+uimg.url()+'" class="fullwidth s-ws-bottom s-ws-top">'+object.get("content")+'</div></div></div></div>');
                    
                        }
                        timelineView.append('<div class="row"><div class="small-2 columns'+align+'">'+pphoto1+'</div><div class="small-10 columns"><div class="panel"><div class="s scolor">'+user.get("name")+'</div><div>'+object.get("content")+'</div></div></div></div>');
                    
                    }
                    // if (object.get("typeCode") == TypeEnum.UNASSIGNED) {
                    //     console.log(assignee);
                    //     var ass = assignee.get("pUser");
                    //     timelineView.append("<div class='panel nb'><p><strong class='ct'>" + ass.get("name") + "</strong> was unassigned by <strong class='ct'>" + user.get("username") + "</strong> <small>" + ago + " ago</small></p></div>");
                    // }
                    // if (object.get("typeCode") == TypeEnum.ASSIGNED) {
                    //     var ass = assignee.get("pUser");
                    //     timelineView.append("<div class='panel nb'><p><strong class='ct'>" + ass.get("name") + "</strong> was assigned by <strong class='ct'>" + user.get("username") + "</strong> <small>" + ago + " ago</small></p></div>");
                    // }
                    // if (object.get("typeCode") == TypeEnum.CLOSED) {
                    //     timelineView.append("<div class='panel nb'><p><strong class='ct'>" + user.get("name") + "</strong> closed the issue <small>" + ago + " ago</small></p></div>");

                    // }
                    // if (object.get("typeCode") == TypeEnum.COMMENT) {
                    //     timelineView.append("<div class='row'><div class='small-2 columns wbg-fx wd-fx text-right'><img src='" + pphoto1 + "' class='circle-img'>"+user.get("username")+"</div><div class='small-10 columns'><div class='panel p-fx'><div class='panel-head'><strong class='ct'>" + user.get("username") + "</strong> commented <small>" + ago + " ago</small></div><p>" + content + "</p></div></div></div>");
                    // }
                    // if (object.get("typeCode") == TypeEnum.CLAIM) {
                    //     timelineView.append("<div class='panel nb'><p><strong class='ct'>" + user.get("name") + "</strong> claimed this issue <small>" + ago + " ago</small></p></div>");
                    // }
                    // if (object.get("typeCode") == TypeEnum.VERIFIED) {
                    //     timelineView.append("<div class='panel nb'><p><strong class='ct'>This issue was verified <small>" + ago + " ago</small></p></div>");
                    // }
                    // if (object.get("typeCode") == TypeEnum.WORKING) {
                    //     var ass = assignee.get("pUser");
                    //     timelineView.append("<div class='panel nb'><p><strong class='ct'>" + ass.get("name")+ "</strong> started working on this issue <small>" + ago + " ago</small></p></div>");
                    // }
                    // if (object.get("typeCode") == TypeEnum.FINISHED) {
                    //     var ass = assignee.get("pUser");
                    //     timelineView.append("<div class='panel nb'><p><strong class='ct'>" + ass.get("name") + "</strong> finished working on this issue <small>" + ago + " ago</small></p></div>");
                    // }
                }
            }
          //  NProgress.done();
           // console.log("NProgress Stop");

        },
        error: function(error) {
            console.log("Error: " + error.message);
            notify(standardErrorMessage, "error", standardErrorDuration);
        }
    });
}

function appropriateStatus(s) {
    if (s == StatusEnum.PROGRESS) {
        return "in progress";
    }
    if (s == StatusEnum.CLOSE) {
        return "solved <i class='icon-solved gc'></i>"
    }
    if (s == StatusEnum.OPEN) {
        return "open";
    }
    if (s == StatusEnum.VERIFY) {
        return "verified <i class='icon-solved gc'></i>"
    }
    return s;
}



function getIcon(category, status) {
    var myicon;
    if (category == "road") {
        if (status == StatusEnum.VERIFY || status == StatusEnum.CLOSE) {
            myicon = iconso[0];
        } else {
            myicon = icons[0];
        }
    } else if (category == "electricity") {
        if (status == StatusEnum.VERIFY || status == StatusEnum.CLOSE) {
            myicon = iconso[1];
        } else {
            myicon = icons[1];
        }
    } else if (category == "water") {
        if (status == StatusEnum.VERIFY || status == StatusEnum.CLOSE) {
            myicon = iconso[2];
        } else {
            myicon = icons[2];
        }
    } else if (category == "law") {
        if (status == StatusEnum.VERIFY || status == StatusEnum.CLOSE) {
            myicon = iconso[3];
        } else {
            myicon = icons[3];
        }
    } else if (category == "sanitation") {
        if (status == StatusEnum.VERIFY || status == StatusEnum.CLOSE) {
            myicon = iconso[4];
        } else {
            myicon = icons[4];
        }
    } else {
        if (status == StatusEnum.VERIFY || status == StatusEnum.CLOSE) {
            myicon = iconso[5];
        } else {
            myicon = icons[5];
        }
    }
    return myicon;
}
*/