$(document).ready(function(){
	//alert("JQuery Detected!!");
});

$(window).on('load', function(){
	
	var myMapsApiKey = 'AIzaSyALCMVxJ28kp6CxoJuX0Nytuli-mf69LVc'; // For Tab-1 Map API Key
	var minTimelineTab1 = 2001;
	var maxTimelineTab1 = 2016;
	var inputdata = { "type": "map", "theme": "light", "projection": "miller",  "dataProvider": { "map": "worldLow", "getAreasFromMap": true, "images": [{ "title": "North America", "latitude": 39.563353, "longitude": -99.316406, "width": 200, "height": 200, "pie": { "type": "pie", "pullOutRadius": 0, "labelRadius": 0, "dataProvider": [{ "category": "Sea Ice Extent(million square kms)", "value": 13.83 }, { "category": "Global Mean Temparature (Degree Celsius)", "value": 0.42 }], "labelText": "[[value]]%", "valueField": "value", "titleField": "category" } }] }, "areasSettings": { "autoZoom": true, "selectedColor": "#007700" }, "smallMap": {}, "export": { "enabled": true, "position": "bottom-right" }, "listeners": [{ "event": "clickMapObject", "method": updateCustomMarkers }] };
	
	$('p#yearTextMin').text(minTimelineTab1);
	$('p#yearTextMax').text(maxTimelineTab1);
	
	// Hide Global World Map Bottom Bar
	setInterval(function(){$(document).find('defs').next().children('g:eq(1)').hide();},100);
	
	// Tab_1 World Map Plotting Logic: START
	/*google.charts.load('current', {'packages':['geochart'], mapsApiKey: myMapsApiKey});
	google.charts.setOnLoadCallback(drawRegionsMap);*/
	
	function drawRegionsMap(thickness, elevation, color) {/*
		if(thickness == undefined && elevation == undefined && color == undefined){
			thickness = 100;
			elevation = 1000;
			color = "#091F92";
		}
		var data = google.visualization.arrayToDataTable([
		   ['Country', 'Thickness(m)', 'Elevation(m)'],
		   
		   ['Green land', thickness, elevation]
		 ]);

		var options = {colorAxis: {colors: [color]}};

		var chart = new google.visualization.GeoChart(document.getElementById('WorldMap'));
		chart.draw(data, options);
		 //setTimeout(function(){ $(document).find('defs').next().children('g:eq(1)').hide(); }, 5);
		 //alert(document.getElementById('defs'));
		clearInterval();
	*/}
	
	function showVal(currVal){
		var imgArr = inputdata.dataProvider.images[0];
		imgArr.id = undefined;imgArr.pie.theme = undefined;imgArr.externalElement = undefined;
		
		switch(currVal)
		{
			/*case 2001 : google.charts.setOnLoadCallback(drawRegionsMap(100,1000,"#091F92"));break;
			
			case 2004 : google.charts.setOnLoadCallback(drawRegionsMap(80,800,"#273BE2"));break;
			
			case 2007 : google.charts.setOnLoadCallback(drawRegionsMap(60,600,"#4876FF"));break;
			
			case 2010 : google.charts.setOnLoadCallback(drawRegionsMap(40,400,"#3C9BED"));break;
			
			case 2013 : google.charts.setOnLoadCallback(drawRegionsMap(20,200,"#0BB5FF"));break;
			
			case 2016 : google.charts.setOnLoadCallback(drawRegionsMap(10,100,"#9BDDFF"));break;
			
			default : google.charts.setOnLoadCallback(drawRegionsMap(50,70,"#000000"));break;*/
		
		case 2001 : imgArr.pie.dataProvider[0].value = 13.83;
					imgArr.pie.dataProvider[1].value = 0.42;inputdata.areasSettings.selectedColor = "#007700";
					var map = AmCharts.makeChart( "WorldMap", inputdata);
					break;
		
		case 2004 : imgArr.pie.dataProvider[0].value = 12.74;
					imgArr.pie.dataProvider[1].value = 0.62;inputdata.areasSettings.selectedColor = "#00FF00";
					var map = AmCharts.makeChart( "WorldMap", inputdata);
					break;
		
		case 2007 : imgArr.pie.dataProvider[0].value = 12.92;
					imgArr.pie.dataProvider[1].value = 0.60;inputdata.areasSettings.selectedColor = "#FFFF00";
					var map = AmCharts.makeChart( "WorldMap", inputdata);
					break;
		
		case 2010 : imgArr.pie.dataProvider[0].value = 12.92;
					imgArr.pie.dataProvider[1].value = 0.60;inputdata.areasSettings.selectedColor = "#FFFF00";
					var map = AmCharts.makeChart( "WorldMap", inputdata);
					break;
		
		case 2013 : imgArr.pie.dataProvider[0].value = 13.02;
					imgArr.pie.dataProvider[1].value = 0.57;inputdata.areasSettings.selectedColor = "#00DD00";
					var map = AmCharts.makeChart( "WorldMap", inputdata);
					break;
		
		case 2016 : imgArr.pie.dataProvider[0].value = 10.83;
					imgArr.pie.dataProvider[1].value = 1.21;inputdata.areasSettings.selectedColor = "#AA0000";
					var map = AmCharts.makeChart( "WorldMap", inputdata);
					break;
		
		default : 	imgArr.pie.dataProvider[0].value = 13.83;
					imgArr.pie.dataProvider[1].value = 0.42;
					var map = AmCharts.makeChart( "WorldMap", inputdata);
					break;
		}
	};
	// Tab_1 World Map Plotting Logic: END
	
	
	// Show on First Tab and it's Content on page load.
	var firstTab = $('ul.tabs-container').find('a.tab-link').first();
	$('ul.tabs-container').find('a.tab-link').removeClass('selected');
	firstTab.addClass('selected');
	$('div.login-register-tabbed-area div.tabContent').hide();
	$('div.login-register-tabbed-area div.tabContent[id="'+firstTab.data("content-ref")+'"]').first().show();
	
	// Making the Tab corners round for first and last tab.
	// firstTab.css({
		// "border-top-left-radius":"6px"
	// });
	// var lastTab = $('ul.tabs-container').find('a.tab-link').last();
	// lastTab.css({
		// "border-top-right-radius": "6px"
	// });
	
	// Adjusting the Tab widths dynamically based on the number of list items in the tab UL.
	var tabCount = $('ul.tabs-container').find('a.tab-link').length;
	$('ul#tabs li').css({
		"width":(100/tabCount)+"%"
	});
	
	// On Click of tab, show respective contents.
	$('#tabs a').click(function(){
		var tabLink = $(this);
		$('ul.tabs-container').find('a.tab-link').not(tabLink).removeClass('selected');
		tabLink.addClass('selected');
		$('div.tabContent').hide();
		$('div.login-register-tabbed-area div[id="'+tabLink.data('content-ref')+'"]').show();				
	});
	
	// Select Language.
	$('select.lang-select-class').on('change', function(){
		//alert($('select.lang-select-class option:selected').text());
		console.log($('select.lang-select-class option:selected').text()+" Language selected.");
		recognitionMain.lang = $('select.lang-select-class option:selected').val();
	});
	
	// Slider Logic for History Details Tab
	
    var valMap = [2001, 2004, 2007, 2010, 2013, 2016];
    $("#slider-range").slider({
        min: 0,
        max: valMap.length - 1,
        value: 0,
        slide: function(event, ui) {                        
            $(".ui-slider-handle").text(valMap[ui.value]);
			showVal(valMap[ui.value]);
        },
		create: function(event, ui) {
            var v=valMap[$(this).slider('value')];
            $(this).find('.ui-slider-handle').text(v);
        }
    });
    //$("#amount").val(valMap[ui.value]);
	
	
	// Logic to Assign a Cluster to a Record in Tx Data
	// "ltLatLon": "80.400559, -93.560009",
	// "rtLatLon": "80.194224, 9.605004",
	// "lbLatLon": "74.389661, -67.018536",
	// "rbLatLon": "74.389661, -14.734750"
	
	var dataPointsArr = dataPoints["records"];
	var regionsArr = dataRegions["regions"];
	
	for(var key in dataPointsArr){/*
        if(dataPointsArr.hasOwnProperty(key)) {
			console.info(key + ': ' + dataPointsArr[key]["Thickness"]);
		  
			var lati = dataPointsArr[key]["latitude"];
			var longi = dataPointsArr[key]["longitude"];
			var polygonCoords = [];
			var clusterPolygon;
			var isPresent;
			for(var key1 in regionsArr)
			{
				if(regionsArr.hasOwnProperty(key1))
				{
					polygonCoords.push([
					  {lat: parseFloat(regionsArr[key1]["ltLatLon"].split(',')[0].trim()), lng: parseFloat(regionsArr[key1]["ltLatLon"].split(',')[1].trim())},
					  {lat: parseFloat(regionsArr[key1]["rtLatLon"].split(',')[0].trim()), lng: parseFloat(regionsArr[key1]["rtLatLon"].split(',')[1].trim())},
					  {lat: parseFloat(regionsArr[key1]["lbLatLon"].split(',')[0].trim()), lng: parseFloat(regionsArr[key1]["lbLatLon"].split(',')[1].trim())},
					  {lat: parseFloat(regionsArr[key1]["rbLatLon"].split(',')[0].trim()), lng: parseFloat(regionsArr[key1]["rbLatLon"].split(',')[1].trim())}
					]);
				}
				
				clusterPolygon = new google.maps.Polygon({paths: polygonCoords});
				isPresent = google.maps.geometry.poly.containsLocation(new google.maps.LatLng(lati,longi), clusterPolygon) ? 1 : 0;
				if(isPresent == 1)
				{
					dataPointsArr[key]["clusterId"] = regionsArr[key1]["clusterId"];
					isPresent = 0;
					polygonCoords = [];
					break;
				}		  
			}
        }
	*/}
	
	// To Test the Clustering Process Accuracy
	for(var key in dataPointsArr){
        if(dataPointsArr.hasOwnProperty(key))
		{
			console.info(key + ': ' + dataPointsArr[key]["clusterId"]);
		}
	}
	
	// Methods to Give JSon Data for Screen-1 AND Screen-2
	function getHistoricData(regionName, yearValue)
	{/*
		var allFlag = false;
		var res = {"content":[]};
		if(regionName === "")
		{
			allFlag = true;
		}
		
		if(allFlag == true)
		{
			for(var key in dataPointsArr)
			{
				if(dataPointsArr.hasOwnProperty(key))
				{
					if(dataPointsArr[key]["year"] == yearValue)
					{
						var item = {};
						item["latitude"] = dataPointsArr[key]["latitude"];
						item["longitude"] = dataPointsArr[key]["longitude"];
						item["Thickness"] = dataPointsArr[key]["Thickness"];
						item["Elevation"] = dataPointsArr[key]["Elevation"];
						res["content"].push(item);
					}
				}
			}
		}
		else
		{
			var clustId = "";
			for(var key in regionsArr)
			{
				if(regionsArr.hasOwnProperty(key))
				{
					if(regionName === regionsArr[key]["name"])
					{
						clustId = regionsArr[key]["clusterId"];
						break;
					}
				}
			}
			
			for(var key1 in dataPointsArr)
			{
				if(dataPointsArr.hasOwnProperty(key1))
				{
					if(dataPointsArr[key1]["year"] == yearValue && dataPointsArr[key1]["clusterId"] == clustId)
					{
						var item1 = {};
						item1["latitude"] = dataPointsArr[key]["latitude"];
						item1["longitude"] = dataPointsArr[key]["longitude"];
						item1["Thickness"] = dataPointsArr[key]["Thickness"];
						item1["Elevation"] = dataPointsArr[key]["Elevation"];
						res["content"].push(item1);
					}
				}
			}
		}
		return res;
	*/}
	
	function getPredictedData(regionName, temperature, co2level)
	{/*
		var allFlag = false;
		var predictedRes = {"content":[]};
		
		if(regionName === "")
		{
			// Not Handling This case.
		}
		
		if(allFlag == true)
		{
			// Not Handling This case.
		}
		else
		{
			var clustId = "";
			var tempSlope = 1;
			var co2Slope = 1;
			for(var key in regionsArr)
			{
				if(regionsArr.hasOwnProperty(key))
				{
					if(regionName === regionsArr[key]["name"])
					{
						clustId = regionsArr[key]["clusterId"];
						tempSlope = regionsArr[key]["inputWtTemp"];
						co2Slope = regionsArr[key]["inputWtCO2"];
						break;
					}
				}
			}
			
			for(var key1 in dataPointsArr)
			{
				if(dataPointsArr.hasOwnProperty(key1))
				{
					if(dataPointsArr[key1]["clusterId"] == clustId)
					{
						var item1 = {};
						item1["latitude"] = dataPointsArr[key]["latitude"];
						item1["longitude"] = dataPointsArr[key]["longitude"];
						item1["Thickness"] = [(dataPointsArr[key]["Thickness"] + temperature*tempSlope) + (dataPointsArr[key]["Thickness"] + co2level*co2Slope)]/2;
						predictedRes["content"].push(item1);
					}
				}
			}
		}
		return predictedRes;
	*/}
	
	// var polygonCoords = [
	  // {lat: 80.400559, lng: -93.560009},
	  // {lat: 80.194224, lng: 9.605004},
	  // {lat: 74.389661, lng: -67.018536},
	  // {lat: 74.389661, lng: -14.734750}
	// ];

	// var clusterPolygon = new google.maps.Polygon({paths: polygonCoords});
	// var bool = 'No';
	// var bool = google.maps.geometry.poly.containsLocation(new google.maps.LatLng(72.180347,-48.992191), clusterPolygon) ? 'Yes' : 'No';
	
	// console.log(bool);
	
	// var objRes = getHistoricData("Region-1",2001);
	// console.log(objRes);
	// var objRes = getHistoricData("",2001);
	// console.log(objRes);
	var objRes = getPredictedData("Region-1",30, 500);
	console.log(objRes);
	
	// Adding Gradient
	
	
   /*var c = document.getElementById("myCanvas");
   var ctx = c.getContext("2d");

   ctx.beginPath();
   ctx.rect(0, 0, 15, 15);
   ctx.fillStyle = "#091F92";
   ctx.fill(); 
   
   var c2 = document.getElementById("myCanvas2");
   var ctx2 = c2.getContext("2d");

   ctx2.beginPath();
   ctx2.rect(0, 0, 15, 15);
   ctx2.fillStyle = "#9BDDFF";
   ctx2.fill(); */
   
   
   
   $("#dialog").dialog({
       modal: true,
       autoOpen: false,
       title: "Message",
       width: 400,
       height: 150
   });
   $("span#history-info").click(function () {
       $('#dialog').dialog('open');
       $("#dialog span").text("This section gives a visual analysis about the melting of ice in and around Greenland region for the past 15 years. ");
       $("button.ui-dialog-titlebar-close").css("margin-right","50px");
   });
   
   var map = AmCharts.makeChart( "WorldMap", inputdata);
   
   function updateCustomMarkers(event) {
	   // get map object
	   var map = event.chart;

	   // go through all of the images
	   for (var x = 0; x < inputdata.dataProvider.images.length; x++) {

	     // get MapImage object
	     var image = inputdata.dataProvider.images[x];

	     // Is it a Pie?
	     if (image.pie === undefined) {
	       continue;
	     }

	     // create id
	     if (image.id === undefined) {
	       image.id = "amcharts_pie_" + x;
	     }
	     // Add theme
	     if ("undefined" == typeof image.pie.theme) {
	       image.pie.theme = map.theme;
	     }

	     // check if it has corresponding HTML element
	     if ("undefined" == typeof image.externalElement) {
	       image.externalElement = createCustomMarker(image);
	     }

	     // reposition the element accoridng to coordinates
	     var xy = map.coordinatesToStageXY(image.longitude, image.latitude);
	     image.externalElement.style.top = xy.y + "px";
	     image.externalElement.style.left = xy.x + "px";
	     image.externalElement.style.marginTop = Math.round(image.height / -2) + "px";
	     image.externalElement.style.marginLeft = Math.round(image.width / -2) + "px";
	   }
	 }

	 /**
	  * Creates a custom map marker - a div for container and a
	  * pie chart in it
	  */
	 function createCustomMarker(image) {
	   // Create chart container
	   var holder = document.createElement("div");
	   holder.id = image.id;
	   holder.title = image.title;
	   holder.style.position = "absolute";
	   holder.style.width = image.width + "px";
	   holder.style.height = image.height + "px";

	   // Append the chart container to the map container
	   image.chart.chartDiv.appendChild(holder);

	   // Create a pie chart
	   var chart = AmCharts.makeChart(image.id, image.pie);

	   return holder;
	 }
});