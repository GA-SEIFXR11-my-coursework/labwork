import "./Product.css"

export interface ProductProps{
  name: string,
  description: string,
  price: number,
}

export default function Product(props: ProductProps){
  return(
    <div className="product" id={`product-${props.name}`}>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>{'$' + props.price.toFixed(2)}</p>
      <button>{"Buy Now!"}</button>
    </div>
  )
}
