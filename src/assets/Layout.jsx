import { useEffect, useState,useReducer } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Main from "../component/Main/Main";
import initialBookData from "../assets/data/data";
import ItemReducer from "./reducer/Reducer";


function Layout() {
  const [bookData, dispatch] = useReducer(ItemReducer,initialBookData());
  const [originalBookData] = useState(initialBookData());
  const [theme, setTheme] = useState(
    localStorage.getItem("themeMode") === "true"
  );
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [addItem, setAddItem] = useState([]);
  const [show, setShow] = useState(false);
  //useReducer
  // const [data, dispatch] = useReducer(ItemReducer, initialBookData());
  // Dark mode changer function start
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
  // Dark mode changer function end

  // Gallery sorting function start
  const sortItemsByName = () => {
    dispatch({ type: "sortByName" });
  };
  
  const sortItemsByRating = () => {
    dispatch({ type: "sortByRating"  });
  };
  
  const sortItemsByPrice = () => {
    dispatch({ type: "sortByPrice"  });
  };
  // Gallery sorting function end

  // Gallery filtering function start
  const trandingItem = () => {
    const trendingBooks = originalBookData.filter((item) => item.rating > 4);
    setBookData(trendingBooks);
  };

  const releaseItem = () => {
    const releaseBooks = originalBookData.filter(
      (item) => item.status === "new_releases"
    );
    setBookData(releaseBooks);
  };

  const upcomingItem = () => {
    const upcomingBooks = originalBookData.filter(
      (item) => item.status === "coming_soon"
    );
    setBookData(upcomingBooks);
  };
  // Gallery filtering function end

  // Modal manipulate functions start
  const openBookDetailModal = () => {
    setIsOpenModal(true);
  };

  const closeBookDetailModal = () => {
    setIsOpenModal(false);
  };
  // Modal manipulate functions end
// item add remove in cart function start

  const handleAddItem = (item) => {
    setAddItem((prevItems) => {
      const isItemAlreadyAdded = prevItems.some((book) => book.id === item.id);
      if (isItemAlreadyAdded) {
        return prevItems;
      }
      return [...prevItems, item];
    });
  };

  const handleRemoveItem = (id) => {
    setAddItem((prevItems) => prevItems.filter((item) => item.id !== id));
  };
// item add remove in cart function end
  const modalShow = () => {

    if (addItem !== []) {
      setShow(true);
    }
  };
  const modalClose = () => {
    setShow(false);
  };



  return (
    <div>
      <Header
        themeChange={handleChange}
        size={addItem.length}
        addItem={addItem}
        setAddItem={setAddItem}
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
