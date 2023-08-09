import "./index.css";

const Header = (props) => {
  const { searchInput ,sortOrder,handleSortChange ,sortChange} = props;

  const inputValue = (event) => {
    searchInput(event.target.value);
  };

  const selectChange = (event)=> {
    sortChange(false)
    handleSortChange(event.target.value)
  }

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <h1>MOVIE NAME</h1>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent"> 
          <div className="drop-down-container">
          <div>
          <label htmlFor="rating">By Rating</label>
          <select id="rating" value={sortOrder} onChange={selectChange}>
                <option value="asc" defaultValue>Low</option>
                <option value="desc">High</option>
            </select>
          </div> 
          <div>
            <label htmlFor="releaseDate">By Release Date</label>
          <select id="releaseDate" value={sortOrder} onChange={(e) => handleSortChange(e.target.value)}>
                <option value="recent">Recent</option>
                <option value="old">Old</option>
            </select>
          </div>
          <div className="input-container">
            <input type="search" className="input-bar" onChange={inputValue} />
            <button className="search-btn">Search!</button>
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
