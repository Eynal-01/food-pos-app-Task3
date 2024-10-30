export default function MenuTabs() {
    const tabs = ["Hot Dishes", "Cold Dishes", "Soup", "Grill", "Appetizer", "Dessert"];
    return (
      <div className="flex space-x-4 border-b border-gray-700 px-4 py-3">
        {tabs.map((tab, index) => (
          <button 
            key={index} 
            className={`text-lg ${index === 0 ? 'text-accent border-b-2 border-accent' : 'text-lightText'}`}
          >
            {tab}
          </button>
        ))}
      </div>
    );
  }
  