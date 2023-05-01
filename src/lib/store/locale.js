import { writable } from 'svelte/store';

const Locale = () => {
    const { subscribe , update } = writable(false);

    return {
        subscribe,
        toggle: () => update(v => !v)
    }
}

export const locale = Locale();