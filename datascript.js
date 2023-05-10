//item[0]



//console.log(lat)
//==> -73.8186225050414


//let deltaX = mapRight - long

// Function \ to render your items
function renderItems(collection) {
    const collectionList = document.querySelector('.dotgroup');
    const imageContainer = document.querySelector(".tocmap");

    let mapTop = 40.98;
    let mapBottom = 40.47965191527747;
    let mapLeft = -74.4490818058294;
    let mapRight = -72.81;

    let mapWidth = mapRight - mapLeft;
    let mapHeight = mapTop - mapBottom;

    imageContainer.style.right =  `${mapWidth*100}%`;
    imageContainer.style.top = `${mapHeight*100}%`;

    // console.log(mapWidth)

    
    console.log("mapWidth", mapWidth);
    console.log("mapHeight", mapHeight);

    collection.forEach((item) => {
        //get map point position
        let long = item.the_geom.split("(")[1].split(" ")[0];
        let lat = item.the_geom.split("(")[1].split(" ")[1].substring(0, item.the_geom.split("(")[1].length -1);
        
        let coordLong = parseFloat(long);
        let coordLat = parseFloat(lat);
        let deltaX = mapRight - coordLong;
        let percentX = (deltaX / mapWidth) * 100;
        let deltaY = mapTop - coordLat;
        let percentY = (deltaY / mapHeight) * 100;

        console.log(lat);

        if (long && lat) {
            // let address = item.input_1_address
            //render map point
            const dotContainer = document.createElement("div");
            dotContainer.classList.add("map-dot");
            collectionList.appendChild(dotContainer);
            dotContainer.style.right = `${percentX}%`;
            dotContainer.style.top = `${percentY}%`;
            // console.log(percentX);

            // //assign address to map point
            // dotContainer.dataset.address = address

            if (item.CITY == "Manhattan") {
                dotContainer.style.backgroundColor = `#022b37`;
            } else if (item.CITY == "Brooklyn") {
                dotContainer.style.backgroundColor = `#022b37`;
            } else if (item.CITY == "Staten Island") {
                dotContainer.style.backgroundColor = `#022b37`;
            } else if (item.CITY == "Bronx") {
                dotContainer.style.backgroundColor = `#022b37`;
            } else if (item.CITY == "Queens") {
                dotContainer.style.backgroundColor = `#022b37`;
            }

            // let toolTip = document.querySelector('.tool-tip')

            // dotContainer.addEventListener('mouseenter', () => {
            //   toolTip.classList.add('is-hovering')
            //   toolTip.innerHTML = address
            // })
            // dotContainer.addEventListener('mouseleave', () => {
            //   toolTip.classList.remove('is-hovering')
            // })

            // console.log('dotContainer', dotContainer.getBoundingClientRect());
        }


    });
}

fetch("data.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (collection) {
        // And passes the data to the function, above!
        renderItems(collection.reverse()); // In reverse order
    });
