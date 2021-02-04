/*
 Here is the info we'l need to change for each coffee.
       pic - Image src 
	   alt - Alt tag 
	   day - Day of week 
		name - Name of coffee
		color - Color
		desc - Description
*/

let myDate = new Date();
let myDay = "";
let today = "";
let coffee = "";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if(urlParams.has('day')){//use querystring data
    myDay = urlParams.get('day');
}else{//use date object
    myDay = myDate.getDay();
}

myDay = parseInt(myDay);

function coffeeTemplate(){
    let myReturn = "";

    myReturn += `
    
    <p>
    <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee">
   <strong id="coffee-highlight" class="feature">${coffee.day}'s Coffee Special:</strong>${coffee.day}'s daily coffee special is <strong>${coffee.name}</strong>${coffee.desc}
</p>

    <p><span class="${coffee.color}">${coffee.name}: </span>Small description of days coffee goes here</p>
    <p><span class="${coffee.color}">Enjoy a ${coffee.name}</span>!</p>
    
    `;


    return myReturn;
}

switch(myDay){

    case 0:
        today = "Sunday";
        coffee = {
            color:"#ff9900",
            name:"Pumpkin Spice Latte",
            pic:"images/pumpkin-spice-latte.jpg",
            alt:"A picture of a Pumpkin Spice Latte",
            day:"Sunday",
            desc:`Top off the end of your week, with one of falls classics - try with vanilla`

        };
    break;



    

    case 1:
        today = "Monday";
        coffee = {
            color:"brown",
            name:"Drip",
            pic:"images/drip.jpg",
            alt:"A picture of a Drip Coffee",
            day:"Monday ",
            desc:`Sometimes you just need the Drip to do the trick!`

        };
    break;


    case 2:
        today = "Tuesday";
        coffee = {
            color:"#cc9966",
            name:"Cold-Brew",
            pic:"images/cold-brew.jpg",
            alt:"A picture of a cold brew",
            day:"Tuesday ",
            desc:`Day number two deserves a cold one. On the House before 7:00am`

        };
    break;

    case 3:
        today = "Wednesday";
        coffee = {
            color:"pink",
            name:"Bubble Tea",
            pic:"images/bubble-tea.jpg",
            alt:"A picture of a Bubble Tea",
            day:"Wednesday ",
            desc:`Get bubbly, you're almost there! Extra flavor free`

        };
    break;

    case 4:
        today = "Thursday";
        coffee = {
            color:"#cc6633",
            name:"Caramel-latte",
            pic:"images/caramel-latte.jpg",
            alt:"A picture of a Caramel latte",
            day:"Thursday ",
            desc:`Almost as sweet as Thursdays, Natures' Pre Friday`

        };
    break;

    case 5:
        today = "Friday";
        coffee = {
            color:"#663300",
            name:"Frappaccino",
            pic:"images/frappaccino.jpg",
            alt:"A picture of a Frappaccino",
            day:"Friday ",
            desc:`It's Friday, Try it with your favorite flavors and an extra shot!`

        };
    break;

    case 6:
        today = "Saturday";
        coffee = {
            color:"#996633",
            name:"Mocha",
            pic:"images/mocha.jpg",
            alt:"A picture of a Mocha",
            day:"Saturday ",
            desc:`Smooth like a saturday!`

        };
    break;

}

console.log(coffee);

document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);

document.getElementsByTagName("HTML")[0].style.backgroundColor = coffee.color;

document.getElementById("coffee-highlight").style.color = coffee.color;
//alert(today);
