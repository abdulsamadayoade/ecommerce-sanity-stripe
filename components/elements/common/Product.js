import React from "react";
import Link from "next/link";
import { imageUrlFor } from "lib/client";

const Product = ({ product: { image, name, price, slug } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <a className="text-center">
          <img
            src={imageUrlFor(image && image[0]).url()}
            alt={name}
            className="mx-auto h-72 w-72"
          />
          <p className="mb-5 text-2xl font-light text-dark font-fraunces">{name}</p>
          <p className="mb-8 text-xl md:mb-10">${price}</p>
          <button className="w-full px-5 py-3 text-sm transition bg-white border-2 rounded hover:bg-darkGreen hover:text-white border-darkGreen">
            View Product
          </button>
        </a>
      </Link>
    </div>
  );
};

export default Product;
