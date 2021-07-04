import Card from './components/Card/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {name: "Мужские кросовки NIKE Blazer Mid Surde", price: 12999, img:"/img/sneakers/1.jpg"},
  {name: "Мужские кросовки NIKE AIR Max Surde", price: 15999, img:"/img/sneakers/2.jpg"},
  {name: "Мужские кросовки NIKE AIR Max 725", price: 13999, img:"/img/sneakers/3.jpg"},
  {name: "Мужские кросовки NIKE Blazer Max Surde", price: 10999, img:"/img/sneakers/4.jpg"},
  {name: "Мужские кросовки NIKE Blazer Max Surde", price: 11999, img:"/img/sneakers/5.jpg"}
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>

      <Header/>

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кросовки</h1>
          <div className="search-block d-flex">
            <img src="img/search.svg" alt="search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>
        
        <div className="d-flex">
          {arr.map((val) => (
            <Card
              name={val.name}
              price={val.price}
              img={val.img}
            />
          ))}
          
          
        </div>
      </div>
    </div>
  );
}

export default App;
