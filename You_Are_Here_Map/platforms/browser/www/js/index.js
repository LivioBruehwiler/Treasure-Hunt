/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


                 
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var watchID = null;

       //sets the starting view to show when open the app
        $("#start-view").show();
        $("#map").hide();
 
		
		var startmarker = ""
        var x = "";
        var trailmarkers = "";


        Forest_trail = [
        [47.359932, 8.594484, "What is 1+1", "2"],
        [47.366705, 8.589935, "What is 1+2", "3"],
        [47.369728, 8.588691, "What is 1+3", "4"],
        [47.367868, 8.600793, "What is 1+4", "5"]
        ];

        Irchel = [
        [47.396519, 8.550110,"What is 1+1", "2"],
        [47.396577, 8.549080, "What is 1+2", "3"],
        [47.397507, 8.548179, "What is 1+3", "4"],
        [47.397274, 8.550239, "What is 1+4", "5"]
        ];

        Tourist = [
        [47.377720, 8.540604,"What is 1+1", "2"],
        [47.366167, 8.541312, "What is 1+2", "3"],
        [47.362926, 8.536463, "What is 1+2", "3"],
        [47.370084, 8.544306, "What is 1+2", "3"]
        ];

        Pub_crawl = [
        [47.374117, 8.544129, "How many Beer sorts are there on the menu", "4"],
        [47.376115, 8.538136 ,"How many Beer sorts are there on the menu", "7"],
        [47.376845, 8.529092,"How many Beer sorts are there on the menu", "7"],
        [47.377978, 8.527826, "How many Beer sorts are there on the menu", "7"]
        ];
        
        var trail_dict = {
            "Forest_trail": Forest_trail,
            "Irchel": Irchel,
            "Tourist": Tourist,
            "Pub_crawl": Pub_crawl,
        };


		
		
		//Each button has a function to add the corresponding markers to the map
        //document.getElementById("b1").addEventListener("click", TrailView);

		//ads next marker without knowing right answer
		// subfu = function (){
		// L.marker([47.376845, 8.529092]).addTo(map)
		// alert("Hello")
		// w ++;
		// addMarkers(trailmarkers)}
		
		// infu = function infu(){
			// val = document.getElementById('inp').value
			// if (val == trailmarkers [w][3]){
			// alert("Correct Answer!!");
			// w++;
			// addMarkers(trailmarkers);}
			// else {
			// alert ("Wrong you are dumb, the correct Answer would be" + trailmarkers[w][3])}	
		// }


		z = document.getElementsByClassName("trail_button")
		for (var i = 0; i < z.length; i++) {
		z[i].addEventListener('click', TrailView, false);
		}	

		
		function TrailView() {
            $("#start-view").hide();
            $("#map").show();
			$("#trailList").hide();			
            map._onResize();
			x = this.id
			w = 0
			trailmarkers = trail_dict[x];
			startmarker = L.marker([trailmarkers[0][0], trailmarkers[0][1]]);
			//startmarker.addTo(map)
			//.bindPopup('<button onclick = "subfu()"> "Click here for your next location" </button>'
			//+ trailmarkers [0][2]);	
            if (watchID == null)
             watchID = navigator.geolocation.watchPosition(onSuccess, onError, {maximumAge: 3000, timeout: 30000, enableHighAccuracy: true });
        }
        //set the initial map center to Zurich
        var map = L.map('map').setView([47.3769, 8.5417], 14);
        
        //load the base map: OpenStreetMap
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
                
        var marker = L.marker([47.3769, 8.5417], {rotationAngle: 0});
                
        var circle = L.circle([47.3769, 8.5417], {radius: 10});
        circle.addTo(map);
		//var trailmarkers= [
		//[47.256335, 8.604447],
		//[47.256335, 8.605482],
		//[47.256335, 8.605800]
		//];
		
       
		//var startmarker = L.marker(trailmarkers[0]);
		//startmarker.addTo(map)
			//.bindPopup('<button id="Test"> "Click here for your next location" </button>');
        
		//function nextMarker() {
		
		//var mlon = trailmarkers[w][1]
		//var mlat = trailmarkers w [0]
		
		
		
		
		
        
        // onSuccess Callback
        // This method accepts a Position object, which contains the current GPS coordinates
        function onSuccess (position) {
            var lat = position.coords.latitude;
            //get the current location
            var lon = position.coords.longitude;
            var accuracy = position.coords.accuracy;
            var curlatlng = L.latLng(lat, lon);
			//document.getElementById("Test").addEventListener("click",showMarker);	
            //vasiable for the icon
            var myIcon = L.icon({
                iconUrl: 'img/person.png',
                iconSize: [95, 95],
                iconAnchor: [45, 65],
                popupAnchor: [-40,-70],
            });
			
			//ads next marker without knowing right answer
			subfu = function (){
			alert("You lost, the correct answer would have been " + trailmarkers[w][3])
			w ++;
			addMarkers(trailmarkers)}
		
			//function for processing input
			infu = function infu(){
			val = document.getElementById('inp').value
			if (val == trailmarkers [w][3]){
			alert("Correct Answer! Please go to the next marker on your map");
			w++;
			addMarkers(trailmarkers);}
			else {
			alert ("Wrong, try again")}	
			}	
			
            L.marker([lat, lon], {icon: myIcon}).addTo(map);//adding marker for personal location
			startmarker.addTo(map)//adding first marker
			.bindPopup('<button onclick = "subfu()"> "I dont know the answer, please show me the next location anyways" </button>'
			+ '<br>'
			+ trailmarkers [0][2]
			+ '<br>'
			+'<input type="text" name="answer" id= "inp">'
			+
   			'<input onclick ="infu()" type="submit" value="Submit">');	

            function addMarkers(trailmarkers){
			//function for popup popping up with buttons
			for (var i = 0; i<trailmarkers.length - 1; i++) { //loop through all the markers
                //current marker
			u = i + 1	
			var tlon = trailmarkers[i][1];
			var tlat = trailmarkers[i][0];
                //next marker
			var nlon = trailmarkers[i+1][1];
			var nlat = trailmarkers [i+1][0];
			var markerLocation = new L.LatLng(tlat, tlon);
			var nextMarkerLocation = new L.LatLng(nlat, nlon);
			var nextmarker = new L.Marker(nextMarkerLocation);
			var distance = curlatlng.distanceTo(markerLocation);
			
            if (distance < 100000 && w == i+1) {//if w high enough (through correct answer) and close enough to current marker, add next marker.
                nextmarker.addTo(map)
					.bindPopup('<button onclick = "subfu()"> "I dont know the answer, please show me the next location anyways" </button>'
			+ '<br>'
			+ trailmarkers [i+1][2]
			+ '<br>'
			+'<input type="text" name="answer" id= "inp">'
			+
   			'<input onclick ="infu()" type="submit" value="Submit">');}
			if (distance > 100000 && w == i+1){
			w --	
			alert("Please go within 50 meter of your current marker and submit your right answer again to show the next marker")}

            //document.getElementById("fff").addEventListener("click", buttonShow);
			//function buttonShow () {
			//buttonshow = 1;		
			}}
			//addMarkers(trailmarkers);
				
          
                
            //set the map center and the marker to the current location, add a circle to represent the location accuracy
            map.panTo (curlatlng);            
            marker.setLatLng (curlatlng);
            //marker.getPopup().setContent('You are here!').openPopup();
            circle.setRadius (accuracy).setLatLng (curlatlng);   
        }

        // onError Callback receives a PositionError object
        function onError(error) {
            alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
        }
        //watchPosition will run constantly to get the position if the device retrieves a new location 
        var watchID = navigator.geolocation.watchPosition(onSuccess, onError, {maximumAge: 3000, timeout: 30000, enableHighAccuracy: true });   
            //Add the "Back" button in the map view
        var backControl =  L.Control.extend({
            options: {
                position: 'bottomleft'
            },

            onAdd: function (map) {
                var container = L.DomUtil.create('button', 'ui-button ui-widget ui-corner-all');
                container.style.backgroundColor = 'white';     
                container.style.width = '100px';
                container.style.height = '60px';
                container.textContent = 'Back';
                
                container.onclick = function(){
                    location.reload();     
                  //stop watching for changes to the device's location
                  navigator.geolocation.clearWatch(watchID);
                  watchID = null;
                };
                return container;
            }
        });
        map.addControl(new backControl());        
    }

};
