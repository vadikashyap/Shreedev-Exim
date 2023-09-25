const productJson = {
    "product": [
        {
            "id": "cumin-seeds",
            "title": "Cumin Seeds",
            "bannerImage": "/assets/allImages/cumin-seeds.png",
        },
        {
            "id": "fennel-seeds",
            "title": "Fennel Seeds",
            "bannerImage": "/assets/allImages/fennel-seeds-blog.jpg",
        }, {
            "id": "fenugreek-seeds",
            "title": "Fenugreek Seeds",
            "bannerImage": "/assets/allImages/fenugreek-seeds.jpg",
        }, {
            "id": "whole-coriander-seeds ",
            "title": "Whole Coriander Seeds",
            "bannerImage": "/assets/allImages/whole-coriander-seeds.jpeg",
        }, {
            "id": "ajwain",
            "title": "Ajwain ",
            "bannerImage": "/assets/allImages/ajwain.jpg",
        }, {
            "id": "green-mung-beans",
            "title": "Green Mung Beans",
            "bannerImage": "/assets/allImages/green-mung-beans.jpeg",
        },
        {
            "id": "moth-beans",
            "title": "Moth Beans",
            "bannerImage": "/assets/allImages/moth-beans-blog.jpg",
        }, {
            "id": "chickpeas-desi",
            "title": "Chickpeas Desi",
            "bannerImage": "/assets/allImages/chickpeas-desi.jpg",
        }, {
            "id": "green-pearl-millet",
            "title": "Green Pearl Millet ( Bajra )",
            "bannerImage": "/assets/allImages/green-pearl-millet-blog.jpg",
        }, {
            "id": "white-sorghum",
            "title": "White Sorghum",
            "bannerImage": "/assets/allImages/white-sorghum.jpg",
        }, {
            "id": "peanuts",
            "title": "Peanuts",
            "bannerImage": "/assets/allImages/peanuts.jpeg",
        }, {
            "id": "sesame-seeds",
            "title": "Sesame seeds",
            "bannerImage": "/assets/allImages/sesame-seeds-blog.jpg",
        }, {
            "id": "black-mustard",
            "title": "Black Mustard",
            "bannerImage": "/assets/allImages/black-mustard.jpg",
        }, {
            "id": "yellow-mustard",
            "title": "Yellow Mustard",
            "bannerImage": "/assets/allImages/yellow-mustard-blog.jpeg",
        }, {
            "id": "castor-seeds",
            "title": "Castor Seeds",
            "bannerImage": "/assets/allImages/castor-seeds.jpg",
        }, {
            "id": "peanuts-oil",
            "title": "Peanuts Oil",
            "bannerImage": "/assets/allImages/peanuts-oil.jpg",
        }, {
            "id": "black-mustard-oil",
            "title": "Black Mustard Oil",
            "bannerImage": "/assets/allImages/black-mustard-oil.jpg",
        }, {
            "id": "yellow-mustard-oil",
            "title": "Yellow Mustard Oil",
            "bannerImage": "/assets/allImages/yellow-mustard-oil.jpg",
        },{
            "id": "castor-oil",
            "title": "Castor Oil",
            "bannerImage": "/assets/allImages/castor-oil.jpeg",
        },{
            "id": "psyllium-husk",
            "title": "Psyllium Husk",
            "bannerImage": "/assets/allImages/psyllium-husk.jpg",
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