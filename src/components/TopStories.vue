<template>
    <div class="story-list">
        <p v-if="loading"><img src="http://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-small.gif" alt="loading"></p>
        <ul>
            <li v-for="story in processStories" @click.prevent="displayStory(story.id, story.url)">
                <p class="story">{{ story.title }}</p>
                <p class="story-meta">{{ story.by }} {{ story.time_since }} {{ story.descendants }} comments</p>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
    name: 'top-stories',
    data: function() {
        return {
            loading: true,
            stories: []
        }
    },
    computed: {
        processStories() {
            let s = this.stories
            s.map(story => {
                story.time_since = moment(story.time, "X").fromNow()
                story.comments = `https://news.ycombinator.com/item?id=${story.id}`
            })
            return s
        }
    },
    methods: {
        fetchStories() {
            axios.get('https://hn-reader-api-gnmkewcumb.now.sh/').then(response => {
                this.stories = response.data
                this.loading = false
                return
            })
        },
        displayStory(id, url) {
            this.$router.push({
                name: 'story',
                params: {
                    id: id,
                    url: url
                }})
        }
    },
    mounted() {
        this.fetchStories()
    }
}
</script>

<style lang="scss" scoped>
.story-list {
    border-top: 1px solid #eee;
    ul {
        margin-top: 0;
        list-style: none;
        padding-left: 0;
    }
}
li {
    border-bottom: 1px solid #eee;

    &:hover {
        background-color: #f6f6f6;
        cursor: pointer;
    }
}
.story {
    margin-top: 0;
    padding-top: 6px;
}
.story-meta {
    font-size: 0.8em;
}
</style>
