Ext.define('Myapp.view.Add_pests', {
    extend: 'Ext.Container',
     //extend: 'Ext.tab.Panel',
    xtype: 'add_pestsview',
    requires: [
        'Ext.TitleBar'
       
    ],
    config: {
       tabBarPosition: 'bottom',
        scrollable: true,
         renderTo: Ext.getBody(),
            defaults: {
                listeners: {
                    activate: function(tab, eOpts) {
                        Ext.Ajax.request({
                             url: 'http://107.180.73.170/api/v2/triton/_proc/Usp_Pests_all()?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88',
                             withCredentials: true,
                             useDefaultXhrHeader: false,
                             success: function (response, options) {
                             var html='';   
                             var jsonarr = Ext.decode(response.responseText);
                             for (var i = 0; i < jsonarr.length; i++) {
                               html+='<tr><td>'+jsonarr[i].PestName+'</td><td><button onclick="deleteit();">Delete<img src="resources/images/add_black.png" height="30" width="30"></button></td>';
                               // <td>Delete<a href="#"><img src="resources/images/add_black.png"></a></td></tr>';
                        
                            }
                            $('#growtable1').append(html);
                       
                            },
                             failure: function (response, options) { alert('fails');/* handle failure here */ }
                        });
                    }
                }
            },

            items: [

                    {  
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Add Pests',
                        items: [
                            {ui: 'back', text: 'Back'},
                            
                        ],
                    },
                    {
                        xtype: 'selectfield',
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'name of the pest',
                        name: 'number',
                        id: 'PestName',
                        label: 'Pest Name',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'description of the pest',
                        name: 'number',
                        id: 'Description',
                        label: 'Pest Description',
                    },

                    {
                         xtype: 'button', 
                         id: 'pests2', 
                         text: 'Save',
                         onclick: 'add_pests', 
                         align: 'left', 
                         ui: 'confirm',
                         cls: 'btnAction',
                         enableToggle: true,
                         margin: '10',
                            handler: function (me, container) {
                                                    
                                  var PestName=Ext.getCmp('PestName').getValue();
                                  var Description=Ext.getCmp('Description').getValue();
                                  Ext.Ajax.request({                                    
                                        url: 'http://107.180.73.170/api/v2/triton/_proc/Usp_Pests_Insert('+PestName+','+Description+')?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88',
                                        method: "GET",
                                        success: function(response, request) {
                                            //me.setHtml(response.responseText);
                                        },
                                        failure: function(response, request) {
                                            //me.setHtml("failed -- response: " + response.responseText);
                                        }
                                    });
                                  alert('added');
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
                         action: 'canclepest',

                        handler: function () {
                                alert('Canceled');
                        }
                    }, 
             
           
        ],
                
    }

});

