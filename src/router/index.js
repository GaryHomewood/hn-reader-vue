import Vue from 'vue'
import Router from 'vue-router'
import Story from '../components/Story.vue'
import TopStories from '../components/TopStories.vue'
import Comments from '../components/Comments.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: TopStories
        },
        {
            path: '/story/:id',
            name: 'story',
            component: Story,
            props: true
        },
        {
            path: '/comments/:id',
            name: 'comments',
            component: Comments,
            props: true
        }
    ]
})
