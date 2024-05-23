import { ButtonPrimary } from "./button-primary";
import { SelectPrimary } from "./select-primary";

const ExpenseFilter = () => {
  return (
    <div className="py-4 flex justify-between items-center">
      <div>
        <ButtonPrimary name="Received" />
        <ButtonPrimary name="Submmitted" />
      </div>
      <div className="flex space-x-4">
        <input type="text" placeholder="Search" className="input rounded-lg p-2" />
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
