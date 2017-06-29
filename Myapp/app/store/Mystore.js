Ext.define('Myapp.store.Mystore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Myapp.model.MyModel',
        data: [
            { id: 1, name: 'Siesta by the Ocean', address: '1 Ocean Front, Happy Island', status: 1 },
            { id: 2, name: 'Gulfwind', address: '25 Ocean Front, Happy Island', status: 0 },
            { id: 3, name: 'South Pole View', address: '1 Southernmost Point, Antarctica', status: 1 },
            { id: 4, name: 'North Pole View', address: '1 Northernmost Point, Artic Ocean', status: 0 }
        ],
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                rootProperty: 'hotels'
            }
        }
     }
});