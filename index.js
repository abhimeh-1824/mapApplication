// call back function
function initMap(){
    // location
    var locationObj = {
        center:{lat:20.5937,lng:78.9629},
        zoom:8
    }

//  new map 
map = new google.maps.Map(document.getElementById('map'),locationObj);
// click on map location

google.maps.event.addListener(map,"click",(event)=>{
    console.log(event)
    addMarker({location:event.latLng});
})

// marker 
// const marker = new google.maps.Marker({
//     position: {lat: 20.5937, lng: 78.9629 },
//     map: map,
        // icon: link of icon btn
//   });

  

//   marker.addListener("mouseover",()=>{
//       detailsMarker.open(map,marker)
//   })

  function addMarker(props)
  {
    const marker = new google.maps.Marker({
        position: props.location,
        map: map,
      });

      if(props.content)
      {
        const detailsMarker = new google.maps.InfoWindow({
            content:props.content
        });

        marker.addListener("mouseover",()=>{
            detailsMarker.open(map,marker)
        })
      }

  }

//   addMarker({
//       location:{
//         lat: 20.9320, lng: 77.7523 
//       },
//       content:`<h2>Amravati</h2>`
//   });

  addMarker({
    location:{
      lat: 22.7196, lng: 75.8577 
    },
    content:`<h2>Indore</h2>`
});
addMarker({
    location:{
      lat: 21.1458, lng: 79.0882
    },
    content:`<h2>Nagpur</h2>`
})
addMarker({
    location:{
      lat: 20.7453, lng: 78.6022 
    },
    content:`<h2>wardha</h2>`
})

}





// function initMap() {
//     // The location of Uluru
//     const uluru = { lat: -25.344, lng: 131.031 };
//     // The map, centered at Uluru
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 4,
//       center: uluru,
//     });
//     // The marker, positioned at Uluru
//     const marker = new google.maps.Marker({
//       position: uluru,
//       map: map,
//     });
//   }