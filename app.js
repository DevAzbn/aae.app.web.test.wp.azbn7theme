'use strict';

var azbn = new require(__dirname + '/../../../../../system/bootstrap')({
	
});

var app = azbn.loadApp(module);

var reqs = app.loadJSON('requests');

if(reqs.items && reqs.items.length) {
	
	for(var i in reqs.items) {
		
		(function(req){
			
			req.form.__timestamp = azbn.formattime();
			
			azbn.mdl('web/http').r(req.method, req.url, req.form, function(error, response, body){
				
				if(error) {
					azbn.echo_dev(error);
				}
				
				azbn.echo(req.method + ' ' + req.url);
				
			});
			
		})(reqs.items[i]);
		
	}
	
}
