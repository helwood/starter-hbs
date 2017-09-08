$(function(){

	$.ajax({
    	type: "GET",
    	url: "data/colors.json",
    	dataType: "json",
    	success: function(data){
    		console.log(data);
    		var partialThing = HBS.partials.partial;
			var partialContent = $(partialThing(data));
			$(".theme-container").html(partialContent);
    	},
    	error: function (request, status, error) {
        	console.log("error: " + error);
    	}
	});

	// var characterTemplate = $('#character-template').html();
	// 		var compiledCharacterTemplate = Handlebars.compile(characterTemplate);
	// 		// Can do the same with and AJAX response
	// 		$('.character-list-container').html(compiledCharacterTemplate(cast));

	// 		// NOT GOOD PRACTICE
	// 		$.ajax("./detailsPartial.html").done(function(detailsPartial){
	// 			$('body').append(detailsPartial);
	// 			Handlebars.registerPartial("characterDetailsPartial", $('#character-details-partial').html());
	// 		});
});