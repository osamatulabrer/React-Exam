

export default function ItemReducer(state,action) {
  
  
    switch (action.type) {
      case 'sortByName':
        return [...state].sort((a, b) => a.name.localeCompare(b.name));
      case 'sortByRating':
        return [...state].sort((a, b) => b.rating - a.rating);
      case 'sortByPrice':
        return [...state].sort((a, b) => a.price - b.price);
      default:
        return state;
    }
  };




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