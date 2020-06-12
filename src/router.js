import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from './views/Main'
import Hire from './views/Hire'
import About from './views/About'
import News from './views/News'
import Study from './views/Study'
import Starts from './views/Starts'
import Robo from './views/Robo'
import Header from './components/Header'
import StudentsReview from './components/StudentsReview'
import Footer from './components/Footer'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Main',
        components: {
            default: Main,
            header: Header,
            review: StudentsReview,
            footer: Footer
        }
    },
    {
        path: '/about',
        name: 'About',
        components: {
            default: About,
            header: Header,
            review: StudentsReview,
            footer: Footer
        }
    },
    {
        path: '/hire',
        name: 'Hire',
        components: {
            default: Hire,
            header: Header,
            review: StudentsReview,
            footer: Footer
        }
    },
    {
        path: '/study',
        name: 'Study',
        components: {
            default: Study,
            header: Header,
            review: StudentsReview,
            footer: Footer
        }
    },
    {
        path: '/news',
        name: 'News',
        components: {
            default: News,
            header: Header,
            review: StudentsReview,
            footer: Footer
        }
    },
    {
        path: '/start',
        name: 'Starts',
        components: {
            default: Starts,
            header: Header,
            review: StudentsReview,
            footer: Footer
        }
    },
    {
        path: '/robo',
        name: 'Robo',
        components: {
            default: Robo,
            header: Header,
            review: StudentsReview,
            footer: Footer
        }
    }
]
const router = new VueRouter({
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})

export default router