import { useEffect, useState, useReducer } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Main from "../component/Main/Main";
import initialBookData from "../assets/data/data";
import ItemReducer from "./reducer/Reducer";

function Layout() {
  // Reducer for managing book data
  const [bookData, dispatch] = useReducer(ItemReducer, initialBookData());
  const [originalBookData] = useState(initialBookData())

  // State for theme and modal
  const [theme, setTheme] = useState(
    localStorage.getItem("themeMode") === "true"
  );
  const [isOpenModal, setIsOpenModal] = useState(false);

  // State for cart management
  const [addItem, setAddItem] = useState([]);
  const [show, setShow] = useState(false);

  // Dark mode changer function
  const handleChange = () => {
    setTheme(!theme);
    localStorage.setItem("themeMode", `${!theme}`);
  };

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Helper function for dispatch
  const handleDispatch = (type) => {
    dispatch({ type });
  };

  // Sorting functions
  const sortItemsByName = () => handleDispatch("sortByName");
  const sortItemsByRating = () => handleDispatch("sortByRating");
  const sortItemsByPrice = () => handleDispatch("sortByPrice");

  // Filtering functions
  const trandingItem = () => handleDispatch("trandingFilter");
  const releaseItem = () => handleDispatch("releaseFilter");
  const upcomingItem = () => handleDispatch("upcomingFilter");

  // Cart management functions
  const handleAddItem = (item) => {
    const isItemAlreadyAdded = addItem.some((cartItem) => cartItem.id === item.id);
    if (!isItemAlreadyAdded) {
      setAddItem([...addItem, item]);
    }
  };

  const handleRemoveItem = (id) => {
    setAddItem(addItem.filter((cartItem) => cartItem.id !== id));
  };

  // Modal visibility for the cart
  const modalShow = () => {
    if (addItem.length > 0) {
      setShow(true);
    }
  };

  const modalClose = () => {
    setShow(false);
  };

  // Modal for book details
  const openBookDetailModal = () => setIsOpenModal(true);
  const closeBookDetailModal = () => setIsOpenModal(false);

  return (
    <div>
      <Header
        themeChange={handleChange}
        size={addItem.length}
        addItem={addItem}
        show={show}
        modalShow={modalShow}
        modalClose={modalClose}
        handleRemoveItem={handleRemoveItem}
      />
      <Main
        onSortByName={sortItemsByName}
        onSortByRating={sortItemsByRating}
        onSortByPrice={sortItemsByPrice}
        bookData={bookData}
        onRelease={releaseItem}
        onUpcoming={upcomingItem}
        onTranding={trandingItem}
        BookDetailModalOpen={openBookDetailModal}
        BookDetailModalClose={closeBookDetailModal}
        isOpenModal={isOpenModal}
        handleAddItem={handleAddItem}
      />
      <Footer />
    </div>
  );
}

export default Layout;
