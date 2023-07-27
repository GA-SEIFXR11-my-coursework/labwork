import "./Product.css";

const Product = ({ name, description, price, imgURL, onSale, salePrice }) => {
  return (
    <div className="product">
      {onSale && <div className="product-badge">On sale</div>}
      <img className="product-image" src={imgURL} alt={name} />
      <div className="product-body">
        <h2>{name}</h2>
        <p>{description}</p>
        {onSale ? (
          <p className="product-price sale-price">
            <s>${price}</s> ${salePrice}
          </p>
        ) : (
          <p className="product-price">${price}</p>
        )}
        <a href="#" className="btn-buy">
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default Product;
