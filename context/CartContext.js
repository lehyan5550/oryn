"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "oryn_cart_v1";

function lineKey(productId, size, color) {
  return `${productId}__${size}__${color}`;
}

function cartReducer(state, action) {
  switch (action.type) {
    case "HYDRATE":
      return Array.isArray(action.payload?.items) ? action.payload : state;

    case "ADD_ITEM": {
      const { product, size, color, quantity } = action.payload;
      const key = lineKey(product.id, size, color);
      const existing = state.items.find((item) => item.key === key);

      if (existing) {
        return {
          items: state.items.map((item) =>
            item.key === key
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      }

      return {
        items: [
          ...state.items,
          {
            key,
            productId: product.id,
            slug: product.slug,
            name: product.name,
            price: product.price,
            gradient: product.gradient,
            icon: product.icon,
            size,
            color,
            quantity,
          },
        ],
      };
    }

    case "REMOVE_ITEM":
      return {
        items: state.items.filter((item) => item.key !== action.payload.key),
      };

    case "UPDATE_QUANTITY": {
      const { key, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          items: state.items.filter((item) => item.key !== key),
        };
      }
      return {
        items: state.items.map((item) =>
          item.key === key ? { ...item, quantity } : item
        ),
      };
    }

    case "CLEAR_CART":
      return { items: [] };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        dispatch({ type: "HYDRATE", payload: JSON.parse(raw) });
      }
    } catch {
      // ignore malformed storage
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state, hydrated]);

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key !== STORAGE_KEY || e.newValue == null) return;
      try {
        dispatch({ type: "HYDRATE", payload: JSON.parse(e.newValue) });
      } catch {
        // ignore malformed storage
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const addItem = (product, { size, color, quantity = 1 } = {}) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        product,
        size: size || product.sizes?.[0] || "One Size",
        color: color || product.colors?.[0] || "Default",
        quantity,
      },
    });
    setDrawerOpen(true);
  };

  const removeItem = (key) => dispatch({ type: "REMOVE_ITEM", payload: { key } });

  const updateQuantity = (key, quantity) =>
    dispatch({ type: "UPDATE_QUANTITY", payload: { key, quantity } });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const itemCount = useMemo(
    () => state.items.reduce((sum, item) => sum + item.quantity, 0),
    [state.items]
  );

  const subtotal = useMemo(
    () =>
      state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [state.items]
  );

  const value = {
    items: state.items,
    itemCount,
    subtotal,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    isDrawerOpen,
    openDrawer: () => setDrawerOpen(true),
    closeDrawer: () => setDrawerOpen(false),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
