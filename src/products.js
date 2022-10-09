var products = [
  {
    id: "100",
    name: "iPhone 4S",
    brand: "Apple",
    os: "iOS",
    flag: 0,
  },
  {
    id: "101",
    name: "Moto X",
    brand: "Motorola",
    os: "Android",
    flag: 0,
  },
  {
    id: "102",
    name: "iPhone 6",
    brand: "Apple",
    os: "iOS",
    flag: 0,
  },
  {
    id: "103",
    name: "Samsung Galaxy S",
    brand: "Samsung",
    os: "Android",
    flag: 0,
  },
  {
    id: "104",
    name: "Google Nexus",
    brand: "ASUS",
    os: "Android",
    flag: 0,
  },
  {
    id: "105",
    name: "Surface",
    brand: "Microsoft",
    os: "Windows",
    flag: 0,
  },
];
var a = [];
function abc(data) {
  var c = 0;
  s =
    "<tr><th>ID:</th> <th>Name:</th> <th>Brand:</th> <th>Operating System:</th> <th>Remove:</th></tr>";
  s = data.forEach((e) => {
    s +=
      "<tr><td>" +
      e.id +
      "</td><td>" +
      e.name +
      "</td><td>" +
      e.brand +
      "</td><td>" +
      e.os +
      "</td><td><button>X</button></td></tr>";
    c++;
    $("#tbl").html(s);
    $("table").css("border", "1px");
    $("#tbl").css("border", "solid");
    $("#tbl").css("width", "500px");
    $("#tbl").css("border-width", "2px");
    $("tr:even").css("background", "lightgrey");
    $("tr:odd").css("background", "darkgrey");
  });
}
$(document).ready(function () {
  abc(products);

  $("#os").change(function () {
    i = 0;
    var value = $(this).val();
    var a = products.filter(function (e) {
      return value == e.os;
    });
    abc(a);
  });

  $("#brand").change(function () {
    var value = $(this).val();
    a = products.filter(function (e) {
      return value == e.brand;
    });
    abc(a);
  });

  $("button").on("click", function () {
    $(this).parent().parent().hide();
  });

  $("#searchByNameOrID").keyup(function(){
	var inp = $(this).val().toLowerCase();
	a=products.filter(function(e){
		return inp==e.id || inp==e.name.toLowerCase() ;
	})
	abc(a);
  });
});
