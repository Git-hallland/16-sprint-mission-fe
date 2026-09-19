function ProductCard({ image, name, price, favoriteCount }) {
  const fallbackImage = "/images/Img_home_01.png";

  return (
    <article className="product-card">
      <img
        className="product-card-image"
        src={image || fallbackImage}
        alt={name}
        onError={(e) => {
          e.currentTarget.src = fallbackImage;
        }}
      />

      <div className="product-card-info">
        <h3 className="product-card-name">{name}</h3>

        <p className="product-card-price">
          {price.toLocaleString()}원
        </p>

        <div className="product-card-favorite">
          <span>♡</span>
          <span>{favoriteCount}</span>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;