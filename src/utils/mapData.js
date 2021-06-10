const _ = require("lodash");

const sorter = (a, b) => {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
};

export default function mapData(data) {
  const mappedData = {
    initiated: [],
    moving: [],
    arrived: [],
    all: [],
  };

  data.forEach((item) => {
    item.updates = item.updates.sort(sorter);
    const latest = item.updates.pop();
    mappedData[latest.type.toString()].push({ ...item });
    mappedData.all.push({ ...item, ...latest });
  });

  /*
  var GEOCODING =
    "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
    position.coords.latitude +
    "%2C" +
    position.coords.longitude +
    "&language=en" +
    "&key=" +
    process.env.MAPS_API_KEY;

  $.getJSON(GEOCODING).done(function (location) {
    console.log(location);
  }); */

  return mappedData;
}
