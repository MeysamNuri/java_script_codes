var map, region, regionCoordinates;

const firstLattitude = 35.827;
const firstLongitude = 51.12;
const latShift = 0.007964;
const halfLatshift = latShift / 2;
const lngShift = 0.009841;
const halfLngShift = lngShift / 2;
const numOfRows = 32;
const numOfColumns = 50;
const maxRow = numOfRows - 1;
const maxColumn = numOfColumns - 1;
const maxEntry = numOfRows * numOfColumns - 1;
const regionsArray = [];
const inputX = document.getElementById('x');
const warning = document.getElementById('p');
const mapElement = document.getElementById('map');
const showDotsElem = document.getElementById('showDots')

let coordinates;
let lat = firstLattitude;
let lng = firstLongitude;
let markers = [];
// let dot_makers = [];
let polygons = [];
let prevX = 0;

var IMAGE_DOMAIN = 'https://images.daapapp.com/';
/**
 *
 * creating png for render section number instead of render text label
 * for performance issue
 *
 *
 */
// create new TextImage object with customize style
var style = {
   align: 'center',
   color: 'red',
   size: 10,
   fontFamily:'IRANSansWeb'
};
var textImage = TextImage(style);
var images={}
function createImages() {
   for (let i=0;i<numOfColumns * numOfRows;i++){
      // convert text message to image element
      // var img = textImage.toImage('section_'+String(i)+'.png');
      var name= String(i)
      // convert text message to base64 dataURL
      var data = textImage.toDataURL(name);
      images[name]=data
   }
}
createImages()
//make a 2d array
for (let i = 0; i < numOfColumns; i++) {
   regionsArray[i] = [];
}

//initialize coordinates
for (let i = 0; i < numOfColumns; i++) {
   for (let j = 0; j < numOfRows; j++) {
      regionsArray[i][j] = {
         lat, lng, valid: true
      }
      lat -= latShift;
   }
   lat = firstLattitude
   lng += lngShift;
}

pruneMargines();
addRegions();

setCoordinates(true);

//-------functions--------
function initMap() {
   let coordLat;
   let coordLng;

   if (coordinates.valid) {
      coordLat = coordinates.lat;
      coordLng = coordinates.lng;
   } else {
      coordLat = regionsArray[8][9].lat;
      coordLng = regionsArray[8][9].lng;
      inputX.value = 458;
   }

   map = new google.maps.Map(mapElement, {
      center: { lat: coordLat, lng: coordLng },
      zoom: 14
   });

   // warning.style.display = "none";


   fillMap();
}

function fillMap() {
   let coordLat;
   let coordLng;
   let counter = 0;
   for (let i = 0; i < numOfColumns * numOfRows; i++) {
      const coordValues = mapTo2D(i);
      coordLat = regionsArray[coordValues[0]][coordValues[1]].lat;
      coordLng = regionsArray[coordValues[0]][coordValues[1]].lng;
      const validity = regionsArray[coordValues[0]][coordValues[1]].valid;

      regionCoordinates = [
         { lat: coordLat + halfLatshift, lng: coordLng - halfLngShift },
         { lat: coordLat + halfLatshift, lng: coordLng + halfLngShift },
         { lat: coordLat - halfLatshift, lng: coordLng + halfLngShift },
         { lat: coordLat - halfLatshift, lng: coordLng - halfLngShift },
         { lat: coordLat + halfLatshift, lng: coordLng - halfLngShift }
      ];

      // Construct the polygon.
      polygons[counter] = new google.maps.Polygon({
         paths: regionCoordinates,
         strokeColor: validity ? '#ff0000' : 'rgb(150, 150, 150)',
         strokeOpacity: validity ? .5 : .2,
         strokeWeight: 0.5,
         fillColor: 'rgb(255, 0, 0)',
         fillOpacity: 0,
         map: map
      });
      /**
       * section number
       */
      markers[counter] = new google.maps.Marker({
         position: { lat: coordLat, lng: coordLng },
         icon: images[i],
        map:map
      });

      // dot_markers[counter] = new google.maps.Marker({
      //    position: { lat: coordLat, lng: coordLng },
      //    label: {
      //       text: String(counter++),
      //       color: 'red'
      //    },
      //    icon: {
      //       path: google.maps.SymbolPath.CIRCLE,
      //       scale: 0
      //    }
      // });
   }
}

