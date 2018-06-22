// -- DETECT IF TOUCH IS ENABLED --
function is_touch_device(){
	if($("html").hasClass("no-touch")) {
		return false;
	} else {
		return true;
	}
}

$(function(){

	// $.ajax({
 //    	type: "GET",
 //    	url: "data/colors.json",
 //    	dataType: "json",
 //    	success: function(data){
 //    		console.log(data);
 //    		var partialThing = HBS.partials.partial;
	// 		var partialContent = $(partialThing(data));
	// 		$(".theme-container").html(partialContent);
 //    	},
 //    	error: function (request, status, error) {
 //        	console.log("error: " + error);
 //    	}
	// });

	// var characterTemplate = $('#character-template').html();
	// 		var compiledCharacterTemplate = Handlebars.compile(characterTemplate);
	// 		// Can do the same with and AJAX response
	// 		$('.character-list-container').html(compiledCharacterTemplate(cast));

	// 		// NOT GOOD PRACTICE
	// 		$.ajax("./detailsPartial.html").done(function(detailsPartial){
	// 			$('body').append(detailsPartial);
	// 			Handlebars.registerPartial("characterDetailsPartial", $('#character-details-partial').html());
	// 		});
  //APILink = 'http://pplws.lowes.com/CatalogServices/product/productid/v1_0?&productId=50208687&storeNumber=0595';
  // APILink = "https://www.lowes.com/wcs/resources/store/10151/cart/item/1000296717/services/v2_0?sn=6709";
  // APILink = whichURL + 'CatalogServices/product/productid/v1_0?productId=' + productId + '&storeNumber=0595&showReviews=1&priceFlag=status&showSpecs=1';
  // $.ajax ({
  //   url : APILink,
  //   headers: {
  //         'Authorization':'Basic QWRvYmU6ZW9pdWV3ZjA5ZmV3bw==',
  //     },
  //   success: function(result) {
  //     console.log(result);
      
  //   }
  // });


	//------ CATEGORY MENU -----
	if(is_touch_device()) {

		// ---- DEPT MENU ----
		var body = document.body,
			mask = document.createElement("div"),
			activeNav;
		
		mask.className = "mask";
		
		$('.toggle-dept-menu').click(function(){
			$(body).addClass('dept-menu-open');
			$(body).append(mask);
			activeNav = "dept-menu-open";
			$("html").css("overflow-y","hidden");
		});
		
		mask.addEventListener("click",function(){
			$(body).removeClass(activeNav);
			activeNav = "";
			body.removeChild(mask);
			$("html").removeAttr("style");
		});
		$('.close-dept-menu').click(function(){
			$(body).removeClass(activeNav);
			activeNav = "";
			body.removeChild(mask);
			$("html").removeAttr("style");
		});
	} else {
		$('.flyouts').hoverIntent( 
			function(){
				$('.flyout-overlay').removeClass('display-none');
				$('.cat-menu').addClass('cat-menu-shadow');
			}, function() {
				console.log("unhover");
				$('.flyout-overlay').addClass('display-none');
				$('.cat-menu').removeClass('cat-menu-shadow');
		});

		$('.js-departments-category').hoverIntent(
			function() {
				$(this).addClass('selected');
				if($(this).find('ul.flyout-menu')) {
					$(this).find('ul.flyout-menu').css('height',$('.cat-menu').height());
					$(this).find('ul.flyout-menu').css('display','block');
				}
			}, function() {
				$(this).removeClass('selected');
				if($(this).find('ul.flyout-menu')) {
					$(this).find('ul.flyout-menu').css('display','none');
				}
			});
		// var $deptMenu = $('.js-departments-menu'),
  //       	deptWidth = $('.lowes-menu').width(),
  //       	$currentCat;

  //       	$deptMenu.css('width', deptWidth);

		// $(document).on('mouseover','.js-departments-menu li[role="menuitemradio"]',function(){
		// 	var title = $(this).text().trim(),
		// 		links = [],
		// 		projects = [],
		// 		category,
		// 		cat_link,
		// 		project,
		// 		project_link;
			
		// 	$('.flyoutbox').remove();

		// 	$currentCat = $(this);

		// 	if(title != 'Shop All Departments') {
		// 		$('.flyoutbox').show();
		// 		var flyoutHeight = $('.js-departments-menu').height(),
		// 		flyoutWidth = deptWidth + 680;


		// 		$('.js-outer-depts-div').css('width', flyoutWidth).css('height', flyoutHeight);

		// 		$('.js-outer-depts-div').append('<div class="flyoutbox"></div>');
		// 		$('.flyoutbox').css('left',deptWidth);
		// 		$('.js-outer-depts-div').addClass('flyout-open');
		// 		$(this).addClass('active');
		// 		switch(title){
  //                   case 'Appliances':
  //                       var links = [{category: "Washers &amp; Dryers", cat_link: "/c/Washers-dryers-Appliances"},
  //                                    {category: "Refrigerators", cat_link: "/c/Refrigerators-Appliances"},
  //                                    {category: "Ranges", cat_link: "/c/Ranges-Appliances"},
  //                                    {category: "Dishwashers", cat_link: "/c/Dishwashers-Appliances"},
  //                                    {category: "Vacuum Cleaners &amp; Floor Care", cat_link: "/c/Vacuum-cleaners-floor-care-Appliances"},
  //                                    {category: "Freezers &amp; Ice Makers", cat_link: "/c/Freezers-ice-makers-Appliances"},
  //                                    {category: "Microwaves", cat_link: "/pl/Microwaves-Appliances/4294715798"},
  //                                    {category: "Small Appliances", cat_link: "/c/Small-appliances-Appliances"},
  //                                    {category: "French Door Refrigerators", cat_link: "/pl/French-door-refrigerators-Refrigerators-Appliances/4294857963"},
  //                                    {category: "Side-by-Side Refrigerators", cat_link: "/pl/Side-by-side-refrigerators-Refrigerators-Appliances/4294857970"},
  //                                    {category: "Humidifiers &amp; Dehumidifiers", cat_link: "/pl/Humidifiers-dehumidifiers-Heating-cooling/4294801322"}];
  //                       var projects = [{project: "Dishwasher Buying Guide", project_link: "/projects/kitchen-and-dining/dishwasher-buying-guide/project"},
  //                                    {project: "Range Buying Guide", project_link: "/projects/kitchen-and-dining/range-buying-guide/article"},
  //                                    {project: "Refrigerator Buying Guide", project_link: "/projects/kitchen-and-dining/refrigerator-buying-guide/project"},
  //                                    {project: "Washer Buying Guide", project_link: "/projects/kitchen-and-dining/washing-machine-buying-guide/project"},
  //                                    {project: "Professional Install", project_link: "/cd_Lowes+Installation+Services_296946035_?cm_sp=NoDivision-_-Home%7CM1-_-Content%7CInstallation_Services"}];
  //                       var shopAllLink = '/c/Appliances';
  //                       break;
  //                   case 'Bathroom':
  //                       var links = [{category: "Vanities &amp; Vanity Tops", cat_link: "/c/Bathroom-vanities-vanity-tops-Bathroom"},
  //                                    {category: "Bathtubs &amp; Whirlpool Tubs", cat_link: "/c/Bathtubs-whirlpool-tubs-Bathroom"},
  //                                    {category: "Toilets &amp; Toilet Seats", cat_link: "/c/Toilets-toilet-seats-Bathroom"},
  //                                    {category: "Showers &amp; Accessories", cat_link: "/c/Showers-shower-accessories-Bathroom"},
  //                                    {category: "Bathroom Faucets", cat_link: "/c/Bathroom-faucets-handles-Bathroom"},
  //                                    {category: "Bath Collections", cat_link: "/l/bathroom-ideas-collections.html"},
  //                                    {category: "Bathroom Storage", cat_link: "/c/Bathroom-storage-Bathroom"},
  //                                    {category: "Bathroom Sinks", cat_link: "/c/Bathroom-pedestal-sinks-Bathroom"},
  //                                    {category: "Showerheads &amp; Hand Showers", cat_link: "/pl/Showerheads-hand-showers-Showers-shower-accessories-Bathroom/4294737243"},
  //                                    {category: "Bathroom Lighting", cat_link: "/c/Bathroom-lighting-Lighting-ceiling-fans"},
  //                                    {category: "Bathroom Mirrors", cat_link: "/pl/Bathroom-mirrors-Bathroom/4294737205"}];
  //                       var projects = [{project: "Bath on a Budget", project_link: "/cd_When+to+Hire+a+Pro+for+Bathroom+Projects_1351703216554_"},
  //                                    {project: "Install a Pedestal Sink", project_link: "/projects/bed-and-bath/install-pedestal-sink/project"},
  //                                    {project: "Replace a Bathroom Faucet", project_link: "/cd_Lowe%27s+Video+Center_94400869_?ytID=-69Jhha_XBk"},
  //                                    {project: "Replace a Toilet", project_link: "/projects/bed-and-bath/replace-a-toilet/project"},
  //                                    {project: "Professional Install", project_link: "/cd_Lowes+Installation+Services_296946035_?cm_sp=NoDivision-_-Home%7CM1-_-Content%7CInstallation_Services"}];
  //                       var shopAllLink = '/c/Bathroom';
  //                       break;
  //                   case 'Building Supplies':
  //                       var links = [{category: 'Ceilings', cat_link: '/pl/Ceilings-Building-supplies/4294858304'},
  //                                   {category: 'Concrete &amp; Cement', cat_link: '/pl/Asphalt-concrete-masonry-Building-supplies/4294933809'},
  //                                   {category: 'Decking &amp; Porches', cat_link: '/c/Decking-porches-Building-supplies'},
  //                                   {category: 'Drywall', cat_link: '/pl/Drywall-Building-supplies/4294864808'},
  //                                   {category: 'Fencing &amp; Gates', cat_link: '/pl/Fencing-gates-Building-supplies/4294858178'},
  //                                   {category: 'Insulation &amp; Accessories', cat_link: '/pl/Insulation-accessories-Building-supplies/4294925567'},
  //                                   {category: 'Ladders &amp; Scaffolding', cat_link: '/c/Ladders-scaffolding-Tools'},
  //                                   {category: 'Lumber &amp; Composites', cat_link: '/pl/Lumber-Building-supplies/4294934154'},
  //                                   {category: 'Moulding &amp; Millwork', cat_link: '/c/Moulding-millwork'},
  //                                   {category: 'OSB Panels', cat_link: '/pl/Osb-Lumber-composites-Building-supplies/4294402495'},
  //                                   {category: 'Plywood Panels', cat_link: '/pl/Plywood-Lumber-composites-Building-supplies/4294402501'},
  //                                   {category: 'Roofing', cat_link: '/pl/Roofing-Building-supplies/4294934230'},
  //                                   {category: 'Stairs &amp; Railings', cat_link: '/c/Stairs-railings-Building-supplies'}];
  //                       var projects = [{project: 'Clean &amp; Repair Gutters', project_link: '/projects/repair-and-maintain/gutter-cleaning-and-repair/project'},
  //                                       {project: 'Install a Ridge Vent', project_link: '/projects/repair-and-maintain/install-a-ridge-vent/project'},
  //                                       {project: 'Install Vinyl Siding', project_link: '/projects/build-and-remodel/install-vinyl-siding/project'},
  //                                       {project: 'Patch &amp; Repair Drywall', project_link: '/projects/repair-and-maintain/patch-and-repair-drywall/project'},
  //                                       {project: 'Professional Install', project_link: '/cd_Lowes+Installation+Services_296946035_?cm_sp=NoDivision-_-Home%7CM1-_-Content%7CInstallation_Services'}];
  //                       var shopAllLink = '/c/Building-supplies';
  //                       break;
  //                   case 'Electrical':
  //                       var links = [{category: 'Conduit &amp; Conduit Fittings', cat_link: '/pl/Conduit-conduit-fittings-Electrical/4294653950'},
  //                                   {category: 'Cords &amp; Surge Protectors', cat_link: '/pl/Cords-surge-protectors-Electrical/4294542242'},
  //                                   {category: 'Doorbells', cat_link: '/pl/Doorbells-Electrical/4294710780'},
  //                                   {category: 'Electric Car Chargers', cat_link: '/pl/Electric-car-chargers-Car-chargers-Automotive/4294546190'},
  //                                   {category: 'Electrical Boxes &amp; Covers', cat_link: '/pl/Electrical-boxes-covers-Electrical/4294653960'},
  //                                   {category: 'Electrical Outlets &amp; Adapters', cat_link: '/c/Electrical-outlets-adapters-Electrical'},
  //                                   {category: 'Electrical Tools', cat_link: '/c/Electrical-testers-tools-Electrical'},
  //                                   {category: 'Electrical Wire &amp; Cable', cat_link: '/pl/Electrical-wire-cable-Electrical/4294722493'},
  //                                   {category: 'Generators', cat_link: '/c/Generators-Electrical'},
  //                                   {category: 'Home Automation &amp; Security', cat_link: '/pl/Home-automation-security-Electrical/4294719511'},
  //                                   {category: 'Light Switches &amp; Dimmers', cat_link: '/c/Light-switches-dimmers-Electrical'},
  //                                   {category: 'Load Centers &amp; Breakers', cat_link: '/pl/Circuit-breakers-load-centers-fuses-Electrical/4294722484'},
  //                                   {category: 'Wall Plates', cat_link: '/c/Wall-plates-Electrical'}];
  //                       var projects = [{project: 'Fuel Your Electric Car Effectively', project_link: '/cd_electric+car+charge_1336051552_'},
  //                                       {project: 'Install Light Dimmers', project_link: '/projects/build-and-remodel/install-a-dimmer-switch/project'},
  //                                       {project: 'Replace a Doorbell Button', project_link: '/projects/porch-deck-and-patio/replace-a-doorbell-button/project'},
  //                                       {project: 'Simple Electrical Projects', project_link: '/projects/build-and-remodel/change-a-light-fixture/project'},
  //                                       {project: 'Surge Protector Buying Guide', project_link: '/projects/repair-and-maintain/surge-protector-buying-guide/article'}];
  //                       var shopAllLink = '/c/Electrical';
  //                       break;
                    
  //                   case 'Flooring':
  //                       var links = [{category: 'Area Rugs &amp; Mats', cat_link: '/c/Area-rugs-mats-Home-decor'},
  //                                   {category: 'Bamboo Flooring', cat_link: '/pl/Hardwood-flooring-Hardwood-flooring-accessories-Flooring/4294856493'},
  //                                   {category: 'Carpet Tile', cat_link: '/pl/Carpet-tile-Carpet-carpet-tile-Flooring/4294742218'},
  //                                   {category: 'Carpet', cat_link: '/c/Carpet-carpet-tile-Flooring'},
  //                                   {category: 'Cork Flooring', cat_link: '/pl/Hardwood-flooring-Hardwood-flooring-accessories-Flooring/4294856493'},
  //                                   {category: 'Floor Moulding', cat_link: '/pl/Floor-moulding-Floor-moulding-trim-Moulding-millwork/4294417445'},
  //                                   {category: 'Garage Vinyl Tile', cat_link: '/pl/Garage-floor-tile-Garage-flooring-Flooring/4294642653'},
  //                                   {category: 'Grout &amp; Mortar', cat_link: '/c/Grout-mortar-Flooring'},
  //                                   {category: 'Hardwood', cat_link: '/c/Hardwood-flooring-accessories-Flooring'},
  //                                   {category: 'Laminate', cat_link: '/c/Laminate-flooring-accessories-Flooring'},
  //                                   {category: 'Tile', cat_link: '/c/Tile-tile-accessories-Flooring'},
  //                                   {category: 'Underfloor Heating', cat_link: '/pl/Underfloor-heating-Flooring/4294856527'},
  //                                   {category: 'Vinyl', cat_link: '/c/Vinyl-flooring-Flooring'}];
  //                       var projects = [{project: 'Carpet vs. Hardwood', project_link: '/projects/build-and-remodel/guide-to-the-perfect-floor/article'},
  //                                       {project: 'Flooring Buying Guide', project_link: '/projects/build-and-remodel/flooring-buying-guide/project'},
  //                                       {project: 'Flooring Installation', project_link: '/cd_Flooring+Install_537821279_'},
  //                                       {project: 'Refinish a Hardwood Floor', project_link: '/projects/build-and-remodel/refinish-a-hardwood-floor/project'},
  //                                       {project: 'Professional Install', project_link: '/cd_Lowes+Installation+Services_296946035_?cm_sp=NoDivision-_-Home%7CM1-_-Content%7CInstallation_Services'}];
  //                       var shopAllLink = '/c/Flooring';
  //                       break;
  //                   case 'Hardware':
  //                       var links = [{category: 'Cabinet Hardware', cat_link: '/c/Cabinet-hardware-Hardware'},
  //                                   {category: 'Chains, Ropes &amp; Tie-Downs', cat_link: '/pl/Chains-ropes-tie-downs-Hardware/4294934403'},
  //                                   {category: 'Door Hardware', cat_link: '/c/Door-hardware-Hardware'},
  //                                   {category: 'Fasteners', cat_link: '/c/Fasteners-Hardware'},
  //                                   {category: 'Gate Hardware', cat_link: '/pl/Gate-hardware-Hardware/4294856551'},
  //                                   {category: 'Household Batteries', cat_link: '/pl/Household-batteries-Batteries-Electrical/4294713145'},
  //                                   {category: 'Mailboxes', cat_link: '/c/Mailboxes-mailbox-posts-Hardware'},
  //                                   {category: 'Padlocks', cat_link: '/pl/Padlocks-Locks-Hardware/4294400563'},
  //                                   {category: 'Safes', cat_link: '/pl/Safes-Hardware/4294806353'},
  //                                   {category: 'Screws', cat_link: '/c/Screws-Fasteners-Hardware'},
  //                                   {category: 'Structural Hardware', cat_link: '/pl/Structural-hardware-Hardware/4294711043'},
  //                                   {category: 'Trailers &amp; Ramps', cat_link: '/pl/Trailers-ramps-Automotive/4294641564'},
  //                                   {category: 'Truck Boxes', cat_link: '/pl/Truck-tool-boxes-Automotive/4294607866'}];
  //                       var projects = [{project: 'Cabinet Storage Buying Guide', project_link: '/projects/kitchen-and-dining/cabinet-accessory-buying-guide/project'},
  //                                       {project: 'Hardware Buying Guide', project_link: '/projects/kitchen-and-dining/cabinet-hardware-buying-guide/article'},
  //                                       {project: 'Kitchen Cabinet Face-Lift', project_link: '/projects/kitchen-and-dining/refinish-clean-kitchen-cabinets/project'}];
  //                       var shopAllLink = '/c/Hardware';
  //                       break;
  //                   case 'Heating & Cooling':
  //                       var links = [{category: 'Air Conditioners &amp; Fans', cat_link: '/c/Air-conditioners-fans-Heating-cooling'},
  //                                   {category: 'Air Filters', cat_link: '/c/Air-filters-Heating-cooling'},
  //                                   {category: 'Air Purifiers &amp; Accessories', cat_link: '/pl/Air-purifiers-accessories-Heating-cooling/4294856705'},
  //                                   {category: 'Baseboard Heaters', cat_link: '/pl/Baseboard-heaters-accessories-Heating-cooling/4294765325'},
  //                                   {category: 'Dehumidifiers &amp; Humidifiers', cat_link: '/c/Humidifiers-dehumidifiers-Heating-cooling'},
  //                                   {category: 'Fire Pits &amp; Patio Heaters', cat_link: '/c/Fire-pits-patio-heaters-Outdoors'},
  //                                   {category: 'Fireplaces &amp; Stoves', cat_link: '/c/Fireplaces-stoves-Heating-cooling'},
  //                                   {category: 'HVAC Duct &amp; Fittings', cat_link: '/pl/HVAC-duct-fittings-Heating-cooling/4294512241'},
  //                                   {category: 'Portable Air Conditioners', cat_link: '/pl/Room-air-conditioners-Air-conditioners-fans-Heating-cooling/4294749561?goToProdList=true&refinement=4294835907'},
  //                                   {category: 'Portable Fans', cat_link: '/pl/Portable-fans-Air-conditioners-fans-Heating-cooling/4294856700'},
  //                                   {category: 'Registers &amp; Grilles', cat_link: '/c/Registers-grilles-Heating-cooling'},
  //                                   {category: 'Space Heaters', cat_link: '/pl/Space-kerosene-heaters-Heating-cooling/4294765336'},
  //                                   {category: 'Thermostats', cat_link: '/c/Thermostats-Heating-cooling'}];
  //                       var projects = [{project: 'Build an Outdoor Fire Pit', project_link: '/projects/gardening-and-outdoor/build-a-fire-pit/project'},
  //                                   {project: 'Dehumidifier Buying Guide', project_link: '/projects/utility-and-storage/dehumidifier-buying-guide/article'},
  //                                   {project: 'Thermostat Buying Guide', project_link: '/projects/repair-and-maintain/selecting-the-right-thermostat-for-your-home/article'},
  //                                   {project: 'Window Air Conditioner Buying Guide', project_link: '/projects/utility-and-storage/air-conditioner-buying-guide/article'},
  //                                   {project: 'Professional Installation', project_link: '/cd_Lowes+Installation+Services_296946035_?cm_sp=NoDivision-_-Home%7CM1-_-Content%7CInstallation_Services'}];
  //                       var shopAllLink = '/c/Heating-cooling';
  //                       break;
  //                   case 'Smart Home & Security':
  //                       var links = [{category: 'App Controlled', cat_link: '/pl/App-controlled/4294416634'},
  //                                   {category: 'Connected Detectors &amp; Alarms', cat_link: '/pl/Connected-smoke-and-co-detectors/4294416638'},
  //                                   {category: 'Connected Door Locksets', cat_link: '/pl/Connected-door-locksets-and-openers/4294416635'},
  //                                   {category: 'Connected Energy Management', cat_link: '/pl/Shop-all-connected-energy-management/4294416494'},
  //                                   {category: 'Connected Outlets and Switches', cat_link: '/pl/Connected-outlets-switches-and-plugs/4294416401'},
  //                                   {category: 'Connected Safety &amp; Security', cat_link: '/pl/Shop-all-connected-safety-and-security/4294416640'},
  //                                   {category: 'Connected Security Cameras', cat_link: '/pl/Connected-security-cameras/4294416636'},
  //                                   {category: 'Connected Thermostats', cat_link: '/pl/Connected-thermostats/4294416492'},
  //                                   {category: 'Home Automation &amp; Security', cat_link: '/pl/Home-automation-security-Electrical/4294719511'},
  //                                   {category: 'Iris by Lowe\'s', cat_link: 'https://www.irisbylowes.com/'},
  //                                   {category: 'Motion Sensors &amp; Detectors', cat_link: '/pl/Motion-sensors-detectors-Home-automation-security-Electrical/4294546224'},
  //                                   {category: 'Security &amp; Surveillance Cameras', cat_link: '/pl/Security-surveillance-cameras-Home-automation-security-Electrical/4294546213'},
  //                                   {category: 'Works With Apple Home Kit', cat_link: '/pl/Works-with-apple-homekit/4294416642'},
  //                                   {category: 'Works With Nest', cat_link: '/pl/Works-with-nest/4294416644'}];
  //                       var projects = [{project: 'Install a Smoke &amp; CO Alarm', project_link: '/projects/utility-and-storage/install-a-carbon-monoxide-alarm-and-smoke-detector/project'},
  //                                   {project: 'Make Your Home More Secure', project_link: '/projects/other-areas/make-your-home-more-secure/project'},
  //                                   {project: 'What Is Home Automation?', project_link: '/projects/other-activities/what-is-home-automation/project'},
  //                                   {project: 'Which System Is Right for You?', project_link: '/projects/other-activities/home-automation-quiz/article'}];
  //                       var shopAllLink = '/l/smart-home.html';
  //                       break;
  //                   case 'Home Decor':
  //                       var links = [{category: 'Area Rugs &amp; Mats', cat_link: '/c/Area-rugs-mats-Home-decor'},
  //                                   {category: 'Blinds &amp; Shades', cat_link: '/c/Blinds-window-shades-Blinds-window-treatments-Home-decor'},
  //                                   {category: 'Clocks', cat_link: '/pl/Clocks-Home-decor/4294417366'},
  //                                   {category: 'Curtain Rods &amp; Hardware', cat_link: '/pl/Curtain-rods-hardware-Blinds-window-treatments-Home-decor/4294800140'},
  //                                   {category: 'Curtains &amp; Drapes', cat_link: '/c/Curtains-drapes-Blinds-window-treatments-Home-decor'},
  //                                   {category: 'Door Mats', cat_link: '/pl/Door-mats-Area-rugs-mats-Home-decor/4294856893'},
  //                                   {category: 'Furniture', cat_link: '/c/Furniture-Home-decor'},
  //                                   {category: 'Interior Shutters', cat_link: '/pl/Interior-shutters-Window-treatments-Home-decor/4294830396'},
  //                                   {category: 'Lamps', cat_link: '/c/Lamps-lamp-shades-Lighting-ceiling-fans'},
  //                                   {category: 'Mirrors &amp; Accessories', cat_link: '/pl/Mirrors-mirror-accessories-Home-decor/4294856763'},
  //                                   {category: 'Valances', cat_link: '/pl/Valances-Blinds-window-treatments-Home-decor/4294398488'},
  //                                   {category: 'Wall Art', cat_link: '/pl/Wall-art-Home-decor/4294715775'},
  //                                   {category: 'Wallpaper', cat_link: '/pl/Wallpaper-Wallpaper-borders-Home-decor/4294929280'}];
  //                       var projects = [{project: 'How to Choose an Area Rug', project_link: '/projects/decorate-and-entertain/area-rug-buying-guide/project'},
  //                                   {project: 'Make a Small Room Larger', project_link: '/projects/other-activities/make-small-room-look-larger/project'},
  //                                   {project: 'Window Treatments Buying Guide', project_link: '/projects/decorate-and-entertain/window-treatments-bg/project'},
  //                                   {project: 'Professional Install', project_link: '/cd_Lowes+Installation+Services_296946035_'}];
  //                       var shopAllLink = '/c/Home-decor';
  //                       break;
  //                   case 'Kitchen':
  //                       var links = [{category: 'Backsplashes', cat_link: '/pl/Backsplash-panels-Kitchen/4294395588'},
  //                                   {category: 'Countertops &amp; Accessories', cat_link: '/c/Kitchen-countertops-accessories-Kitchen'},
  //                                   {category: 'Dining &amp; Kitchen Furniture', cat_link: '/pl/Dining-kitchen-furniture-Furniture-Home-decor/4294769483'},
  //                                   {category: 'Garbage Disposals', cat_link: '/pl/Garbage-disposals-Appliances/4294639585'},
  //                                   {category: 'Kitchen &amp; Bar Faucets', cat_link: '/c/Kitchen-bar-faucets-Kitchen'},
  //                                   {category: 'Kitchen &amp; Bar Sinks', cat_link: '/c/Kitchen-bar-sinks-Kitchen'},
  //                                   {category: 'Kitchen Cabinetry', cat_link: '/c/Kitchen-cabinetry-Kitchen'},
  //                                   {category: 'Kitchen Lighting', cat_link: '/c/Under-cabinet-lighting-Lighting-ceiling-fans'},
  //                                   {category: 'Kitchen Storage &amp; Organization', cat_link: '/c/Kitchen-organization-Storage-organization'},
  //                                   {category: 'Tile, Stone &amp; Accessories', cat_link: '/c/Tile-tile-accessories-Flooring'}];
  //                       var projects = [{project: 'Countertop Shopping Guide', project_link: '/creative-ideas'},
  //                                   {project: 'Garbage Disposal Installation', project_link: '/cd_Garbage+Disposal+Install_961252675_'},
  //                                   {project: 'Install a New Kitchen Sink', project_link: '/cd_Lowes+Video+Center_94400869_?ytID=awEi4xoScn0'},
  //                                   {project: 'Kitchen Cabinet Buying Guide', project_link: '/projects/kitchen-and-dining/kitchen-cabinet-buying-guide/project'},
  //                                   {project: 'Professional Install', project_link: '/cd_Lowes+Installation+Services_296946035_?cm_sp=NoDivision-_-Home%7CM1-_-Content%7CInstallation_Services'}];
  //                       var shopAllLink = '/c/Kitchen';
  //                       break;
  //                   case 'Lighting & Ceiling Fans':
  //                       var links = [{category: 'Bathroom Lighting', cat_link: '/c/Bathroom-lighting-Lighting-ceiling-fans'},
  //                                   {category: 'Ceiling Fans', cat_link: '/pl/Ceiling-fans-Ceiling-fans-accessories-Lighting-ceiling-fans/4294395604'},
  //                                   {category: 'Flush Mount Lighting ', cat_link: '/pl/Flush-mount-lighting-Lighting-ceiling-fans/4294566040'},
  //                                   {category: 'Hanging Lights', cat_link: '/c/Hanging-lights-Lighting-ceiling-fans'},
  //                                   {category: 'Lamps &amp; Lamp Shades', cat_link: '/c/Lamps-lamp-shades-Lighting-ceiling-fans'},
  //                                   {category: 'Landscape Lighting', cat_link: '/c/Landscape-lights-kits-Outdoor-lighting-Lighting-ceiling-fans'},
  //                                   {category: 'Light Bulbs', cat_link: '/c/Light-bulbs-Lighting-ceiling-fans'},
  //                                   {category: 'Outdoor Lighting', cat_link: '/c/Outdoor-lighting-Lighting-ceiling-fans'},
  //                                   {category: 'Recessed Lighting', cat_link: '/c/Recessed-lighting-Lighting-ceiling-fans'},
  //                                   {category: 'Security &amp; Flood Lights', cat_link: '/pl/Security-flood-lights-Outdoor-lighting-Lighting-ceiling-fans/4294798225'},
  //                                   {category: 'Track Lighting', cat_link: '/c/Track-lighting-Lighting-ceiling-fans'},
  //                                   {category: 'Under Cabinet Lighting', cat_link: '/c/Under-cabinet-lighting-Lighting-ceiling-fans'},
  //                                   {category: 'Wall Sconces', cat_link: '/pl/Wall-sconces-Lighting-ceiling-fans/4294857043'}];
  //                       var projects = [{project: 'Choose &amp; Install Landscape Lighting', project_link: '/projects/gardening-and-outdoor/outdoor-lighting-buying-guide/project'},
  //                                   {project: 'How to Install a Ceiling Fan', project_link: 'http://youtube.googleapis.com/v/BlMM3rZN0ac?cm_sp=Lighting-_-LightingFans|PopularCat-_-Merch|How_To_Install_A_Ceiling_Fan_Masthead_Video'},
  //                                   {project: 'How to Install Outdoor Lighting', project_link: '/projects/lawn-and-garden/install-landscape-lighting/project'},
  //                                   {project: 'Interior Lighting Ideas', project_link: '/projects/decorate-and-entertain/interior-lighting-ideas/article'},
  //                                   {project: 'Professional Install', project_link: '/cd_Lowes+Installation+Services_296946035_?cm_sp=NoDivision-_-Home%7CM1-_-Content%7CInstallation_Services'}];
  //                       var shopAllLink = '/c/Ceiling-fans-accessories-Lighting-ceiling-fans';
  //                       break;
  //                   case 'Outdoors':
  //                       var links = [{category: 'Fire Pits &amp; Patio Heaters', cat_link: '/c/Fire-pits-patio-heaters-Outdoors'},
  //                                   {category: 'Generators', cat_link: '/c/Generators-Electrical'},
  //                                   {category: 'Grills &amp; Outdoor Cooking', cat_link: '/c/Grills-outdoor-cooking-Outdoors'},
  //                                   {category: 'Mulch, Rock &amp; Soil', cat_link: '/pl/Mulch-rock-soil-Outdoors/4294612794'},
  //                                   {category: 'Outdoor Tools &amp; Equipment', cat_link: '/c/Outdoor-tools-equipment-Outdoors'},
  //                                   {category: 'Patio Furniture', cat_link: '/c/Patio-furniture-Outdoors'},
  //                                   {category: 'Patio Pavers &amp; Retaining Walls', cat_link: '/c/Pavers-retaining-walls-Outdoors'},
  //                                   {category: 'Plants &amp; Planters', cat_link: '/c/Plants-planters-Outdoors'},
  //                                   {category: 'Pressure Washers', cat_link: '/c/Pressure-washers-Outdoor-tools-equipment-Outdoors'},
  //                                   {category: 'Push Lawn Mowers', cat_link: '/pl/Push-lawn-mowers-Lawn-mowers-Outdoor-tools-equipment-Outdoors/4294612707'},
  //                                   {category: 'Riding Lawn Mower', cat_link: '/pl/Riding-lawn-mowers-Lawn-mowers-Outdoor-tools-equipment-Outdoors/4294612687'},
  //                                   {category: 'Sheds &amp; Outdoor Storage', cat_link: '/c/Sheds-outdoor-storage-Outdoors'},
  //                                   {category: 'String Trim Edgers', cat_link: '/c/Trimmers-edgers-Outdoor-tools-equipment-Outdoors'}];
  //                       var projects = [{project: 'Annuals Buying Guide', project_link: '/projects/gardening-and-outdoor/annuals-buying-guide/project?cm_cr=null_7_project'},
  //                                   {project: 'Lawn Mower Buying Guide', project_link: '/projects/lawn-and-garden/choosing-the-right-lawn-mower-featured/article?cm_cr=Lawn+Mowers-_-Web+Activity-_-Lawn+Mowers+TF-_-SC_Lawn+Mowers_TopFlexible_Area-_-10711579_48_'},
  //                                   {project: 'Pressure Washer Buying Guide', project_link: '/projects/repair-and-maintain/pressure-washer-buying-guide/project'},
  //                                   {project: 'Professional Install', project_link: '/cd_Lowes+Installation+Services_296946035_'}];
  //                       var shopAllLink = '/c/Outdoors';
  //                       break;
  //                   case 'Paint':
  //                       var links = [{category: 'Brushes, Rollers &amp; Kits', cat_link: '/c/Paint-brushes-rollers-kits-Paint'},
  //                                   {category: 'Buckets', cat_link: '/pl/Buckets-bucket-accessories-Paint/4294625957'},
  //                                   {category: 'Caulk &amp; Accessories', cat_link: '/pl/Caulking-Paint/4294729417'},
  //                                   {category: 'Drop Cloths &amp; Sheeting', cat_link: '/c/Drop-cloths-sheeting-Paint'},
  //                                   {category: 'Paint &amp; Primer', cat_link: '/pl/Paint-primer-Paint/4294729375'},
  //                                   {category: 'Paint Cleanup', cat_link: '/pl/Paint-cleanup-Paint/4294729349'},
  //                                   {category: 'Paint Samples', cat_link: '/pl/Paint-samples-Interior-exterior-paint-Paint/4294729371'},
  //                                   {category: 'Paint Sprayers &amp; Accessories', cat_link: '/c/Paint-sprayers-Paint'},
  //                                   {category: 'Painters Tape', cat_link: '/pl/Painters-tape-Tapes-Glues-tapes/4294417406'},
  //                                   {category: 'Scrapers, Blades &amp; Tools', cat_link: '/pl/Scrapers-blades-tools-Paint/4294729361'},
  //                                   {category: 'Stains &amp; Sealers', cat_link: '/c/Stains-sealers-Paint'}];
  //                       var projects = [{project: 'Interior Paint Buying Guide', project_link: '/projects/paint-stain-and-wallpaper/interior-paint-buying-guide/project'},
  //                                   {project: 'Paint an Interior Room', project_link: '/projects/paint-stain-and-wallpaper/paint-a-room/project'},
  //                                   {project: 'Paint Project Checklist', project_link: '/images/espot/PaintChecklist.pdf'},
  //                                   {project: 'Prep Before You Paint', project_link: '/cd_Lowe%27s+Video+Center_94400869_?ytID=oxOJbS-1AiM'}];
  //                       var shopAllLink = '/c/Paint';
  //                       break;
  //                   case 'Plumbing':
  //                       var links = [{category: 'Augers, Plungers &amp; Drain Openers', cat_link: '/c/Augers-plungers-drain-openers-Plumbing'},
  //                                   {category: 'Drainage', cat_link: '/pl/Drainage-Watering-irrigation-drainage-Outdoors/4294612450'},
  //                                   {category: 'Pipe &amp; Fittings', cat_link: '/c/Pipe-fittings-Plumbing'},
  //                                   {category: 'Pipe Insulation', cat_link: '/pl/Pipe-insulation-Pipe-fittings-Plumbing/4294765361'},
  //                                   {category: 'Plumbing Parts &amp; Repair', cat_link: '/c/Plumbing-parts-repair-Plumbing'},
  //                                   {category: 'Plumbing Tools &amp; Cements', cat_link: '/pl/Plumbing-tools-cements-Plumbing/4294607602'},
  //                                   {category: 'Supply Lines &amp; Shut-Off Valves', cat_link: '/pl/Supply-lines-shut-off-valves-Plumbing/4294935656'},
  //                                   {category: 'Utility Sinks &amp; Faucets', cat_link: '/pl/Utility-tubs-faucets-Plumbing/4294639563'},
  //                                   {category: 'Valves &amp; Valve Repair', cat_link: '/c/Valves-valve-repair-Plumbing'},
  //                                   {category: 'Water Filtration &amp; Water Softeners', cat_link: '/c/Water-filtration-water-softeners-Plumbing'},
  //                                   {category: 'Water Filtration', cat_link: '/c/Water-filtration-water-softeners-Plumbing'},
  //                                   {category: 'Water Heaters', cat_link: '/c/Water-heaters-Plumbing'},
  //                                   {category: 'Water Pumps &amp; Tanks', cat_link: '/c/Water-pumps-tanks-Plumbing'}];
  //                       var projects = [{project: 'Clear Clogged Drains', project_link: '/projects/bed-and-bath/clear-clogged-drain/project'},
  //                                   {project: 'Install a Water Heater ', project_link: '/projects/repair-and-maintain/when-to-replace-a-water-heater/project'},
  //                                   {project: 'Make Simple Toilet Repairs ', project_link: '/projects/bed-and-bath/common-toilet-problems/project'},
  //                                   {project: 'Replace a Faucet', project_link: '/projects/bed-and-bath/replace-a-faucet/project'},
  //                                   {project: 'Professional Install', project_link: '/cd_Lowes+Installation+Services_296946035_?cm_sp=NoDivision-_-Home%7CM1-_-Content%7CInstallation_Services'}];
  //                       var shopAllLink = '/c/Plumbing';
  //                       break;
  //                   case 'Storage & Organization':
  //                       var links = [{category: 'Cabinet &amp; Pantry Organizers', cat_link: '/pl/Cabinet-shelf-organizers-Kitchen-organization-Storage-organization/4294702504'},
  //                                   {category: 'Closet Storage &amp; Organization', cat_link: '/c/Closet-organization-Storage-organization'},
  //                                   {category: 'Freestanding Shelving', cat_link: '/pl/Freestanding-shelving-units-Shelves-shelving-Storage-organization/4294857717'},
  //                                   {category: 'Garage Cabinets', cat_link: '/pl/Cabinets-lockers-Garage-organization-Storage-organization/4294415655'},
  //                                   {category: 'Garage Storage', cat_link: '/c/Garage-organization-Storage-organization'},
  //                                   {category: 'Moving Boxes &amp; Supplies', cat_link: '/c/Moving-boxes-supplies-Storage-organization'},
  //                                   {category: 'Plastic Storage', cat_link: '/pl/Plastic-storage-totes-Baskets-storage-containers-Storage-organization/4294713243'},
  //                                   {category: 'Shelves &amp; Shelving', cat_link: '/pl/Shelves-shelving-Storage-organization/4294936608'},
  //                                   {category: 'Tool Storage &amp; Work Benches', cat_link: '/c/Tool-storage-work-benches-Tools'},
  //                                   {category: 'Trash Bags', cat_link: '/pl/Trash-bags-Trash-cans-trash-bags-Cleaning-supplies/4294599023'},
  //                                   {category: 'Trash Cans', cat_link: '/pl/Trash-cans-Trash-recycling-Cleaning-supplies/4294599024'},
  //                                   {category: 'Wire Closet Organizers', cat_link: '/pl/Wire-closet-shelving-Closet-organization-Storage-organization/4294690630'},
  //                                   {category: 'Wood Closet Organizers', cat_link: '/pl/Wood-closet-systems-Closet-organization-Storage-organization/4294687715'}];
  //                       var projects = [{project: 'Install Cabinet Organizers', project_link: '/cd_Lowes+Video+Center_94400869_?ytID=l8Q0OTX8zIQ'},
  //                                   {project: 'Install Wire Shelving', project_link: '/projects/organize-store-and-move/install-wire-shelving/project'},
  //                                   {project: 'Organize a Kitchen', project_link: '/projects/organize-store-and-move/organize-kitchen/project'},
  //                                   {project: 'Plan a Mudroom', project_link: '/projects/organize-store-and-move/plan-a-mudroom/project'}];
  //                       var shopAllLink = '/c/Storage-organization';
  //                       break;
  //                   case 'Tools':
  //                       var links = [{category: 'Air Tools &amp; Compressors', cat_link: '/c/Air-tools-compressors-Tools'},
  //                                   {category: 'Drills &amp; Drivers', cat_link: '/c/Drills-drivers-Power-tools-Tools'},
  //                                   {category: 'Hand Tools', cat_link: '/c/Hand-tools-Tools'},
  //                                   {category: 'Household Tool Sets', cat_link: '/pl/Household-tool-sets-Tool-sets-Hand-tools-Tools/4294607610'},
  //                                   {category: 'Ladders &amp; Scaffolding', cat_link: '/c/Ladders-scaffolding-Tools'},
  //                                   {category: 'Nailers', cat_link: '/pl/Nailers-Power-tools-Tools/4294607837'},
  //                                   {category: 'Power Tool Combo Kits', cat_link: '/pl/Power-tool-combo-kits-Power-tools-Tools/4294607831'},
  //                                   {category: 'Rotary &amp; Oscillating Tools', cat_link: '/pl/Rotary-tools-oscillating-tools-Power-tools-Tools/4294607824'},
  //                                   {category: 'Sanders &amp; Polishers', cat_link: '/pl/Sanders-polishers-Power-tools-Tools/4294607800'},
  //                                   {category: 'Saws', cat_link: '/c/Saws-Power-tools-Tools'},
  //                                   {category: 'Shop Vacuums', cat_link: '/pl/Shop-vacuums-accessories-Tools/4294857473'},
  //                                   {category: 'Tool Storage &amp; Work Benches', cat_link: '/c/Tool-storage-work-benches-Tools'},
  //                                   {category: 'Welding &amp; Soldering', cat_link: '/pl/Welding-soldering-Tools/4294607707'}];
  //                       var projects = [{project: 'Air Compressor Buying Guide', project_link: '/projects/build-and-remodel/air-compressor-buying-guide/project'},
  //                                   {project: 'Circular Saw Buying Guide', project_link: '/projects/build-and-remodel/circular-saw-buying-guide/project'},
  //                                   {project: 'Power Drill Buying Guide', project_link: '/projects/build-and-remodel/power-drill-buying-guide/project'},
  //                                   {project: 'Power Tools Buying Guide', project_link: '/projects/woodworking-and-crafts/choosing-power-tools-featured/article'},
  //                                   {project: 'Table Saw Buying Guide', project_link: '/projects/woodworking-and-crafts/table-saw-guide/article'}];
  //                       var shopAllLink = '/c/Tools';
  //                       break;
  //                   case 'Windows & Doors':
  //                       var links = [{category: 'Cellar Doors', cat_link: '/pl/Cellar-doors-accessories-Doors-Windows-doors/4294633096'},
  //                                   {category: 'Door Knobs &amp; Handlesets', cat_link: '/c/Door-knobs-handlesets-Door-hardware-Hardware'},
  //                                   {category: 'Entry Doors', cat_link: '/pl/Entry-doors-Doors-Windows-doors/4294482094'},
  //                                   {category: 'Exterior Shutters', cat_link: '/pl/Exterior-shutters-accessories-Windows-doors/4294775790'},
  //                                   {category: 'Garage Doors &amp; Openers', cat_link: '/c/Garage-doors-openers-Windows-doors'},
  //                                   {category: 'Interior Doors', cat_link: '/pl/Interior-doors-Doors-Windows-doors/4294417385'},
  //                                   {category: 'Moulding &amp; Millwork', cat_link: '/c/Moulding-millwork'},
  //                                   {category: 'Patio Doors', cat_link: '/pl/Patio-doors-Doors-Windows-doors/4294618099'},
  //                                   {category: 'Screen Doors', cat_link: '/pl/Screen-doors-Screen-doors-screens-Doors-Windows-doors/4294858074'},
  //                                   {category: 'Security Doors', cat_link: '/pl/Security-doors-Doors-Windows-doors/4294858075'},
  //                                   {category: 'Skylights', cat_link: '/pl/Skylights-accessories-Windows-Windows-doors/4294696745'},
  //                                   {category: 'Storm Doors', cat_link: '/pl/Storm-doors-Storm-doors-frames-Doors-Windows-doors/4294644684'},
  //                                   {category: 'Windows', cat_link: '/c/Windows-Windows-doors'}];
  //                       var projects = [{project: 'Buying Windows and Doors', project_link: '/cd_Windows+and+Doors+Buying+Guides_673716054_'},
  //                                   {project: 'Install a Patio Door', project_link: '/cd_Install+a+Patio+Door_879953847_'},
  //                                   {project: 'Install a Storm Door', project_link: '/projects/build-and-remodel/install-storm-door/project'},
  //                                   {project: 'Repairing &amp; Replacing Screens', project_link: '/cd_Repairing+and+Replacing+Screens_755594716_'},
  //                                   {project: 'Professional Install', project_link: '/cd_Lowes+Installation+Services_296946035_?cm_sp=NoDivision-_-Home%7CM1-_-Content%7CInstallation_Services'}];
  //                       var shopAllLink = '/c/Windows-doors';
  //                       break;
  //               }
  //               $('.flyoutbox').append('<div class="v-spacing-large" style="margin:20px 0 0 10px;"><h3 class="display-block" style="border-right: 2px solid #CDCDCD; float: left; padding-right: 10px;">'+title+'</h3> <h4><strong><a class="h4 lowes-blue no-padding" style="font-size:14px; font-weight:bold;margin-left:10px; margin-top:6px;color:#004990;" href="'+shopAllLink+'" title="Shop all '+title+'">Shop All</a></strong></h4></div>');
  //           	$('.flyoutbox').append('<ul class="grid-50 list unstyled js-cats-list"></ul><ul class="grid-50 list unstyled js-projects-list"><li class="v-spacing-medium"><h4 style="color: #5d5d5d;">Projects &amp; Inspiration</h4></li></ul>');  
  //           	$.each(links, function(index, cat_link, category){
  //               	$('.flyoutbox').find('.js-cats-list').append('<li role="listitem" class="v-spacing-small h5"><a class="no-padding" href="'+this.cat_link+'" title="'+this.category+'" style="color:#5d5d5d;">'+this.category+'</a></li>');
  //           	}); 
  //           	$('.flyoutbox .js-cats-list').append('<li role="listitem" class="v-spacing-medium h5"><a class="no-padding" title="View All Savings in '+title+'" href="/l/savings.html">View All Savings in '+title+'</li>');
  //           	$.each(projects, function(index, project_link, project){
  //               	$('.flyoutbox').find('.js-projects-list').append('<li role="listitem" class="v-spacing-medium h5"><a class="no-padding" href="'+this.project_link+'" title="'+this.project+'" style="color:#5d5d5d;">'+this.project+'</a></li>');
  //           	});  
	
		// 		}
		// 	});
		// $(document).on('mouseover','.flyoutbox',function(){
		// 	$currentCat.addClass('active');
		// });
		// $(document).on('mouseout','.js-departments-menu li[role="menuitemradio"]',function(){
		// 	$('.js-departments-menu li[role="menuitemradio"]').removeClass('active');			
		// });
		// $(document).on('mouseout','.js-departments-menu, .flyoutbox',function(){
		// 	setTimeout(function(){
		// 		if($('.flyoutbox:hover').length > 0 || $('.js-departments-menu:hover').length > 0) return false;
            
	 //            $('.flyoutbox').remove();
  //           	$('.js-outer-depts-div').css('width', deptWidth);
  //           	$('.js-outer-depts-div').removeClass('flyout-open');
  //           	$('.js-departments-menu li[role="menuitemradio"]').removeClass('active');
		// 	},100);
		// });
	}
});