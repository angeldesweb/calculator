<script>
    export let label = 'label';
    export let values;
</script>

<section class="section form-control">
    <label for="">
        <span class="label-text">{label}</span>
    </label>
    <div class="input-group flex justify-center">
        <input bind:value={values[0]} type="number" min="0" max="255" class="input input-bordered w-24" >
        <input bind:value={values[1]} type="number" min="0" max="255" class="input input-bordered w-24" >
        <input bind:value={values[2]} type="number" min="0" max="255" class="input input-bordered w-24" >
        <input bind:value={values[3]} type="number" min="0" max="255" class="input input-bordered w-24" >
    </div>
</section>


