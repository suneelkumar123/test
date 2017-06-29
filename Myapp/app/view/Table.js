  Ext.define('Myapp.view.Table',{
    extend: 'Ext.Container',
    xtype: 'tableview',
    
    config:{

            fullscreen: true,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                minHeight: 46
            },
            items: [
            {
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                defaults: {
                    xtype: 'label',
                    flex: 1,
                    style: 'border:1px solid black'
                },
                items: [{
                    html: 'header1'
                }, {
                    html: 'header2'
                }, {
                    html: 'header3'
                }]
            }, 
            {
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                defaults: {
                    flex: 1,
                    style: 'border:1px solid black'
                },
                items: [{
                    xtype: 'label',
                    html: 'test1'
                }, {
                    xtype: 'textfield'
                }, {
                    xtype: 'textfield'
                }]
            }, 
            {
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                defaults: {
                    flex: 1,
                    style: 'border:1px solid black'
                },
                items: [{
                    xtype: 'label',
                    html: 'test2'
                }, {
                    xtype: 'textfield'
                }, {
                    xtype: 'textfield'
                }]
            }, 
            {
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                defaults: {
                    flex: 1,
                    style: 'border:1px solid black'
                },
                items: [{
                    xtype: 'label',
                    html: 'test3'
                }, {
                    xtype: 'textfield'
                }, {
                    xtype: 'textfield'
                }]
            }]

    }        



  });


