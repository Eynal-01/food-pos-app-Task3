export default function Button({ label, onClick, styleClass }) {
    return (
      <button
        onClick={onClick}
        className={`py-2 px-4 rounded-lg ${styleClass}`}
      >
        {label}
      </button>
    )
  }
  