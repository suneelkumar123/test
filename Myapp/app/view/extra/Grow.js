Ext.define('Myapp.view.Grow', {
    extend: 'Ext.Container', 
    xtype: 'growview',      
    requires: [
        'Ext.TitleBar'      
    ],
    config: {
       // fullscreen: true,
      

              items:[
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Grow & Harvest',
                        items: [
                            {ui: 'back', text: 'Back'},
                            {
                              xtype: 'button',
                              iconCls: 'add',
                              align: 'right',
                              text: 'add'
                            }
                        ],
                    },
                    {
                     
                       xtype: 'toolbar',
                       action: 'search',
                       docked: 'top',           
                       items: [
                           {
                                xtype: 'spacer'
                            },
                           {
                               xtype: 'searchfield',
                               width: '16em', 
                               placeHolder: 'Search...'
                           },
                           { 
                                xtype: 'spacer'
                            }
                        ]
               
                    },
                    
                                    ],  
                                        html: [
                        "<table border=1 id='growtable'>",
                            "<tr>",
                            "<th>Farm field Name</th>",
                            "<th>Crop/plant category name</th>",
                            "<th>Produce ID number</th>",
                            "<th>Date planted</th>",
                            "<th>Lot number</th>",
                            "<th>Scheduled harvest date</th>",
                            "<th>Total pounds harvested</th>",
                            "<th></th>",
                            "<th></th>",
                            "<th></th>",
                            "</tr>",
                        "</table>"

                     ].join("")
    },
 
});
