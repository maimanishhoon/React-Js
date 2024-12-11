import React, { useEffect, useState } from 'react'
import { useLoaderData } from "react-router-dom";
function Github() {
    // this is correct This is the First method 
//   const [data, setData] = useState({}); // Declare state at the top level

//   useEffect(() => {
//     fetch('https://api.github.com/users/maimanishhoon')
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       })
//       .catch((error) => console.error('Error fetching data:', error)); // Optional error handling
//   }, []); // Empty dependency array to run the effect only once
 
// This is from using useLoaderData hook 
const data = useLoaderData();//This hook make your work so easy

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      UserName: {data.login} <br />
      Followers: {data.followers}
    <img src="{data.avatar_url}" alt="Git's pic" width={300} />
    </div>
   
  );
}

export default Github;
// second method using Loaders
export const githubInfoLoader = async () =>{
    const res = await fetch('https://api.github.com/users/maimanishhoon')
    return res.json()
}