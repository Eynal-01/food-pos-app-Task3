export default function ScreenContent() {
    return (
      <div className="bg-secondary p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome to Food POS</h2>
        <p className="text-lg mb-6">Manage your orders efficiently.</p>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-highlight text-white py-2 px-4 rounded">New Order</button>
          <button className="bg-accent text-white py-2 px-4 rounded">View Orders</button>
        </div>
      </div>
    )
  }
  