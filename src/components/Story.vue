<template>
    <div class="story-detail">
        <p>{{url}}</p>
        <router-link :to="{ name: 'comments', params: {id: id, url: url} }">comments</router-link>
        <p v-if="loading"><img src="http://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-small.gif" alt="loading"></p>
        <div v-html="story.content"/>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props: ['id', 'url'],
    data: function() {
        return {
            loading: true,
            story: Object
        }
    },
    methods: {
        fetchStory(url) {
            const u = `https://hn-reader-api-gnmkewcumb.now.sh/story?url=${url}`
            console.log(u);
            axios.get(`https://hn-reader-api-gnmkewcumb.now.sh/story?url=${url}`)
            .then(response => {
                this.story = response.data
                this.loading = false
                return
            })
        }
    },
    mounted() {
        this.fetchStory(this.url)
    }
}
</script>

<style lang="scss">
</style>
