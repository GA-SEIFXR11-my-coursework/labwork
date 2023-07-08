import Product, {ProductProps} from "./components/Product.tsx";
import './App.css'

const products: ProductProps[] = [
  {
    name: "Congratulations Bouquet",
    description: "The perfect bouquet for a celebration such as a birthday or graduation.",
    price: 70
  },
  {
    name: "Apology Bouquet",
    description: "You need something extra when you know you messed up.",
    price: 150
  },
  {
    name: "Wedding Bouquet",
    description: "Beautiful collection of flowers to turn heads on your special day!",
    price: 200
  },
]

export default function App() {
  const productList = products.map(product =>{
    return(<Product {...product}/>)
  })
  return(
    <>{productList}</>
  )
}
