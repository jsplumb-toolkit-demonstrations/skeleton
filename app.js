jsPlumbToolkit.ready(function() {

    // prepare some data
    var data = {
        nodes:[
            { id:"1", label:"jsPlumb" },
            { id:"2", label:"Toolkit" },
            { id:"3", label:"Hello" },
            { id:"4", label:"World" }
        ],
        edges:[
            { source:"1", target:"2" },
            { source:"2", target:"3" },
            { source:"3", target:"4" },
            { source:"4", target:"1" }
        ]
    };

    // get a new instance of the Toolkit
    var toolkit = jsPlumbToolkit.newInstance();

    var mainElement = document.querySelector(".jtk-demo-main"),
        canvasElement = mainElement.querySelector(".jtk-demo-canvas"),
        miniviewElement = mainElement.querySelector(".miniview");

    // render it to the div with id 'canvas' and add a miniview. Instruct the surface to zoom out after data loading
    // so that all nodes are visible. Provide some basic jsPlumb paint defaults.
    var renderer = toolkit.render({
        container:canvasElement,
        miniview:{
            container:miniviewElement
        },
        layout:{
            type:"Spring"
        },
        zoomToFit:true,
        view:{
            nodes:{
                "default":{
                    template:"tmplNode"
                }
            },
            edges:{
                "default":{
                    overlays:[
                        [ "Arrow", { location:1, width:7, length:7 }]
                    ]
                }
            }
        },
        jsPlumb:{
            Connector:"Bezier",
            Anchor:"Continuous",
            Endpoints:[ ["Dot", { radius:3 }], "Blank" ],
            PaintStyle: { lineWidth: 1, stroke: '#89bcde' },
            EndpointStyle: { fill:"#89bcde" }
        }

    });

    // load the data.
    toolkit.load({
        data:data
    });

});
