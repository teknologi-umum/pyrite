import { SelectPrimary } from "./select-primary";

const ExpenseFilter = () => {
  return (
    <div className="py-4 flex justify-between items-center">
      <div>
        <input
          type="text"
          placeholder="Search"
          className="input rounded-lg p-2"
        />
      </div>
      <div className="flex space-x-4">
        <SelectPrimary
          placeholder="Sort By"
          items={[
            { key: "newestFirst", value: "newestFirst", label: "Newest First" },
          ]}
        />
      </div>
    </div>
  );
};

export default ExpenseFilter;
