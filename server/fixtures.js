if(Animals.find().count()===0){
	var now = new Date().getTime();
	var day = 24*60*60;
	var animal1 = Animals.insert({
		name:"Fluffy",
		type:"cat",
		sex:"male",
		age:"1-3 years",
		size:"",
		breed:"Maine Coon",
		color:"wood tabby",
		personality:"friendly/outgoing",
		health_issues:"no",
		comments:"Realy friendly.  I mean REALLY friendly.  You will never be able to have a cat-free lap again.",
		img_path:"http://www.maine-coon-cat-nation.com/image-files/maine-coon-brown-mackerel.jpg",
		offered_by: 1,
		created_at: now - 1*day
	});
	var animal2 = Animals.insert({
		name:"Pounce",
		type:"cat",
		sex:"female",
		age:"5-10 years",
		size:"",
		breed:"American Short Hair",
		color:"brown tabby",
		personality:"shy",
		health_issues:"yes",
		comments:"FIV positive",
		img_path:"http://i.ebayimg.com/00/s/MzM1WDUwMA==/z/xlAAAOSw7aBVCXaG/$_35.JPG",
		offered_by: 3,
		created_at: now - 4*day
	});
	var animal3 = Animals.insert({
		name:"Scourge of Mice",
		type:"cat",
		sex:"male",
		age:"6 months-1 year",
		size:"",
		breed:"alley cat",
		color:"black",
		personality:"sometimes friendly, sometimes shy",
		health_issues:"no",
		comments:"temporarily fostered feral cat.  becoming much more friendly as it gets to know people",
		img_path:"http://www.pets4homes.co.uk/images/classifieds/2013/07/31/377342/large/9-week-old-female-black-kitten-for-sale-in-wigan-51f910c6a18ff.jpeg",
		offered_by: 2,
		created_at: now - 3*day
	});
	var animal4 = Animals.insert({
		name:"Toonces",
		type:"cat",
		sex:"female",
		age:"5-10 years",
		size:"",
		breed:"who knows?",
		color:"gray tabby",
		personality:"outgoing/friendly",
		health_issues:"no",
		comments:"A real lover.  Unfortunately, I have to move and the new apartment doesn't take cats",
		img_path:"http://media.windingroad.com/windingroad/versus/toonces_jpg_470x470_q100.jpg",
		offered_by: 1,
		created_at: now - 2.2*day
	});
}

