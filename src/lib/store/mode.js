import { writable } from 'svelte/store';

const ModeHandler = () => {
    const { subscribe , set } = writable('default');

    return {
        subscribe,
        handle: v => set(v)
    }
}

export const mode = ModeHandler();