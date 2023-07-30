const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    processor: null,
    motherboard: null,
    ram: null,
    psu: null,
    storage: null,
    monitor: null,
    others: null,
};

const pcBuilderSlice = createSlice({
    name: "pcbuilder",
    initialState,
    reducers: {
        setProcessor: (state, action) => {
            state.processor = action.payload;
        },
        setMotherboard: (state, action) => {
            state.motherboard = action.payload;
        },
        setRam: (state, action) => {
            state.ram = action.payload;
        },
        setPsu: (state, action) => {
            state.psu = action.payload;
        },
        setStorage: (state, action) => {
            state.storage = action.payload;
        },
        setMonitor: (state, action) => {
            state.monitor = action.payload;
        },
        setOthers: (state, action) => {
            state.others = action.payload;
        },
    },
});

export const {
    setProcessor,
    setMonitor,
    setRam,
    setPsu,
    setStorage,
    setOthers,
    setMotherboard,
} = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
