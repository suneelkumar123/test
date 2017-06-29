Ext.define('Myapp.view.Pests', {
    extend: 'Ext.Container',
     //extend: 'Ext.tab.Panel',
    xtype: 'pestsview',
    requires: [
        'Ext.TitleBar'
       
    ],
    config: {
        tabBarPosition: 'bottom',
        refresh: 'auto',
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
                               html+='<tr><td>'+jsonarr[i].PestName+'</td><td>'+jsonarr[i].Description+'</td><td><button onclick="editpests('+jsonarr[i].PestID+');">Edit<img src="resources/images/add_black.png" height="30" width="30"></button></td><td><button onclick="deletepests('+jsonarr[i].PestID+');">Delete<img src="resources/images/add_black.png" height="30" width="30"></button></td></tr>';
                        
                            }
                            $('#growtable9').append(html);
                       
                            },
                             failure: function (response, options) { alert('fails');/* handle failure here */ }
                        });
                    }
                }
            },
    			//tabBarPosition: 'bottom',


            items: [

                    {  
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Pests',
                        items: [
                            {ui: 'back', text: 'Back'},
                            {
                              xtype: 'button',
                              iconCls: 'add',
                              align: 'right',
                              text: 'Add New Pests',
                              action: 'tab-pests'
                            }
                        ],
                    },
                    { 
                        xtype: 'selectfield',
                        hidden: true
                    },                    

            {
                
                html: [
                    "<table border=1 id='growtable9'>",
                        "<tr>",
                        "<th>Pest Name</th>",
                        "<th>Description</th>",
                        "<th></th>",
                        "<th></th>",
                        "</tr>",
                    "</table>"

                ].join("")
            },
                
           
        ]
                
    }

});

function editpests(PestID)
{       
//     var mainurl='http://107.180.73.170/api/v2/triton/_proc/Usp_Pests_Get('+PestID+')?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';
//         Ext.Ajax.request({
//          url: mainurl,
//          withCredentials: true,
//          useDefaultXhrHeader: false,
//          success: function (response, options) {
//          var jsonarr = Ext.decode(response.responseText);
//             $('#pests input').val(jsonarr[0].PestName);
//             $('#pests1 input').val(jsonarr[0].Description);
//             $('#pests4 input').val(jsonarr[0].PestID);

//         },
//          failure: function (response, options) { alert('fails');/* handle failure here */ }
//         });
                                        
   Ext.Viewport.setActiveItem({xtype: 'edit_pestsview'});//call another view
}

function deletepests(PestID)
{   
    var mainurl='http://107.180.73.170/api/v2/triton/_proc/Usp_Pests_Delete('+PestID+')?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';
        Ext.Ajax.request({
         url: mainurl,
         withCredentials: true,
         useDefaultXhrHeader: false,
         success: function (response, options) {
         var jsonarr = Ext.decode(response.responseText);   
        },
         failure: function (response, options) { alert('fails');/* handle failure here */ }
        });

   //Ext.Viewport.setActiveItem({xtype: 'edit_pestsview'});
}