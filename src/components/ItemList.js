import { useDispatch } from "react-redux";
import {addItem} from '../utils/cartSlice'
import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {

  const dispatch = useDispatch()

  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item))
  }

  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-10/12">
              <div className="py-2">
                <span className="">{item.card.info.name}</span>
                <span>
                  - ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-2/12 ml-4">
              <div className="absolute">
                <button
                  className="p-2 h-8 mx-16 text-xs rounded-md text-white bg-black shadow-md"
                  onClick={()=>handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-full rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
