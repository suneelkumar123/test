(function () {
    var animations = {
        text: 'animations',
        card: false,
        id: 'animations',
        items: [
            {
                text: 'Grow',
                id: 'tabGrow',
                items: [
                    {
                        text: 'Harvest',
                        id: 'Harvest',
                        view: 'harvestview',
                        card: false,
                        animation: {
                            type: 'slide'
                        },
                        leaf: true
                    },
                    // {
                    //     text: 'Slide Right',
                    //     card: false,
                    //     id: 'SlideRight',
                    //     view: 'SlideRight',
                    //     animation: {
                    //         type: 'slide',
                    //         direction: 'right'
                    //     },
                    //     leaf: true
                    // },
                    // {
                    //     text: 'Slide Up',
                    //     card: false,
                    //     id: 'SlideUp',
                    //     view: 'SlideUp',
                    //     animation: {
                    //         type: 'slide',
                    //         direction: 'up'
                    //     },
                    //     leaf: true
                    // },
                    // {
                    //     text: 'Slide Down',
                    //     card: false,
                    //     id: 'SlideDown',
                    //     view: 'SlideDown',
                    //     animation: {
                    //         type: 'slide',
                    //         direction: 'down'
                    //     },
                    //     leaf: true
                    // }
                // ]
            }
            // {
            //     text: 'Fade',
            //     id: 'Fade',
            //     card: false,
            //     animation: {
            //         type: 'fade',
            //         duration: 500
            //     },
            //     leaf: true
            // }
        ]};
Ext.define('Myapp.store.Mystore1', {
    alias: 'store.Mystore1',
    extend: 'Ext.data.TreeStore',
    requires: ['Myapp.model.MyModel1'],

    config: {
        model: 'Myapp.model.MyModel1',
        root: root,
        defaultRootProperty: 'items'
       
     }
});
}();
