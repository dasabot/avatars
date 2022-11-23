import axios from "axios";
import React from "react";
import { useState } from "react";

export const getAvatars = () => {




    return axios.get('https://tinyfac.es/api/data?limit=50&quality=0');
}



// useEffect(() => {
//     const expensesListResp = async () => {
//       await axios.get('https://tinyfac.es/api/data?limit=50&quality=0')
//         .then(
//           response => setServiceData(response.data))
//     }
//     expensesListResp();
//   }, [setServiceData]);

//   useEffect(() => {
//     getAvatars().then((res) => setServiceData(res.data));
//     console.log("serviceData:", serviceData);
//   }, [serviceData])

