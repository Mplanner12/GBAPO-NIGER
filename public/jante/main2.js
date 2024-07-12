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
], function (esriConfig, Map, MapView, FeatureLayer, CoordinateConversion, Graphic, Polygon, Polyline, Point) {
    const map = new Map({
        basemap: "arcgis-imagery" // Basemap layer service
        // basemap: "arcgis-topographic" // Basemap layer service
    })

    esriConfig.apiKey = "AAPK2e6c2c75d7f8427a92b9908081fa2837Y6F0WTNOlgLdXZSaU_lMO6EUxWmyOV2CTbBN891VKK6xdQ-g8mOYkFTrpgo2mmuC";

    const view = new MapView({
        map: map,
        center: [6.54776000, 9.61524000], // Longitude, latitude 12.019845°‎, 11.731029
        // center: [11.962646, 11.743190], // Longitude, latitude 12.019845°‎, 11.731029
        zoom: 17, // Zoom level
        container: "viewDiv" // Div element
    })

    const searchComp = document.getElementById("searchComp");
    const inputField = searchComp.querySelector("input");
    const submitButton = searchComp.querySelector("button");

    view.when(function () {

        submitButton.addEventListener("click", function () {
            const inputValue = inputField.value.trim(); // Trim whitespace

            try {
                const coordinates = JSON.parse(inputValue);

                // Clear existing graphics
                view.graphics.removeAll();

                // Handle both polygons and polylines
                let geometry;
                if (coordinates.rings) {
                    geometry = new Polygon({ rings: coordinates.rings });
                } else if (coordinates.paths) {
                    geometry = new Polyline({ paths: coordinates.paths });
                } else {
                    throw new Error("Invalid coordinates format. Expected 'rings' for polygons or 'paths' for polylines.");
                }

                view.goTo(geometry)

                // Create and add the main graphic (polygon or polyline)
                const graphic = new Graphic({
                    geometry: geometry,
                    symbol: {
                        type: coordinates.rings ? "simple-fill" : "simple-line", // Different symbols for polygons and polylines
                        color: coordinates.rings ? [227, 139, 79, 0.8] : [255, 0, 0], // Orange for polygons, red for polylines
                        style: coordinates.rings ? "solid" : "dash",
                        outline: coordinates.rings && { // Only add outline for polygons
                            color: [255, 255, 255],
                            width: 2
                        }
                    }
                });

                const firstLayer = new FeatureLayer({
                    source: [graphic],
                    objectIdField: "id",
                    renderer: {
                        type: "simple",
                        symbol: {
                            type: coordinates.rings ? "simple-fill" : "simple-line", // Different symbols for polygons and polylines
                            color: coordinates.rings ? [227, 139, 79, 0.8] : [255, 0, 0], // Orange for polygons, red for polylines
                            style: coordinates.rings ? "solid" : "dash",
                            outline: coordinates.rings && { // Only add outline for polygons
                                color: [255, 255, 255],
                                width: 2
                            }
                        }
                    }
                });

                map.add(firstLayer)

                // Create point graphics for each vertex (only for polygons)

                if (coordinates.rings) {

                    let circlePoints = []

                    coordinates.rings[0].forEach(([longitude, latitude]) => {
                        const point = new Graphic({
                            geometry: new Point({ longitude, latitude }),
                            symbol: {
                                type: "simple-marker",
                                color: "red",
                                size: 8,
                                outline: {
                                    color: [255, 255, 255],
                                    width: 2
                                }
                            }
                        });

                        circlePoints.push(point)

                        if (circlePoints.length == coordinates.rings[0].length) {

                            const pointsLayer = new FeatureLayer({
                                source: circlePoints,
                                objectIdField: "id",
                                renderer: {
                                    type: "simple",
                                    symbol: {
                                        type: "simple-marker",
                                        color: "red",
                                        size: 8,
                                        outline: {
                                            color: [255, 255, 255],
                                            width: 2
                                        }
                                    }
                                }
                            });

                            map.add(pointsLayer);
                        }

                    });



                }

            } catch (error) {
                console.error("Error parsing coordinates:", error);
                // Display a user-friendly error message (e.g., using alert or a dedicated error element)
            }
        });
    });
});
