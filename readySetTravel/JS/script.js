// let toursImageHomePhoto1 = "IMG/tour-mountainHiking.jpg";
// let toursHomeInfo1 = "Alps Mountain Hiking Tour";
// let toursHomeStops1 = "4 days | 10 stops";
// let toursHomePrice1 = "$1,500";

// Home tour section

let toursCardHome1 = {
  toursImageHomePhoto1: "IMG/tour-mountainHiking.jpg",
  toursHomeInfo1: "Alps Mountain Hiking Tour",
  toursHomeStops1: "4 days | 10 stops",
  toursHomePrice1: "$1,500",
};

let toursCardHome2 = {
  toursImageHomePhoto2: "IMG/tour-snorkel.jpg",
  toursHomeInfo2: "Snorkel the Barrier Reef Tour",
  toursHomeStops2: "2 days | 2 stops",
  toursHomePrice2: "$1,000",
};

let toursCardHome3 = {
  toursImageHomePhoto3: "IMG/tour-pyramids.jpg",
  toursHomeInfo3: "Tour the Pyramids on Camelback",
  toursHomeStops3: "2 days | 2 stops",
  toursHomePrice3: "2,000",
};

document.querySelector("#toursImageHomePhoto1").src =
  toursCardHome1.toursImageHomePhoto1;
document.querySelector("#toursHomeInfo1").innerHTML =
  toursCardHome1.toursHomeInfo1;
document.querySelector("#toursHomeStops1").innerHTML =
  toursCardHome1.toursHomeStops1;
document.querySelector("#toursHomePrice1").innerHTML =
  toursCardHome1.toursHomePrice1;

document.querySelector("#toursImageHomePhoto2").src =
  toursCardHome2.toursImageHomePhoto2;
document.querySelector("#toursHomeInfo2").innerHTML =
  toursCardHome2.toursHomeInfo2;
document.querySelector("#toursHomeStops2").innerHTML =
  toursCardHome2.toursHomeStops2;
document.querySelector("#toursHomePrice2").innerHTML =
  toursCardHome2.toursHomePrice2;

document.querySelector("#toursImageHomePhoto3").src =
  toursCardHome3.toursImageHomePhoto3;
document.querySelector("#toursHomeInfo3").innerHTML =
  toursCardHome3.toursHomeInfo3;
document.querySelector("#toursHomeStops3").innerHTML =
  toursCardHome3.toursHomeStops3;
document.querySelector("#toursHomePrice3").innerHTML =
  toursCardHome3.toursHomePrice3;
