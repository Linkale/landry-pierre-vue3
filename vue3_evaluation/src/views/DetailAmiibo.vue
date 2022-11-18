<script setup>
    import { useRoute } from 'vue-router';
    import { onBeforeMount,ref } from 'vue'
    import axios from 'axios'

    const API_ALL_AMIIBO = 'https://www.amiiboapi.com/api/amiibo/'
    const route = useRoute()
    const currentAmiibo = ref({})

    onBeforeMount(async ()=>{
        const oneAmiibo = await axios.get(API_ALL_AMIIBO+'/?tail='+route.params.amiiboTail)
        const { data, status } = oneAmiibo;
        currentAmiibo.value = data.amiibo[0];
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
							<li ><RouterLink :to="{name:'home'}">Home</RouterLink></li>
							<!-- <li><a href="left-sidebar.html">Pokémons</a></li> -->
							<li ><RouterLink :to="{name:'listAmiibo'}">Liste Amiibo</RouterLink></li>
						</ul>
					</nav>
				</section>
			<!-- Main -->
				<section id="main">
					<div class="container">
						<div class="row">
							<div class="col-4 col-12-medium">

								<!-- Sidebar -->
									<section class="box">
										<header>
											<h3>Infos</h3>
										</header>
										<p> amiiboSeries: <b>{{currentAmiibo.amiiboSeries}}</b> <br />
											character: {{currentAmiibo.character}}<br />
											gameSeries: {{currentAmiibo.gameSeries}}<br />
											type: {{currentAmiibo.type}}
										</p>
										
									</section>
									<section class="box">
										<header>
											<h3>Dates sorties</h3>
										</header>
										
										<ul class="divided">
											<li>au: {{currentAmiibo.release['au']}}</li>
											<li>eu: {{currentAmiibo.release['eu']}}</li>
											<li></li>
											<li></li>
										</ul>
										
									</section>

							</div>
							<div class="col-8 col-12-medium imp-medium">
								<!-- Content -->
									<article class="box post">
										<a href="#" class="featured"><img :src='currentAmiibo.image' alt="" /></a>
										<header>
											<h2>{{currentAmiibo.name}}</h2>
											<p>{{currentAmiibo.type}}</p>
										</header>
									</article>
							</div>
						</div>
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
