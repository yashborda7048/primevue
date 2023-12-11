<script setup>

</script>

<template>
    <div class="flex justify-content-between mb-5">
        <h2 class="mb-0">Projecten</h2>
        <Button label="Nieuw project" />
    </div>
    <TreeTable :value="nodes">
        <Column field="projectnaam" header="Projectnaam" expander></Column>
        <Column field="Opdrachtgever" header="Opdrachtgever"></Column>
        <Column field="Aanmaakdatum" header="Aanmaakdatum"></Column>
        <Column field="Projectleden" header="Projectleden"></Column>
        <Column field="Status" header="Status"></Column>
    </TreeTable>
</template>
