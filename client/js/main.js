// -- DETECT IF TOUCH IS ENABLED --
function is_touch_device(){
	if($("html").hasClass("no-touch")) {
		return false;
	} else {
		return true;
	}
}

$(function(){

  // EXAMPLE OF DYNAMIC PARTIAL LOADING
  // $.ajax({
  //      type: "GET",
  //      url: "data/colors.json",
  //      dataType: "json",
  //      success: function(data){
  //        console.log(data);
  //        var partialThing = HBS.partials.partial;
  //    var partialContent = $(partialThing(data));
  //    $(".theme-container").html(partialContent);
  //      },
  //      error: function (request, status, error) {
  //          console.log("error: " + error);
  //      }
  // });

});


	