Ext.define('Myapp.view.Welcome', {
    extend: 'Ext.TabPanel',  
    xtype: 'welcomeview',     
    requires: [
        'Ext.TitleBar'      
    ],
    config: {
       // fullscreen: true,
            tabBarPosition: 'bottom',
            defaults: {
                styleHtmlContent: true,
                scrollable: true,
            },
             // scrollable: true,
           renderTo: Ext.getBody(),
            defaults: {
                listeners: {
                    activate: function(tab, eOpts) {
                        if(tab.title == 'Grow'){
                            Ext.Ajax.request({
                             url: 'http://107.180.73.170/api/v2/triton/_proc/Usp_farmfieldplants_all(0)?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88',
                             withCredentials: true,
                             useDefaultXhrHeader: false,
                             success: function (response, options) {
                             var html='';   
                             var jsonarr = Ext.decode(response.responseText);
                             for (var i = 0; i < jsonarr.length; i++) {
                               html+='<tr><td>'+jsonarr[i].FarmFieldName+'</td><td>'+jsonarr[i].CategoryName+'</td><td>'+jsonarr[i].ProduceIDNumber+'</td><td>'+jsonarr[i].DatePlanted+'</td><td>'+jsonarr[i].LotNo+'</td><td>'+jsonarr[i].ScheduledHarvestDate+'</td><td>'+jsonarr[i].TotalPoundsHarvested+'</td><td><button onclick="harvest();">Harvest<img src="resources/images/add_black.png"></button></td><td><button onclick="edit('+jsonarr[i].FarmFieldPlantID+');">Edit<img src="resources/images/add_black.png"></button></td><td>Delete<a href="#"><img src="resources/images/add_black.png"></a></td></tr>';
                        
                            }
                            $('#growtable').append(html);
                       
                            },
                             failure: function (response, options) { alert('fails');/* handle failure here */ }
                            });
                        }
                    }
                }
            },

         
     

            items: [
                // {
                //         docked: 'top',
                //         xtype: 'titlebar',
                //         title: 'Add/Edit Grow and harvest',
                //         //  items: [
                //         //     {
                //         //         ui: 'back', text: 'Back'
                //         //     }
                //         // ]
                // },
                {
                    title: 'Home',
                    iconCls: 'home',
                    html: '<h1>Good Morning[Name]</h1>'
                },
                {
                    title: 'Grow',
                    iconCls: 'user',
                     items: [
                            {
                               xtype: 'growview'
                            }
                        ]
                },
                 {
                    title: 'Farm',
                    iconCls: 'user',
                    html: 'Contact Screen'
                },
                 {
                    title: 'Growers',
                    iconCls: 'user',
                    html: 'Contact Screen'
                },
                 {
                    title: 'Application',
                    iconCls: 'user',
                    html: 'Contact Screen'
                }
            ]
            
    },
 
});

