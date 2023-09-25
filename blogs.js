const jsonData = {
    "blogs": [
        {
            "id": "spices",
            "title": "Spices",
            "bannerImage": "/assets/allImages/spices.png",
            "block": [
                {
                    "type": "h3",
                    "value": "About Spices"
                },
                {
                    "type": "p",
                    "value": "Spices refer to any dried part of a plant, other than the leaves, used for seasoning and flavoring a recipe. They are usually never the main ingredient of the recipe but add a distinct flavor to it. Besides adding flavor, they also act as a food preservative. Most spices have antimicrobial properties.India is the world's largest consumer, producer, and exporter of spices.Some examples of spices include clove, cardamom, cinnamon, allspice, nutmeg, pepper, turmeric, ginger, mace, saffron, vanilla, cumin, dill seed and more.\n" +
                        "Organic Products India is one of the leading spices exporters, manufacturers, and suppliers in India and throughout the world.  "
                },
                {
                    "type": "ul",
                    "value": [
                        "Cumin seeds / Cumin Ground",
                        "Fennel Seeds / Fennel Powder",
                        "Fenugreek Seeds / Fenugreek Ground",
                        "Whole Coriander Seeds / Coriander Ground",
                        "Ajwain "
                    ]
                },
                {
                    "type": "fullImage",
                    "value": "/assets/allImages/spices-blog.jpg",
                },
                {
                    "type": "two-grid",
                    "value": {
                        "one": {
                            "block": [
                                {
                                    "type": "h3",
                                    "value": "Uses"
                                },
                                {
                                    "type": "p",
                                    "value": "Spices are used as a medicinal ingredient in Ayurvedic practice & are essential in curing regular diseases like headache, cough & cold. These are an essential part of Indian cuisine since ages which is why you will find most of the prominent spices exporters in India. They are commonly used in Indian foods and are famous for their distinct spicy flavor of Indian foods. They are also used as natural preservatives."
                                }, {
                                    "type": "h3",
                                    "value": "Health Benefits"
                                },
                                {
                                    "type": "p",
                                    "value": "Spices have many health benefits, majorly having antimicrobial properties and disease preventing nutrients with high concentration of phytochemicals. They have mood enhancing and anti-depressing properties too."
                                },
                            ]
                        },
                        "two": {
                            "block": [
                                {
                                    "type": "fullImage",
                                    "value": "/assets/allImages/spices-section-blog.jpg"
                                },
                            ]
                        }
                    }
                }
            ]
        },
        {
            "id": "pulses",
            "title": "Pulses",
            "bannerImage": "/assets/allImages/pulses.jpg",
            "block": [
                {
                    "type": "h3",
                    "value": "About Pulses"
                },
                {
                    "type": "p",
                    "value": "Oilseeds are a group of plants whose seeds are rich in oil, making them valuable for the extraction of various vegetable oils used in cooking, industrial applications, and as biodiesel. These seeds are cultivated primarily for their oil content and include a wide variety of plants from different botanical families. Here's a brief overview of oilseeds:"
                },
                {
                    "type": "ul",
                    "value": [
                        "Groundnut (Peanut): ",
                        "Sesame",
                        "Mustard."
                    ]
                },
                {
                    "type": "fullImage",
                    "value": "/assets/allImages/pulses-blog.jpg",
                },
                {
                    "type": "two-grid",
                    "value": {
                        "one": {
                            "block": [
                                {
                                    "type": "h3",
                                    "value": "Uses"
                                },
                                {
                                    "type": "p",
                                    "value": "Pulses and lentils form an integral part of a nutritious diet. They are used extensively in throughout the world cuisines."
                                },{
                                    "type": "h3",
                                    "value": "Health Benefits"
                                },
                                {
                                    "type": "p",
                                    "value": "Pulses contain protein, Iron and anti-oxidants which protect from muscle loss, provides good eyesight, sharpens the memory, is good for haemoglobin balance. Lentils help in managing blood sugar levels and are rich in manganese and phosphorous good for bones and eyesight."
                                }
                            ]
                        },
                        "two": {
                            "block": [
                                {
                                    "type": "fullImage",
                                    "value": "/assets/allImages/pulses-blog.jpg"
                                }
                            ]
                        }
                    }
                }
            ]
        },
        {
            "id": "oil-seeds",
            "title": "Oil Seeds",
            "bannerImage": "/assets/allImages/oil-seeds.jpg",
            "block": [
                {
                    "type": "h3",
                    "value": "About Oil Seeds"
                },
                {
                    "type": "p",
                    "value": "Oilseeds are a group of plants whose seeds are rich in oil, making them valuable for the extraction of various vegetable oils used in cooking, industrial applications, and as biodiesel. These seeds are cultivated primarily for their oil content and include a wide variety of plants from different botanical families. Here's a brief overview of oilseeds:"
                },
                {
                    "type": "ul",
                    "value": [
                        "Peanuts Oil",
                        "Black Mustard Oil",
                        "Yellow Mustard Oil",
                        "Castor Oil"
                    ]
                },
                {
                    "type": "fullImage",
                    "value": "/assets/allImages/oil-seeds-section-blog.jpg",
                },
                {
                    "type": "two-grid",
                    "value": {
                        "one": {
                            "block": [
                                {
                                    "type": "h3",
                                    "value": "Oil Seeds Discription"
                                },
                                {
                                    "type": "p",
                                    "value": "Oilseeds play a crucial role in global agriculture and food production, providing essential oils for various culinary and industrial applications. They are also important for their nutritional value, as they contain healthy fats, protein, and other beneficial nutrients. However, the cultivation and processing of oilseeds can have environmental and sustainability implications, which have led to increased scrutiny and efforts to promote more responsible practices in the industry"
                                },
                            ]
                        },
                        "two": {
                            "block": [
                                {
                                    "type": "fullImage",
                                    "value": "/assets/allImages/oil-seeds.png"
                                }
                            ]
                        }
                    }
                }
            ]
        }
    ]
};

