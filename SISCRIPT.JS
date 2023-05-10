// Function to render your items
function renderItems(collection) {
    // The `ul` where the items will be inserted
    const collectionList = document.getElementById("collection");

    const dotContainer = document.createElement("div")

    const activeDot = document.createElement("div");

    const lazyDot = document.createElement("div");

    dotContainer.appendChild(activeDot)
    dotContainer.appendChild(lazyDot)

    // Loop through each item in the collection array
    collection.forEach(function (item) {
        const listItem = document.createElement("div"); // Make the `div
        listItem.classList.add("flowers");

        // This can get annoying, so we can use “template literals” instead
        const itemDetails = `
                  <div>
                      <div class="data-details">
                          <h2>${item.NAME}</h2>
                          <p>${item.ADDRESS}</p>
                          <p>${item.ZIP_CODE}</p>
                      </div>
                  </div>
              `;

        listItem.insertAdjacentHTML("beforeend", itemDetails); // Which can we then insert 

        collectionList.appendChild(listItem); // Then add the whole `li` into the `ul`
    });
}

// Fetch gets your JSON file.
fetch("dataSI.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (collection) {
        // And passes the data to the function, above!
        renderItems(collection); // In reverse order
    });
