<script setup>
    import {ref} from 'vue'
    const props = defineProps({
        amiibo:{
            type:Object
        }
    })
</script>

<template>
    <div class="col-4 col-12-medium">
        <section class="middle">
            <img :src='amiibo.image'/>
            <header>
                <h2>{{amiibo.character}}</h2>
            </header>
            <p>{{amiibo.gameSeries}}</p>
        </section>
    </div>
</template>

<style scoped>

</style>
