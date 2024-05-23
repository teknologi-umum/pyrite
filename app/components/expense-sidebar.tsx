const ExpenseSidebar = () => {
  return (
    <aside className="p-4 bg-white rounded-md">
      <div className="mb-4">
        <h2 className="text-lg font-bold">Collective Balance</h2>
        <p className="text-xl font-thin">
          {
            new Intl.NumberFormat("id-ID", 
            {
                style: "currency",
                currency: "IDR",
            }).
            format(10000)
          }
        </p>
      </div>
    </aside>
  );
};

export default ExpenseSidebar;