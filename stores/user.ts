import { defineStore } from 'pinia';

export const useUserStore = defineStore(
  'userStore',
  () => {
    const user: Ref<null | {}> = ref(null);

    const setCurrentUser = (userData: object) => {
      user.value = userData;
    };

    return { user, setCurrentUser };
  },
  { persist: true }
);
