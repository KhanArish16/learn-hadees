import SearchBox from "./SearchBox";

const Header = ({ onSearch }) => {
  return (
    <header style={{ padding: "10px", borderBottom: "1px solid #eee" }}>
      <SearchBox onSearch={onSearch} />
    </header>
  );
};

export default Header;
