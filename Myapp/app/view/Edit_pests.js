Ext.define('Myapp.view.Edit_pests', {
    extend: 'Ext.Container',
     //extend: 'Ext.tab.Panel',
    xtype: 'edit_pestsview',
    requires: [
        'Ext.TitleBar'
       
    ],
    config: {
        tabBarPosition: 'bottom',
        //scrollable: true,
                  //tabBarPosition: 'bottom',


            items: [

                    {  
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Edit Pests',
                        items: [
                            {ui: 'back', text: 'Back'},
                            
                        ],
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'name of the pest',
                        name: 'number',
                        id: 'pests',
                        label: 'Pest Name',
                    },
                    {
                        xtype: 'textfield',
                        id: 'pests4',
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'description of the pest',
                        name: 'number',
                        id: 'pests1',
                        label: 'Pest Description',
                    },

                    {
                         xtype: 'button', 
                         id: 'pests2', 
                         text: 'Save', 
                         align: 'left', 
                         ui: 'confirm',
                         cls: 'btnAction',
                         margin: '10',
                            handler: function () {
                                
                                  var PestID=Ext.getCmp('pests4').getValue();
                                  var PestName=Ext.getCmp('pests').getValue();
                                  var Description=Ext.getCmp('pests1').getValue();
                                  Ext.Ajax.request({                                    
                                        url: 'http://107.180.73.170/api/v2/triton/_proc/Usp_Pests_Update('+PestID+','+PestName+','+Description+')?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88',
                                        method: "GET",
                                        success: function(response, request) {
                                            //me.setHtml(response.responseText);
                                        },
                                        failure: function(response, request) {
                                            //me.setHtml("failed -- response: " + response.responseText);
                                        }
                                    });
                                  alert('edited');
                                  window.location.reload();
                            }
                    },
                    {
                         xtype: 'button', 
                         id: 'pests3', 
                         text: 'Cancel', 
                         align: 'right', 
                         ui: 'decline',
                         margin: '10',
                         action: 'cancle-pest',

                        handler: function () {
                                alert('Canceled');
                        }
                    },                
           
        ]
                
    }

});