function pruneMargines() {
   const boolean = true;

   changeCoordinates(regionsArray, [0, 0], [15, 8], boolean);
   changeCoordinates(regionsArray, [16, 0], [27, 2], boolean);
   changeCoordinates(regionsArray, [10, 18], [0, maxRow], boolean);
   changeCoordinates(regionsArray, [0, 17], [3, 15], boolean);
   changeCoordinates(regionsArray, [0, 12], [0, 14], boolean);
   changeCoordinates(regionsArray, [1, 14], [1, 14], boolean);
   changeCoordinates(regionsArray, [11, maxRow], [16, 23], boolean);
   changeCoordinates(regionsArray, [11, 22], [14, 22], boolean);
   changeCoordinates(regionsArray, [11, 22], [11, 20], boolean);
   changeCoordinates(regionsArray, [17, maxRow], [19, 25], boolean);
   changeCoordinates(regionsArray, [20, maxRow], [21, 27], boolean);
   changeCoordinates(regionsArray, [22, maxRow], [30, 28], boolean);
   changeCoordinates(regionsArray, [35, maxRow], [maxColumn, 27], boolean);
   changeCoordinates(regionsArray, [39, 26], [maxColumn, 14], boolean);
   changeCoordinates(regionsArray, [maxColumn, 0], [43, 6], boolean);
   changeCoordinates(regionsArray, [46, 7], [maxColumn, 8], boolean);
   changeCoordinates(regionsArray, [16, 5], [25, 3], boolean);
   changeCoordinates(regionsArray, [26, 3], [27, 4], boolean);
   changeCoordinates(regionsArray, [28, 0], [maxColumn, 1], boolean);
   changeCoordinates(regionsArray, [maxColumn, 9], [maxColumn, 9], boolean);
   changeCoordinates(regionsArray, [maxColumn - 1, 13], [maxColumn, 13], boolean);
   changeCoordinates(regionsArray, [43, 7], [45, 7], boolean);
   changeCoordinates(regionsArray, [34, 31], [34, 31], boolean);
   changeCoordinates(regionsArray, [34, 28], [34, 28], boolean);
   changeCoordinates(regionsArray, [17, 24], [17, 26], boolean);
   changeCoordinates(regionsArray, [20, 26], [20, 26], boolean);
   changeCoordinates(regionsArray, [38, 8], [39, 8], boolean);
}

function addRegions() {
   const boolean = false;

   changeCoordinates(regionsArray, [9, 8], [15, 8], boolean);
   changeCoordinates(regionsArray, [39, 24], [39, 25], boolean);
   changeCoordinates(regionsArray, [31, 1], [38, 1], boolean);
   changeCoordinates(regionsArray, [39, 14], [39, 16], boolean);
   changeCoordinates(regionsArray, [0, 12], [3, 16], boolean);
   changeCoordinates(regionsArray, [4, 18], [11, 21], boolean);
   changeCoordinates(regionsArray, [16, 23], [30, 31], boolean);
   changeCoordinates(regionsArray, [34, 30], [40, 31], boolean);
   changeCoordinates(regionsArray, [34, 28], [39, 26], boolean);
   changeCoordinates(regionsArray, [43, 6], [47, 8], boolean);
   changeCoordinates(regionsArray, [41, 1], [42, 1], boolean);
   changeCoordinates(regionsArray, [35, 0], [35, 0], boolean);
   changeCoordinates(regionsArray, [31, 0], [31, 0], boolean);
   changeCoordinates(regionsArray, [32, 0], [30, 1], boolean);
   changeCoordinates(regionsArray, [26, 2], [27, 4], boolean);
   changeCoordinates(regionsArray, [22, 3], [25, 5], boolean);
   changeCoordinates(regionsArray, [19, 5], [21, 5], boolean);
   changeCoordinates(regionsArray, [22, 3], [25, 5], boolean);
   changeCoordinates(regionsArray, [16, 5], [21, 5], boolean);
   changeCoordinates(regionsArray, [15, 6], [15, 7], boolean);
   changeCoordinates(regionsArray, [8, 8], [8, 8], boolean);
   changeCoordinates(regionsArray, [3, 8], [6, 8], boolean);
   changeCoordinates(regionsArray, [39, 14], [40, 25], boolean);
   changeCoordinates(regionsArray, [41, 25], [41, 25], boolean);
   changeCoordinates(regionsArray, [41, 17], [42, 20], boolean);
   changeCoordinates(regionsArray, [38, 8], [39, 8], boolean);
   changeCoordinates(regionsArray, [48, 13], [49, 13], boolean);
}

function changeCoordinates(array, from, to, del) {
   const order1 = to[0] > from[0];
   const order2 = to[1] > from[1];

   for (let i = (order1 ? from[0] : to[0]); i <= (order1 ? to[0] : from[0]); i++)
      for (let j = (order2 ? from[1] : to[1]); j <= (order2 ? to[1] : from[1]); j++)
         array[i][j].valid = !del;
}

function setCoordinates(initialize) {
   let x;

   if (!inputX.value) {
      inputX.value = 0;
   }
   x = inputX.value;

   if (x > maxEntry) {
      x = maxEntry;
      inputX.value = x;
   }

   const twoDValues = mapTo2D(x);
   coordinates = regionsArray[twoDValues[0]][twoDValues[1]];

   // if (!coordinates.valid)
   //    warning.style.display = 'block';
   // else
   //    warning.style.display = 'none';

   if (!initialize)
      changeMap(x);
}

function mapTo2D(number) {
   let yValue = Math.floor(number / numOfColumns);
   let xValue = number % numOfColumns;

   return [xValue, yValue];
}

