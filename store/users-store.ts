import { create } from 'zustand';

const userStore = create((set) => ({
  loggedInUserData: null,
  SetLoggedInUserData: (data) => set({ loggedInUserData: data }),
}));

export default userStore;
