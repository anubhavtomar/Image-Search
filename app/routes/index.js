import Ember from 'ember';

export default Ember.Route.extend({
	setupController: function(controller, model) {
		this._super(controller,model);
		controller.set('searchValue', '');
		controller.set('showLoader', false);
		controller.set('images', null);
		controller.set('starredImages', null);
		controller.set('welcome', true);
	},
	actions:{
		setData : function(data){
			var controller = this.get('controller');
			controller.set('starredImages' , null);
			controller.set('images' , data);
		},
		getStarred : function(data){
			var controller = this.get('controller');
			controller.set('images' , null);
			var starredIds = JSON.parse(window.localStorage.getItem('starredIds')) ? JSON.parse(window.localStorage.getItem('starredIds')) : [];
			var length = starredIds.length;
			if(length)
				controller.set('showLoader', true);
			controller.set('welcome', false);
			controller.set('starredImages', []);
			for(var i = 0 ; i < length ; i++){
				var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&'+
					'api_key=ef4dbc42acb7e073f5cfdd1020fafb9b'+
					'&photo_id='+parseInt(starredIds[i])+
					'&format=json&nojsoncallback=1'+
					'&secret=7700d2eee8518fb7';
				(function(idx){
					Ember.$.ajax({
			        	type: 'GET',
			        	url: url
				    }).then(function(data) {
				    	controller.set('showLoader', false);
				    	data.sizes.size.forEach(function(obj){
				    		if(obj.label == 'Small 320'){
				    			obj.like = true;
				    			obj.id = starredIds[idx];
				    			controller.get('starredImages').pushObject(obj);
				    		}
				    	});
			      	}, function(err) {
			      		console.log(err);
			     	});
				})(i);
			}
		},
		likePicture: function(photo, remove){
			Ember.set(photo , 'like' , photo.like ? false : true);
			var starredIds = JSON.parse(window.localStorage.getItem('starredIds')) ? JSON.parse(window.localStorage.getItem('starredIds')) : [];
			if(!photo.like){
				let index = starredIds.indexOf(photo.id);
				if(index > -1){
					starredIds.splice(index , 1);
				}
			}
			else
				starredIds.push(photo.id);
			window.localStorage.setItem('starredIds' , JSON.stringify(starredIds));
			if(remove){
				Ember.$('#'+photo.id).fadeOut(500, function(){
				    Ember.$(this).remove();
				});
			}
		}
	}
});
