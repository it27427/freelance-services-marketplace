import { UserType } from '@/interfaces';
import { create } from 'zustand';

const userStore = create((set) => ({
  loggedInUserData: null,
  SetLoggedInUserData: (data: UserType) => set({ loggedInUserData: data }),
}));

export default userStore;
