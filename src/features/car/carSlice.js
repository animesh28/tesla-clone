import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cars: ["Model S", "Model Y", "Model 3", "Model X",]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export default carSlice.reducer