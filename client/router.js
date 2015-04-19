Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function() {
	this.render('animalList');
});

Router.route('/animal/:id', function() {
	this.render('animal_profile', {data: Animals.findOne(this.params.id)});
});

Router.route('/new_animal', function(){
	this.render('animalCreate');
})