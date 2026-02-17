import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface MenuState {
  activeMenu: string;
  isModalOpen: boolean;
}

const initialState: MenuState = {
  activeMenu: "Basic",
  isModalOpen: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setActiveMenu(state, action: PayloadAction<string>) {
      state.activeMenu = action.payload;
      state.isModalOpen = true;
    },
    closeModal(state) {
      state.isModalOpen = false;
    },
  },
});

export const { setActiveMenu, closeModal } = menuSlice.actions;
export default menuSlice.reducer;
