import { UserType } from '@/interfaces';
import { create } from 'zustand';

const useUserStore = create((set) => ({
  loggedInUserData: null,
  SetLoggedInUserData: (data: UserType) => set({ loggedInUserData: data }),
}));

export default useUserStore;
