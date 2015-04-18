//helpers
Template.animalList.helpers({
	results: function(){
		return Animals.find({});
	}
})