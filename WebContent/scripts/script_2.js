$(document).ready(function(){
	//alert("JQuery Detected!!");
});

$(window).on('load', function(){
	//alert("Window Loaded!!");
	console.log("Window Loaded");
	
	var myMapsApiKey = 'AIzaSyALCMVxJ28kp6CxoJuX0Nytuli-mf69LVc'; // For Tab-1 Map API Key
	var minTempTab2 = 0;
	var maxTempTab2 = 50;
	
	$('p#tempTextMin').text(minTempTab2);
	$('p#tempTextMax').text(maxTempTab2);
	
	var minCO2Tab2 = 80;
	var maxCO2Tab2 = 700;
	
	$('p#co2TextMin').text(minCO2Tab2);
	$('p#co2TextMax').text(maxCO2Tab2);
	
	
	
	// Hide Global World Map Bottom Bar
	setInterval(function(){$(document).find('defs').next().children('g:eq(1)').hide();},100);
	
	// Tab_1 World Map Plotting Logic: START
	
	// Tab_1 World Map Plotting Logic: END
	
	
	// Show on First Tab and it's Content on page load.
	var firstTab = $('ul.tabs-container').find('a.tab-link:eq(1)');//:eq().first();
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
		console.log('\''+$(this).data('content-ref')+'\' Tab Clicked..');
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
	
	$("span#predict-info").click(function () {
	       $('#dialog').dialog('open');
	       $("#dialog span").text("This section predicts the future rate of melting of Ice in the Arctic GreenLand region. ");
	       $("button.ui-dialog-titlebar-close").css("margin-right","50px");
	   });
	
	// Slider Logic for History Details Tab
	
    var valMap = [2001, 2004, 2007, 2010, 2013, 2016];
    /*$("#slider-range_1").slider({
        min: 0,
        max: valMap.length - 1,
        value: 0,
        slide: function(event, ui) {                        
            $("#slider-range_1.ui-slider-handle").text(valMap[ui.value]);
			showVal(valMap[ui.value]);
        },
		create: function(event, ui) {
            var v=valMap[$(this).slider('value')];
            $(this).find('#slider-range_1.ui-slider-handle').text(v);
        }
    });
	$("#slider-range_2").slider({
        min: 0,
        max: valMap.length - 1,
        value: 0,
        slide: function(event, ui) {                        
            $("#slider-range_2.ui-slider-handle").text(valMap[ui.value]);
			showVal(valMap[ui.value]);
        },
		create: function(event, ui) {
            var v=valMap[$(this).slider('value')];
            $(this).find('#slider-range_2.ui-slider-handle').text(v);
        }
    });*/
    //$("#amount").val(valMap[ui.value]);
	
	
	// Logic to Assign a Cluster to a Record in Tx Data
	console.log(dataRegions); // Region Metadata
	console.log(dataPoints); // Points Tx Data
	
	// "ltLatLon": "80.400559, -93.560009",
	// "rtLatLon": "80.194224, 9.605004",
	// "lbLatLon": "74.389661, -67.018536",
	// "rbLatLon": "74.389661, -14.734750"
	
	var dataPointsArr = dataPoints["records"];
	var regionsArr = dataRegions["regions"];
	
	// for(var key in dataPointsArr){
        // if(dataPointsArr.hasOwnProperty(key)) {
			// console.info(key + ': ' + dataPointsArr[key]["Thickness"]);
		  
			// var lati = dataPointsArr[key]["latitude"];
			// var longi = dataPointsArr[key]["longitude"];
			// var polygonCoords = [];
			// var clusterPolygon;
			// var isPresent;
			// for(var key1 in regionsArr)
			// {
				// if(regionsArr.hasOwnProperty(key1))
				// {
					// polygonCoords.push([
					  // {lat: parseFloat(regionsArr[key1]["ltLatLon"].split(',')[0].trim()), lng: parseFloat(regionsArr[key1]["ltLatLon"].split(',')[1].trim())},
					  // {lat: parseFloat(regionsArr[key1]["rtLatLon"].split(',')[0].trim()), lng: parseFloat(regionsArr[key1]["rtLatLon"].split(',')[1].trim())},
					  // {lat: parseFloat(regionsArr[key1]["lbLatLon"].split(',')[0].trim()), lng: parseFloat(regionsArr[key1]["lbLatLon"].split(',')[1].trim())},
					  // {lat: parseFloat(regionsArr[key1]["rbLatLon"].split(',')[0].trim()), lng: parseFloat(regionsArr[key1]["rbLatLon"].split(',')[1].trim())}
					// ]);
				// }
				
				// clusterPolygon = new google.maps.Polygon({paths: polygonCoords});
				// isPresent = google.maps.geometry.poly.containsLocation(new google.maps.LatLng(lati,longi), clusterPolygon) ? 1 : 0;
				// if(isPresent == 1)
				// {
					// dataPointsArr[key]["clusterId"] = regionsArr[key1]["clusterId"];
					// isPresent = 0;
					// polygonCoords = [];
					// break;
				// }		  
			// }
        // }
	// }
	
	// To Test the Clustering Process Accuracy
	for(var key in dataPointsArr){
        if(dataPointsArr.hasOwnProperty(key))
		{
			console.info(key + ': ' + dataPointsArr[key]["clusterId"]);
		}
	}
	
	// Methods to Give JSon Data for Screen-1 AND Screen-2
	function getHistoricData(regionName, yearValue)
	{
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
	}
	
	function getPredictedData(regionName, temperature, co2level)
	{
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
	}
	
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
	
	
});