import { writable } from 'svelte/store';

const PrefixStore = () => {
    const { subscribe , set } = writable(0);

    return {
        subscribe,
        set: v => set(v)
    }
}

export const prefix = PrefixStore();