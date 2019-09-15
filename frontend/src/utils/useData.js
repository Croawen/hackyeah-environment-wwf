import { useState } from "react";
import externalApi from "../services/externalApi";

const useData = (url, post = false) => {
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState(null);

  let req = externalApi.url(url);

  if (post) req = req.post(post);
  else req = req.get();

  req.json(json => {
    setdata(data);
    setloading(false);
  });

  return [loading, data];
};

export default useData;
