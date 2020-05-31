// import React, { useState, useEffect } from 'react';
import React, { useEffect } from 'react';
import {} from './styles';

// const ordersMock = JSON.parse([{
//   "products": [
//       {
//           "_id": "5ed379255b5e2e47d424912f",
//           "product": {
//               "enabled": true,
//               "imageUrls": [
//                   "https://res.cloudinary.com/dnorz3pyf/image/upload/v1588618394/hats/Dickies%20Bronston%20Beanie/img_0003_10aca85c-2d79-48dd-8fb3-d3ede75e7f63_2000x_siade0.jpg"
//               ],
//               "quantity": 19,
//               "_id": "5eb06e881721dd52e05d0c27",
//               "name": "dickies bronston beanie rust",
//               "currentPrice": 29,
//               "previousPrice": 29,
//               "categories": "hats",
//               "color": "gray",
//               "productUrl": "/hats",
//               "brand": "Dickies",
//               "parameters": [
//                   "100% cotton",
//                   "Lapel Embossed Dickies Logo"
//               ],
//               "description": [
//                   "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//                   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur temporibus ea amet numquam nihil in officiis explicabo pariatur totam nam, veritatis, ratione veniam maiores deserunt vitae voluptas nesciunt sed inventore. "
//               ],
//               "itemNo": "162796",
//               "date": "2020-05-04T19:35:36.421Z",
//               "__v": 0
//           },
//           "cartQuantity": 2
//       },
//       {
//           "_id": "5ed379255b5e2e47d4249130",
//           "product": {
//               "enabled": true,
//               "imageUrls": [
//                   "https://res.cloudinary.com/dnorz3pyf/image/upload/v1588621184/hats/SHIFT/dpp_90_hiumen.jpg",
//                   "https://res.cloudinary.com/dnorz3pyf/image/upload/v1588621230/hats/SHIFT/dpp_122_efwmek.jpg"
//               ],
//               "quantity": 5,
//               "_id": "5eb06e3a1721dd52e05d0c26",
//               "name": "shift watchman black",
//               "currentPrice": 47,
//               "previousPrice": 31,
//               "categories": "hats",
//               "color": "black",
//               "productUrl": "/hats",
//               "brand": "shift",
//               "parameters": [
//                   "SHIFT Watchman hat made of soft yarn",
//                   "The hat is presented in plain colors"
//               ],
//               "description": [
//                   "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//                   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur temporibus ea amet numquam nihil in officiis explicabo pariatur totam nam, veritatis, ratione veniam maiores deserunt vitae voluptas nesciunt sed inventore. "
//               ],
//               "itemNo": "613255",
//               "date": "2020-05-04T19:34:18.784Z",
//               "__v": 0
//           },
//           "cartQuantity": 2
//       },
//       {
//           "_id": "5ed379255b5e2e47d4249131",
//           "product": {
//               "enabled": true,
//               "imageUrls": [
//                   "https://res.cloudinary.com/dnorz3pyf/image/upload/v1588616443/hats/Nixon%20Kos%20Heather%20Navy/c2454-070-view1_hykoyk.jpg"
//               ],
//               "quantity": 7,
//               "_id": "5eb05d891721dd52e05d0c23",
//               "name": "nixon kos heather grey",
//               "currentPrice": 25,
//               "previousPrice": 25,
//               "categories": "hats",
//               "color": "gray",
//               "productUrl": "/hats",
//               "brand": "Nixon",
//               "parameters": [
//                   "Hat with lapel made of acrylic fabric and wool",
//                   "The base silhouette is complemented by a patch with the brand logo"
//               ],
//               "description": [
//                   "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//                   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur temporibus ea amet numquam nihil in officiis explicabo pariatur totam nam, veritatis, ratione veniam maiores deserunt vitae voluptas nesciunt sed inventore. "
//               ],
//               "itemNo": "39474",
//               "date": "2020-05-04T18:23:05.790Z",
//               "__v": 0
//           },
//           "cartQuantity": 1
//       }
//   ],
//   "canceled": false,
//   "_id": "5ed379255b5e2e47d4249132",
//   "shipping": {
//       "city": "Odessa",
//       "price": "50UAH"
//   },
//   "deliveryAddress": {
//       "country": "Ukraine",
//       "city": "Odessa",
//       "address": "Deribasovskaya 17  42"
//   },
//   "paymentInfo": {
//       "type": "credit card",
//       "issuer": "MasterCard"
//   },
//   "customerId": {
//       "isAdmin": false,
//       "enabled": true,
//       "_id": "5eabe5c2e00ab113f0cb0f1e",
//       "email": "sashaqmeyko@gmail.com",
//       "login": "kumeiko",
//       "password": "$2a$10$ivgCjLxeJxNWYUlVmnwvgOHoRZBZrg3MhZM46a070RY5evDwsHTma",
//       "firstName": "Александр",
//       "lastName": "Кумейко",
//       "customerNo": "14046075",
//       "date": "2020-05-01T09:02:58.498Z",
//       "__v": 0,
//       "address": {
//           "city": "Kiev",
//           "street": "Radunskaya",
//           "houseNumber": "42",
//           "flat": "317"
//       },
//       "birthdate": "03.12.1988",
//       "telephone": "+380936076277"
//   },
//   "status": "not shipped",
//   "email": "tester69@gmail.com",
//   "mobile": "+380660871064",
//   "letterSubject": "Thank you for order! You are welcome!",
//   "letterHtml": "<h1>Your order is placed. OrderNo is 023689452.</h1><p>{Other details about order in your HTML}</p>",
//   "orderNo": "6845725",
//   "totalSum": 177,
//   "date": "2020-05-31T09:30:13.786Z",
//   "__v": 0
// }, {
//   "products": [
//       {
//           "_id": "5ed379465b5e2e47d4249133",
//           "product": {
//               "enabled": true,
//               "imageUrls": [
//                   "https://res.cloudinary.com/dnorz3pyf/image/upload/v1588618394/hats/Dickies%20Bronston%20Beanie/img_0003_10aca85c-2d79-48dd-8fb3-d3ede75e7f63_2000x_siade0.jpg"
//               ],
//               "quantity": 19,
//               "_id": "5eb06e881721dd52e05d0c27",
//               "name": "dickies bronston beanie rust",
//               "currentPrice": 29,
//               "previousPrice": 29,
//               "categories": "hats",
//               "color": "gray",
//               "productUrl": "/hats",
//               "brand": "Dickies",
//               "parameters": [
//                   "100% cotton",
//                   "Lapel Embossed Dickies Logo"
//               ],
//               "description": [
//                   "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//                   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur temporibus ea amet numquam nihil in officiis explicabo pariatur totam nam, veritatis, ratione veniam maiores deserunt vitae voluptas nesciunt sed inventore. "
//               ],
//               "itemNo": "162796",
//               "date": "2020-05-04T19:35:36.421Z",
//               "__v": 0
//           },
//           "cartQuantity": 2
//       },
//       {
//           "_id": "5ed379465b5e2e47d4249134",
//           "product": {
//               "enabled": true,
//               "imageUrls": [
//                   "https://res.cloudinary.com/dnorz3pyf/image/upload/v1588621184/hats/SHIFT/dpp_90_hiumen.jpg",
//                   "https://res.cloudinary.com/dnorz3pyf/image/upload/v1588621230/hats/SHIFT/dpp_122_efwmek.jpg"
//               ],
//               "quantity": 5,
//               "_id": "5eb06e3a1721dd52e05d0c26",
//               "name": "shift watchman black",
//               "currentPrice": 47,
//               "previousPrice": 31,
//               "categories": "hats",
//               "color": "black",
//               "productUrl": "/hats",
//               "brand": "shift",
//               "parameters": [
//                   "SHIFT Watchman hat made of soft yarn",
//                   "The hat is presented in plain colors"
//               ],
//               "description": [
//                   "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//                   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur temporibus ea amet numquam nihil in officiis explicabo pariatur totam nam, veritatis, ratione veniam maiores deserunt vitae voluptas nesciunt sed inventore. "
//               ],
//               "itemNo": "613255",
//               "date": "2020-05-04T19:34:18.784Z",
//               "__v": 0
//           },
//           "cartQuantity": 2
//       },
//       {
//           "_id": "5ed379465b5e2e47d4249135",
//           "product": {
//               "enabled": true,
//               "imageUrls": [
//                   "https://res.cloudinary.com/dnorz3pyf/image/upload/v1588616443/hats/Nixon%20Kos%20Heather%20Navy/c2454-070-view1_hykoyk.jpg"
//               ],
//               "quantity": 7,
//               "_id": "5eb05d891721dd52e05d0c23",
//               "name": "nixon kos heather grey",
//               "currentPrice": 25,
//               "previousPrice": 25,
//               "categories": "hats",
//               "color": "gray",
//               "productUrl": "/hats",
//               "brand": "Nixon",
//               "parameters": [
//                   "Hat with lapel made of acrylic fabric and wool",
//                   "The base silhouette is complemented by a patch with the brand logo"
//               ],
//               "description": [
//                   "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//                   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur temporibus ea amet numquam nihil in officiis explicabo pariatur totam nam, veritatis, ratione veniam maiores deserunt vitae voluptas nesciunt sed inventore. "
//               ],
//               "itemNo": "39474",
//               "date": "2020-05-04T18:23:05.790Z",
//               "__v": 0
//           },
//           "cartQuantity": 1
//       }
//   ],
//   "canceled": false,
//   "_id": "5ed379465b5e2e47d4249136",
//   "shipping": {
//       "city": "Odessa",
//       "price": "50UAH"
//   },
//   "deliveryAddress": {
//       "country": "Ukraine",
//       "city": "Odessa",
//       "address": "Deribasovskaya 17  42"
//   },
//   "paymentInfo": {
//       "type": "credit card",
//       "issuer": "MasterCard"
//   },
//   "customerId": {
//       "isAdmin": false,
//       "enabled": true,
//       "_id": "5eabe5c2e00ab113f0cb0f1e",
//       "email": "sashaqmeyko@gmail.com",
//       "login": "kumeiko",
//       "password": "$2a$10$ivgCjLxeJxNWYUlVmnwvgOHoRZBZrg3MhZM46a070RY5evDwsHTma",
//       "firstName": "Александр",
//       "lastName": "Кумейко",
//       "customerNo": "14046075",
//       "date": "2020-05-01T09:02:58.498Z",
//       "__v": 0,
//       "address": {
//           "city": "Kiev",
//           "street": "Radunskaya",
//           "houseNumber": "42",
//           "flat": "317"
//       },
//       "birthdate": "03.12.1988",
//       "telephone": "+380936076277"
//   },
//   "status": "not shipped",
//   "email": "tester69@gmail.com",
//   "mobile": "+380660871064",
//   "letterSubject": "Thank you for order! You are welcome!",
//   "letterHtml": "<h1>Your order is placed. OrderNo is 023689452.</h1><p>{Other details about order in your HTML}</p>",
//   "orderNo": "2106106",
//   "totalSum": 177,
//   "date": "2020-05-31T09:30:46.674Z",
//   "__v": 0
// }])

const OrdersList = () => {
	// const [orders, setOrders] = useState([]);
	// const [isFetching, setFetching] = useState(false);
	useEffect(() => {}, []);
	return <></>;
};

export default OrdersList;
