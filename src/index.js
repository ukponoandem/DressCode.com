
//index.js

// import boot from "../menasset/boot.jpg";
// import boot1 from "../menasset/boot1.jpg";
// import boot2 from "../menasset/boot16.jpg";
// import boot3 from "../menasset/boot3.jpg";
// import boot4 from "../menasset/boot15.jpg";
// import boot5 from "../menasset/boot6.jpg";
// import boot6 from "../menasset/boot4.jpg";
// import boot7 from "../menasset/boot5.jpg";
// import boot8 from "../menasset/boot8.jpg";
// import boot9 from "../menasset/boot7.jpg";
// import boot10 from "../menasset/boot9.jpg";
// import boot11 from "../menasset/boot10.jpg";
// import boot12 from "../menasset/boot11.jpg";
// import boot13 from "../menasset/boot12.jpg";
// import boot14 from "../menasset/boot13.jpg";
// import boot15 from "../menasset/boot14.jpg";
// import boot17 from "../menasset/boot17.jpg";
// import boot18 from "../menasset/shoes18.jpg";
// import boot19 from "../menasset/boot19.jpg";
// import boot20 from "../menasset/boot20.jpg";
// import boot21 from "../menasset/boot21.jpg";
// import boot22 from "../menasset/boot22.jpg";
// import boot23 from "../menasset/boot23.jpg";
// import boot24 from "../menasset/boot24.jpg";
// import boot25 from "../menasset/boot25.jpg";
// import boot26 from "../menasset/shoes26.jpg";
// import boot27 from "../menasset/boot27.jpg";
// import boot28 from "../menasset/shoes28.jpg";
// import boot29 from "../menasset/trainers3.jpg";
// import boot30 from "../menasset/trainers6.jpg";
// import boot31 from "../menasset/shoes3.jpg";
// import boot32 from "../menasset/shoes7.jpg";

// const boots = [
//   { src: boot, price: "$22.55", text: "Dresscode latest black boot", link: "https://www.pinterest.com/" },
//   { src: boot1, price: "$55.55", link: "https://www.dresscode.com/" },
//   { src: boot2, price: "$34.55" },
//   { src: boot3, price: "$66.55" },
//   { src: boot4, price: "$82.55" },
//   { src: boot5, price: "$54.55" },
//   { src: boot6, price: "$62.55" },
//   { src: boot7, price: "$75.55" },
//   { src: boot8, price: "$82.55" },
//   { src: boot9, price: "$54.55" },
//   { src: boot10, price: "$62.55" },
//   { src: boot11, price: "$75.55" },
//   { src: boot12, price: "$82.55" },
//   { src: boot13, price: "$54.55" },
//   { src: boot14, price: "$62.55" },
//   { src: boot15, price: "$75.55" },
//   { src: boot17, price: "$45.55" },
//   { src: boot18, price: "$67.55" },
//   { src: boot19, price: "$36.55" },
//   { src: boot20, price: "$48.55" },
//   { src: boot21, price: "$57.55" },
//   { src: boot22, price: "$50.55" },
//   { src: boot23, price: "$69.55" },
//   { src: boot24, price: "$47.55" },
//   { src: boot25, price: "$40.55" },
//   { src: boot26, price: "$38.55" },
//   { src: boot27, price: "$66.55" },
//   { src: boot28, price: "$70.55" },
//   { src: boot29, price: "$88.55" },
//   { src: boot30, price: "$47.55" },
//   { src: boot31, price: "$59.55" },
//   { src: boot32, price: "$80.55" }
// ];

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root";
import Home from './pages/Home';
import Men from './pages/Men'
// import ProductDetail from "./pages/product"
// import Clothing from './menitem/clothing';
import Unisexz from './womenitem/unisexs';
import Joggers from "./cloth-items/Joggers"
import Short from './cloth-items/Short';
import Occasion from './menitem/occasion shoe';
import Trouser from './cloth-items/trouser';
import Boots from "./shoesitems/boots"
import Trainers from './shoesitems/trainers';
import Sandals from './shoesitems/sandals';
import "./App.css"
import Women from './women';
import ErrorPage from "./error-page";
import Polo_shirt from './cloth-items/polo-shirt';
import Sportwears from './pages/sportwears';
import Tailoring from './pages/tailoring';
import Unisex from './menitem/unisex';
import Blazer from './womenitem/blazer';
import Skirts from './womenitem/skirts';
 import Shorts from './womenitem/shorts';
 import Top from './womenitem/top';
 import Bags from './womenitem/bags';
 import Boot from './womenitem/Boot';
 import Trainer from './womenitem/trainer';
 import Sandal from './womenitem/sandal';
 import Heels from './womenitem/Heels';
 import About from './pages/about';
 import Privacy from './pages/privacypolicy';
 import Terms from './pages/terms-service';
const router = createBrowserRouter([
  {
    element: <Root />,
     errorElement: <ErrorPage />,
    children: [

      {
        path:"/",
        element :<Home />,
      },
      {
        path: "Men",
        element: <Men/>,
      },
      {
        path: "terms",
        element: <Terms/>,
      },
      {
        path: "privacy",
        element: <Privacy/>,
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "Heels",
        element: <Heels/>,
      },
      {
        path:"unisexs",
        element:<Unisexz/>,
      },
      {
        path:"Boot",
        element:<Boot/>,
      },
      {
        path:"blazer",
        element:<Blazer/>,
      },
      {
        path:"Sandal",
        element:<Sandal/>,
      },
      {
        path:"skirts",
        element:<Skirts/>,
      }, 
      {
        path:"shorts",
        element:<Shorts/>,
      }, 
      {
        path:"top",
        element:<Top/>,
      }, 

      {
        path:"bags",
        element:<Bags/>,
      }, 

      {
        path:"Trainer",
        element:<Trainer/>,
      }, 

{
  path:"Joggers",
  element:<Joggers />,
},

{
   path:"Short",
  element:<Short />,
},
{
  path:"polo-shirt",
  element:<Polo_shirt />,
},
{
  path:"trouser",
  element:<Trouser />,
},



{
  path:"boots",
  element:<Boots />,
},

{
  path:"trainers",
  element:<Trainers />,
},

{
  path:"sandals",
  element:<Sandals />,
},

{
  path:"occasion shoe",
  element:<Occasion />,
},
{
  path:"sportwears",
  element:<Sportwears />,
},

{
  path:"tailoring",
  element:<Tailoring />,
},
{
  path:"Unisex",
  element:<Unisex/>,
},

{
  path:"women",
  element:<Women />,
},

// { 
//   path: "product/:id", 
//   element: <ProductDetail boots={boos} /> // Pass boots data as a prop
// },

    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <RouterProvider router={router} />
)
