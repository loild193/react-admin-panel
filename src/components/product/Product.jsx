import './product.css'

const Product = props => {
  const { name, image, price, sale } = props.product;
  const priceAfterSale = price * Number(sale) / 100;

  return (
    <div className="col-3">
      <div className="product">
        <span className="product__sale">{ sale }% off</span>
        <div className="product__image">
          <img src={image} alt="product" />
        </div>
        <div className="product__info">
          <p className="product__info-name">{ name }</p>
          <p className="product__info-price">
            <span>${ priceAfterSale }</span>
            <span>${ price }</span>
          </p>
        </div>
        <button className="product__add-to-cart">Add to cart</button>
      </div>
    </div>
  )
}

export default Product