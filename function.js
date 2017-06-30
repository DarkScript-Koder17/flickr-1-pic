var apikey = "af1146a2df5582ec7a4b02c644eb2c1f"; // you can change your apikey here
function getlink(photo_id){
    var xml = new XMLHttpRequest();
    xml.open("GET", "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=" + apikey + "&format=json&nojsoncallback=1&photo_id=" + photo_id, false);
    xml.send();
    var response = JSON.parse(xml.response);
    var link = response["sizes"]["size"][response["sizes"]["size"].length - 1]["source"];
    return link;
}
console.log(getlink(document.URL.split("/")[5]))
