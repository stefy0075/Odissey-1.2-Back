export let destinos = [
    {
        id: "bariloche",
        title: "Bariloche",
        continent: "South America",
        country: "Argentina",
        cover_photo:
            "https://anduma.tur.ar/wp-content/uploads/2021/04/faf36f_323792ea108e49378282fe19bc560c51_mv2.jpg",
        description:
            "The city of San Carlos de Bariloche is located on the western side of the province of Río Negro. It is one of the most populated Argentine cities in the Patagonian Andes. It has a population of 108,250 inhabitants and stands out, due to its magnitude and geographical location, as an important urban center.",
        packages:[
            {
            type: "Plane",
            stock: 25,
            time: [
                {
                start_date: "08/12/2023",  // Despues reviso si se puede pasar por el calendar de google.
                finish_date: "15/12/2023" // Despues reviso si se puede pasar por el calendar de google.
                }
            ],
            price: 495,
            hotel: [
                {
                check_in: "09/12/2023 - 07:00 am",
                check_out: "16/12/2023 - 10:00 am"
            }
        ]  
            },

            {
            type: "Train",
            stock: 35,
            time: {
                start_date: " Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

            {
            type: "Bus",
            stock: 28,
            time: {
                start_date: "20/12/2023",  // Despues reviso si se puede pasar por el calendar de google.
                finish_date: "25/12/2023" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 340,
                hotel: "Not Available"
            },
        ],
        category_id: "Mountains and Adventure Sports",
        seller_id: "raul",
        pages: [
            "https://images.unsplash.com/photo-1617548438104-286c90f80710?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFyaWxvY2hlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            "https://getwalls.io/media/large/2020/07/san-carlos-de-bariloche-hd-4k-wallpapers-for-apple-watch-iphone-large-934416058.jpg",
            "https://anduma.tur.ar/wp-content/uploads/2021/04/faf36f_323792ea108e49378282fe19bc560c51_mv2.jpg",
        ],
    },


    {
        id: "Las Cataratas del Iguazú",
        title: "Las Cataratas del Iguazú",
        continent: "South America",
        country: "Argentina",
        cover_photo:
            "https://c4.wallpaperflare.com/wallpaper/447/232/16/iguazu-national-park-south-america-iguazu-river-misiones-wallpaper-preview.jpg",
        description: 
            "There are more than 2 km of waterfalls over 70 meters high, a spectacular manifestation of one of the planet's increasingly scarce resources: water. The falls run along cliffs and islets, distributed in a crescent that forms this geographical feature.",
            packages:[
                {
                type: "Plane",
                stock: 37,
                time: [
                    {
                        start_date: "02/02/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "09/02/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 489,
                hotel: [
                    {
                        check_in: "03/02/2024 - 07:00 am",
                        check_out: "10/02/2024 - 10:00 am"
                    }
                ]
            },

                {
                type: "Train",
                stock: "Not Available",
                time: {
                    start_date: " Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

                {
                type: "Bus",
                stock: 17,
                time: {
                    start_date: "20/02/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "10/02/2024" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 440,
                hotel: [
                    {
                        check_in: "21/02/2024 - 07:00 am",
                        check_out: "21/02/2024 - 10:00 am"
                    }
                ]
            },
        ],
        category_id: "Nature and Wildlife",
        seller_id: "adrian",
        pages: [
            "https://c0.wallpaperflare.com/preview/654/738/493/nature-summer-water-river.jpg",
            "https://dailyweb.com.ar/data/img_cont/img_imagenes/img_gr/42711.jpg",
        ],
    },


    {
        id: "Calafate",
        title: "Calafate",
        continent: "South America",
        country: "Argentina",
        cover_photo:
            "https://viatgesrovira.com/wp-content/uploads/2020/01/CALAFATE.jpg",
        description: "The land of the glaciers presents, in addition to the charm and majesty of the most beautiful and impressive ice blocks in the world, a city full of life and surprises. It is a safe, clean and green place, with numerous natural attractions and a lot of Patagonian history.",
        packages:[
                {
                type: "Plane",
                stock: 7,
                time: [
                    {
                        start_date: "12/03/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "20/03/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 1098,
                hotel: [
                    {
                        check_in: "13/03/2024 - 07:00 am",
                        check_out: "21/03/2024 - 10:00 am"
                    }
                ]
            },

                {
                type: "Train",
                stock: 18,
                time: {
                    start_date: "20/02/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "10/02/2024" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 850,
                hotel: [
                    {
                        check_in: "21/02/2024 - 07:00 am",
                        check_out: "21/02/2024 - 10:00 am"
                    }
                ]
            },

                {
                type: "Bus",
                stock: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },
        ],
        category_id: "Mountains and Adventure Sports",
        seller_id: "julia",
        pages: [
            "https://www.wendywutours.com.au/resource/upload/2001/banner-el-calafate.jpg.webp",
            "https://i.ytimg.com/vi/0qe4rStwiHY/maxresdefault.jpg",
            "https://www.infobae.com/new-resizer/81HARaBEGXhTg3SeYG5MRMJ8J18=/1200x628/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/OKNR6K64A5EXREH3LME2OCNQXM.jpg",
        ],
    },


    {
        id: "Parque Nacional El Leoncito",
        title: "Parque Nacional El Leoncito",
        continent: "South America",
        country: "Argentina",
        cover_photo:
            "https://1.bp.blogspot.com/-2-6kA3yOl7s/XPfBKGn-SEI/AAAAAAAAG3A/v2YK8ruMUPsCplnd4otTciCFLDh31XATgCPcBGAYYCw/s1600/Parque%2Bnacional%2Bel%2Bleoncito%2Bactividades%2Binformacion%2Btrekking%2Bvisitas.jpg",
        description: 
        "The national park's management plan highlights the values to be conserved in the park: exceptional atmospheric conditions; the water system of the western slope of the Tontal mountain range and its associated biodiversity; three ecoregions represented: Monte de sierras y bolsones, Puna and Altos Andes; the presence of endemic species and species with some degree of threat; species of functional value; paleontological resources of high scientific value; and cultural resources.",
            packages:[
                {
                type: "Plane",
                stock: "Not Available",
                time: [
                    {
                        start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: "Not Available",
                hotel: "Not Available"
            },

                {
                type: "Train",
                stock: 29,
                time: {
                    start_date: "22/06/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "29/06/2024" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 648,
                hotel: [
                    {
                        check_in: "23/06/2024 - 07:00 am",
                        check_out: "30/06/2024 - 10:00 am"
                    }
                ]
            },

                {
                type: "Bus",
                stock: 63,
                time: {
                    start_date: "22/06/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "30/06/2024" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 568,
                hotel: "Not Available"
            },
        ],
        category_id: "Nature and Wildlife",
        seller_id: "julia",
        pages: [
            "https://cdn-sp.radionacional.com.ar/wp-content/uploads/2019/07/El-leoncito.jpg",
            "https://www.telesoldiario.com/content/bucket/5/414625w850h521c.jpg.webp",
        ],
    },


    {
        id: "Parque Nacional Chaco",
        title: "Parque Nacional Chaco",
        continent: "South America",
        country: "Argentina",
        cover_photo:
            "https://www.serargentino.com/public/images/2020/07/15947388080-parque_nacional_chaco_casa_guardaparque-773x458.jpg",
        description: 
        "Chaco National Park is a protected area of 14,981 hectares around the Negro River, near the town of Capitan Solari, in the central-eastern part of the province, which thanks to its warm subtropical climate is home to large lagoons and lush jungle vegetation alternating with palm groves and marshes.",
            packages:[
                {
                type: "Plane",
                stock: "Not Available",
                time: [
                    {
                        start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: "Not Available",
                hotel: "Not Available"
            },

                {
                type: "Train",
                stock: 13,
                time: {
                    start_date: "22/06/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "29/06/2024" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 648,
                hotel: [
                    {
                        check_in: "23/06/2024 - 07:00 am",
                        check_out: "30/06/2024 - 10:00 am"
                    }
                ]
            },

                {
                type: "Bus",
                stock: 7,
                time: {
                    start_date: "22/06/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "30/06/2024" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 568,
                hotel: "Not Available"
            },
        ],
        category_id: "Nature and Wildlife",
        seller_id: "javier",
        pages: [
            "https://www.industriaambiental.com.ar/images/articulos/19/chaco.jpg",
            "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/DLPWBHNQSFA7NJSWZY4BUTEDPY.jpg", "https://destinonea.com/download/multimedia.normal.94f7a5b27c9eb7dc.656c2070616c6d6172206c6167756e615f6e6f726d616c2e6a7067.jpg"
        ],
    },


    {
        id: "Puerto Madryn",
        title: "Puerto Madryn",
        continent: "South America",
        country: "Argentina",
        cover_photo:
            "https://millasxelmundo.com/wp-content/uploads/2021/11/img_9476.png",
        description: 
            "Puerto Madryn, also known as 'Madryn', is a city in the northeast of the province of Chubut, Argentina, head of the department of Biedma. It is located in front of the Argentinean sea in the Atlantic Ocean. Its population in 2023 is approximately 127,914 inhabitants.",
            packages:[
                {
                type: "Plane",
                stock: 18,
                time: [
                    {
                        start_date: "13/08/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "25/08/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 569,
                hotel: [
                    {
                        check_in: "14/08/2024 - 07:00 am",
                        check_out: "25/08/2024 - 10:00 am"
                    }
                ]
            },

                {
                type: "Train",
                stock: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

                {
                type: "Bus",
                stock: 5,
                time: {
                    start_date: "15/07/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "27/07/2024" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 497,
                hotel: [
                    {
                        check_in: "16/07/2024 - 07:00 am",
                        check_out: "28/07/2024 - 10:00 am"
                    }
                ]
            },
        ],
        seller_id: "javier",
        category_id: "Nature and Wildlife",
        pages: [
            "https://turismo-en-argentina.com/wp-content/uploads/2017/11/0022958511.jpg",
            "https://www.trips-southamerica.com/wp-content/uploads/Whale-watching-sailing-1.jpg"
        ],
    },


    {
        id: "Palermo",
        title: "Palermo",
        continent: "South America",
        country: "Argentina",
        cover_photo:
            "https://turismo.buenosaires.gob.ar/sites/turismo/files/planetario_agua_1200_2.jpg",
        description: 
            "It is a residential and recreational neighborhood. Within its boundaries are the so-called 'Bosques de Palermo' (Palermo Woods), which include large parks and green spaces. It is an important gastronomic, cultural and audiovisual center and is one of the favorite destinations for tourists visiting the city.",
            packages:[
                {
                type: "Plane",
                stock: 28,
                time: [
                    {
                        start_date: "07/09/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "24/09/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 589,
                hotel: [
                    {
                        check_in: "08/09/2024 - 07:00 am",
                        check_out: "25/09/2024 - 10:00 am"
                    }
                ]
            },

                {
                type: "Train",
                stock: 47,
                time: {
                    start_date: "05/09/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "15/09/2024" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 557,
                hotel: [
                    {
                        check_in: "07/09/2024 - 07:00 am",
                        check_out: "16/09/2024 - 10:00 am"
                    }
                ]
            },

                {
                type: "Bus",
                stock: 94,
                time: {
                    start_date: "09/09/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "24/09/2024" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 497,
                hotel: [
                    {
                        check_in: "11/09/2024 - 07:00 am",
                        check_out: "25/09/2024 - 10:00 am"
                    }
                ]
            },
        ],
        seller_id: "javier",
        category_id: "City and Urban Tourism",
        pages: [
            "https://media.a24.com/p/d134afdadd5ff4dbb2a7ffcd1f20aac5/adjuntos/296/imagenes/008/810/0008810835/1200x675/smart/flor-palermojpg.jpg",
            "https://turismo.buenosaires.gob.ar/sites/turismo/files/styles/carousell_atractivo/public/jarin_japones_puente_2_1200.jpg?itok=0HECfrxO"
        ],
    },


    {
        id: "La Cumbrecita",
        title: "La Cumbrecita",
        continent: "South America",
        country: "Argentina",
        cover_photo:
            "https://i.postimg.cc/xdz8jS3z/lacumbrecita.png",
        description: 
            "La Cumbrecita, is located to the west of the Calamuchita Valley, hidden among the large sierras, almost 1500 meters above sea level. It is located 125 Km. from the city of Córdoba. It is also a few kilometers from the highest peak of the sierras of Córdoba, the Cerro Champaquí, with 2760 meters above sea level.",
            packages:[
                {
                type: "Plane",
                stock: 16,
                time: [
                    {
                        start_date: "13/04/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "30/04/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 514,
                hotel: [
                    {
                        check_in: "13/04/2024 - 07:00 am",
                        check_out: "30/04/2024 - 10:00 am"
                    }
                ]
            },

                {
                type: "Train",
                stock: 32,
                time: {
                    start_date: "05/08/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "15/08/2024" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 489,
                hotel: [
                    {
                        check_in: "06/08/2024 - 07:00 am",
                        check_out: "16/08/2024 - 10:00 am"
                    }
                ]
            },

                {
                type: "Bus",
                stock: 21,
                time: {
                    start_date: "15/12/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "02/01/2025" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 457,
                hotel: [
                    {
                        check_in: "16/12/2024 - 07:00 am",
                        check_out: "02/01/2025 - 10:00 am"
                    }
                ]
            },
        ],
        seller_id: "javier",
        category_id: "Nature and Wildlife",
        pages: [
            "https://media.lacapital.com.ar/p/4d351e29c618e7ea5de0a365b3fde843/adjuntos/203/imagenes/100/030/0100030171/1200x675/smart/78131685jpg.jpg",
            "https://www.lacumbrecita.gob.ar/images/btn/rincon-cascada.jpg"
        ],
    },


    {
        id: "Termas de Federación",
        title: "Termas de Federación",
        continent: "South America",
        country: "Argentina",
        cover_photo:
            "https://revistauncamino.com.ar/wp-content/uploads/2020/01/TERMAS-FEDERACION-3.jpg",
        description: 
            "Inauguradas en 1995, las termas de Federación son la primera perforación termal de la mesopotamia argentina. Sus aguas surgen desde una profundidad de 1.260 metros y pertenecen al 'Acuífero Tacuarembó' o 'Acuífero Guaraní', del que también se nutren las termas del vecino país Uruguay y las del sur de Brasil.",
            packages:[
                {
                type: "Plane",
                stock: "Not Available",
                time: [
                    {
                        start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: "Not Available",
                hotel: "Not Available"
            },

                {
                type: "Train",
                stock: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

                {
                type: "Bus",
                stock: 51,
                time: {
                    start_date: "03/05/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "17/05/2024" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 457,
                hotel: [
                    {
                        check_in: "04/05/2024 - 07:00 am",
                        check_out: "17/05/2025 - 10:00 am"
                    }
                ]
            },
        ],
        seller_id: "julia",
        category_id: "Nature and Wildlife",
        pages: [
            "https://media.lacapital.com.ar/p/ad98062fd17618bfde5d8360aeac2fab/adjuntos/205/imagenes/029/158/0029158216/1200x675/smart/termasjpg.jpg",
            "https://www.welcomeargentina.com/blog/imagenes/784-2.jpg"
        ],
    },


    {
        id: "Purmamarca",
        title: "Purmamarca",
        continent: "South America",
        country: "Argentina",
        cover_photo:
            "https://i.ytimg.com/vi/sjUrN5FNR0k/maxresdefault.jpg",
        description: 
            "The town of Purmamarca is a National Historic Site and is also the gateway to the Puna del Sur of Jujuy through the Cuesta de Lipan and the Salinas Grandes. It is famous for its Cerro de los Siete Colores and for its location in the Quebrada de Humahuaca which is a UNESCO World Heritage Site.",
            packages:[
                {
                type: "Plane",
                stock: "Not Available",
                time: [
                    {
                        start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: "Not Available",
                hotel: "Not Available"
            },

                {
                type: "Train",
                stock: 14,
                time: {
                    start_date: "17/07/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "04/07/2024" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 489,
                hotel: [
                    {
                        check_in: "18/07/2024 - 07:00 am",
                        check_out: "04/07/2025 - 10:00 am"
                    }
                ]
            },

                {
                type: "Bus",
                stock: 26,
                time: {
                    start_date: "04/03/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "17/03/2024" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 457,
                hotel: [
                    {
                        check_in: "05/03/2024 - 07:00 am",
                        check_out: "17/03/2024 - 10:00 am"
                    }
                ]
            },
        ],
        seller_id: "julia",
        category_id: "Nature and Wildlife",
        pages: [
            "https://media-cdn.tripadvisor.com/media/photo-s/22/37/11/51/vista.jpg",
            "https://espaciopurmamarca.com/wp-content/uploads/2019/08/unnamed.png"
        ],
    },


    {
        id: "San Martín de los Andes",
        title: "San Martín de los Andes",
        continent: "South America",
        country: "Argentina",
        cover_photo:
            "https://www.rionegro.com.ar/wp-content/uploads/2022/04/00000000000000-7.jpg",
        description: 
            "San Martín de los Andes was founded on February 4, 1898 with the purpose of strategically establishing a settlement near the border with Chile due to the territorial conflicts that existed at that time. The first settlement was developed on a territory belonging, at that time, to the Mapuche Curruhuinca community.",
            packages:[
                {
                type: "Plane",
                stock: 74,
                time: [
                    {
                        start_date: "05/11/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "17/11/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 987,
                hotel: [
                    {
                        check_in: "05/11/2024 - 07:00 am",
                        check_out: "17/11/2024 - 10:00 am"
                    }
                ]
            },

                {
                type: "Train",
                stock: 39,
                time: {
                    start_date: "17/07/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "04/07/2024" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 865,
                hotel: [
                    {
                        check_in: "18/07/2024 - 07:00 am",
                        check_out: "04/07/2025 - 10:00 am"
                    }
                ]
            },

                {
                type: "Bus",
                stock: 42,
                time: {
                    start_date: "04/03/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "17/03/2024" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 794,
                hotel: [
                    {
                        check_in: "05/03/2024 - 07:00 am",
                        check_out: "17/03/2024 - 10:00 am"
                    }
                ]
            },
        ],
        seller_id: "julia",
        category_id: "Nature and Wildlife",
        pages: [
            "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/San-Marti%CC%81n-de-los%20Andes.jpg",
            "https://i0.wp.com/elplanetaurbano.com/wp-content/uploads/2022/04/San-Martin-de-los-Andes-EPU.jpg?fit=1600%2C1200&ssl=1"
        ],
    },


    {
        id: "Ushuaia",
        title: "Ushuaia",
        continent: "South America",
        country: "Argentina",
        cover_photo:
            "https://media.viajando.travel/p/ed55770f8c8875de65e4e0dae5a314f6/adjuntos/236/imagenes/000/490/0000490331/1200x675/smart/ushuaia.jpg",
        description: 
            "The city of Ushuaia, capital of the Province of Tierra del Fuego, Antarctica and South Atlantic Islands, is located on the shores of the Beagle Channel, surrounded by the Martial mountain range. It is considered the southernmost city in the world and has an irregular relief: glacial valleys, peat bogs and mountain ranges.",
            packages:[
                {
                type: "Plane",
                stock: 31,
                time: [
                    {
                        start_date: "17/09/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "31/09/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 1187,
                hotel: [
                    {
                        check_in: "17/09/2024 - 07:00 am",
                        check_out: "31/09/2024 - 10:00 am"
                    }
                ]
            },

                {
                type: "Train",
                stock: 12,
                time: {
                    start_date: "17/07/2024",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "04/07/2024" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: 1065,
                hotel: [
                    {
                        check_in: "24/10/2024 - 07:00 am",
                        check_out: "06/10/2024 - 10:00 am"
                    }
                ]
            },

                {
                type: "Bus",
                stock: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },
        ],
        seller_id: "julia",
        category_id: "End of the World and Extreme Nature",
        pages: [
            "https://www.cronista.com/files/image/295/295641/5ffe0a00e808f.jpg",
            "https://media.staticontent.com/media/pictures/3c387a50-2517-44c1-856b-87e2d906d03b"
        ],
    },


    {
        id: "Paris",
        title: "Paris",
        continent: "Europe",
        country: "France",
        cover_photo:
            "https://e0.pxfuel.com/wallpapers/937/600/desktop-wallpaper-paris-paris-france-landscape.jpg",
        description: 
            "The city of Paris, within its narrow administrative boundaries, has a population of 2,273,305 inhabitants in 2015. However, in the 20th century, the Paris metropolitan area expanded beyond the boundaries of the municipality of Paris, and is today, with a population of 12,997,058 inhabitants in 2020, the most populous metropolitan area on the European continent and the 28th in the world.4",
            packages:[
                {
                type: "Plane",
                stock: 28,
                time: [
                    {
                        start_date: "06/04/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "21/04/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 2389,
                hotel: [
                    {
                        check_in: "06/04/2024 - 07:00 am",
                        check_out: "21/04/2024 - 10:00 am"
                    }
                ]
            },

                {
                type: "Train",
                stock: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

                {
                type: "Bus",
                stock: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },
        ],
        seller_id: "julia",
        category_id: "International",
        pages: [
            "https://worldwidetravel.tips/wp-content/uploads/2020/07/Paris-Eiffel-Tower-_75.jpg.webp",
            "https://p4.wallpaperbetter.com/wallpaper/384/581/117/france-paris-eiffel-tower-world-wallpaper-preview.jpg"
        ],
    },


    {
        id: "Cancun",
        title: "Cancun",
        continent: "South America",
        country: "Mexico",
        cover_photo:
            "https://blogs.portafolio.co/wp-content/uploads/2022/02/playas-cancun.jpg",
        description: 
            "Located on the northeast coast of the state of Quintana Roo, its scenic beauty and landscape around its beaches, the extension and biodiversity of its reefs, its islands, lagoons, cenotes, estuaries, as well as the great variety of flora and fauna it has, has allowed sustainable planning, making Cancun one of the most modern and important cities in Latin America, besides being the most recognized Mexican tourist destination worldwide.",
            packages:[
                {
                type: "Plane",
                stock: 49,
                time: [
                    {
                        start_date: "06/01/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "24/01/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 2589,
                hotel: [
                    {
                        check_in: "06/01/2024 - 07:00 am",
                        check_out: "24/01/2024 - 10:00 am"
                    }
                ]
            },

                {
                type: "Train",
                stock: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

                {
                type: "Bus",
                stock: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },
        ],
        seller_id: "julia",
        category_id: "International",
        pages: [
            "https://i0.wp.com/blog.vivaaerobus.com/wp-content/uploads/2019/12/Mejores-Playas-de-Canc%C3%BAn.jpg?resize=1280%2C640&ssl=1",
            "https://i0.wp.com/blog.vivaaerobus.com/wp-content/uploads/2019/12/Playas-de-Cancun-Forum.jpg?w=700&ssl=1"
        ],
    },


    {
        id: "Venecia",
        title: "Venecia",
        continent: "Europe",
        country: "Italy",
        cover_photo:
            "https://assets.puzzlefactory.pl/puzzle/226/532/original.webp",
        description: 
        "Venice is a magical city that seems to float on the waters of the northern end of the Adriatic. It is built on 118 islands consolidated with wooden piles, connected by 400 pedestrian bridges and 170 navigable canals, which facilitate the movement of the local population.",
            packages:[
                {
                type: "Plane",
                stock: 31,
                time: [
                    {
                        start_date: "14/06/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "30/06/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 2638,
                hotel: [
                    {
                        check_in: "14/06/2024 - 07:00 am",
                        check_out: "30/06/2024 - 10:00 am"
                    }
                ]
            },

                {
                type: "Train",
                stock: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

                {
                type: "Bus",
                stock: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },
        ],
        seller_id: "julia",
        category_id: "International",
        pages: [
            "https://www.10wallpaper.com/wallpaper/1366x768/1605/Europe_Gondolas_River-Venice_Italy_Travel_HD_wallpaper_1366x768.jpg",
            "https://viajes.nationalgeographic.com.es/medio/2018/02/19/vencia-gran-canal_9670bbbd.jpg"
        ],
    },


    {
        id: "Cairo",
        title: "Cairo",
        continent: "Africa",
        country: "Egipto",
        cover_photo:
            "https://s1.best-wallpaper.net/wallpaper/m/1802/Cairo-pyramid-camel-sands-palm-tree-sun-Egypt_m.webp",
        description: 
            "Cairo (Arabic: القاهرة,al-Qāhirah) is the capital of Egypt and one of the largest cities in Africa and the Middle East, with a total population exceeding 16 million people. It is also the 13th largest city in the world.",
            packages:[
                {
                type: "Plane",
                stock: 27,
                time: [
                    {
                        start_date: "14/09/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "31/09/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 2638,
                hotel: [
                    {
                        check_in: "14/09/2024 - 07:00 am",
                        check_out: "31/09/2024 - 10:00 am"
                    }
                ]
            },

                {
                type: "Train",
                stock: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

                {
                type: "Bus",
                stock: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },
        ],
        seller_id: "julia",
        category_id: "International",
        pages: [
            "https://w0.peakpx.com/wallpaper/599/148/HD-wallpaper-night-view-over-cairo-city-view-cairo-egypt-night.jpg",
            "https://s1.best-wallpaper.net/wallpaper/m/1706/Egypt-Cairo-pyramid-desert_m.webp"
        ],
    },


    {
        id: "Los Angeles",
        title: "Los Angeles",
        continent: "North America",
        country: "United States",
        cover_photo:
            "https://p4.wallpaperbetter.com/wallpaper/678/201/305/los-angeles-santa-monica-beach-silhouette-of-trees-wallpaper-preview.jpg",
        description: 
            "Los Angeles has a total area of 1302.76 km², of which 1214.9 km² is land, and the rest (87.86 km²) is water. This makes it the fourteenth largest city in the United States. It measures 71 km longitudinally and 47 km from east to west.",
            packages:[  
                {
                type: "Plane",
                stock: 57,
                time: [
                    {
                        start_date: "02/03/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "21/03/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 2238,
                hotel: [
                    {
                        check_in: "02/03/2024 - 07:00 am",
                        check_out: "21/03/2024 - 10:00 am"
                    }
                ]
            },

                {
                type: "Train",
                stock: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

                {
                type: "Bus",
                stock: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },
        ],
        seller_id: "julia",
        category_id: "International",
        pages: [
            "https://p4.wallpaperbetter.com/wallpaper/819/356/1016/city-sunset-california-palm-trees-los-angeles-hd-wallpaper-preview.jpg",
            "https://p4.wallpaperbetter.com/wallpaper/829/370/561/sky-palm-tree-tree-arecales-wallpaper-preview.jpg"
        ],
    },


    {
        id: "Miami",
        title: "Miami",
        continent: "North America",
        country: "United States",
        cover_photo:
            "https://www.lanacion.com.ar/resizer/GhbB0d4-pB2F2EeCaZm3aygcVDM=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/3BE4TAFBFJAHJEAX765IRQDNMM.jpg",
        description: 
            "Surrounded by the Atlantic Ocean and the Everglades, the city extends over an area of 143.15 square kilometers. It has a very mild climate, known as tropical climate; with very hot summers sometimes accompanied by thunderstorms. Winter is warm and dry (the best time to travel to Miami).",
            packages:[  
                {
                type: "Plane",
                stock: 38,
                time: [
                    {
                        start_date: "14/01/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "27/01/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 1838,
                hotel: [
                    {
                        check_in: "14/01/2024 - 07:00 am",
                        check_out: "27/01/2024 - 10:00 am"
                    }
                ]
            },

                {
                type: "Train",
                stock: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

                {
                type: "Bus",
                stock: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },
        ],
        seller_id: "julia",
        category_id: "International",
        pages: [
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.infobae.com%2Famerica%2Feeuu%2F2022%2F10%2F31%2Fmiami-7-lugares-para-tomar-fotos-poco-conocidos%2F&psig=AOvVaw1kK8DLMlGOZRjfC4uccH2P&ust=1681270151268000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjP6sLxoP4CFQAAAAAdAAAAABAK",
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.viajarmiami.com%2Fque-visitar.php&psig=AOvVaw1kK8DLMlGOZRjfC4uccH2P&ust=1681270151268000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjP6sLxoP4CFQAAAAAdAAAAABAQ"
        ],
    },


    {
        id: "Bangkok",
        title: "Bangkok",
        continent: "Asia",
        country: "Thailand",
        cover_photo:
            "https://w0.peakpx.com/wallpaper/932/1011/HD-wallpaper-bangkok-modern-buildings-nightscapes-boats-thailand-asia.jpg",
        description: 
            "It is also considered the political, social and economic center not only of Thailand but also of the Indochinese peninsula. The city is located at the mouth of the Chao Phraya River and has a population of 6,355,144 inhabitants while the greater Bangkok area has 11,971,000 inhabitants (according to the 2008 census).",
            packages:[  
                {
                type: "Plane",
                stock: 34,
                time: [
                    {
                        start_date: "27/05/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "10/05/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 3638,
                hotel: [
                    {
                        check_in: "27/05/2024 - 07:00 am",
                        check_out: "10/05/2024 - 10:00 am"
                    }
                ]
            },

                {
                type: "Train",
                stock: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

                {
                type: "Bus",
                stock: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },
        ],
        seller_id: "julia",
        category_id: "International",
        pages: [
            "https://gorunningtours.com/wp-content/uploads/2015/06/bangkok_oldtown_10km_750x500_2-725x483.jpg",
            "https://w0.peakpx.com/wallpaper/912/197/HD-wallpaper-bangkok-cityscapes-thai-cities-modern-buildings-thailand-asia-summer-asian-cities.jpg"
        ],
    },


    {
        id: "Baviera",
        title: "Baviera",
        continent: "Europe",
        country: "Germany",
        cover_photo:
            "https://w0.peakpx.com/wallpaper/724/311/HD-wallpaper-landscape-in-bavaria-germany-bavaria-sun-bridge-mountains-river-road-germany-church-europe.jpg",
        description: 
            "Bavaria encompasses parts of the Eastern Alps and the Danube, Europe's second largest river. North of the Danube is the Bavarian Forest and the Fichtelgebirge. The most populated cities are Munich, Nuremberg, Augsburg, Regensburg, Ingolstadt, Ingolstadt, Fürth and Würzburg.",
            packages:[  
                {
                type: "Plane",
                stock: 17,
                time: [
                    {
                        start_date: "13/08/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "30/08/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 3638,
                hotel: [
                    {
                        check_in: "13/08/2024 - 07:00 am",
                        check_out: "30/08/2024 - 10:00 am"
                    }
                ]
            },

                {
                type: "Train",
                stock: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

                {
                type: "Bus",
                stock: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },
        ],
        seller_id: "julia",
        category_id: "International",
        pages: [
            "https://media-cdn.tripadvisor.com/media/photo-s/04/1d/84/0e/pure-bavaria-tours.jpg",
            "https://www.10wallpaper.com/wallpaper/1366x768/1108/Bavaria_Germany_Wallpaper_1366x768.jpg"
        ],
    },


    {
        id: "Istambul",
        title: "Istambul",
        continent: "Asia & Europe",
        country: "Turkey",
        cover_photo:
            "https://s1.best-wallpaper.net/wallpaper/m/1601/Turkey-Istanbul-beautiful-city-scenery-sunset-buildings-houses-river_m.webp",
        description: 
            "Istanbul (Turkish: İstanbul, pronounced /istanbuɫ/ ( listen)), formerly known as Byzantium and Constantinople, is the most populous city in Turkey and the historical, cultural and economic center of the country. It is a transcontinental city, located on the Bosphorus Strait, which separates Europe and Asia, between the Sea of Marmara and the Black Sea. With more than 15 million inhabitants, it is one of the most populated cities in the world and the most populated in Europe. The majority of the population is Muslim, although there are minorities of Christians (68,000) and Jews (22,000).",
            packages:[  
                {
                type: "Plane",
                stock: 22,
                time: [
                    {
                        start_date: "04/06/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "17/06/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 4138,
                hotel: [
                    {
                        check_in: "04/08/2024 - 07:00 am",
                        check_out: "17/08/2024 - 10:00 am"
                    }
                ]
            },

                {
                type: "Train",
                stock: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

                {
                type: "Bus",
                stock: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },
        ],
        seller_id: "julia",
        category_id: "International",
        pages: [
            "https://w0.peakpx.com/wallpaper/547/973/HD-wallpaper-galata-tower-bosphorus-istanbul-evening-sunset-ships-istanbul-cityscape-istanbul-panorama-turkey.jpg",
            "https://img.freepik.com/fotos-premium/paisaje-urbano-centro-estambul-turquia_255553-3288.jpg"
        ],
    },


    {
        id: "Beijing",
        title: "Beijing",
        continent: "Asia",
        country: "China",
        cover_photo:
            "https://p1.pxfuel.com/preview/841/652/29/beijing-china-the-scenery-silhouette.jpg",
        description: 
            "Beijing is the capital of the People's Republic of China, has more than 17 million inhabitants and is the second largest city in the country after Shanghai. The history of Beijing is marked by the invasions of the Mongols, who first razed the city to the ground, then rebuilt it and named it capital.",
            packages:[  
                {
                type: "Plane",
                stock: 41,
                time: [
                    {
                        start_date: "13/07/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "27/07/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 4438,
                hotel: [
                    {
                        check_in: "13/07/2024 - 07:00 am",
                        check_out: "27/07/2024 - 10:00 am"
                    }
                ]
            },

                {
                type: "Train",
                stock: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

                {
                type: "Bus",
                stock: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },
        ],
        seller_id: "julia",
        category_id: "International",
        pages: [
            "https://w0.peakpx.com/wallpaper/136/285/HD-wallpaper-landscape-china.jpg",
            "https://s1.best-wallpaper.net/wallpaper/m/1811/Shenwumen-trees-yellow-leaves-river-autumn-Beijing-China_m.webp"
        ],
    },


    {
        id: "London",
        title: "London",
        continent: "Europe",
        country: "England",
        cover_photo:
            "https://s1.best-wallpaper.net/wallpaper/m/2107/London-England-Big-Ben-river-bridge-dusk-lights_m.webp",
        description: 
            "London, the capital of the United Kingdom and England, is the largest city in Britain and Europe. It was founded by the Romans almost two thousand years ago, on both banks of the River Thames. Between 1831 and 1925 it was the largest city in the world. It is currently governed by a mayor and a local assembly.",
            packages:[  
                {
                type: "Plane",
                stock: 17,
                time: [
                    {
                        start_date: "26/10/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "07/11/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 4138,
                hotel: [
                    {
                        check_in: "26/10/2024 - 07:00 am",
                        check_out: "07/11/2024 - 10:00 am"
                    }
                ]
            },

                {
                type: "Train",
                stock: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

                {
                type: "Bus",
                stock: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },
        ],
        seller_id: "julia",
        category_id: "International",
        pages: [
            "https://www.solofondos.com/wp-content/uploads/2020/12/london-eye-3-768x480.jpg",
            "https://w0.peakpx.com/wallpaper/34/907/HD-wallpaper-london-city-sea-landscape.jpg"
        ],
    },


    {
        id: "Sidney",
        title: "Sidney",
        continent: "Oceania",
        country: "Australia",
        cover_photo:
            "https://tipsparatuviaje.com/wp-content/uploads/2019/08/opera-de-sidney-australia.jpg",
        description: 
            "Physical characteristics of the locality: Sydney is the largest and most populated city in Australia, with a population in its metropolitan area close to 4,840,600 inhabitants. It is the capital of the state of New South Wales and was the settlement of the first British colony in Australia. It was founded in 1788.",
            packages:[  
                {
                type: "Plane",
                stock: 73,
                time: [
                    {
                        start_date: "26/10/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "07/11/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 3738,
                hotel: [
                    {
                        check_in: "26/10/2024 - 07:00 am",
                        check_out: "07/11/2024 - 10:00 am"
                    }
                ]
            },

                {
                type: "Train",
                stock: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

                {
                type: "Bus",
                stock: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },
        ],
        seller_id: "julia",
        category_id: "International",
        pages: [
            "https://wp-growpro.s3-eu-west-1.amazonaws.com/media/2018/05/Que%CC%81-ver-en-Sydney-1-Opera-House.jpg",
            "https://wp-growpro.s3-eu-west-1.amazonaws.com/media/2018/05/Que%CC%81-ver-en-Sydney-4-Bondi-beach.jpg"
        ],
    },


    {
        id: "Moscu",
        title: "Moscu",
        continent: "Europe",
        country: "Rusia",
        cover_photo:
            "https://tipsparatuviaje.com/wp-content/uploads/2019/08/plaza-roja-moscu-rusia.jpg",
        description: 
            "Moscow is the capital and the most populous federal entity of Russia. The city is a major political, economic, cultural and scientific center of Russia and the continent. Moscow is the northernmost megacity on Earth and the most populous city in Europe.n 134 Its population is 12,108,2575. By virtue of its territorial expansion to the southwest of Moscow Oblast, on July 1, 2012 the capital increased its area by 2.5 times, from about 1000 km² to 2500 km², and gained an additional population of 230 000 inhabitants.",
            packages:[  
                {
                type: "Plane",
                stock: 62,
                time: [
                    {
                        start_date: "26/11/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "05/12/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 4038,
                hotel: [
                    {
                        check_in: "26/11/2024 - 07:00 am",
                        check_out: "05/12/2024 - 10:00 am"
                    }
                ]
            },

                {
                type: "Train",
                stock: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

                {
                type: "Bus",
                stock: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },
        ],
        seller_id: "julia",
        category_id: "International",
        pages: [
            "https://s1.best-wallpaper.net/wallpaper/m/1707/Russia-Moscow-Palace-cathedral-bridge-lights_m.webp",
            "https://img3.wallspic.com/crops/8/7/7/0/90778/90778-el_kremlin_de_moscu-agua-la_plaza_roja-hito-san_basilio_de_la_catedral-3840x2160.jpg"
        ],
    },


    {
        id: "Orlando",
        title: "Orlando",
        continent: "North America",
        country: "United States",
        cover_photo:
            "https://p4.wallpaperbetter.com/wallpaper/730/190/355/cinderella-castle-castle-magic-kingdom-orlando-wallpaper-preview.jpg",
        description: 
            "It is the sixth largest city in Florida and the largest non-coastal city. It is also the head of the third largest metropolitan area in the state, behind Miami-Fort Lauderdale and Tampa-St. Petersburg. 34 m a.s.l. 220 186 pop.",
            packages:[  
                {
                type: "Plane",
                stock: 6,
                time: [
                    {
                        start_date: "13/03/2024",  // Despues reviso si se puede pasar por el calendar de google.
                        finish_date: "30/03/2024" // Despues reviso si se puede pasar por el calendar de google.
                    }
                ],
                price: 2338,
                hotel: [
                    {
                        check_in: "13/03/2024 - 07:00 am",
                        check_out: "30/03/2024 - 10:00 am"
                    }
                ]
            },

                {
                type: "Train",
                stock: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },

                {
                type: "Bus",
                stock: "Not Available",
                time: {
                    start_date: "Not Available",  // Despues reviso si se puede pasar por el calendar de google.
                    finish_date: "Not Available" // Despues reviso si se puede pasar por el calendar de google.
                },
                price: "Not Available",
                hotel: "Not Available"
            },
        ],
        seller_id: "julia",
        category_id: "International",
        pages: [
            "https://w0.peakpx.com/wallpaper/616/936/HD-wallpaper-theme-park-in-orlando-florida-06-28-2012-park-theme.jpg",
            "https://w0.peakpx.com/wallpaper/158/301/HD-wallpaper-orlando-florida-palm-tress-florida-orlando-city.jpg"
        ],
        price: 2500,
    },

];
