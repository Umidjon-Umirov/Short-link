import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const API_URL = 'https://api.shrtco.de/v2/shorten?url=';
export const fetchLink = createAsyncThunk(
    'links/fetchLinks',
    async function (url) {
        const response = await fetch(API_URL + url, { method: 'POST' });
        const data = await response.json();
        return data;
    }
);
export const linkSlice = createSlice({
    name: 'links',
    initialState: {
        data: [],
        status: 'idle',
    },
    extraReducers: {
        [fetchLink.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchLink.fulfilled]: (state, action) => {
            state.status = 'resolved';
            const {ok,result}=action.payload;
            if(ok){
               state.data.push(result)
            }
        },
        [fetchLink.rejected]: (state) => {
            state.status = 'error';
        },
    },
});
export default linkSlice.reducer;
export const selectData = (state) => state.links.data;
export const selectStatus = (state) => state.links.status;
