<template lang="html">
  <aside class="menu">
  <p>{{fourceMenu}}</p>
  <ul class="menu-list">
    <li v-for="(menu,index) in menuInfo">
    <a @click="selectMenu(menu.name,index)" :class="fourceMenu === menu.name ? 'is-active' : ''">{{ menu.name }}</a>
    <transition name="fade">
      <ul v-if="(fourceMenu === menu.name)&&(menu.child)">
        <li v-for="(secMenu,index) in menu.child" >
          <a @click="selectChild(secMenu.name)" :class="fourceChild === secMenu.name ? 'is-active' : ''">
            {{ secMenu.name }}
          </a>
          <transition name="fade">
             <ul v-if="(fourceChild === secMenu.name)&&(secMenu.child)">
                <li v-for="thirdMenu in secMenu.child" >
                  <a @click="selectThird(thirdMenu.name)" :class="fourceThird === thirdMenu.name ? 'is-active' : ''">{{ thirdMenu.name }}</a>
                </li>
             </ul>
          </transition>
        </li>
      </ul>
    </transition>

    </li>
  </ul>
</aside>
</template>

<script>
export default {
   name: 'menu',
   data() {
     return{
        menuInfo: [
                   {name:'Team Settings'},
                   {
                    name:'Manage Your Team',
                    child:[
                            {name:'子选项1'},
                            {
                              name:'子选项2',
                              child:[{name:'a'},{name:'b'},{name:'c'}]
                            },
                            {name:'子选项3'}
                          ],
                   },
                   {name:'Invitations'}
                  ],
        fourceMenu: '',
        fourceChild: '',
        fourceThird: ''
     }
   },
   methods:{
      selectMenu:function(menuname,index){
        this.fourceMenu = menuname
        this.fourceChild = ''
        this.fourceThird = ''
      },
      selectChild:function(menuname){
        this.fourceChild = menuname
        this.fourceThird = ''
      },
      selectThird:function(menuname){
        this.fourceThird = menuname
      },
   }
}
</script>

<style lang="css">
.fade-enter-active, .fade-leave-active {
  transition: opacity .1s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
