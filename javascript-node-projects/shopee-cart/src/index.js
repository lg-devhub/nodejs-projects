import createItem from "./service/item.js";
import * as cartService from "./service/cart.js";

const MyCart = [];
const MyWhishList = [];

console.log("Welcome to your Shopee Cart!");

const item1 = await createItem("Microfone", 457.97, 2);
const item2 = await createItem("Mousepad", 200.57, 1);

await cartService.addItem(MyCart, item1);
await cartService.addItem(MyCart, item2);

await cartService.removeItem(MyCart, item1);
await cartService.removeItem(MyCart, item2);

//await cartService.deleteItem(MyCart, item1.name);
//await cartService.deleteItem(MyCart, item2.name);


await cartService.displayCart(MyCart);

await cartService.sumTotal(MyCart);