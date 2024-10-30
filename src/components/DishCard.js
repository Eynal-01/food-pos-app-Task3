export default function DishCard({ dish }) {
    return (
      <div className="bg-secondary p-4 rounded-lg shadow-lg text-center">
        <img src={dish.img} alt={dish.name} className="rounded-full w-24 h-24 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-cardText mb-2">{dish.name}</h3>
        <p className="text-accent text-lg font-semibold">${dish.price.toFixed(2)}</p>
        <p className="text-lightText">{dish.available} Bowls available</p>
      </div>
    )
  }
  