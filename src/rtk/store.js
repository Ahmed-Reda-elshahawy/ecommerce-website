import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import CartSlice from "./slices/CartSlice";
import categoriesReducer from "./slices/Categories";
import quantityReducer from "./slices/quantitySlice";
import loginReducer from "./slices/LoginSlice";
import RegisterReducer from "./slices/RegisterSlice";
import LogInOutReducer from "./slices/LogInOutSlice";
import AddReducer from './slices/AddSlice';
import UpdateReducer from './slices/UpdateSlice';


export const store = configureStore({
    reducer: {
        products: productsReducer,
        Cart: CartSlice,
        categoryList: categoriesReducer,
        quantity: quantityReducer,
        login: loginReducer,
        register: RegisterReducer,
        logInOut: LogInOutReducer,
        AddModal: AddReducer,
        UpdateModal: UpdateReducer,
    },
})