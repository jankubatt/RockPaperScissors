$("#stone").hover(
  () => {
    $("#stone").animate({ "margin-top": "30%" });
  },
  () => {
    $("#stone").animate({ "margin-top": "40%" });
  }
);

$("#paper").hover(
  () => {
    $("#paper").animate({ "margin-top": "30%" });
  },
  () => {
    $("#paper").animate({ "margin-top": "40%" });
  }
);

$("#shears").hover(
  () => {
    $("#shears").animate({ "margin-top": "30%" });
  },
  () => {
    $("#shears").animate({ "margin-top": "40%" });
  }
);

$("#stone").click(function () {
  var oponent = Math.floor(Math.random() * 3);
  var user = 0;

  $(".items").css("border", "3px solid black");

  switch (oponent) {
    case 0:
      $("#user").text("Tie");
      $("#stone").css("border", "3px solid red");
      break;

    case 1:
      $("#user").text("Lost");
      $("#paper").css("border", "3px solid red");
      break;

    case 2:
      $("#user").text("Won");
      $("#shears").css("border", "3px solid red");
      break;
  }
});

$("#paper").click(function () {
  $(".items").css("borded", "3px solid black");
  var oponent = Math.floor(Math.random() * 3);
  var user = 1;

  $(".items").css("border", "3px solid black");

  switch (oponent) {
    case 0:
      $("#user").text("Won");
      $("#stone").css("border", "3px solid red");
      break;

    case 1:
      $("#user").text("Tie");
      $("#paper").css("border", "3px solid red");
      break;

    case 2:
      $("#user").text("Lost");
      $("#shears").css("border", "3px solid red");
      break;
  }
});

$("#shears").click(function () {
  $(".items").css("borded", "3px solid black");
  var oponent = Math.floor(Math.random() * 3);
  var user = 2;

  $(".items").css("border", "3px solid black");

  switch (oponent) {
    case 0:
      $("#user").text("Lost");
      $("#stone").css("border", "3px solid red");
      break;

    case 1:
      $("#user").text("Won");
      $("#paper").css("border", "3px solid red");
      break;

    case 2:
      $("#user").text("Tie");
      $("#shears").css("border", "3px solid red");
      break;
  }
});
