import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import loadHeaderFooter from "./utils.mjs";
const dataSource = new ProductData("tents");

const element = document.querySelector(".product-list");

const productList = new ProductList("Tents", dataSource, element);

const loadHeaderFooter = new document.querySelector('.main-header', '.main-footer');

productList.init();


