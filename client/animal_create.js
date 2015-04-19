Template.animalCreate.events({
	'submit form': function(e){
		e.preventDefault();
		var now = new Date().getTime();
		var animal = {
			name:$(e.target).find('[name=name]').val(),
			type:$(e.target).find('[name=type]').val(),
			sex:$(e.target).find('[name=sex]').val(),
			age:$(e.target).find('[name=age]').val(),
			size:$(e.target).find('[name=size]').val(),
			breed:$(e.target).find('[name=breed]').val(),
			color:$(e.target).find('[name=color]').val(),
			personality:$(e.target).find('[name=personality]').val(),
			health_issues:$(e.target).find('[name=health_issues]').val(),
			comments:$(e.target).find('[name=comments]').val(),
			img_path:$(e.target).find('[name=img_path]').val(),
			offered_by:'sockpuppet for now',
			created_at:now
		}
		console.log(animal);
		var new_cat = Animals.insert(animal);
		window.location.href="/animal"+new_cat;
	}
});