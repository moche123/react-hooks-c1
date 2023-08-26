import { useState, useEffect } from "react";

interface IPayload {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}


const useFetch = (url:string) => {

  const initialData:IPayload = {
    
        userId: 1,
        id: 1,
        title: "",
        completed: false
      
  }


  const [data, setData] = useState<IPayload>(initialData);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data:IPayload) => setData(data))
      .catch(() => setData(initialData))
  }, [url]);

  return [data];
};

export default useFetch;