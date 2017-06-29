Ext.define('Myapp.view.abcd', {
    extend: 'Ext.Container',
     //extend: 'Ext.tab.Panel',
    xtype: 'abcdview',
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
                               html+='<tr><td>'+jsonarr[i].PestName+'</td><td><button onclick="deleteit();">Delete<img src="resources/images/add_black.png"></button></td>';
                               // <td>Delete<a href="#"><img src="resources/images/add_black.png"></a></td></tr>';
                        
                            }
                            $('#growtable1').append(html);
                       
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
                        title: 'Add Applied Pesticide',
                        items: [
                            {ui: 'back', text: 'Back'}
                            
                        ],
                    },
                    {
                        xtype: 'selectfield',
                        id: 'select1',
                        name: 'Select',
                        valueField: 'value',
                        displayField: 'title',
                        label: 'Wind Direction',
                        store: {//data bound control needs to pass store object
                        data: []}
                    },
                    
                      {
                        xtype: 'textfield',
                        placeHolder: 'GPA To Be Used',
                        name: 'name',
                        id: 'harvested',
                        label: 'GPA To Be Used'
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Your comment here',
                        name: 'name',
                        id: 'packed',
                        label: 'Comments'
                    },                    
                    {
                         xtype: 'button', 
                         id: 'done', 
                         text: 'Save', 
                         align: 'left', 
                         ui: 'confirm',
                         cls: 'btnAction',
                         margin: '10',
                            handler: function () {
                                
                                var record = {
                                    name: Ext.getCmp('select').getValue(),
                                    password: Ext.getCmp('number').getValue(),
                                    email: Ext.getCmp('name').getValue(),
                                    url: Ext.getCmp('select1').getValue(),
                                    spinner: Ext.getCmp('date').getValue(),
                                    toggle: Ext.getCmp('date1').getValue()
                                }
                                Ext.Viewport.setMasked({//disabling ui
                                    xtype: 'loadmask',
                                    message: 'Saving...'
                                });
                                alert('Record Saved'); //perform ajax call to save record
                                Ext.Viewport.setMasked(false); //after the process enabling UI
                            }
                    },
                    {
                         xtype: 'button', 
                         id: 'cancel', 
                         text: 'Cancel', 
                         align: 'right', 
                         ui: 'decline',
                         margin: '10',

                        handler: function () {
                                alert('Canceled');
                        }
                    },
                    
            // {
                
            //     html: [
            //         "<table border=1 id='growtable1'>",
            //             "<tr>",
            //             "<th>Pests</th>",
            //             "<th></th>",
            //             "</tr>",
            //         "</table>"

            //     ].join("")
            // },
                
           
        ]
                
    }

});

function deleteit(url, container)
{
    url: 'http://107.180.73.170/api/v2/triton/_proc/Usp_Pests_Delete('+PestID+')?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';
    // // onActivate: function(me, container) {
    //     Ext.Ajax.request({
    //         // we should use the getter for our new `url` config
    //         url: 'http://107.180.73.170/api/v2/triton/_proc/Usp_Pests_Delete('+varPestID+')?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88',
    //         method: "POST",
    //         success: function(response, request) {
    //             // We should use the setter for the HTML config for this
    //             me.setHtml(response.responseText);
    //         },
    //         failure: function(response, request) {
    //             me.setHtml("failed -- response: " + response.responseText);
    //         }
    //     });
}