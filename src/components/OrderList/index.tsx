import React, {
  FunctionComponent,
  useState,
  useRef,
  useEffect,
  useCallback,
  RefObject
} from "react";
import classNames from "classnames";

import { OrderContext, Action } from "../OrderContext";
import Order from "../Order";
import { IOrder } from "../../common/interfaces";
import EditModal from "../EditModal";

import "./styles.scss";

/**
 * Check refereneced DOM object is scrollable.
 * @param ref Referenced DOM object
 * @param deps Re-checking the ref when dependencies changed
 */
const useScrollable = (ref: RefObject<HTMLElement>, deps: any[]) => {
  const [scrollable, setScrollable] = useState<boolean>(false);
  const checkScrollable = useCallback(() => {
    let result = false;
    if (ref.current) {
      if (ref.current.scrollHeight > ref.current.clientHeight) {
        result = true;
      } else {
        result = false;
      }
    }
    // console.debug("checkScrollable", result);
    setScrollable(result);
  }, [ref]);

  useEffect(() => {
    window.addEventListener("resize", checkScrollable);
    return () => {
      window.removeEventListener("resize", checkScrollable);
    };
  }, [checkScrollable]);

  useEffect(() => {
    checkScrollable();
  }, [...deps, checkScrollable]);

  return scrollable;
};

const OrderList: FunctionComponent = () => {
  const { orders, dispatch } = React.useContext(OrderContext);
  const [currentOrder, selectOrder] = useState<IOrder>();
  const [editing, setEditing] = useState<boolean>(false);
  const [showing, setShowing] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const scrollable = useScrollable(ref, [orders.length]);

  const handleDelete = (order: IOrder) => () => {
    dispatch({ type: Action.DELETE, order });
  };

  const handleEdit = (order: IOrder) => () => {
    selectOrder(order);
    setEditing(true);
  };

  const handleAdd = () => {
    selectOrder(undefined);
    setEditing(true);
  };

  const handleConfirm = (values: Omit<IOrder, "id">, origialOrder?: IOrder) => {
    if (origialOrder) {
      dispatch({
        type: Action.UPDATE,
        order: { ...origialOrder, ...values }
      });
    } else {
      dispatch({
        type: Action.CREATE,
        order: values as IOrder
      });
    }
  };

  let timeoutRef = useRef<number | undefined>();
  const handleScroll = () => {
    setShowing(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setShowing(false);
    }, 5000);
  };

  return (
    <div className="orders" onScroll={handleScroll} ref={ref}>
      {orders.length > 0 ? (
        orders.map(order => (
          <Order
            {...order}
            onDelete={handleDelete(order)}
            onEdit={handleEdit(order)}
            key={order.id}
          />
        ))
      ) : (
        <div className="empty-text">empty</div>
      )}
      <div
        className={classNames("add-button", {
          show: !scrollable || (scrollable && showing)
        })}
        onClick={handleAdd}
      >
        +
      </div>
      {editing && (
        <EditModal
          order={currentOrder}
          onConfirm={handleConfirm}
          onClose={() => {
            selectOrder(undefined);
            setEditing(false);
          }}
        />
      )}
    </div>
  );
};

export default OrderList;
