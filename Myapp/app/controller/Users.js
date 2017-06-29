Ext.define('Myapp.controller.Users',{
extend: 'Ext.app.Controller',


config: {
        refs: {
      		loginButton: '#loginButton',
            saveButton: '#harvest',
            editButton: '#edit', 
            editButton: '#useredit',
            editButton: '#editgrower',
            backButton: '#fback',
            myContainer: 'mainPanel'
        },
        routes: {
            ':itemId/:id': {
                action: function(itemId, id) {
                    config = {}; // some config properties    // action method is called twice here.
                this.loadItem(itemId, config );
                }
            },
            route: function(itemId, params) {  // this method is called from all parts of the app to route.
                var page = itemId + (params ? params : '');
                this.redirectTo(page, true);    // override redirect to true
            },
        },

        control: {
        	loginButton:{

        		tap: 'onLogin'
        	},
            'mainPanel searchfield[itemId=searchBox]' : {
                clearicontap : 'onClearSearch',
                keyup: 'onSearchKeyUp'
            },
           
            saveButton: {
                tap: 'onSave'
            },
            editButton:{
            	tap: 'onEdit'
                // tap: 'onUserEdit',
                // tap: 'onEditgrower',
            },
            // add button
            
            'button[action=call-contact-list]': {
                tap: 'myFunction'
            },
            'button[action=add-pestecides]': {
                tap: 'mypestic'
            },
            'button[action=tab-grow]': {
                tap: 'tabgrow'
            },
            'button[action=tab-farm]': {
                tap: 'tabfarm'
            },
            'button[action=tab-grower]': {
                tap: 'tabgrower'
            },
            'button[action=tab-pests]': {
                tap: 'tabpests'
            },
            'button[action=apply-pestic]': {
                tap: 'applypestic'
            },
            'button[action=tab-harvest]': {
                tap: 'tabharvest'
            },

            // save buttons

            'button[action=canclepest]': {
                tap: 'canclepe'
            },
            'button[action=Pest-view]': {
                tap: 'Pestview'
            },
            'button[action=Pesticide-view]': {
                tap: 'Pesticideview'
            },

            // cancle button
            'button[action=edit-apppest]': {
                tap: 'editapppest'
            },
            'button[action=cancle-pesticide]': {
                tap: 'canclepesticide'
            },
            'button[action=cancle-pesticides]': {
                tap: 'canclepesticides'
            },
            'button[action=cancle-pest]': {
                tap: 'canclepests'
            },
            'button[action=cancle-users]': {
                tap: 'cancleusers'
            },
            'button[action=edit-farmfield]': {
                tap: 'editfarmfield'
            },
            'button[action=edit-growers]': {
                tap: 'editgrowers'
            },
            'button[action=edit-grow]': {
                tap: 'editgrow'
            },
            'button[action=edit-harvest]': {
                tap: 'editharvest'
            },

            fback: {
                back: 'backButtonHandler'
            },    
             
            nav: {
                back: 'backButton'
            }, 
            
        }
    },

    showProduct: function(id) {
        console.log('showing product ' + id);
    },

    onSave: function() {
        Ext.Viewport.setActiveItem({xtype: 'harvestview'});
    },

    onEdit: function() {       
        Ext.Viewport.setActiveItem({xtype: 'add_growview'});
    },

    backClick: function() {
       Ext.Viewport.setActiveItem({xtype: 'mainview'});
    },

    myFunction: function() {    
     Ext.Viewport.setActiveItem({xtype: 'add_usersview'});
    },

    mypestic: function() {    
     Ext.Viewport.setActiveItem({xtype: 'add_pesticideview'});
    },

    tabgrow: function() {    
     Ext.Viewport.setActiveItem({xtype: 'add_growview'});
    },
    tabfarm: function() {    
     Ext.Viewport.setActiveItem({xtype: 'add_farmview'});
    },
    tabgrower: function() {    
     Ext.Viewport.setActiveItem({xtype: 'add_growersview'});
    },
    tabgrower: function() {    
     Ext.Viewport.setActiveItem({xtype: 'add_growersview'});
    },
    tabpests: function() {    
     Ext.Viewport.setActiveItem({xtype: 'add_pestsview'});
    },
    tabharvest: function() {    
     Ext.Viewport.setActiveItem({xtype: 'add_harvestview'});
    },
    applypestic: function() {

     Ext.Viewport.setActiveItem({xtype: 'add_applypestview'});
    },
    Pestview: function() {

     Ext.Viewport.setActiveItem({xtype: 'pestsview'});
    },
    Pesticideview: function() {

     Ext.Viewport.setActiveItem({xtype: 'pesticidesview'});
    },

//  cancle button

    canclepe: function() {
      Ext.Viewport.setActiveItem({xtype: 'pestsview'});
    },
    editapppest: function() {
        Ext.Viewport.setActiveItem({xtype: 'pply_pesticidesview'});
    },
    canclepesticide: function() {
        Ext.Viewport.setActiveItem({xtype: 'pesticidesview'});
    },
    canclepesticides: function() {
        Ext.Viewport.setActiveItem({xtype: 'pesticidesview'});
    },
    canclepests: function() {
        Ext.Viewport.setActiveItem({xtype: 'pestsview'});
    },
    cancleusers: function() {
        Ext.Viewport.setActiveItem({xtype: 'usersview'});
    },
    editfarmfield: function() {
        Ext.Viewport.setActiveItem({xtype: 'mainview'});
    },
    editgrowers: function() {
        Ext.Viewport.setActiveItem({xtype: 'mainview'});
    },
    editgrow: function() {
        Ext.Viewport.setActiveItem({xtype: 'mainview'});
    },
    editharvest: function() {
        Ext.Viewport.setActiveItem({xtype: 'harvestview'});
    },

    // search box

    onSearchKeyUp: function(searchField) {
        queryString = searchField.getValue();
        console.log(this,'Please search by: ' + queryString);

        var store = Ext.getStore('FarmFieldPlantID');
        //store.clearFilter();

        if(queryString){
            var thisRegEx = new RegExp(queryString, "i");
            if(function(record) {
                if (thisRegEx.test(record.get('name')) ||
                thisRegEx.test(record.get('continent')) ||
                thisRegEx.test(record.get('region'))) {
                    return true;
                };
            return false;
           });
        }

    },
    onClearSearch: function() {
        console.log('Clear icon is tapped');
        var store = Ext.getStore('FarmFieldPlantID');
        //store.clearFilter();
    },


    backButton: function(nestedList, node) {
        //this means we just hit back out of a detail card
        if (node.isLeaf()) {
            this.getSourceButton().setHidden(true);
        }

        this.getApplication().getHistory().add(Ext.create('Ext.app.Action', {
            url: 'menu/' + node.parentNode.get('id')
        }), true);
    },

    backButtonHandler: function () {
    history.back();  //pop the state to trigger listener in step 3
    return false;  // return false so listener will take care of this
},
  

 // init: function(){
 // 	this.control({
 // 		'button':{
 // 			tap: function(){
 // 				//alert('you tapped on submit');
 // 				Ext.Viewport.setActiveItem({xtype: 'main'});
 // 			}
 // 		}
 // 	});
 // }

});