import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { createAppSlice, AppSlice } from './app.slice';
import { createProfileSlice, ProfileSlice } from './user.slice';

type StoreState = AppSlice & ProfileSlice;

const useStore = create<StoreState>()(
    devtools((...a) => ({
        ...createAppSlice(...a),
        ...createProfileSlice(...a)
    }))
);

export default useStore;
