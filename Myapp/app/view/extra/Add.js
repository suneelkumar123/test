Ext.define('Myapp.view.Add', {
    extend: 'Ext.tab.Panel',
    xtype: 'add',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        //tabBarPosition: 'bottom',

        items: [
        {
            xtype: 'tableview'
        },
        

            {
                title: 'Form',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Form'
                    }, 
                    {
                        xtype: 'toolbar',
                        action: 'search',
                        docked: 'top',
                        scrollable: false,
            
                        items: [
                            { xtype: 'spacer' },
                            {
                                xtype: 'searchfield',
                                width: '16em', 
                                placeHolder: 'search...'
                            },
                            { xtype: 'spacer' }
                        ]
                    },   
                    {
                        xtype: 'selectfield',
                        id: 'select',
                        name: 'Select',
                        valueField: 'value',
                        displayField: 'title',
                        label: 'Farm Field Name',
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
                        placeHolder: 'Id number',
                        name: 'number',
                        id: 'number',
                        label: 'ProduceId No.',
                    },
                    {
                        xtype: 'textfield',
                        placeHolder: 'Your lot number',
                        name: 'name',
                        id: 'name',
                        label: 'Lot No.',
                    },
                    {
                        xtype: 'selectfield',
                        id: 'select1',
                        name: 'Select',
                        valueField: 'value',
                        displayField: 'title',
                        label: 'Crop/Plant Category',
                        store: {//data bound control needs to pass store object
                        data: [
                            { value: '1', title: 'Master' },
                            { value: '2', title: 'Student' },
                            { value: '3', title: 'Instructor' },
                            { value: '4', title: 'Assistant' }
                        ]}
                    },
                    {
                        xtype: 'datepickerfield',                       
                        name: 'date',
                        label: 'Date Planted',
                        id: 'date',
                    },
                    {
                        xtype: 'datepickerfield',
                        name: 'date',
                        label: 'Schedule Harvest Date',
                        id: 'date1',
                        // value: new Date(),
                        picker: {
                            yearFrom: 2000
                        }
                    },
                    {
                         xtype: 'button', 
                         id: 'done', 
                         text: 'Save', 
                         align: 'left', 
                         ui: 'confirm',
                         cls: 'btnAction',
                         margin: '40',
                            handler: function () {
                                //this is traditional way to get controls and their values when we will see MVC with sencha we will make this lot easier
                                //instead of writting independent controls will fetch directly bunch of records
                                var record = {//create array
                                    name: Ext.getCmp('select').getValue(), //use Ext.getCmp('ControlId') to get Control instance
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
                         margin: '40',

                        handler: function () {
                                alert('Canceled');
                        }
                    },    
                ]
            }
        ]
    }
});
