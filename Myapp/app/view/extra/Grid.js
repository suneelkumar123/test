Ext.create('Ext.data.Store', {
 storeId:'Students',
 fields:['firstName', 'email', 'lastName'],
 data:[
  { 
   firstName: 'Lisa', 
   email:'lisa@figleaf.com',  
   lastName: 'Drucker'
  },
  { 
   firstName: 'Bart',
   email: 'bart@figleaf.com', 
   lastName : 'Gallerizzo'
  },
  { 
   firstName: 'Homer', 
   email: 'home@figleaf.com',
   lastName: 'Perry'
  },
  {
   firstName: 'Marge', 
   email: 'marge@figleaf.com',
   lastName: 'Watts'
  }
 ]
});

Ext.create('Ext.grid.Panel', {
    title: 'Student List',
    store: Ext.getStore('Students'),
    columns: [
        { text: 'First Name',  dataIndex: 'firstName' },
        { text: 'Last Name',  dataIndex: 'lastName' },
        { text: 'Email', dataIndex: 'email', flex: 1 }
    ],
    height: 200,
    width: 400
});