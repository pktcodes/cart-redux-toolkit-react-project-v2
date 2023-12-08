# Cart 🛒

> PROD [Live] : https://react-redux-toolkit-cart-v2-prod.netlify.app/

#### Cart consists of a straightforward user interface where there is a

- List of some of the items added to the cart, **Navbar** with the title _Redux Toolkit_ , **cart amount** i.e. total number of items added by default, and a **`CLEAR CART`** button which upon click triggers a pop-up modal with few options i.e., **`CONFIRM`** to clear all items in the cart, closes the modal and displays `YOUR BAG is currently empty` or  **`CANCEL`** to close the modal  
- Each cartItem has the `image` , `title` , `price` , `amount`, along with a few buttons i.e. **`remove`** to remove the item from the cart, 🔼 to increase , 🔽 to decrease the amount of that particular item and when the item amount gets less than 1, it is automatically removed from the cart.
- For every change in cartItem, the **total price** and **cart amount** gets adjusted.
- Data is handled by **`data.js`**, and styles are handled by **`index.css`**
- To run the project locally, clone the repo, `npm install` to install the dependencies, and `npm run dev` to start up the development server on default port 5173.

#### Languages

HTML, CSS, JavaScript, ECMAScript, React - Hooks ~ useEffect, Redux Toolkit - createAsyncThunk

#### Deployment / Hosting

Netlify

---

_Note: I have developed this project ~ [22] as part of the React 18 Tutorial and Projects Course (2023) taught by John Smilga._
