import { Button } from "@mui/material";
import React, { useState } from "react";
import styles from "./ShoppingList.module.css";
interface IShoppingListItem {
  name: string;
  quantity: number;
}

export const ShoppingList = () => {
  const [shoppingList, setShoppingList] = useState<IShoppingListItem[]>([
    { name: "Aardappelen", quantity: 10 },
    { name: "ajuinen", quantity: 25 },
  ]);
  const [name, setName] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const addShoppingItem = () => {
    if (quantity < 1) {
      setErrorMessage("Quantity should be above 0");
      setSuccessMessage("");
    } else {
      setShoppingList([...shoppingList, { name, quantity }]);

      setSuccessMessage("Item added to shopping list");
      setErrorMessage("");
      setName("");
      setQuantity(0);
    }
  };

  const removeShoppingItem = (index: number) => {
    let shoppingListCopy = shoppingList.filter((item, i) => i !== index);
    setShoppingList(shoppingListCopy);
    setSuccessMessage("Item removed from shopping list");
    setErrorMessage("");
  };
  return (
    <>
      <div className={styles.container}>
        <h1>Shopping List</h1>
          {errorMessage && <div className={styles.error}>{errorMessage}</div>}{" "}
          {successMessage && <div className={styles.success}>{successMessage}</div>}
          <form className={styles.shoppingAddForm}>
            <label>Name:</label>
            <input
              type="text"
              name="item"
              value={name}
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label>Quantity:</label>
            <input
              type="number"
              name="quantity"
              value={quantity}
              placeholder="Quantity"
              onChange={(e) => {
                setQuantity(parseInt(e.target.value));
              }}
            />
            <label></label>
            <Button onClick={addShoppingItem} variant="contained">Add</Button>
          </form>
          <table className={styles.showTable}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {shoppingList.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <Button
                        onClick={() => {
                          removeShoppingItem(index);
                        }}
                        variant="outlined"
                        className={styles.removeButton}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
      </div>
    </>
  );
};

// const ShoppingList = () => {
//     return (
//         <>
//         <ShoppingListComponent />
//         </>
//     );
// }

export default ShoppingList;
