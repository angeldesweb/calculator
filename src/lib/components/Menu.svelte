<script>
    import toast from 'svelte-french-toast';
    import { Broadcast , Info , Transform } from '../icons';
    import { mode } from '../store';

    const modalInfo = () => {
        toast.success('Im work here')
    }
</script>

<ul class="menu w-18 p-2 h-full">
    <li>
        <div class="tooltip tooltip-right" data-tip="Find a network scope">
            <button on:click={() => mode.handle('scope')} >
                <Broadcast />
            </button>
        </div>
    </li>
    <li>
        <div class="tooltip tooltip-right" data-tip="Netmask to prefix">
            <button on:click={() => mode.handle('netmask')} >
                <Transform />
            </button>
        </div>
    </li>
    <li>
        <label for="info" class="tooltip tooltip-right" data-tip="Info">
            <Info />
        </label>
    </li>
</ul>