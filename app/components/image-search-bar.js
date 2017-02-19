import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		hitApi : function(text){
			var starredIds = JSON.parse(window.localStorage.getItem('starredIds')) ? JSON.parse(window.localStorage.getItem('starredIds')) : [];
			this.set('showLoader', true);
			this.set('welcome', false);
			var self = this;
			var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&'+
				'api_key=ef4dbc42acb7e073f5cfdd1020fafb9b'+
				'&text='+text+
				'&extras=url_n%2C&per_page=50&format=json&nojsoncallback=1'+
				'&secret=7700d2eee8518fb7';
			console.log(text);
			Ember.$.ajax({
	        	type: 'GET',
	        	url: url
		    }).then(function(data) {
		    	self.set('showLoader', false);
		    	data.photos.photo.map(function(obj){
		    		obj.like = false;
		    		if(starredIds.length>0 && starredIds.indexOf(obj.id)>-1)
		    			obj.like = true;
		    	});
		    	self.sendAction('setData', data);
	      	}, function(err) {
	      		console.log(err);
	     	});
		}
	}
});
