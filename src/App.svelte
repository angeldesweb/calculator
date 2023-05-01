<script>
    import { Main , Brand , Menu } from './lib/components';
    
    import { constants } from './lib/constants';
    import { Default , Netmask , Scope } from './lib/modes';
    import { mode , locale , scope , prefix } from './lib/store';

    const { en , es } = constants;

    $: lang = $locale ? en : es;

    const modes = {
        default:Default,
        netmask:Netmask,
        scope:Scope
    }

</script>

<Main>
    <nav class="navbar bg-base-200 shadow-xl p-4">
        <div class="navbar-start">
            <button class="btn btn-ghost" on:click={() => mode.handle('default')}>
                <Brand classes="text-4xl" /> <small class="neutral-content ml-4">{lang.brand_small}</small>
            </button>
        </div>
        <div class="navbar-end">
            <button class="btn btn-ghost" on:click={() => locale.toggle()} >
                {$locale ? '🇺🇸' : '🇪🇸'}
            </button>
        </div>
    </nav>
    <div class="flex h-full">
        <Menu/>
        <svelte:component this={modes[$mode]} />
    </div>
</Main>
<input type="checkbox" id="scope-results" class="modal-toggle" />
<div class="modal">
    <div class="modal-box relative">
        <label for="scope-results" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-lg font-bold">Scope</h3>
        <ul class="py-4">
            <li>Network: {$scope.network}</li>
            <li>Broadcast: {$scope.broadcast}</li>
            <li>Hosts: {$scope.hosts}</li>
            <li>Util hosts: {$scope.utilHosts}</li>
            <li>Prefix: {$scope.prefix}</li>
        </ul>
    </div>
</div>

<input type="checkbox" id="mask-prefix" class="modal-toggle" />
<div class="modal">
    <div class="modal-box relative">
        <label for="mask-prefix" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-lg font-bold">{$locale ? 'Netmask result' : 'Resultado'}</h3>
        <p>{lang.netmask_result_help_text} /{$prefix}</p>
    </div>
</div>

<input type="checkbox" id="info" class="modal-toggle" />
<div class="modal">
    <div class="modal-box relative">
        <label for="info" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-lg font-bold"><Brand/> <small class="neutral-content ml-4">{lang.brand_small}</small></h3>
        <strong class="py-4">
            App version 0.0.1 (alpha)
        </strong>
        <p>{lang.early}</p>
    </div>
</div>