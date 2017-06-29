Ext.define('Myapp.view.Navigation', {
    extend: 'Ext.navigation.View',
    xtype: 'navigation',


 config: {  
            xtype: 'navigationview',
               
            items: [
                {

                    title: 'Navigation View',
                    padding: 10,

                    //inside this first item we are going to add a button
                    items: [
                        {
                            xtype: 'button',
                            text: 'Push another view!',

                            handler : function (button) {
                    var navigationView = button.up('navigationview');

                    navigationView.push({
                        title : 'New View',
                        html  : 'new view'
                    });
                }
                        }
                    ]
                }
            ]

    }

});