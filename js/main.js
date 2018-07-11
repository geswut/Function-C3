function cars (name, image, price) {
  this.name = name;
  this.image = image;
  this.price = price;
}

var Lamborghini = new cars ("Lamborghini","img/car2.png", "$120,000.00")
var Jeep = new cars ("Jeep", "img/car5.png", "$90,000.00")
var Toyota = new cars ("Toyota", "img/car6.png", "$50,000.00")

var mycars = []

mycars.push(Lamborghini, Jeep, Toyota)

for (var i = 0; i < mycars.length; i++) {
  // var div = document.createElement ("div")
  var col = document.createElement ("div")
  var h3 = document.createElement ("h3")
  var img = document.createElement ("img")
  var h4 = document.createElement ("h4")
  var btn = document.createElement ("button")


  var carname = document.createTextNode(mycars[i].name)
  var carprice = document.createTextNode(mycars[i].price)
  var carbtn = document.createTextNode("Buy Now!")
  var image = mycars[i].image

  img.src = image
  h3.appendChild(carname)
  h4.appendChild(carprice)
  btn.appendChild(carbtn)

  col.className = "col-2"
  btn.className = "btn btn-warning"

  col.appendChild(h3)
  col.appendChild(img)
  col.appendChild(h4)
  col.appendChild(btn)

  document.getElementById("product").appendChild(col)
}

var namecar = document.createElement ("input")
var imagecar = document.createElement ("input")
var pricecar = document.createElement ("input")

var mycar = document.getElementById("mycar")

mycar.appendChild(namecar)
mycar.appendChild(pricecar)
mycar.appendChild(imagecar)

namecar.className = "cars"
pricecar.className = "cars"
imagecar.className = "cars"

function newcar() {
  var cn = namecar.value
  var ci = imagecar.value
  var cp = pricecar.value
  var moon = new cars (cn, ci, cp)
  mycars.push(moon)

  var col = document.createElement ("div")
  var h3 = document.createElement ("h3")
  var img = document.createElement ("img")
  var h4 = document.createElement ("h4")
  var btn = document.createElement ("button")

  var carname = document.createTextNode(mycars[i].name)
  var carprice = document.createTextNode(mycars[i].price)
  var carbtn = document.createTextNode("Buy Now!")
  var image = ci

  img.src = image
  h3.appendChild(carname)
  h4.appendChild(carprice)
  btn.appendChild(carbtn)

  col.className = "col-2"
  btn.className = "btn btn-warning"

  col.appendChild(h3)
  col.appendChild(img)
  col.appendChild(h4)
  col.appendChild(btn)

  document.getElementById("product").appendChild(col)
  remove()
}

function remove() {
  namecar.value = ""
  imagecar.value = ""
  pricecar.value = ""
}
