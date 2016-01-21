var data = require("./products.json")


// #1 for loop to display all items that have kind = shopping#product
for (var i = 0; i <= data["items"].length - 1; i++) {
	if (data["items"][i].kind === "shopping#product") {
		console.log(i + " - " + data["items"][i].product.title);
	}
}
//There are 25 items in the array with a "kind" of "shopping#product". This information is also contained in the currentItemCount element.

//#2 for loop to display all items with a backorder availability in inventories.
for (var i = 0; i <= data["items"].length - 1; i++) {
	if (data["items"][i].product.inventories[0].availability === "backorder") {
		console.log(i + " - " + data["items"][i].product.title);
		}
	}

//#3 for loop to display all items with multiple image links
for (var i = 0; i <= data["items"].length - 1; i++) {
	if (data["items"][i].product.images.length > 1) {
		console.log(i + " - " + data["items"][i].product.title);
	}
}	

//#4 for loop to display all items that are Canon products
for (var i = 0; i <= data["items"].length - 1; i++) {
	if (data["items"][i].product.brand == "Canon") {
		console.log(i + " - " + data["items"][i].product.title);
	}
}

//#5 for loop to display all items that have a product author name of eBay and are brand Canon
for (var i = 0; i <= data["items"].length - 1; i++) {
	if (data["items"][i].product.author.name.indexOf('eBay') >= 0 && data["items"][i].product.brand == "Canon") {
		console.log(i + " - " + data["items"][i].product.title);
	}
}

//#6 for loop to print all products with their brand, price and a image link
for (var i = 0; i <= data["items"].length - 1; i++) {
	console.log("Brand: " + data["items"][i].product.brand); 
	console.log("Price: $" + data["items"][i].product.inventories[0].price);
	console.log("Image Link: " + data["items"][i].product.images[0].link);
	}


//console.log(data["items"]);