// //helpers
// Template.animalList.helpers({
// 	results: function(){
// 		return Animals.find({});
// 	}
// })



//helpers
Template.animalList.helpers({
	results: function(){
		// console.log("Changed filter", Session.get("currentFilter"));
		return Animals.find(Session.get("currentFilter"));
	}
})

Template.animalList.events({
	'change input': function(evt) {

		var value = evt.target.value;
		var name =  evt.target.name;
		var isChecked = evt.target.checked;

		$("input").prop("checked", false);
		
		$(evt.target).prop("checked", isChecked);

		var query = {};
		if (isChecked)
			query[name] = value;

		Session.set("currentFilter", query);
		console.log(name, value);
	}
})