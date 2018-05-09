// map insertion

function initMap() {
        var university = {lat: 40.7291, lng: -73.9965};
        var map = new google.maps.Map(document.getElementById('Gmap'), {
          zoom: 10.3,
          center: university
        });
        var marker = new google.maps.Marker({
          position: university,
          map: map
        });

        map.data.loadGeoJson('https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson');
}

// datasets



//graphics
