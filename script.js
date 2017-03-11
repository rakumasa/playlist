$(document).ready(function(){

  var localData = []; //Store all data from server locally

  $(".bin").css("fontsize", "2em");

  //Grab data from server
    $.getJSON('https://lit-fortress-6467.herokuapp.com/object').then(function(data){
      //Part1 create a local database (because I like this way)
      var allData = data.results;
      for (var i=0;i<allData.length;i++){
        var newObj = {
          id: allData[i].id,
          title: allData[i].title,
          artist: allData[i].artist,
          cover: allData[i].cover_art,
        }//end of newobj
        localData.push(newObj);
      } //end of for loop


      //Part2 Create a function for shuffle pictures
      var picArr = []; //["ghost_in_the_machine.jpg", "red.jpg", "the_division_bell.jpg", "thriller.jpg", "21.jpg"]
      for (var i=0;i<localData.length;i++){
          picArr.push(localData[i].cover);
      }// end of loop

      //Random sort the pics from picArr
      var randomSort = picArr.sort(function(a, b){return 0.5 - Math.random()});

      $('#pic1').append( '<img id="image01" src="images/' + randomSort[0] + '" height="210" width="210"> ' );

      $('#pic2').append( '<img id="image02" src="images/' + randomSort[1] + '" height="210" width="210"> ' );

      $('#pic3').append( '<img id="image03" src="images/' + randomSort[2] + '" height="210" width="210"> ' );


      //Part3 Appending all pictures to page 2
      for (var i=0;i<localData.length;i++){
        $("#col1").append('<img src="images/' + localData[i].cover+ '" height="100" width="100"> ');
      } //end of loop


      //Part4 Click pictures and show the artist and title in the bin

      $('#col1 img').click(function(){
          var getImg = $(this).attr("src"); //get src info
          var link = "images/";
          for (var i=0;i<localData.length;i++){
          if (getImg === link + localData[i].cover){
          $('.bin ul').append("<div>" + localData[i].artist + ": " + localData[i].title + "</div>");
          }
        } //end of loop
      }); //end of click


      //Part5 Click clear button and clear the bin
      $('#clear').click(function(){
          $('.bin ul').empty();
      }); //end of click

    }) //End of Ajax


      //Part6 Click submit button and post data
      $('#submit').click(function(){
        // $.ajax({
        //   type: "POST",
        //   url: 'https://lit-fortress-6467.herokuapp.com/post',
        //   data: $(".bin ul"),
        //   success: alert("Success"),
        //   dataType: $(".bin ul").html()
        // });
        $.post( 'https://lit-fortress-6467.herokuapp.com/post').done(function() {
          alert( "Success to connect to a server" );
          console.log( "Success to connect to a server" );
        })
        .fail(function() {
          alert( "Fail to connect to a server" );
          console.log( "Fail to connect to a server" );
        })
      }); //end of click

}); //End of Jquery





































// var $source = $.getJSON('https://lit-fortress-6467.herokuapp.com/object');
//
// $source.done(function(data) {
//     if ($source.status !== 200) {
//         return;
//     }
//
//     for (var i=0;i<data.results.length;i++){
//       //variable for all list
//       // $("#kind ul").append('<li id=' + data.results[i].["id"] + '></li>');
//
//
// // "<li id=" + data.results[i].["id"] + ">"Hello"</li>"
// // + " title=" + data.results[i].["title"] + " artist=" +  data.results[i].["artist"] + " pic=" + data.results[i].["cover_art"] + ">";
//
//       var picLink = data.results[i]["cover_art"];//access to pics link
//
//       //For second page
//       var title = data.results[i]["title"]; //access to titles
//
//       var artist = data.results[i]["artist"]; //access to artist
//
//
//       $("#cdCover ul").append( '<img src="images/' + picLink + '" height="150" width="150"> ' );
//       // console.log(pic)
//
//
//   } //End of for loop
//
//   //Click first pic and input the Artist and title to the bin
//   $('#cdCover ul img').eq(0).click(function(){
//     console.log("Hello");
//   });
//   //Click second pic and input the Artist and title to the bin
//   $('#cdCover ul img').eq(1).click(function(){
//     console.log("ello");
//   });
//   //Click third pic and input the Artist and title to the bin
//   $('#cdCover ul img').eq(2).click(function(){
//     console.log("llo");
//   });
//   //Click forth pic and input the Artist and title to the bin
//   $('#cdCover ul img').eq(3).click(function(){
//     console.log("lo");
//   });
//   //Click fifth pic and input the Artist and title to the bin
//   $('#cdCover ul img').eq(4).click(function(){
//     console.log("o");
//   });
//
//
// }); //End of Ajax
//
//
//
// $source.fail(function(err) {
//     console.log(err);
// });
//
//
//
//
//
// }); //End of Jquery
