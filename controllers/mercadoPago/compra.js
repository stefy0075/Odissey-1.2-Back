// import mercadopago from "mercadopago";

// mercadopago.configure({ access_token: process.env.PROD_ACCESS_TOKEN });
// const controller = {
//     compra: (req, res) => {
//         let products = req.body; // Obtén todos los productos del req.body

//         // Calcula la suma de los precios de los productos utilizando reduce()
//         let totalPrice = products.reduce((total, product) => {
//             return total + product.price;
//         }, 0);

//         console.log("Total Price:", totalPrice);

//         // Resto del código para crear la preferencia de MercadoPago con el totalPrice

//         let preference = {
//             items: products.map((product) => ({
//                 id: product.id,
//                 title: product.title,
//                 currency_id: "ARS",
//                 unit_price: product.price,
//                 quantity: 1,
//             })),
//             payer: {
//                 name: req.user.name,
//             },
//             back_urls: {
//                 success: "http://localhost:3000/",
//                 failure: "",
//                 pending: "",
//             },
//             auto_return: "approved",
//             binary_mode: true,
//         };

//         mercadopago.preferences
//             .create(preference)
//             .then((response) => res.status(200).json({ response }))
//             .catch((error) => res.status(400).json({ error: error.message }));
//     },
// };


// export default controller // exporta el controlador