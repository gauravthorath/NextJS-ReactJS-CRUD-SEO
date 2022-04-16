import { useRouter } from "next/dist/client/router";
import React from "react";

function ProductDetails() {
  const router = useRouter();
  const productId = router.query.productid;
  return <div>Product {productId} Details</div>;
}

export default ProductDetails;