function changeMap(x) {
   const coordLat = coordinates.lat;
   const coordLng = coordinates.lng;

   const centerpoint = new google.maps.LatLng(coordLat, coordLng);

   map.panTo(centerpoint);

   polygons[prevX].setOptions({ fillOpacity: 0 });
   polygons[x].setOptions({ fillOpacity: .2 });
   prevX = x;
   // let strokeColor;
   // let fillColor;

   // if (coordinates.valid) {
   //    strokeColor = '#ff0000';
   //    fillColor = 'rgba(255, 0, 0, .3)';
   // } else {
   //    strokeColor = 'rgb(150, 150, 150)'
   //    fillColor = 'rgba(150, 150, 150, .5)';
   // }

   // map.setCenter(centerpoint);
   // map.setZoom(14);

   // regionCoordinates = [
   //    { lat: coordLat + halfLatshift, lng: coordLng - halfLngShift },
   //    { lat: coordLat + halfLatshift, lng: coordLng + halfLngShift },
   //    { lat: coordLat - halfLatshift, lng: coordLng + halfLngShift },
   //    { lat: coordLat - halfLatshift, lng: coordLng - halfLngShift },
   //    { lat: coordLat + halfLatshift, lng: coordLng - halfLngShift }
   // ];

   // region.setPath(regionCoordinates);
   // region.setOptions({
   //    paths: regionCoordinates,                                                                  
   //    strokeColor,
   //    strokeOpacity: 0.8,
   //    strokeWeight: 2,
   //    fillColor,
   //    fillOpacity: 0.35
   // })
}

function inputChange(e) {
   // console.log('log::inputChange',e);
   const keycode = e.which;
   if ((keycode < 48 || keycode > 57) && keycode > 31 && keycode != 127)
      e.preventDefault();

   if (e.which == 13)
      setCoordinates(false);
}

const data = []
var dotted
const getMarker = [];
var elem = document.getElementById("myBar");

async function getLocations() {
   await axios.get('https://api.daapapp.com/api/v1/businesses/list/')
  .then(function (response) {
     response.data.forEach(item => {
       if(item == null ) return;
       data.push(Object.assign({},item,{latitude:parseFloat(item.latitude),longitude:parseFloat(item.longitude)}))
     })
  })
  
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
  });
}

getLocations()
move();
function printItem(selectedStatusItem){
   //  ================ create infowindow of google map =============================
   var infowindow = new google.maps.InfoWindow({
      maxWidth: 200,
      infoBoxClearance: new google.maps.Size(1, 1),
      disableAutoPan: false
    });

   //  ================ create marker =============================
   data.filter(function(it){
      if(selectedStatusItem==='all'){
         return it
      }else if(selectedStatusItem===it.status){
         return it
      }
   }).forEach(item => {
      var status=item.status;
      var icon;
      if(status==='active'){
         icon={
            url: IMAGE_DOMAIN + item.marker_img,
            scaledSize: new google.maps.Size(42, 42),
            // // The origin for this image is (0, 0).
            // origin: new google.maps.Point(0, 0),
            // // The anchor for this image is the base of the flagpole at (0, 32).
            // anchor: new google.maps.Point(0, 0)
         }
      } 
      else if(status==='inactive'){
         icon ='assets/images/deactive.png';
      }
      else if(status==='pending'){
         icon ='assets/images/pending.png';
      }
       dotted = new google.maps.Marker({
         icon:icon,
         position: {lat: item.latitude, lng: item.longitude},
         title: item.shop_name,
         map: map,
         status:item.status
       });
       getMarker.push(dotted);
      //  ================ show info when dotted clicked =============================
       google.maps.event.addListener(dotted, 'click', (function(dotted) {
         return function() {
           if ( item.shop_name !== "" ) {
             infowindow.setContent('<div class="content" id="content' +
               '" style="max-height:300px; font-size:12px;"><h3>:' +item.name + '</h3>'+ '<p>'+ item.shop_name +'</p>' + '</div>');
             infowindow.open(map, dotted);
           }
           console.log('senf :: ',item)
         }
       })(dotted));
   })
}

function toggleNumbers(th) {
   if (th.checked){
      markers.forEach(x => {
         x.setMap(map);
      })}
   else{
      // markers.forEach(x => {
      //    x.setMap(null);
      // })
      markers=[]
   }
}
//  ================ check box toggle =========================
function toggleBusinesses(th,status='all') {
   if (th){
      if(elem.style.width = '100%') printItem(status);
   }
   else
      getMarker.forEach(x => {
         if(status==='all'){
            x.setMap('all')
         }else if(status===x.status){
      
            x.setMap('all');
         }
      })
}
//  ================ progress bar loading =====================
function move() {
   var i = 0;
  if (i == 0) {
    i = 1;
    var width = 0;
    var id = setInterval(() =>{
      if (width >= 100) {
         clearInterval(id);
         i = 0;
         elem.style.display = 'none'
         document.getElementById('showDots').disabled = false;
         document.getElementById('showActiveDots').disabled = false;
         document.getElementById('showInActiveDots').disabled = false;
         document.getElementById('showPendingDots').disabled = false;
         
      
      } else {
         width++;
         elem.style.width = width + "%";
         elem.innerHTML = "لود اطلاعات : " + width  + "%";
       }
      // console.log(i)
    }, 15);
  }
}