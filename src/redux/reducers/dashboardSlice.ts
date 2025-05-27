import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface dashboardState {
  selectedTab: string;
  hoveredSkill:boolean;
}

const initialState: dashboardState = {
  selectedTab:'Home',
  hoveredSkill: false,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
   setSelectedTab: (state, action: PayloadAction<string>) => {
      state.selectedTab = action.payload;
    },
    setHoveredSkill:(state, action: PayloadAction<boolean>) => {
      state.hoveredSkill = action.payload;
    }
  
  },
});

export const { setSelectedTab } = dashboardSlice.actions;
export default dashboardSlice.reducer;
