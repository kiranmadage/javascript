import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import { Dmart } from './View/Mall/Mall';
import { Mcard } from './View/Mall/Block/Block';
import { New } from './View/Mall/Block/Block2';


import { Info } from './View/Mall/Block/Info';
import { Data } from './Map function/CardData';
import { Use } from './Camponant/Card/id/UseState/UseState';
import { Effect } from './Camponant/Card/id/UseState/UseState_UseEffect';

import { Box } from './Interview/int';
// import { Main } from './Interview/main';





// const routes = createBrowserRouter(
//   [

//     {
//       path: '/',
//       element: <Mcard/>,
//     },
//     {
//       path :'/Info/:id',
//       element: <Info/>
//     },



//   ]
// )



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <RouterProvider router={routes}/> */}

    {/* <Dmart /> */}
    {/* <Mcard /> */}
    {/* <New/>  */}
    {/* <Data/> */}
    {/* <Use /> */}
    {/* <Effect/> */}

    <Box/>
  </>
);



