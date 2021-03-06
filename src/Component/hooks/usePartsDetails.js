import axios from "axios";
import { useEffect, useState } from "react";

const usePartDetails = (productId) => {
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`https://hidden-harbor-03089.herokuapp.com/inventory/${productId}`)
      .then((data) => setProductDetails(data.data));
  }, [productId]);
  return [productDetails, setProductDetails];
};

export default usePartDetails;
