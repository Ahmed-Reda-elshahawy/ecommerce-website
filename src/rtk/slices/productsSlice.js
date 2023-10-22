import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const ApiLink = "https://fakestoreapi.com/products";
// const ApiLink = "http://localhost:3000/products";

export const fetchProducts = createAsyncThunk('ProductsSlice/fetchProducts', async () => {
    const response = await fetch(ApiLink);
    const data = response.json();
    return data;
}
)

export const fetchCategory = createAsyncThunk("ProductsSlice/fetchCategory", async (category) => {
    const res = await fetch(`${ApiLink}/category/${category}`);
    const data = await res.json();
    console.log(data);
    return data;
});

const updateProductHelper = (state, updatedProduct) => {
    const productIndex = state.findIndex((product) => product.id === +(updatedProduct.id));
    if (productIndex !== -1) {
        state[productIndex] = updatedProduct;
    }
    return state;
};

export const ProductsSlice = createSlice({
    name: "ProductsSlice",
    initialState: [],
    reducers: {
        AddNewProduct: (state, action) => {
            state.push(action.payload);
        },
        SearchedProducts: (state, action) => {
            state = action.payload;
            return state;
        },
        DeleteProduct: (state, action) => {
            state = state.filter((el) => el.id !== action.payload.id);
            return state;
        },
        updateProduct: (state, action) => {
            // let updatingProduct = state.find(el => el.id === action.payload.id);
            // updatingProduct.id = action.payload.id;
            // updatingProduct.title = action.payload.title;
            // updatingProduct.price = action.payload.price;
            // updatingProduct.description = action.payload.description;
            // updatingProduct.category = action.payload.category;
            // updatingProduct.image = action.payload.image;

            // const productIndex = state.findIndex((product) => product.id === action.payload.id);
            // console.log("index", productIndex);
            // if (productIndex !== -1) {
            //     state[productIndex] = action.payload;
            //     console.log("product: ", action.payload);
            // }
            // else {
            //     console.log("nothing")
            // }
            // return state;

            const updatedState = updateProductHelper(state, action.payload);
            return updatedState;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state = action.payload;
            return state;
        }).addCase(fetchCategory.fulfilled, (state, action) => {
            state = action.payload;
            return state;
        })
    }
})

export const { AddNewProduct, SearchedProducts, DeleteProduct, updateProduct } = ProductsSlice.actions;
export default ProductsSlice.reducer;
