import LeftSideBer from "./LeftSideBer";
import RightSideBer from "./RightSideBer";

import BookCart from "./BookCart";



export default function Main({
  onSortByPrice,
  onSortByRating,
  onSortByName,
  bookData,
  onRelease,
  onUpcoming,
  onTranding,
  BookDetailModalClose,
  BookDetailModalOpen,
  isOpenModal,
  handleAddItem,
 

}) {
 
 
  return (
    <div className="border-y  border-[#d9d9d9]">
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-12">
          <LeftSideBer
            onRelease={onRelease}
            onUpcoming={onUpcoming}
            onTranding={onTranding}
        
           
            
          />

          <div className="col-span-8 border-x border-[#d9d9d9]">
            <div className="grid grid-cols-12 gap-4 mt-10 mb-5 mx-6">
              { bookData.map((item) => (
                <BookCart key={item.id} item={item} BookDetailModalClose={BookDetailModalClose} BookDetailModalOpen={BookDetailModalOpen} isOpenModal={isOpenModal} handleAddItem={handleAddItem}/>
              ))}
            </div>
          </div>
          
          <RightSideBer
            onSortByName={onSortByName}
            onSortByRating={onSortByRating}
            onSortByPrice={onSortByPrice}
          />
        </div>
      </div>
    </div>
  );
}
