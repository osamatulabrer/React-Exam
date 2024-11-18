export default function ItemReducer(state, action) {
  switch (action.type) {
    case 'sortByName':
      return [...state].sort((a, b) => a.name.localeCompare(b.name));

    case 'sortByRating':
      return [...state].sort((a, b) => b.rating - a.rating);

    case 'sortByPrice':
      return [...state].sort((a, b) => a.price - b.price);

    case 'trandingFilter':
      return state.filter((item) => item.rating > 4);

    case 'releaseFilter':
      return state.filter((item) => item.status === "new_releases");

    case 'upcomingFilter':
      return state.filter((item) => item.status === "coming_soon");

    case 'added': {
      const { item } = action.payload;
      const isItemAlreadyAdded = state.some((book) => book.id === item.id);
      if (isItemAlreadyAdded) {
        return state; // No changes
      }
      return [...state, item]; // Add the new item
    }

    case 'delete': {
      const { id } = action.payload;
      return state.filter((item) => item.id !== id);
    }

    default:
      return state;
  }
}
