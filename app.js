function update() {
    fetch("/data.json")
        .then((response) => response.json())
        .then((res) => {
            res.data.forEach((element) => {
                const longitude = element.longitude;
                const latitude = element.latitude;
                const infectedCount = element.infected;

                const color =
                    infectedCount > 255
                        ? "rgb(255, 0, 0)"
                        : `rgb(${infectedCount}, 0, 0)`;

                //mark on the map
                const marker2 = new mapboxgl.Marker({
                    color: color,
                    rotation: 0,
                    // draggable: true,
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);
            });
        });
}

update();
