import React, {useEffect, useState} from "react";
import Header from "./components/header/Header";
import Search from "./components/search/Search";

import "./App.css";


const App = () => {
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [addedItems, setAddedItems] = useState([]);
  const [showAddProducts, setShowAddProducts] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  function handleSearch(e) {
    setSearchValue(e.target.value);
  }

  function handleAdd(item) {
    item.addNumber = 1;
    const itemsArr = addedItems;
    setAddedItems([...itemsArr, item]);
  }

  function handleRemove(item) {
    const newItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
    setAddedItems(newItems);
  }

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <div className="body__container">
        <div className="nav">
          <Header />
          <div className="nav-right">
            <Search
              value={searchValue}
              onChange={handleSearch}
            />
            {/* <Button
              num={addedItems.length}
              click={() => setShowAddProducts(!showAddProducts)}
            /> */}
          </div>
        </div>

        {showAddProducts && (
          {/* <AddProducts
            items={addedItems}
            removeItem={handleRemove}
            setAddedItem={setAddedItems}
          /> */}
        )}
        {/* <CardBody
          products={filteredItems}
          addItem={handleAdd}
          removeItem={handleRemove}
          addedItems={addedItems}
        /> */}
      </div>
    </div>
  );
};

export default App;
