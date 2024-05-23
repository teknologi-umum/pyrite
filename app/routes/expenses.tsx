import Navbar from '~/components/navbar';
import ExpenseFilter from '~/components/expense-filter';
import ExpenseList from '~/components/expense-list';
import Sidebar from '~/components/sidebar';

const Index = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className='font-semibold text-2xl'>Expenses</h1>
        <ExpenseFilter />
        <div className="flex space-x-8">
          <div className="flex-grow">
            <ExpenseList />
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Index;