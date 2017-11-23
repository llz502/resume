import AboutMe from './components/AboutMe.vue'
import Portfolio from './components/Portfolio.vue'
import TechnologyStack from './components/TechnologyStack.vue'
import Contact from './components/Contact.vue'

export default [
    {
      path:'/AboutMe',
      component:AboutMe
    },
    {
      path:'/Portfolio',
      component:Portfolio
    },
    {
      path:'/TechnologyStack',
      component:TechnologyStack
    },
    {
      path:'/Contact',
      component:Contact
    },
    { 
      path: '/', 
      redirect: '/AboutMe' 
    },
    { 
      path: '*', 
      redirect: '/AboutMe' 
    }
  ];

