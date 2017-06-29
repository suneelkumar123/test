Ext.define('Myapp.view.Main', {
    extend: 'Ext.tab.Panel', 
    alias : 'widget.mainPanel',
    xtype: 'mainview',      
    requires: [
        'Ext.TitleBar',
        'Ext.field.Search',
        'Myapp.controller.Users'      
    ],
    config: {
        tabBarPosition: 'bottom',
        scrollable: true,
         // renderTo: Ext.getBody(),
         //    defaults: {
                
         //    },
        items: [
                
            {
                title: 'Login',
                iconCls: 'home',
                styleHtmlContent: true,
                scrollable: true,
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Login'
                    },
                    {
                    xtype: 'emailfield',
                    name : 'email',
                    label: 'Email'
                    },
                    {
                        xtype: 'passwordfield',
                        name : 'password',
                        label: 'Password'
                    },
                   {
                    xtype: 'button',
                    text: 'Login',
                    id: 'saveButton',
                    margin: '40',
                
                    }
                ]
            },
            {
                title: 'Grow',
                iconCls: 'home',
                        //id: 'tabGrow',
                        
                action: 'clickTab',
                styleHtmlContent: true,
                scrollable: true,
                ui: 'action',
                listeners: {
                    activate: function(tab, eOpts) {
                        if(tab.title == 'Grow'){
                            Ext.Ajax.request({
                             url: 'http://107.180.73.170/api/v2/triton/_proc/Usp_farmfieldplants_all(0)?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88',
                             withCredentials: true,
                             useDefaultXhrHeader: false,
                             success: function (response, options) {
                             var html='<tr><th>Farm field Name</th><th>Crop/plant category name</th><th>Date planted</th><th>Lot number</th><th>Scheduled harvest date</th><th>Total pounds harvested</th><th></th><th></th><th></th><th></th></tr>';   
                             var jsonarr = Ext.decode(response.responseText);
                             for (var i = 0; i < jsonarr.length; i++) {
                               html+='<tr><td>'+jsonarr[i].FarmFieldName+'</td><td>'+jsonarr[i].CategoryName+'</td><td>'+jsonarr[i].DatePlanted+'</td><td>'+jsonarr[i].LotNo+'</td><td>'+jsonarr[i].ScheduledHarvestDate+'</td><td>'+jsonarr[i].TotalPoundsHarvested+'</td><td><button onclick="harvest('+jsonarr[i].FarmFieldPlantID+');">Harvest<img src="resources/images/add_black.png" height="30" width="30"></button></td><td><button onclick="aplyy('+jsonarr[i].FarmFieldPlantID+');">Apply<img src="resources/images/add_black.png" height="30" width="30"></button></td><td><button onclick="edit('+jsonarr[i].FarmFieldPlantID+');">Edit<img src="resources/images/add_black.png" height="30" width="30"></button></td><td><button onclick="deletegrow('+jsonarr[i].FarmFieldPlantID+');">Delete<img src="resources/images/add_black.png" height="30" width="30"></button></td></tr>';
                        
                            }
                            $('#growtable').html('');
                            $('#growtable').append(html);
                       
                            },
                             failure: function (response, options) { alert('fails');/* handle failure here */ }
                            });
                        }
                    }
                },
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
                              text: 'Add Grow and Harvest',
                              action: 'tab-grow'
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
                                placeHolder: 'Search',
                                id: 'searchBox',
                                align: 'left'
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
                        "<th>Date planted</th>",
                        "<th>Lot number</th>",
                        "<th>Scheduled harvest date</th>",
                        "<th>Total pounds harvested</th>",
                        "<th></th>",
                        "<th></th>",
                        "<th></th>",
                        "<th></th>",
                        "</tr>",
                    "</table>"

                ].join("")
            },
                       
            
            {
                title: 'Farm',
                iconCls: 'action',
                scrollable: true,
                ui: 'action',
                listeners: {
                    activate: function(tab, eOpts) {
                        if(tab.title == 'Farm'){
                            Ext.Ajax.request({
                             url: 'http://107.180.73.170/api/v2/triton/_proc/Usp_FarmFields_all(0)?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88',
                             withCredentials: true,
                             useDefaultXhrHeader: false,
                             success: function (response, options) {
                             var html='<tr><th>Field Id Number</th><th>Field Name</th><th>Supplier Name</th><th>Legal Description</th><th>Total Acres</th><th>Irrigation Source 1</th><th>Irrigation Source 2</th><th>Irrigation Source 3</th><th>Comments</th><th></th><th></th></tr>';   
                             var jsonarr = Ext.decode(response.responseText);
                             for (var i = 0; i < jsonarr.length; i++) {
                                html+='<tr><td>'+jsonarr[i].FarmFieldID+'</td><td>'+jsonarr[i].FieldName+'</td><td>'+jsonarr[i].SupplierName+'</td><td>'+jsonarr[i].LegalDescription+'</td><td>'+jsonarr[i].TotalAcres+'</td><td>'+jsonarr[i].IrrigationSource1+'</td><td>'+jsonarr[i].IrrigationSource2+'</td><td>'+jsonarr[i].IrrigationSource3+'</td><td>'+jsonarr[i].Comments+'</td><td><button onclick="editfarm('+jsonarr[i].FarmFieldID+');">Edit<img src="resources/images/add_black.png" height="30" width="30"></button></td><td><button onclick="deletefarm('+jsonarr[i].FarmFieldID+');">Delete<img src="resources/images/add_black.png" height="30" width="30"></button></td></tr>';                        
                            }
                            $('#growtable5').html('');
                            $('#growtable5').append(html);
                       
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
                        title: 'Farm Fields',
                        items: [
                            {ui: 'back', text: 'Back'},
                            {
                              xtype: 'button',
                              iconCls: 'add',
                              align: 'right',
                              text: 'Apply New Farm Field',
                              action: 'tab-farm'
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
                               placeHolder: 'Search...',
                               align: 'left',
                               id: 'searchBox',
                           },
                           { 
                                xtype: 'spacer'
                            }
                        ]
               
                    },
                    {
                        xtype: 'selectfield',
                        hidden: true
                    },                    
     
                
                ],
                html: [
                    "<table border=1 id='growtable5'>",
                        "<tr>",
                        "<th>Field Id Number</th>",
                        "<th>Field Name</th>",
                        "<th>Supplier Name</th>",
                        "<th>Legal Description</th>",
                        "<th>Total Acres</th>",
                        "<th>Irrigation Source 1</th>",
                        "<th>Irrigation Source 2</th>",
                        "<th>Irrigation Source 3</th>",
                        "<th>Comments</th>",
                        "<th></th>",
                        "<th></th>",
                        "</tr>",
                    "</table>"

                ].join("")
            },
            {
                title: 'Growers',
                iconCls: 'action',
                scrollable: true,
                ui: 'action',
                listeners: {
                    activate: function(tab, eOpts) {
                        if(tab.title == 'Growers'){
                            Ext.Ajax.request({
                             url: 'http://107.180.73.170/api/v2/triton/_proc/Usp_Suppliers_all(null)?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88',
                             withCredentials: true,
                             useDefaultXhrHeader: false,
                             success: function (response, options) {

                             var html='<tr><th>Company Name</th><th>Contact Name</th><th>Contact Title</th><th>Address</th><th>City</th><th>Region</th><th>Postal Code</th><th>Phone</th><th>Fax</th><th>Homepage</th><th>Email</th><th></th><th></th></tr>';   
                             var jsonarr = Ext.decode(response.responseText);
                             for (var i = 0; i < jsonarr.length; i++) {
                               html+='<tr><td>'+jsonarr[i].CompanyName+'</td><td>'+jsonarr[i].ContactName+'</td><td>'+jsonarr[i].ContactTitle+'</td><td>'+jsonarr[i].Address+'</td><td>'+jsonarr[i].City+'</td><td>'+jsonarr[i].Region+'</td><td>'+jsonarr[i].PostalCode+'</td><td>'+jsonarr[i].Phone+'</td><td>'+jsonarr[i].Fax+'</td><td>'+jsonarr[i].HomePage+'</td><td>'+jsonarr[i].Email+'</td><td><button onclick="editgrower('+jsonarr[i].SupplierID+');">Edit<img src="resources/images/add_black.png" height="30" width="30"></button></td><td><button onclick="deletegrower('+jsonarr[i].SupplierID+');">Delete<img src="resources/images/add_black.png" height="30" width="30"></button></td></tr>';
                        
                            }
                            $('#growtable4').html('');
                            $('#growtable4').append(html);
                       
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
                        title: 'Growers & Suppliers',
                        items: [
                            {ui: 'back', text: 'Back'},
                            {
                              xtype: 'button',
                              iconCls: 'add',
                              align: 'right',
                              text: 'Apply New Growers/suppliers',
                              action: 'tab-grower'
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
                               placeHolder: 'Search...',
                               align: 'left',
                               id: 'searchBox',
                           },
                           { 
                                xtype: 'spacer'
                            }
                        ]
               
                    },
                
                ],
                html: [
                    "<table border=1 id='growtable4'>",
                        "<tr>",
                        "<th>Company Name</th>",
                        "<th>Contact Name</th>",
                        "<th>Contact Title</th>",
                        "<th>Address</th>",
                        "<th>City</th>",
                        "<th>Region</th>",
                        "<th>Postal Code</th>",
                        "<th>Phone</th>",
                        "<th>Fax</th>",
                        "<th>Homepage</th>",
                        "<th>Email</th>",
                        "<th></th>",
                        "<th></th>",
                        "</tr>",
                    "</table>"

                ].join("")
            },

            
        ],
   
    }
});


function edit(FarmFieldPlantID)
{       
    var mainurl='http://107.180.73.170/api/v2/triton/_proc/USP_FarmFieldPlants_Get('+FarmFieldPlantID+')?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';
        Ext.Ajax.request({
         url: mainurl,
         withCredentials: true,
         useDefaultXhrHeader: false,
         success: function (response, options) {
         var jsonarr = Ext.decode(response.responseText);
            $('#fieldname input').val(jsonarr[0].FarmFieldName);
            $('#ProduceId input').val(jsonarr[0].ProduceIDNumber);
            $('#LotnoId input').val(jsonarr[0].LotNo);
            $('#CropPlantId input').val(jsonarr[0].CategoryName);
            $('#date input').val(jsonarr[0].DatePlanted);
            $('#date1 input').val(jsonarr[0].ScheduledHarvestDate);
            $('#LotnoId2 input').val(jsonarr[0].TotalPoundsHarvested);
            $('#LotnoId1 input').val(jsonarr[0].FarmFieldID);
            $('#LotnoId3 input').val(jsonarr[0].CategoryID);
            $('#LotnoId4 input').val(jsonarr[0].FarmFieldPlantID);
   
        },
         failure: function (response, options) { alert('fails');/* handle failure here */ }
        });
                        
                    
                
   Ext.Viewport.setActiveItem({xtype: 'edit_growview'});//call another view
}

function harvest(FarmFieldPlantID)
{
    var mainurl='http://107.180.73.170/api/v2/triton/_proc/USP_farmfieldplants_Get('+FarmFieldPlantID+')?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';
        Ext.Ajax.request({
         url: mainurl,
         withCredentials: true,
         useDefaultXhrHeader: false,
         success: function (response, options) {
         var jsonarr = Ext.decode(response.responseText);
            $('#select input').val(jsonarr[0].FarmFieldName);
            $('#number input').val(jsonarr[0].ProduceIDNumber);
            $('#name input').val(jsonarr[0].LotNo);
            $('#select1 input').val(jsonarr[0].CategoryName);
            $('#date input').val(jsonarr[0].DatePlanted);
            $('#date1 input').val(jsonarr[0].ScheduledHarvestDate);
            $('#harvested input').val(jsonarr[0].TotalPoundsHarvested);
            $('#packed input').val(jsonarr[0].TotalPoundsPacked);
            $('#sold input').val(jsonarr[0].TotalnotPacked);
            $('#sold1 input').val(jsonarr[0].FarmFieldPlantID);
            $('#sold2 input').val(jsonarr[0].FarmFieldID);
            $('#sold3 input').val(jsonarr[0].CategoryID);
   
        },
         failure: function (response, options) { alert('fails');/* handle failure here */ }
        });
   Ext.Viewport.setActiveItem({xtype: 'harvestview'});
}
//farm edit 
function editfarm(FarmFieldID)
{
    var mainurl='http://107.180.73.170/api/v2/triton/_proc/Usp_FarmFields_Get('+FarmFieldID+')?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';
        Ext.Ajax.request({
         url: mainurl,
         withCredentials: true,
         useDefaultXhrHeader: false,
         success: function (response, options) {
         var jsonarr = Ext.decode(response.responseText);
            $('#farm input').val(jsonarr[0].FieldIDNumber);
            $('#farm1 input').val(jsonarr[0].FieldName);
            $('#farm2 input').val(jsonarr[0].SupplierName);
            $('#farm3 input').val(jsonarr[0].LegalDescription);
            $('#farm4 input').val(jsonarr[0].TotalAcres);
            $('#farm5 input').val(jsonarr[0].IrrigationSource1);
            $('#farm6 input').val(jsonarr[0].IrrigationSource2);
            $('#farm7 input').val(jsonarr[0].IrrigationSource3);
            $('#farm8 input').val(jsonarr[0].Comments);
            $('#farm11 input').val(jsonarr[0].FarmFieldID);
            $('#farm12 input').val(jsonarr[0].SupplierID);
   
        },
         failure: function (response, options) { alert('fails');/* handle failure here */ }
        });

   Ext.Viewport.setActiveItem({xtype: 'edit_farmview'});
}
// suppliers edit
function editgrower(SupplierID)
{
     var mainurl='http://107.180.73.170/api/v2/triton/_proc/Usp_Suppliers_Get('+SupplierID+')?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';
        Ext.Ajax.request({
         url: mainurl,
         withCredentials: true,
         useDefaultXhrHeader: false,
         success: function (response, options) {
         var jsonarr = Ext.decode(response.responseText);
            $('#grow input').val(jsonarr[0].CompanyName);
            $('#grow1 input').val(jsonarr[0].ContactName);
            $('#grow2 input').val(jsonarr[0].ContactTitle);
            $('#grow3 input').val(jsonarr[0].Address);
            $('#grow4 input').val(jsonarr[0].City);
            $('#grow5 input').val(jsonarr[0].Region);
            $('#grow6 input').val(jsonarr[0].PostalCode);
            $('#grow7 input').val(jsonarr[0].Phone);
            $('#grow8 input').val(jsonarr[0].Fax);
            $('#grow9 input').val(jsonarr[0].HomePage);
            $('#grow0 input').val(jsonarr[0].Email);
            $('#grow10 input').val(jsonarr[0].SupplierID);
            $('#grow11 input').val(jsonarr[0].Country);
            $('#grow12 input').val(jsonarr[0].CompanyUCCprefix);
   
        },
         failure: function (response, options) { alert('fails');/* handle failure here */ }
        });

   Ext.Viewport.setActiveItem({xtype: 'edit_growersview'});
}
// apply 
function aplyy()
{
   Ext.Viewport.setActiveItem({xtype: 'pply_pesticidesview'});
}

function aplyy(FarmFieldPlantID)
{       var mainurl='http://107.180.73.170/api/v2/triton/_proc/USP_FarmFieldPlants_Get('+FarmFieldPlantID+')?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';
        Ext.Ajax.request({
         url: mainurl,
         withCredentials: true,
         useDefaultXhrHeader: false,
         success: function (response, options) {
         var jsonarr = Ext.decode(response.responseText);
            $('#pest input').val(jsonarr[0].FarmFieldName);
            $('#pest1 input').val(jsonarr[0].ProduceIDNumber);
            $('#pest2 input').val(jsonarr[0].LotNo);
            $('#pest3 input').val(jsonarr[0].CategoryName);
            //$('#pest4 input').val(jsonarr[0].);
            $('#pest5 input').val(jsonarr[0].CategoryName);
            $('#pest6 input').val(jsonarr[0].DatePlanted);
            $('#pest7 input').val(jsonarr[0].ScheduledHarvestDate);
            ///$('#pest8 input').val(jsonarr[0].);
   
        },
         failure: function (response, options) { alert('fails');/* handle failure here */ }
        });
                        
                    
                
   Ext.Viewport.setActiveItem({xtype: 'pply_pesticidesview'});//call another view
}

function deletegrow(FarmFieldPlantID)
{   
    var mainurl='http://107.180.73.170/api/v2/triton/_proc/Usp_farmfieldplants_Delete('+FarmFieldPlantID+')?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';
        Ext.Ajax.request({
         url: mainurl,
         withCredentials: true,
         useDefaultXhrHeader: false,
         success: function (response, options) {
         var jsonarr = Ext.decode(response.responseText);   
        },
         failure: function (response, options) { alert('fails');/* handle failure here */ }
        });

}

function deletefarm(FarmFieldID)
{   
    var mainurl='http://107.180.73.170/api/v2/triton/_proc/Usp_FarmFields_Delete('+FarmFieldID+')?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';
        Ext.Ajax.request({
         url: mainurl,
         withCredentials: true,
         useDefaultXhrHeader: false,
         success: function (response, options) {
         var jsonarr = Ext.decode(response.responseText);   
        },
         failure: function (response, options) { alert('fails');/* handle failure here */ }
        });

}

function deletegrower(SupplierID)
{   
    var mainurl='http://107.180.73.170/api/v2/triton/_proc/Usp_Suppliers_Delete('+SupplierID+')?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';
        Ext.Ajax.request({
         url: mainurl,
         withCredentials: true,
         useDefaultXhrHeader: false,
         success: function (response, options) {
         var jsonarr = Ext.decode(response.responseText);   
        },
         failure: function (response, options) { alert('fails');/* handle failure here */ }
        });

}
