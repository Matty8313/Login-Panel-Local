const database = []
let FColor
function addDatabase(){
	let r = {
	Name:grab("getName"),
	Nick:grab("getNick"),
	Password:grab('getPassword'),
	FavouriteColor:FColor,
	Description:grab('description'),
	}
	database.push(r)
	localStorage.setItem('DATA', JSON.stringify(database));
	grab2('getName')
	grab2("getNick")
	grab2('getPassword')
	grab2('description')

}
function grab(y){
	let x = document.getElementById(y).value
	return x
}
function grab2(y){
	let x = document.getElementById(y).value = ""
	return x
}
function takeID(y){
	let x = document.getElementById(y)
	return x
}

function showMeName(){
	let databaser = JSON.parse(localStorage.getItem("DATA"))
	let isGood
	for(let i = 0; i < databaser.length; i++){
		if(databaser[i].Nick === grab("showName") && databaser[i].Password  === grab("PassLog")){
			//console.log(database[i].Nick, database[i].Password)
				
				isGood = true
				console.log("loggIN")
				takeID('LogginPanel').style.display = 'none'
				takeID('Name').innerText = "Hello " + databaser[i].Name + "!"
				takeID('Nick').innerText = "Nick: " + databaser[i].Nick
				takeID('Description').innerText = "Description: " + databaser[i].Description
				takeID('Logged').style.backgroundColor = databaser[i].FavouriteColor
				takeID('Logged').style.width = "80vw"
				
		}
	}
	if(isGood !== true){
		takeID('failLog').style.display = "block"
		console.log("BadLogg")
	}
}

/*	grab2('getName')
	grab2("getNick")
	grab2('getPassword')
	grab2('getColor')*/
	function closeFail(){
		takeID('failLog').style.display = "none"
	}
function chooseColor(){
	takeID('btn-1').style.border = "none"
	takeID('btn-2').style.border = "none"
	takeID('btn-3').style.border = "none"
	takeID('btn-4').style.border = "none"
	takeID('btn-5').style.border = "none"
	takeID(this.event.target.id).style.border = "3px solid #19e6a3"
	FColor = window.getComputedStyle( takeID(this.event.target.id ,null)).getPropertyValue('background-color');  
}