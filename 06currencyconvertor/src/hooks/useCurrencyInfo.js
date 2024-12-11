import { useState , useEffect } from "react";
function useCallbackInfo(currency) {
    const [Data ,setData] = useState({})
     useEffect(() => {
       fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
       .then((res) => res.json())
       .then((res) => setData(res[currency]) )
       console.table( res);
       console.log( Data); 
       console.table(Data);          
     }, [currency])
     console.log( Data);
    return Data 
}
export default useCallbackInfo;