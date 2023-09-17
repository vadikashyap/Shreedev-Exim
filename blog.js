const jsonData = {
    "blogs": [
        {
            "id": "chickpeas",
            "title": "Chickpeas Title",
            "bannerImage": "https://images.pexels.com/photos/4199098/pexels-photo-4199098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "block": [
                {
                    "type": "h3",
                    "value": "Lorem ipsum dolor sit amet"
                },
                {
                    "type": "p",
                    "value": "Lorem ipsum dolor sit amet consectetuer adipiscing elit.consectetuer adipiscing elit.consectetuer adipiscing elit.consectetuer adipiscing elit."
                },
                {
                    "type": "ul",
                    "value": [
                        "consectetuer adipiscing elit.",
                        "consectetuer adipiscing elit.",
                        "consectetuer adipiscing elit."
                    ]
                },
                {
                    "type": "fullImage",
                    "value": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                },
                {
                    "type": "two-grid",
                    "value": {
                        "one": {
                            "block": [
                                {
                                    "type": "h3",
                                    "value": "Lorem ipsum dolor sit amet"
                                },
                                {
                                    "type": "p",
                                    "value": "Lorem ipsum dolor sit amet consectetuer adipiscing elit.consectetuer adipiscing elit.consectetuer adipiscing elit.consectetuer adipiscing elit."
                                },
                                {
                                    "type": "ul",
                                    "value": [
                                        "consectetuer adipiscing elit.",
                                        "consectetuer adipiscing elit.",
                                        "consectetuer adipiscing elit."
                                    ]
                                },
                            ]
                        },
                        "two": {
                            "block": [
                                {
                                    "type": "fullImage",
                                    "value": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
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
            "bannerImage": "https://plus.unsplash.com/premium_photo-1663089525424-ca57c1a28a08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "block": [
                {
                    "type": "h3",
                    "value": "Lorem ipsum dolor sit amet"
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
                    "value": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
                                {
                                    "type": "ul",
                                    "value": [
                                        "consectetuer adipiscing elit.",
                                        "consectetuer adipiscing elit.",
                                        "consectetuer adipiscing elit."
                                    ]
                                },
                            ]
                        },
                        "two": {
                            "block": [
                                {
                                    "type": "fullImage",
                                    "value": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
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
        if(blog.id===paramValue) {

            const blogDiv = document.createElement("div");
            blogDiv.className = "blog";
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

