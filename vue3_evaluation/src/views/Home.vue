<script setup>
    import { onBeforeMount,ref } from 'vue'
    import axios from 'axios'
    import CardAmiibo from '@/components/CardAmiibo.vue'
    const API_ALL_AMIIBO = 'https://www.amiiboapi.com/api/amiibo/'

    const amiibos = ref([])
    const isDataLoading = ref(false)

    onBeforeMount(async ()=> {
        const amiibosAll = await axios.get(API_ALL_AMIIBO)
        
        const {data,status} = amiibosAll
        if(status === 200){
            isDataLoading.value = true
        }
        amiibos.value.push(data.amiibo[(Math.random() * (data.amiibo.length)).toFixed(0)])
        amiibos.value.push(data.amiibo[(Math.random() * (data.amiibo.length)).toFixed(0)])
        amiibos.value.push(data.amiibo[(Math.random() * (data.amiibo.length)).toFixed(0)])
    })
</script>

<template>
  <div id="page-wrapper">
        <!-- Header -->
        <section id="header">
                <!-- Logo -->
                <h1><RouterLink :to="{name:'home'}">AmiiVue</RouterLink></h1>
                <!-- Nav -->
                <nav id="nav">
                    <ul>
                        <li class="current"><RouterLink :to="{name:'home'}">Home</RouterLink></li>
                        <!-- <li><a href="left-sidebar.html">Pokémons</a></li> -->
                        <li><RouterLink :to="{name:'listAmiibo'}">Liste Amiibo</RouterLink></li>
                    </ul>
                </nav>
            <!-- Banner -->
                <section id="banner">
                    <header>
                        <h2>Hey! Bienvenue sur ma collection</h2>
                    </header>
                </section>
        </section>
        <!-- Intro -->
        <section id="intro" class="container">
            <div class="row" v-if="isDataLoading">
                <div v-for="(amiibo,index) in amiibos">
                  <CardAmiibo 
                    v-if="index <= 2"
                    :amiibo="amiibo"
                  /> <!-- On vérifie qu'il y en a bien que 3 -->
                </div>     
            </div>
            <footer>
                <ul class="actions">
                    <li><RouterLink :to="{name:'listAmiibo'}" class="button large">Liste complète</RouterLink></li>
                </ul>
            </footer>
        </section>

    <!-- Footer -->
        <section id="footer">
            <div class="container">
                <div class="row">						
                    <div class="col-12">

                        <!-- Copyright -->
                            <div id="copyright">
                                <ul class="links">
                                    <li>&copy;AmiiVue ~ Sciences U Lyon . All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                                </ul>
                            </div>

                    </div>
                </div>
            </div>
        </section>
    </div>
    <router-view/>
</template>

<style scoped>

</style>
