const settings = {
    "name": "laufendentdecken-podcast-website",
    "state": {
        "frontity": {
            "url": "https://test.frontity.org",
            "title": "Test Frontity Blog",
            "description": "WordPress installation for Frontity development"
        }
    },
    "packages": [
        {
            "name": "@frontity/mars-theme",
            "state": {
                "theme": {
                    "menu": [
                        [
                            "Home",
                            "/"
                        ],
                        [
                            "Nature",
                            "/category/nature/"
                        ],
                        [
                            "Travel",
                            "/category/travel/"
                        ],
                        [
                            "Japan",
                            "/tag/japan/"
                        ],
                        [
                            "About Us",
                            "/about-us/"
                        ]
                    ],
                    "featured": {
                        "showOnList": true,
                        "showOnPost": false
                    }
                }
            }
        },
        {
            "name": "@frontity/wp-source",
            "state": {
                "source": {
                    url: "https://laufendentdecken-podcast.at/",
                    api: "https://laufendentdecken-podcast.at/wp-json/",
                    postEndpoint: "episodes",
                    params: {
                        per_page: 12
                    },
                    postTypes: [
                    {
                        type: "podcast",
                        endpoint: "episodes",
                        archive: "/"
                    },
                ]
                }
            }
        },
        "@frontity/tiny-router",
        "@frontity/html2react"
    ]
};

export default settings;
