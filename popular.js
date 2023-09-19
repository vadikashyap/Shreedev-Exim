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
            "title": "Fennel Seeds",
            "bannerImage": "https://media.istockphoto.com/id/1152072821/photo/fennel-seeds-in-a-bowl-on-a-wooden-table.jpg?s=2048x2048&w=is&k=20&c=QzHWmgUR4oWI5cB0m0TgbGxMgas3VeBful9oeqNZawc=",
            "p": " small, sweet, and aromatic. They enhance flavors in dishes and aid digestion. These versatile seeds are culinary staples with potential health benefits.",
        }, {
            "id": "fenugreek-seeds",
            "title": "Fenugreek Seeds",
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
            "id": "green-mung-beans",
            "title": "Green Mung Beans",
            "bannerImage": "https://previews.123rf.com/images/posinote/posinote1607/posinote160700926/62678878-green-mung-beans-are-high-protein-low-calorie-food-did-is-packed-with-vitamins-and-minerals.jpg",
            "p":"Green mung beans: versatile legumes popular in Asian cuisine. High in protein and fiber, they are used in soups, curries, and desserts. These beans offer health benefits and are valued for their nutritional content.",
        },
    ]
};

// Function to generate HTML for a product
function generateProductHTML(product) {
    return `
                <div class="d-flex align-items-center mb-3">
                    <a href="blog.html?param=${product.id}">
                        <img src="${product.bannerImage}" style="width:50px" alt="${product.title}" />
                    </a>
                    <div class="ps-3">
                        <h6 class="fw-normal mb-0">
                            <a class="text-link-1" href="blog.html?param=${product.id}">${product.title}</a>
                        </h6>
                    </div>
                </div>
            `;
}

// Function to select three random products
function selectRandomProducts(data, count) {
    const randomProducts = [];
    const productArray = data.product;
    while (randomProducts.length < count) {
        const randomIndex = Math.floor(Math.random() * productArray.length);
        const randomProduct = productArray[randomIndex];
        if (!randomProducts.includes(randomProduct)) {
            randomProducts.push(randomProduct);
        }
    }

    return randomProducts;
}

// Generate and display three random products
const randomProducts = selectRandomProducts(productJson, 3);
const randomProductsContainer = document.getElementById("popular-product");
randomProducts.forEach(product => {
    const productHTML = generateProductHTML(product);
    randomProductsContainer.innerHTML += productHTML;
});