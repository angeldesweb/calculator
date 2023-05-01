import { writable } from 'svelte/store';

const init = {
    network:'',
    broadcast:'',
    prefix:0,
    hosts:0,
    utilHosts:0
}

const ScopeResults = () => {
    const { subscribe , update , set } = writable(init);

    return {
        subscribe,
        set: (args) => update(store => (store = {...store,...args})),
        reset: () => set(init)
    }
}

export const scope = ScopeResults();