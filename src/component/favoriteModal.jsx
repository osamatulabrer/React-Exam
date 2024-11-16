
import { RxCross2 } from "react-icons/rx";

export default function FavoriteModal({ onClose}) {
  return (
    <div className="fixed top-1/4 left-1/4 bg-[#171923] p-5 space-y-3 rounded-md w-5/12 h-96">
      <RxCross2
        className="text-white text-xl cursor-pointer"
        onClick={() => onClose()}
      />
      <div className="flex space-y-3">
        <img src="" alt="img" />
        <div>
          <h6 className="text-white text-lg font-semibold">lorem</h6>
          <p className="text-white text-sm">lorem</p>
          <span className="text-white text-sm">BDT: 120TK</span>
        </div>
      </div>
    </div>
  );
}
