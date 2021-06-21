import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, rating, price }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log(">>>", basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product__info">
        <p className="product__title">{title}</p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
        <p className="product__price">
          <strong>₦</strong>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="btn">
        <button className="button" onClick={addToBasket}>
          Add to Basket
        </button>
      </div>
    </div>
  );
}

export default Product;
