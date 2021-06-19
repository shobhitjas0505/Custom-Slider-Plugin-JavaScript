function pageOnLoad() {
  console.log("page on load ::");
  makeAllSlider();
}

function makeAllSlider() {
  let sliderDiv1 = document.getElementById("clientSlider1");
  let sliderDiv2 = document.getElementById("clientSlider2");
  let sliderConfig1 = {
    parent: sliderDiv1,
    route: 5,
    type: "HORIZONTAL",
  };

  let sliderConfig2 = {
    parent: sliderDiv2,
    route: 5,
    type: "VERTICAL",
  };
  let sliderObj1 = new Customslider(sliderConfig1);
  let sliderObj2 = new Customslider(sliderConfig2);
  
}
pageOnLoad();
