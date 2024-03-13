import { bagActions } from "../store/bagSlice";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
const HomeItem = ({ item }) => {
  const bagItems = useSelector((store) => store.bag);
  const itemFound = bagItems.indexOf(item.id) >= 0;
  const dispatch = useDispatch();
  const handleaddTOBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };
  const handleremoveTOBag = () => {
    dispatch(bagActions.removeFrombBag(item.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {itemFound ? (
        <button className="btn-add-bag" style={{ backgroundColor: "pink" }} onClick={handleremoveTOBag}>
          <CiCircleRemove style={{ marginRight: "3px", marginBottom: "3px" }} />
          Remove
        </button>
      ) : (
        <button className="btn-add-bag" onClick={handleaddTOBag}>
          <MdOutlineFileDownloadDone
            style={{ marginRight: "3px", marginBottom: "3px" }}
          />
          Add to Bag
        </button>
      )}
    </div>
  );
};
export default HomeItem;
