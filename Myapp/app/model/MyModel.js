Ext.define('Myapp.model.MyModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'name', type: 'string' },
            { name: 'address', type: 'string' },
            { name: 'status', type: 'int' }
        ]
    }
});