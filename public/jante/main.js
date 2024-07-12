require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/widgets/CoordinateConversion",
    "esri/Graphic",
    "esri/geometry/Polygon",
    "esri/geometry/Polyline",
    "esri/geometry/Point"
], function (
    esriConfig,
    Map,
    MapView,
    FeatureLayer,
    CoordinateConversion,
    Graphic,
    Polygon,
    Polyline,
    Point
) {
    const map = new Map({
        basemap: "arcgis-imagery" // Basemap layer service
        // basemap: "arcgis-topographic" // Basemap layer service
    })

    esriConfig.apiKey = "AAPK2e6c2c75d7f8427a92b9908081fa2837Y6F0WTNOlgLdXZSaU_lMO6EUxWmyOV2CTbBN891VKK6xdQ-g8mOYkFTrpgo2mmuC";

    const view = new MapView({
        map: map,
        center: [6.733343, 7.802320], // Longitude, latitude 12.019845°‎, 11.731029
        // center: [11.962646, 11.743190], // Longitude, latitude 12.019845°‎, 11.731029
        zoom: 17, // Zoom level
        container: "viewDiv" // Div element
    })

    const searchComp = document.getElementById("searchComp");
    const inputField = searchComp.querySelector("input");
    const submitButton = searchComp.querySelector("button");

    let graphicsLayer = null; // Variable to store the graphics layer



    view.when(function () {

        submitButton.addEventListener("click", function () {

            const inputValue = inputField.value;
            console.log(inputValue);
            try {
                const coordinates = JSON.parse(inputValue);

                console.log(coordinates);

                view.graphics.removeAll()
                console.log(view.graphics);

                // Create a new graphic based on the coordinates
                // let geometry;
                // if (coordinates.rings) { // Check if it's a polygon
                //     geometry = new Polygon({ rings: coordinates.rings });
                // } else if (coordinates.paths) { // Check if it's a polyline
                //     geometry = new Polyline({ paths: coordinates.paths });
                // } else {
                //     throw new Error("Invalid coordinates format");
                // }

                // const graphic = new Graphic({
                //     geometry: geometry,
                //     symbol: {
                //         type: "simple-fill", // For polygons
                //         color: [227, 139, 79, 0.8], // Orange, semi-transparent
                //         outline: {
                //             color: [255, 255, 255],
                //             width: 2
                //         }
                //     }
                // });

                const ringCoordinates = coordinates.rings; // Assuming a single ring
                console.log(ringCoordinates);
                let geometry
                ringCoordinates.forEach(([longitude, latitude]) => {
                    geometry = new Point({
                        longitude: longitude,
                        latitude: latitude
                    });

                    const pointGraphic = new Graphic({
                        geometry: new Point({
                            longitude: longitude,
                            latitude: latitude
                        }),
                        symbol: {
                            type: "simple-marker",
                            style: "circle",
                            color: "red",
                            size: "8px",
                            outline: {
                                color: [255, 255, 255],
                                width: 2
                            }
                        }
                    });

                    view.graphics.add([pointGraphic]);
                    console.log(pointGraphic);
                });


                // Zoom to the new graphic
                view.goTo(geometry);

            } catch (error) {
                console.error("Error parsing coordinates:", error);
                // You might want to display an error message to the user here
            }
        });
    });

});