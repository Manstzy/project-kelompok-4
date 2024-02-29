const List = ({ children }) => {
  return (
    <li className="relative  text-white/80 hover:text-white ml-4 large:py-3 py-4 font-semibold">
      <a href="#">{children}</a>
    </li>
  );
};

export default List;
