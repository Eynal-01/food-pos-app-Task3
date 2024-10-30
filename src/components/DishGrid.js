// import DishCard from './DishCard';

// export default function DishGrid() {
//   const dishes = [
//     { name: "Spicy seasoned seafood noodles", price: 2.29, available: 20, img: "/noodle1.png" },
//     { name: "Salted Pasta with mushroom sauce", price: 2.69, available: 11, img: "/noodle2.png" },
//     { name: "Beef dumpling in hot and sour soup", price: 2.99, available: 16, img: "/noodle3.png" },
//     { name: "Healthy noodle with spinach leaf", price: 3.29, available: 22, img: "/noodle4.png" },
//     { name: "Hot spicy fried rice with omelet", price: 3.49, available: 13, img: "/noodle5.png" },
//     { name: "Spicy instant noodle with special omelet", price: 3.59, available: 17, img: "/noodle6.png" },
//   ];

//   return (
//     <div className="container mx-auto p-4 bg-primary text-white">
//       <header className="text-center mb-8">
//         <h1 className="text-4xl font-bold">Jaegar Resto</h1>
//         <p className="text-gray-400">Tuesday, 2 Feb 2021</p>
//         <input className="bg-gray-700 rounded-lg p-2 mt-4" placeholder="Search for food, coffee, etc." />
//       </header>

//       <nav className="flex justify-center space-x-4 text-accent">
//         <a href="#" className="text-lg">Hot Dishes</a>
//         <a href="#" className="text-lg">Cold Dishes</a>
//         <a href="#" className="text-lg">Soup</a>
//         <a href="#" className="text-lg">Grill</a>
//         <a href="#" className="text-lg">Appetizer</a>
//         <a href="#" className="text-lg">Dessert</a>
//       </nav>

//       <section className="mt-8 grid grid-cols-3 gap-6">
//         {dishes.map((dish, index) => (
//           <DishCard
//             key={index}
//             name={dish.name}
//             price={dish.price}
//             available={dish.available}
//             img={dish.img}
//           />
//         ))}
//       </section>
//     </div>
//   );
// }













// components/DishGrid.js

export default function DishGrid() {
    return (
      <div className="container mx-auto p-4 bg-primary text-white">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold">Jaegar Resto</h1>
          <p className="text-gray-400">Tuesday, 2 Feb 2021</p>
          <input className="bg-gray-700 rounded-lg p-2 mt-4" placeholder="Search for food, coffee, etc." />
        </header>
  
        <nav className="flex justify-center space-x-4 text-accent">
          <a href="#" className="text-lg">Hot Dishes</a>
          <a href="#" className="text-lg">Cold Dishes</a>
          <a href="#" className="text-lg">Soup</a>
          <a href="#" className="text-lg">Grill</a>
          <a href="#" className="text-lg">Appetizer</a>
          <a href="#" className="text-lg">Dessert</a>
        </nav>
  
        <section className="mt-8 grid grid-cols-3 gap-6">
          <div className="card bg-secondary p-4 rounded-lg">
            <img src="dish_image.jpg" alt="Spicy seafood noodles" className="rounded-full w-24 mx-auto" />
            <h2 className="text-lg font-semibold mt-4">Spicy seasoned seafood noodles</h2>
            <p className="text-lightText mt-2">$2.29</p>
            <p className="text-gray-500 mt-1">20 Bowls available</p>
          </div>
          {/* Repeat for each card */}
        </section>
      </div>
    );
  }
  