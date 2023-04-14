function Todo({ todo, index, remove }) {
  const handle = () => {
    remove(index);
  };
  return (
    <li id={index} className="py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <div className="bg-green-500 w-10 h-10 text-center text-lg font-bold pt-1.5 text-green-50 rounded-full">
            {index + 1}
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-gray-900">{todo.text}</p>
          <p className="truncate text-sm text-gray-500">
            {todo.created.toLocaleString("en-us", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}
          </p>
        </div>
        <div>
          <button
            onClick={handle}
            className="inline-flex items-center rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
}
export default Todo;
