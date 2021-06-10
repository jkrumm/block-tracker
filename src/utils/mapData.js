const _ = require("lodash");

const sorter = (a, b) => {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
};

export default function mapData(data) {
  const mappedData = {
    initiated: [],
    moving: [],
    arrived: [],
  };

  data.forEach((item) => {
    item.updates = item.updates.sort(sorter);
    mappedData[item.updates.pop().type.toString()].push(item);
  });

  console.log(data);
  console.log(mappedData);
  return mappedData;
}