const blogsContainer = document.getElementById("blogs-container");
const urlSearchParams = new URLSearchParams(window.location.search);
// Retrieve the value of the 'param' parameter
const paramValue = urlSearchParams.get('param');


function createHTMLFromJSON(jsonData, container) {
    for (const blog of jsonData.blogs) {
        if (blog.id === paramValue) {
            const blogDiv = document.createElement("div");
            blogDiv.className = "blogs";
            // Display title
            const titleElement = document.createElement("h1");
            titleElement.textContent = blog.title;
            titleElement.className = "title";
            blogDiv.appendChild(titleElement);
            if (blog.bannerImage) {
                const bannerImageElement = document.createElement("img");
                bannerImageElement.src = blog.bannerImage;
                bannerImageElement.alt = "Banner Image";
                bannerImageElement.className = "banner-image";
                blogDiv.appendChild(bannerImageElement);
            }


            for (const block of blog.block) {
                if (block.type === "fullImage" && block.value) {
                    const imgElement = document.createElement("img");
                    imgElement.src = block.value;
                    imgElement.alt = "Image";
                    imgElement.className = "full-image";

                    blogDiv.appendChild(imgElement);
                } else if (block.type === "two-grid" && block.value) {
                    const twoGridWrapper = document.createElement("div");
                    twoGridWrapper.className = "two-grid-wrapper";

                    const divOne = document.createElement("div");
                    const divTwo = document.createElement("div");

                    if (block.value.one) {
                        for (const item of block.value.one.block) {
                            const blockElement = document.createElement(item.type);
                            blockElement.textContent = item.value;
                            blockElement.className = "grid-item";
                            divOne.appendChild(blockElement);
                        }
                    }

                    if (block.value.two) {
                        for (const item of block.value.two.block) {
                            if (item.type === "fullImage" && item.value) {
                                const imgElement = document.createElement("img");
                                imgElement.src = item.value;
                                imgElement.alt = "Image";
                                imgElement.className = "full-image";
                                twoGridWrapper.appendChild(imgElement);
                            }
                        }
                    }

                    // Append the div elements to the two-grid wrapper
                    twoGridWrapper.appendChild(divOne);
                    twoGridWrapper.appendChild(divTwo);

                    // Append the two-grid wrapper to the blogDiv
                    blogDiv.appendChild(twoGridWrapper);
                } else {
                    // Handle other block types (h3, p, ul) here
                    const blockElement = document.createElement(block.type);
                    blockElement.className = "custom-block"; // Add a class name to other block elements

                    if (block.type === "ul") {
                        for (const item of block.value) {
                            const listItem = document.createElement("li");
                            listItem.textContent = item;
                            listItem.className = "list-item"; // Add a class name to list items
                            blockElement.appendChild(listItem);
                        }
                    } else {
                        blockElement.textContent = block.value;
                    }

                    blogDiv.appendChild(blockElement);
                }

            }

            container.appendChild(blogDiv);
        }
    }
}

createHTMLFromJSON(jsonData, blogsContainer);

