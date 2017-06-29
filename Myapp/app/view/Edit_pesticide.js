
Ext.define('Myapp.view.Edit_pesticide', {
    extend: 'Ext.Container',
     //extend: 'Ext.tab.Panel',
    xtype: 'edit_pesticideview',
    requires: [
        'Ext.TitleBar'
       
    ],
    config: {
        tabBarPosition: 'bottom',
        scrollable: true,
         
    			//tabBarPosition: 'bottom',


            items: [

                    {  
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Edit Pesticides',
                        items: [
                            {ui: 'back', text: 'Back'},
                            
                        ],
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Name of pesticide',
                        name: 'name',
                        id: 'pesticide',
                        label: 'Pesticide Name',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Price',
                        name: 'name',
                        id: 'pesticide1',
                        label: 'Rates Listed Per',
                    },
                    { 
                        xtype: 'selectfield',
                        id: 'pesticide2',
                        name: 'Select',
                        valueField: 'value',
                        displayField: 'title',
                        label: 'Active Ingredients',
                        store: {//data bound control needs to pass store object
                        data: [
                            { value: '1', title: 'Master' },
                            { value: '2', title: 'Student' },
                            { value: '3', title: 'Instructor' },
                            { value: '4', title: 'Assistant' }
                        ]}
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'interval time',
                        name: 'name',
                        id: 'pesticide3',
                        label: 'Pre-Harvest Interval',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'pesticide label',
                        name: 'name',
                        id: 'pesticide4',
                        label: 'Pesticide Label Signal',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'WPS notification',
                        name: 'name',
                        id: 'pesticide5',
                        label: 'WPS Oral Notification',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'tixicity',
                        name: 'name',
                        id: 'pesticide6',
                        label: 'Toxicity Code',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'EPA register',
                        name: 'name',
                        id: 'pesticide7',
                        label: 'EPA Registration #',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'entry interval',
                        name: 'name',
                        id: 'pesticide8',
                        label: 'Restricted Entry Interval',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'product rate',
                        name: 'name',
                        id: 'pesticide9',
                        label: 'Product Rate',
                    },
                    { 
                        xtype: 'selectfield',
                        id: 'pesticide10',
                        name: 'Select',
                        valueField: 'value',
                        displayField: 'title',
                        label: 'Product Measurement',
                        store: {//data bound control needs to pass store object
                        data: [
                            { value: '1', title: 'Master' },
                            { value: '2', title: 'Student' },
                            { value: '3', title: 'Instructor' },
                            { value: '4', title: 'Assistant' }
                        ]}
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'number of items consumed',
                        name: 'name',
                        id: 'pesticide11',
                        label: 'Total Consumed',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'your name',
                        name: 'name',
                        id: 'pesticide12',
                        label: 'Applicator Name',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'certification number',
                        name: 'name',
                        id: 'pesticide13',
                        label: 'Certification #',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'GPA',
                        name: 'name',
                        id: 'pesticide14',
                        label: 'GPA',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'concentration',
                        name: 'name',
                        id: 'pesticide15',
                        label: 'Concentration',
                    },
                    { 
                        xtype: 'selectfield',
                        id: 'pesticide16',
                        name: 'Select',
                        valueField: 'value',
                        displayField: 'title',
                        label: 'Spray Rig',
                        store: {//data bound control needs to pass store object
                        data: [
                            { value: '1', title: 'Master' },
                            { value: '2', title: 'Student' },
                            { value: '3', title: 'Instructor' },
                            { value: '4', title: 'Assistant' }
                        ]}
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'noozel setup',
                        name: 'name',
                        id: 'pesticide17',
                        label: 'Noozle Setup',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Spraying instruction ',
                        name: 'name',
                        id: 'pesticide18',
                        label: 'Spraying Instruction',
                    },
                    {
                        xtype: 'textfield',
                        id: 'pesticide19',
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'pesticide20',
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'pesticide21',
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'pesticide22',
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'pesticide23',
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        id: 'pesticide24',
                        hidden: true
                    },

                    {
                         xtype: 'button', 
                         id: 'farm9', 
                         text: 'Save', 
                         align: 'left', 
                         ui: 'confirm',
                         cls: 'btnAction',
                         margin: '10',
                            handler: function () {                                   

                                  var PesticideName=Ext.getCmp('pesticide').getValue();
                                  var RatesListedPer=Ext.getCmp('pesticide1').getValue();
                                  var ActiveIndegrident=Ext.getCmp('pesticide2').getValue();
                                  var PesticideID=Ext.getCmp('pesticide19').getValue();
                                  var PesticideLabelSignalWord=Ext.getCmp('pesticide4').getValue();
                                  var WPSOralNotification=Ext.getCmp('pesticide5').getValue();
                                  var Formulation=Ext.getCmp('pesticide6').getValue();
                                  var EPARegistrationNumber=Ext.getCmp('pesticide7').getValue();
                                  var RestrictedEntryInterval=Ext.getCmp('pesticide8').getValue();
                                  var ProductRate=Ext.getCmp('pesticide9').getValue();
                                  var RestrictedUseData=Ext.getCmp('pesticide20').getValue();
                                  var TotalProductConsumed=Ext.getCmp('pesticide11').getValue();
                                  var ApplicatorName=Ext.getCmp('pesticide12').getValue();
                                  var CertificationNumber=Ext.getCmp('pesticide13').getValue();
                                  var GPA=Ext.getCmp('pesticide14').getValue();
                                  var Concentration=Ext.getCmp('pesticide15').getValue();
                                  var SprayRig=Ext.getCmp('pesticide16').getValue();
                                  var NozzelSetup=Ext.getCmp('pesticide17').getValue();
                                  var SprayingInstructions=Ext.getCmp('pesticide18').getValue();
                                  var RestrictedEntryLevelData=Ext.getCmp('pesticide21').getValue();
                                  var ProductMeasurementTypeID=Ext.getCmp('pesticide22').getValue();
                                  var Speed=Ext.getCmp('pesticide23').getValue();
                                  var MPH=Ext.getCmp('pesticide24').getValue();
                                  Ext.Ajax.request({                                    
                                        url: 'http://107.180.73.170/api/v2/triton/_proc/Usp_Pesticides_Update('+PesticideID+','+PesticideName+','+RatesListedPer+','+RestrictedUseData+','+RestrictedEntryLevelData+','+PesticideLabelSignalWord+','+WPSOralNotification+','+Formulation+','+ActiveIndegrident+','+EPARegistrationNumber+','+RestrictedEntryInterval+','+ProductRate+','+ProductMeasurementTypeID+','+TotalProductConsumed+','+ApplicatorName+','+CertificationNumber+','+Speed+','+MPH+','+GPA+','+Concentration+','+SprayRig+','+NozzelSetup+','+SprayingInstructions+')?api_key=36fda24fe5588fa4285ac6c6c2fdfbdb6b6bc9834699774c9bf777f706d05a88',
                                        method: "GET",
                                        success: function(response, request) {
                                            //me.setHtml(response.responseText);
                                        },
                                        failure: function(response, request) {
                                            //me.setHtml("failed -- response: " + response.responseText);
                                        }
                                    });
                                  alert('saved');
                            }
                    },
                    {
                         xtype: 'button', 
                         id: 'farm0', 
                         text: 'Cancel', 
                         align: 'right', 
                         ui: 'decline',
                         margin: '10',
                         action: 'cancle-pesticide',
                        handler: function () {
                                alert('Canceled');
                        }
                    },
        ]
                
    }

});