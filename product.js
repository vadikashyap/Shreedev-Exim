const productJson = {
    "product": [
        {
            "id": "cumin-seeds",
            "title": "Cumin Seeds",
            "bannerImage": "https://cdn.britannica.com/59/219359-050-662D86EA/Cumin-Spice.jpg",
            "p": "small, brown, and flavorful. A culinary essential in many cuisines, they boast a warm, earthy taste. Beyond the kitchen, they offer potential health benefits like aiding digestion and boosting immunity.",
        },
        {
            "id": "fennel-seeds",
            "title": "Fennel Seeds ",
            "bannerImage": "https://media.istockphoto.com/id/1152072821/photo/fennel-seeds-in-a-bowl-on-a-wooden-table.jpg?s=2048x2048&w=is&k=20&c=QzHWmgUR4oWI5cB0m0TgbGxMgas3VeBful9oeqNZawc=",
            "p": " small, sweet, and aromatic. They enhance flavors in dishes and aid digestion. These versatile seeds are culinary staples with potential health benefits.",
        }, {
            "id": "fenugreek-seeds ",
            "title": "Fenugreek Seeds  ",
            "bannerImage": "https://media.istockphoto.com/id/1273511287/photo/fenugreek-seeds.jpg?s=2048x2048&w=is&k=20&c=9fAnyxcJKEavFZjmaShugDG4A6BXojPxeNQdC-haCus=",
            "p": "aromatic, versatile, and packed with potential health benefits. Used in cooking, herbal tea, and traditional medicine, they offer unique flavor and wellness advantages.",
        }, {
            "id": "whole-coriander-seeds ",
            "title": "Whole Coriander Seeds",
            "bannerImage": "https://media.istockphoto.com/id/1225349341/photo/coriander-seeds-in-the-bowl.jpg?s=2048x2048&w=is&k=20&c=RL0apeMA0IBwNeRFfq8KMBXTioTvUWKmelipSqaKPYo=",
            "p": "versatile spices with a zesty, slightly sweet taste. Found in cuisines worldwide, they can be ground or used whole. These seeds are linked to potential digestive benefits and add depth to dishes. A kitchen essential for flavor enhancement.",
        }, {
            "id": "ajwain",
            "title": "Ajwain ",
            "bannerImage": "https://ayurvedguru.com/files/public/inline-images/ajwain.jpg",
            "p": "Ajwain, or carom seeds, are aromatic spices used in Indian cuisine. Known for their digestive benefits, they alleviate bloating and gas. These seeds are prized for their distinctive flavor and medicinal properties.",
        }, {
            "id": "green-mung-beans ",
            "title": "green-mung-beans",
            "bannerImage": "https://previews.123rf.com/images/posinote/posinote1607/posinote160700926/62678878-green-mung-beans-are-high-protein-low-calorie-food-did-is-packed-with-vitamins-and-minerals.jpg",
            "p":"Green mung beans: versatile legumes popular in Asian cuisine. High in protein and fiber, they are used in soups, curries, and desserts. These beans offer health benefits and are valued for their nutritional content.",
        },
    ]
};


function createHTMLFromJSON(data, container) {
    productJson.product.forEach(product => {
        const divCol = document.createElement("div");
        divCol.classList.add("col-12", "col-md-6", "col-lg-4");

        const divHoverbox = document.createElement("div");
        divHoverbox.classList.add("hoverbox-6", "border-radius", "text-end");

        const aImageLink = document.createElement("a");
        aImageLink.href = `blog.html?param=${product.id}`;

        const imgProductImage = document.createElement("img");
        imgProductImage.src = product.bannerImage;
        imgProductImage.alt = "";

        aImageLink.appendChild(imgProductImage);
        divHoverbox.appendChild(aImageLink);

        const divTextInfo = document.createElement("div");
        divTextInfo.classList.add("mt-3");

        const h5Title = document.createElement("h5");
        h5Title.classList.add("fw-medium");

        const aTitleLink = document.createElement("a");
        aTitleLink.classList.add("text-link-1");
        aTitleLink.href = "#";
        aTitleLink.textContent = product.title;

        h5Title.appendChild(aTitleLink);

        const pDescription = document.createElement("p");
        pDescription.textContent = product.p;

        divTextInfo.appendChild(h5Title);
        divTextInfo.appendChild(pDescription);

        divCol.appendChild(divHoverbox);
        divCol.appendChild(divTextInfo);

        productContainer.appendChild(divCol);
    });
}

const productContainer = document.getElementById('product-container');

// Call the createHTMLFromJSON function to create and insert the HTML from the JSON data
createHTMLFromJSON(productJson, productContainer);