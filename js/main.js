require.config({
	paths: {
        jquery: 'jquery-2.1.0',
        ztree:  'jquery.ztree.core-3.5'
    },
    shim: {
    	'bootstrap': {
    		deps: ['jquery']
    	},

　　    'bootbox': {
　　　　　　　　deps: ['bootstrap', 'jquery'],
　　　　　　　　exports: 'bootbox'
		},
		'ztree': {
			deps: ['jquery'],
			exports: 'ztree'
		}
　　}

});
 
require(['jquery', 'treedialog', 'selectOrganization'], function($, treedialog, selectOrganization) {
	selectOrganization();
	
});


		<!--
		
		//-->
