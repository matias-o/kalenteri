function initMap(){
  var hietsunSali = {lat: 60.172841, lng: 24.903181};
  var map = new google.maps.Map(
    document.getElementById('map'), {zoom 4, center: hietsunSali});
  var marker = new google.maps.Marker({position: hietsunSali, map: map});
}
