document.addEventListener("deviceready", onDeviceReady, false);



  var keyvalue = new Array();

function onDeviceReady() {
  console.log("listo");
  getDatos();
}

function getDatos() {
  navigator.geolocation.getCurrentPosition(onSuccess, onError, {
    maximunAge: 300000,
    timeout: 10000,
    enableHighAccuracy: true
  });
}

function onSuccess(position) {



  var locations = [
      ['	Aroma Cafe	'	,	14.160916,-88.037382	,	'	<span class=titulomap>	Aroma Cafe	</span><br>	<a href="https://maps.google.com/maps?q=14.160916,-88.037382"	> LLÉVAME HACIA ESTE CAFÉ</a>'],
['	Barista Corner	'	,	15.4985678,-88.0387853	,	'	<span class=titulomap>	Barista Corner	</span><br>	<a href="https://maps.google.com/maps?q=15.4985678,-88.0387853"	> LLÉVAME HACIA ESTE CAFÉ</a>'],
['	Café Costello	'	,	15.5387216,-88.0384576	,	'	<span class=titulomap>	Café Costello	</span><br>	<a href="https://maps.google.com/maps?q=15.5387216,-88.0384576"	> LLÉVAME HACIA ESTE CAFÉ</a>'],
['	Café Don Napo	'	,	14.1647206,-88.0340019	,	'	<span class=titulomap>	Café Don Napo	</span><br>	<a href="https://maps.google.com/maps?q=14.1647206,-88.0340019"	> LLÉVAME HACIA ESTE CAFÉ</a>'],
['	Café Rural Seis Valles.	'	,	14.837812,-88.784949	,	'	<span class=titulomap>	Café Rural Seis Valles.	</span><br>	<a href="https://maps.google.com/maps?q=14.837812,-88.784949"	> LLÉVAME HACIA ESTE CAFÉ</a>'],
['	Sofys Cake	'	,	15.786811,-86.781886	,	'	<span class=titulomap>	Sofys Cake	</span><br>	<a href="https://maps.google.com/maps?q=15.786811,-86.781886"	> LLÉVAME HACIA ESTE CAFÉ</a>'],
['	Cafetano 1	'	,	14.0931209,-87.1814592	,	'	<span class=titulomap>	Cafetano 1	</span><br>	<a href="https://maps.google.com/maps?q=14.0931209,-87.1814592"	> LLÉVAME HACIA ESTE CAFÉ</a>'],
['	Cafetano 2	'	,	14.1058776,-87.1718192	,	'	<span class=titulomap>	Cafetano 2	</span><br>	<a href="https://maps.google.com/maps?q=14.1058776,-87.1718192"	> LLÉVAME HACIA ESTE CAFÉ</a>'],
['	Cafeteria la Sierra	'	,	14.1040487,-87.2041951	,	'	<span class=titulomap>	Cafeteria la Sierra	</span><br>	<a href="https://maps.google.com/maps?q=14.1040487,-87.2041951"	> LLÉVAME HACIA ESTE CAFÉ</a>'],
['	Don Cafe HN	'	,	14.1009254,-87.1827243	,	'	<span class=titulomap>	Don Cafe HN	</span><br>	<a href="https://maps.google.com/maps?q=14.1009254,-87.1827243"	> LLÉVAME HACIA ESTE CAFÉ</a>'],
['	El Dorao Cafe	'	,	14.9660839,-88.0266113	,	'	<span class=titulomap>	El Dorao Cafe	</span><br>	<a href="https://maps.google.com/maps?q=14.9660839,-88.0266113"	> LLÉVAME HACIA ESTE CAFÉ</a>'],
['	Finca Margarita	'	,	13.937157,-87.294157	,	'	<span class=titulomap>	Finca Margarita	</span><br>	<a href="https://maps.google.com/maps?q=13.937157,-87.294157"	> LLÉVAME HACIA ESTE CAFÉ</a>'],
['	Ivos Cafe	'	,	14.9431137,-88.0371392	,	'	<span class=titulomap>	Ivos Cafe	</span><br>	<a href="https://maps.google.com/maps?q=14.9431137,-88.0371392"	> LLÉVAME HACIA ESTE CAFÉ</a>'],
['	Kaldis Coffee Shop	'	,	14.767218,-88.777556	,	'	<span class=titulomap>	Kaldis Coffee Shop	</span><br>	<a href="https://maps.google.com/maps?q=14.767218,-88.777556"	> LLÉVAME HACIA ESTE CAFÉ</a>'],
['	Leyendas Cafe	'	,	14.8528531,-85.8996783	,	'	<span class=titulomap>	Leyendas Cafe	</span><br>	<a href="https://maps.google.com/maps?q=14.8528531,-85.8996783"	> LLÉVAME HACIA ESTE CAFÉ</a>'],
['	Mopitos	'	,	14.1009777,-87.176352	,	'	<span class=titulomap>	Mopitos	</span><br>	<a href="https://maps.google.com/maps?q=14.1009777,-87.176352"	> LLÉVAME HACIA ESTE CAFÉ</a>'],
['	Nicolatis	'	,	14.076331,-87.2037497	,	'	<span class=titulomap>	Nicolatis	</span><br>	<a href="https://maps.google.com/maps?q=14.076331,-87.2037497"	> LLÉVAME HACIA ESTE CAFÉ</a>'],
['	OH CAFE	'	,	14.4595223,-87.6396266	,	'	<span class=titulomap>	OH CAFE	</span><br>	<a href="https://maps.google.com/maps?q=14.4595223,-87.6396266"	> LLÉVAME HACIA ESTE CAFÉ</a>'],
['	Plaza Cafe Choluteca	'	,	13.312383,-87.177742	,	'	<span class=titulomap>	Plaza Cafe Choluteca	</span><br>	<a href="https://maps.google.com/maps?q=13.312383,-87.177742"	> LLÉVAME HACIA ESTE CAFÉ</a>'],
['	Plaza Cafe Danli	'	,	14.027201,-86.578781	,	'	<span class=titulomap>	Plaza Cafe Danli	</span><br>	<a href="https://maps.google.com/maps?q=14.027201,-86.578781"	> LLÉVAME HACIA ESTE CAFÉ</a>'],
['	Plaza Cafe la ceiba	'	,	15.771387,-86.791725	,	'	<span class=titulomap>	Plaza Cafe la ceiba	</span><br>	<a href="https://maps.google.com/maps?q=15.771387,-86.791725"	> LLÉVAME HACIA ESTE CAFÉ</a>'],
['	Plaza Cafe Tegucigalpa	'	,	14.0772005,-87.2043771	,	'	<span class=titulomap>	Plaza Cafe Tegucigalpa	</span><br>	<a href="https://maps.google.com/maps?q=14.0772005,-87.2043771"	> LLÉVAME HACIA ESTE CAFÉ</a>'],




  ];

  var coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  var opciones = {
    center: coords,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var mapa = new google.maps.Map(document.getElementById("map"), opciones);

  var marcador = new google.maps.Marker({
    position: coords,
    map: mapa,
    title: ":D"
  });

  var numerofinal = 0;

  var listaorigenes = ["	Aroma Cafe	"	,
"	Barista Corner	"	,
"	Café Costello	"	,
"	Café Don Napo	"	,
"	Café Rural Seis Valles.	"	,
"	Sofys Cake	"	,
"	Cafetano 1	"	,
"	Cafetano 2	"	,
"	Cafeteria la Sierra	"	,
"	Don Cafe HN	"	,
"	El Dorao Cafe	"	,
"	Finca Margarita	"	,
"	Ivos Cafe	"	,
"	Kaldis Coffee Shop	"	,
"	Leyendas Cafe	"	,
"	Mopitos	"	,
"	Nicolatis	"	,
"	OH CAFE	"	,
"	Plaza Cafe Choluteca	"	,
"	Plaza Cafe Danli	"	,
"	Plaza Cafe la ceiba	"	,
"	Plaza Cafe Tegucigalpa	"	


  ];




  var service = new google.maps.DistanceMatrixService;
  service.getDistanceMatrix({
      origins: [coords],
      destinations: [{lat:	14.160916	,lng:	-88.037382	},
{lat:	15.4985678	,lng:	-88.0387853	},
{lat:	15.5387216	,lng:	-88.0384576	},
{lat:	14.1647206	,lng:	-88.0340019	},
{lat:	14.837812	,lng:	-88.784949	},
{lat:	15.786811	,lng:	-86.781886	},
{lat:	14.0931209	,lng:	-87.1814592	},
{lat:	14.1058776	,lng:	-87.1718192	},
{lat:	14.1040487	,lng:	-87.2041951	},
{lat:	14.1009254	,lng:	-87.1827243	},
{lat:	14.9660839	,lng:	-88.0266113	},
{lat:	13.937157	,lng:	-87.294157	},
{lat:	14.9431137	,lng:	-88.0371392	},
{lat:	14.767218	,lng:	-88.777556	},
{lat:	14.8528531	,lng:	-85.8996783	},
{lat:	14.1009777	,lng:	-87.176352	},
{lat:	14.076331	,lng:	-87.2037497	},
{lat:	14.4595223	,lng:	-87.6396266	},
{lat:	13.312383	,lng:	-87.177742	},
{lat:	14.027201	,lng:	-86.578781	}

      ],
      travelMode: 'DRIVING',
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false
    },
    function(response, status) {
      if (status !== 'OK') {
        alert('Error was: ' + status);
      } else {
        var originList = response.originAddresses;
        var destinationList = response.destinationAddresses;
        var outputDiv = document.getElementById('directorio');
        outputDiv.innerHTML = '';


        for (var i = 0; i < originList.length; i++) {
          var results = response.rows[0].elements;
          for (var j = 0; j < results.length; j++) {
            keyvalue[listaorigenes[j]]=results[j].distance.value;
          }
          numerofinal = j;
        }
      }


    });


  var services = new google.maps.DistanceMatrixService;
  services.getDistanceMatrix({
origins: [coords],
      destinations: [{lat:	15.771387	,lng:	-86.791725	},
{lat:	14.0772005	,lng:	-87.2043771	}


      ],
      travelMode: 'DRIVING',
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false
    },
    function(response, status) {
      if (status !== 'OK') {
        alert('Error was: ' + status);
      } else {
        var originList = response.originAddresses;
        var destinationList = response.destinationAddresses;
        var outputDiv = document.getElementById('directorio');



        for (var i = 0; i < originList.length; i++) {
          var results = response.rows[0].elements;

          for (var j = 0; j < results.length; j++) {

            keyvalue[listaorigenes[j + numerofinal]] = results[j].distance.value;



          }
          keysSorted = Object.keys(keyvalue).sort(function(a,b){return keyvalue[a]-keyvalue[b]})

          for (var k = 0; k < keysSorted.length; k++) {
            km = keyvalue[keysSorted[k]]/1000;
            str = keysSorted[k].replace(/\W+/g, '');
       
              
       outputDiv.innerHTML += '<a class="buttondireccion" rel="modal:open" href="#' + str + '">' + keysSorted[k] + '  ' + km + 'km</a><br>';
          }
            
        }
      }
    });
    
    
    
    //
    
    


  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: mapa,
      icon: 'img/mapa.png'
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][3]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }

}

function onError(err) {
  console.log("codigo de err:" + err.code + "  msj=" + err.message);
}