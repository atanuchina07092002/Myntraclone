import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";
const Fetchitems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://myntraclone-4y0a.onrender.com/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(itemsActions.addInitialItems(items[0]));
      });

    return () => {
      console.log("Cleaning up UseEffect.");
      controller.abort();
    };
  }, [fetchStatus]);
  return <></>;
};
export default Fetchitems;
