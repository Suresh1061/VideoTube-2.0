import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { errorHandler } from "../../constants";
import { message } from "antd";
import axios from "axios";

const initialState = {
    loading: false,
    isLiked: false,
    likedVideos: []
}

export const toggleVideoLike = createAsyncThunk("toggleVideoLike", async (videoId) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_SERVER}/likes/toggle/v/${videoId}`);
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

export const toggleCommentLike = createAsyncThunk("toggleCommentLike", async (commentId) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_SERVER}/likes/toggle/c/${commentId}`);
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

export const toggleTweetLike = createAsyncThunk("toggleTweetLike", async (tweetId) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_SERVER}/likes/toggle/t/${tweetId}`);
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})

export const getLikedVideos = createAsyncThunk("getLikedVideos", async () => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_SERVER}/likes/videos`);
        return res.data.data
    } catch (error) {
        message.error(errorHandler(error?.response?.data))
    }
})


const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // builder.addCase(toggleVideoLike.pending, (state) => {
        //     state.loading = true;
        // })
        builder.addCase(toggleVideoLike.fulfilled, (state, action) => {
            state.loading = false;
            state.isLiked = (action.payload) ? true : false;
        })
        builder.addCase(toggleCommentLike.fulfilled, (state, action) => {
            state.loading = false;
            state.isLiked = (action.payload) ? true : false;
        })
        builder.addCase(toggleTweetLike.fulfilled, (state, action) => {
            state.loading = false;
            state.isLiked = (action.payload) ? true : false;
        })
        builder.addCase(getLikedVideos.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getLikedVideos.fulfilled, (state, action) => {
            state.loading = false;
            state.likedVideos = action.payload
        })
    }
})



export default likeSlice.reducer