import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    data:[],
    message:"",
    userData : []
}

export const createUser = createAsyncThunk("userCrud/createUser",async(data)=>{
    try{
        const response = data;
        return response;
    }catch(error){
        return error;
    }
})

export const updateUser = createAsyncThunk("userCrud/updateUser",async(data)=>{
    try{
        const response = data;
        return response;
    }catch(error){
        return error;
    }
})

export const deleteUser = createAsyncThunk("userCrud/deleteUser",async(data)=>{
    try{
        const response = data;
        return response;
    }catch(error){
        return error;
    }
})

const authSlice = createSlice({
    name:"userCrud",
    initialState,
    reducers:{
        // addData:(state , action)=>{
        //     state.data.push(action.payload);
        // },
        // updateData:(state ,action)=>{
        //     state.data.splice(action.payload.id,1,action.payload.values)
        // },
        // deleteData:(state,action)=>{
        //     state.data.splice(action.payload,1)
        // }
    },
    extraReducers:(builder)=>{
        builder.addCase(createUser.pending,(state,action)=>{
            state.status = "loading";
        }).addCase(createUser.fulfilled,(state,{payload})=>{
            state.status = "success"
            state.userData.push(payload);
            state.message = "Create user Successfully";
        }).addCase(createUser.rejected,(state,action)=>{
            state.status = "failed";
        }).addCase(updateUser.pending,(state,action)=>{
            state.status = "loading";
        }).addCase(updateUser.fulfilled,(state,action)=>{
            state.status = "success"
            state.userData.splice(action.payload.id,1,action.payload.values);
            state.message = "Update user Successfully";
        }).addCase(updateUser.rejected,(state,action)=>{
            state.status = "failed";
        }).addCase(deleteUser.pending,(state,action)=>{
            state.status = "loading";
        }).addCase(deleteUser.fulfilled,(state,action)=>{
            state.status = "success"
            state.userData.splice(action.payload,1)
            state.message = "Delete user Successfully";
        }).addCase(deleteUser.rejected,(state,action)=>{
            state.status = "failed";
        })
    }
})

// export const { addData , deleteData , updateData } = authSlice.actions

export default authSlice.reducer;