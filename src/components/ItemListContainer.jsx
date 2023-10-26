const ItemListContainer = ({ heading, list }) => {

  return (
    <main className="p-12">
      <h1 className="text-4xl font-bold my-6">
        {heading}
      </h1>
      <div className="flex flex-wrap gap-4">
        {
          list.map(({ id, name, price }) => (
            <div key={id} className="flex flex-col p-2 border-[1px] rounded-lg shadow-md hover:scale-105 duration-300 ease-in-out">
              <div className="bg-gray-200 w-[200px] h-[200px]" />
              <h2 className="text-lg font-semibold">{name}</h2>
              <p className="italic text-slate-600 ">Price: {price}</p>
            </div>
          ))
        }
      </div>
    </main>
  );
}

export default ItemListContainer;