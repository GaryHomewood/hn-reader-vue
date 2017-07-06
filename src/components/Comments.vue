<template>
    <div>
        <p>{{url}}</p>
        <router-link :to="{ name: 'story', params: {id: id, url: url} }">article</router-link>
        <tree :comments="comments"/>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

Vue.component('tree', {
    props: ['comments'],
    template: `
        <ul class="comments">
            <li v-for="comment in comments">
                <div class="comment">
                    <div v-html="comment.content"/>
                    <div class="comment-meta">{{comment.user}} {{comment.time_ago}}</div>
                </div>
                <tree :comments="comment.comments"/>
            </li>
        </ul>
        `
})

export default {
    props: ['id', 'url'],
    data: function() {
        return {
            loading: true,
            comments: Object
        }
    },
    methods: {
        fetchComments(id) {
            axios.get(` http://node-hnapi.herokuapp.com/item/${id}`)
                .then(response => {
                    this.comments = response.data.comments
                    this.loading = false
                    return
                })
        }
    },
    mounted() {
        this.fetchComments(this.id)
    }
}
</script>

<style lang="scss" scoped>
ul {

}
</style>

<style lang="scss">
ul {
    padding-left: 0;
    li ul {
        padding-left: 2em;
    }
}
p {
    margin-bottom: 4px;
}
.comments {
    list-style: none;
}
.comment {
    border-left: 4px solid #eee;
    padding: 0px 10px;
}
.comment-meta {
    font-size: 0.8em;
}
</style>
