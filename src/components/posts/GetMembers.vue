<template>
    <div class="container">
        <div class="row">
            <div class="col s4">
                <h2>Meet our leadership</h2>
                <p>Libero fames augue nisl porttitor nisi, quis. Id ac elitodio vitae elementum enim vitae ullamcorper
                    suspendisse.</p>
            </div>
            <div class="col s8">
                <div v-for="member in  wpMembers " :key="member.id">
                    <div class="card-panel z-depth-1">
                        <div class="row valign-wrapper">
                            <div class="col s4">
                                <img class="responsive-img" :src="member._embedded['wp:featuredmedia'][0].source_url"
                                    alt="">
                            </div>
                            <div class="col s8">
                                <h5>{{ member.acf.name }}</h5>
                                <a v-bind:href="'mailto:' + member.acf.email">{{ member.acf.email }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GetMembers',
    props: ['wpMembers']
}
</script>