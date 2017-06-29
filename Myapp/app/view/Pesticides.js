
Ext.define('Myapp.view.Pesticides', {
    extend: 'Ext.Container',
     //extend: 'Ext.tab.Panel',
    xtype: 'pesticidesview',
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
                             url: 'http://107.180.73.170/api/v2/triton/_proc/Usp_Pesticides_all()?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88',
                             withCredentials: true,
                             useDefaultXhrHeader: false,
                             success: function (response, options) {
                             var html='';   
                             var jsonarr = Ext.decode(response.responseText);
                             for (var i = 0; i < jsonarr.length; i++) {
                               html+='<tr><td>'+jsonarr[i].PesticideName+'</td><td>'+jsonarr[i].CertificationNumber+'</td><td>'+jsonarr[i].ActiveIndegrident+'</td><td>'+jsonarr[i].TotalContainers+'</td><td>'+jsonarr[i].PesticideLabelSignalWord+'</td><td>'+jsonarr[i].WPSOralNotification+'</td><td><button onclick="editpesticide('+jsonarr[i].PesticideID+');">Edit<img src="resources/images/add_black.png" height="30" width="30"></button></td><td><button onclick="deletepesticide('+jsonarr[i].PesticideID+');">Delete<img src="resources/images/add_black.png" height="30" width="30"></button></td></tr>';
                        
                            }
                            $('#growtable6').append(html);
                       
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
                        title: 'Pesticides',
                        items: [
                            {ui: 'back', text: 'Back'},
                            {
                              xtype: 'button',
                              iconCls: 'add',
                              align: 'right',
                              text: 'Add New Pesticide',
                              action: 'add-pestecides'
                            }
                        ],
                    },
                    {
                               xtype: 'searchfield',
                               width: '16em', 
                               placeHolder: 'Search...',
                               align: 'left'
                           },
                    { 
                        xtype: 'selectfield',
                        hidden: true
                    },

		            {
		                
		                html: [
		                    "<table border=1 id='growtable6'>",
		                        "<tr>",
		                        "<th>Pesticide Name</th>",
		                        "<th>Certification Number</th>",
		                        "<th>Actve Ingredient</th>",
		                        "<th>Pre-Harvest Interval</th>",
		                        "<th>Pesticide Label Signal Word</th>",
		                        "<th>WPS Oral Notification</th>",
		                        "<th></th>",
		                        "<th></th>",
		                        "</tr>",
		                    "</table>"

		                ].join("")
		            },
                
           
        ]
                
    }

});

function editpesticide(PesticideID)
{       var mainurl='http://107.180.73.170/api/v2/triton/_proc/USP_Pesticides_Get('+PesticideID+')?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';
        Ext.Ajax.request({
         url: mainurl,
         withCredentials: true,
         useDefaultXhrHeader: false,
         success: function (response, options) {
         var jsonarr = Ext.decode(response.responseText);
            $('#pesticide input').val(jsonarr[0].PesticideName);
            $('#pesticide1 input').val(jsonarr[0].RatesListedPer);
            $('#pesticide2 input').val(jsonarr[0].ActiveIndegrident);
            $('#pesticide3 input').val(jsonarr[0].FarmFieldName);
            $('#pesticide4 input').val(jsonarr[0].PesticideLabelSignalWord);
            $('#pesticide5 input').val(jsonarr[0].WPSOralNotification);
            $('#pesticide6 input').val(jsonarr[0].Formulation);
            $('#pesticide7 input').val(jsonarr[0].EPARegistrationNumber);
            $('#pesticide8 input').val(jsonarr[0].RestrictedEntryInterval);
            $('#pesticide9 input').val(jsonarr[0].ProductRate);
            $('#pesticide10 input').val(jsonarr[0].ProductMeasurementTypeName);
            $('#pesticide11 input').val(jsonarr[0].TotalProductConsumed);
            $('#pesticide12 input').val(jsonarr[0].ApplicatorName);
            $('#pesticide13 input').val(jsonarr[0].CertificationNumber);
            $('#pesticide14 input').val(jsonarr[0].GPA);
            $('#pesticide15 input').val(jsonarr[0].Concentration);
            $('#pesticide16 input').val(jsonarr[0].SprayRig);
            $('#pesticide17 input').val(jsonarr[0].NozzelSetup);
            $('#pesticide18 input').val(jsonarr[0].SprayingInstructions);
            $('#pesticide19 input').val(jsonarr[0].PesticideID);
            $('#pesticide20 input').val(jsonarr[0].RestrictedUseData);
            $('#pesticide21 input').val(jsonarr[0].RestrictedEntryLevelData);
            $('#pesticide22 input').val(jsonarr[0].ProductMeasurementTypeID);
            $('#pesticide23 input').val(jsonarr[0].Speed);
            $('#pesticide24 input').val(jsonarr[0].MPH);

        },
         failure: function (response, options) { alert('fails');/* handle failure here */ }
        });
                        
                    
                
   Ext.Viewport.setActiveItem({xtype: 'edit_pesticideview'});//call another view
}

function deletepests(PesticideID)
{   
   var mainurl='http://107.180.73.170/api/v2/triton/_proc/Usp_Pesticides_Delete('+PesticideID+')?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88';
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