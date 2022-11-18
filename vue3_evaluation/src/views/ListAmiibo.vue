<script setup>
    import { onBeforeMount,ref } from 'vue'
    import axios from 'axios'
    const API_ALL_AMIIBO = 'https://www.amiiboapi.com/api/amiibo/'

    const amiibos = ref([])
    const isDataLoading = ref(false)

    onBeforeMount(async ()=> {
        const amiibosAll = await axios.get(API_ALL_AMIIBO)
        const {data,status} = amiibosAll
        if(status === 200){
            isDataLoading.value = true
        }
        amiibos.value = data.amiibo
    })
</script>

<template>
    <div id="page-wrapper">
        <!-- Header -->
        <section id="header">
            <!-- Logo -->
            <h1><a href="index.html">AmiiVue</a></h1>
            <!-- Nav -->
            <nav id="nav">
                <ul>
                    <li ><RouterLink :to="{name:'home'}">Home</RouterLink></li>
                    <li class="current"><RouterLink :to="{name:'listAmiibo'}">Liste Amiibo</RouterLink></li>
                </ul>
            </nav>

        </section>

        <!-- Main -->
            <section id="main">
                <div class="container">

                    <!-- Content -->
                        <article class="box post" v-if='isDataLoading'>
                            
                            <header>
                                <h2>Ma Collection</h2>
                                <p>Total : {{amiibos.length}}</p>
                            </header>
                            <p>
                                <table>
                                    <tr>
                                        <th>Character</th>
                                        <th>game Series</th>
                                        <th>Action</th>
                                    </tr>
                                    <tr v-for="amiibo in amiibos" :key="amiibo.tail">
                                        <td>{{amiibo.character}}</td>
                                        <td>{{amiibo.gameSeries}}</td>
                                        <td ><RouterLink :to="{name:'detailAmiibo',params:{amiiboTail:amiibo.tail}}"><button>Voir</button></RouterLink></td>
                                    </tr>
                                </table>
                            </p>
                            
                        </article>

                </div>
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
</template>

<style scoped>

</style>
