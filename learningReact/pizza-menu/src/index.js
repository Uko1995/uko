import React from 'react';
import ReactDOM from  'react-dom/client';
import photo1 from './photo1.jpeg';
import photo2 from './photo2.jpeg';
import photo3 from './photo3.jpeg';
import photo4 from './photo4.jpeg';
import photo5 from './photo5.jpeg';
import photo6 from './photo6.jpeg';


const pizzas = [
    {
      name: "Margherita",
      ingredients: "Tomato sauce, mozzarella, basil",
      price: 10,
      photoUrl: photo1,
      photoname: "margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pepperoni",
      ingredients: "Tomato sauce, mozzarella, pepperoni",
      price: 12,
      photoUrl: photo2,
      photoname: "pepperoni.jpg",
      soldOut: false,
    },
    {
      name: "BBQ Chicken",
      ingredients: "BBQ sauce, mozzarella, chicken, onions",
      price: 14,
      photoUrl: photo3,
      photoname: "bbq-chicken.jpg",
      soldOut: true,
    },
    {
      name: "Hawaiian",
      ingredients: "Tomato sauce, mozzarella, ham, pineapple",
      price: 11,
			photoUrl: photo4,
      photoname: "hawaiian.jpg",
      soldOut: false,
    },
    {
      name: "Vegetarian",
      ingredients: "Tomato sauce, mozzarella, mushrooms, peppers, onions",
      price: 13,
			photoUrl: photo5,
      photoname: "vegetarian.jpg",
      soldOut: false,
    },
    {
      name: "Four Cheese",
      ingredients: "Tomato sauce, mozzarella, cheddar, parmesan, gorgonzola",
      price: 15,
			photoUrl: photo6,
      photoname: "four-cheese.jpg",
      soldOut: true,
    },
  ];



function Pizza({name, soldOut, ingredients, price, photoUrl, photoname}) {
  return (
		<>
		<li style={{ display: 'flex', flex: '1 1 45%', gap: '10px', padding: '10px', justifyContent: 'center'}}>
			<img src={photoUrl} alt={photoname} style={{ width: '200px', height: '200px', display: 'block' }} />
			<div>
				<h2>{name}</h2>
				<p style={{width: '100px'}}>{ingredients}</p>
				{soldOut ? 'SOLD OUT'  : price}
			</div>
		</li>
		</>
	);
}  

function Header() {
    return (
        <>
        <h1 style={{color: 'gold', textAlign: 'center', fontSize: '48px'}}>- FAST REACT PIZZA Co. -</h1>
        </>
    )
}

function Menu () {
	const pizzaData = pizzas;
    return (
			<>
			<h2 style={{textAlign: 'center', textDecoration: 'underline overline', textUnderlineOffset: '7px', textDecorationThickness: '3px'}}>MENU</h2>
			
			{ pizzaData.length > 0 ? (
				<>
				<p style={{textAlign: 'center'}}>Authentic italian cuisines. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
				<ul style={{listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', padding: '0'}}>
				{pizzas.map(pizza => <Pizza name={pizza.name}
				ingredients={pizza.ingredients} 
				price={pizza.price}
				photoUrl={pizza.photoUrl}
				soldOut={pizza.soldOut}
				photoname={pizza.photoname}
				key={pizza.name} />)}
			</ul>
			</>
			) : (
				<p>We're still working on out menu, Please come back later</p>
			)	
			}
			</>
		)

}

function Footer() {
	const hour = new Date().getHours();
	return (
		<footer style={{textAlign: 'center', marginTop: '20px',}}>
      {(hour >= 12 && hour <= 22) ? (
				<Order />
			) :  (
				<p>We're happy to welcome between 12:00 and 22:00.</p>
			)}
		</footer>
	)
}

function Order() {
	return (
		<>
				<p>
					We're open until 22:00, Come visit or order Online
				</p>
				<button style={{backgroundColor: 'gold', padding: '10px', border: '0'}}>Order</button>
				</>
	);
}

function App() {
    return  (
			<>
				<Header />
				<Menu />
				<Footer />
			</>
		);
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

