import { StateCreator } from 'zustand';
import { IProfileInformation } from 'apis/v1/user/user.dto';

export interface ProfileSlice {
    profile: IProfileInformation;
    isLoggedIn: boolean;
    setProfile: (profile: IProfileInformation) => void;
    setLoggedIn: (value: boolean) => void;
}

export const createProfileSlice: StateCreator<ProfileSlice> = set => ({
    profile: {
        email: '',
        phoneNumber: '',
        nickname: '',
        isTwoFactorEnabled: false
    },
    setProfile: profile => set({ profile }),

    isLoggedIn: false,
    setLoggedIn: value => set({ isLoggedIn: value })
});
