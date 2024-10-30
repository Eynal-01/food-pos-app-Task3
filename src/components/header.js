export default function Header() {
    return (
      <header className="flex justify-between items-center p-4 bg-secondary shadow-lg">
        <div>
          <h1 className="text-2xl font-bold">Jaegar Resto</h1>
          <p className="text-lightText">Tuesday, 2 Feb 2021</p>
        </div>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search for food, coffee, etc..." 
            className="bg-primary text-white py-2 px-4 pl-10 rounded-full focus:outline-none"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">
            🔍
          </span>
        </div>
      </header>
    )
  }
  