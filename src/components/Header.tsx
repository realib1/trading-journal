const Header = () => {
  return (
    <nav className="fixed w-full top-0 left-0">
      <div className="container flex items-center justify-around py-4 bg-purple-700">
        <div className="logo font-bold">
          <h1>TradingJournal</h1>
        </div>
        <div className="menus">
          <button
            type="button"
            className="bg-white text-purple-600 px-4 py-1 font-medium cursor-pointer"
          >
            Add
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
