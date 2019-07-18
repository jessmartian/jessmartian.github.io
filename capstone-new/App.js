import Intro from './components/Intro.js';
import Sidebar from './components/Sidebar.js';
import FincherScreen from './components/FincherScreen.js';
import WrightScreen from './components/WrightScreen.js';
import TarantinoScreen from './components/TarantinoScreen.js';

export default {
  name: 'app',
  template: `
    <div id="app">
      <div class="main">
        <div :class="[introScreen ? 'main-container--intro': '', 'main-container']">
          <template v-if="introScreen">
            <Intro></Intro>
          </template>
          <template v-else-if="fincherScreen">
            <FincherScreen></FincherScreen>
          </template>
          <template v-else-if="wrightScreen">
            <WrightScreen></WrightScreen>
          </template>
          <template v-else-if="tarantinoScreen">
            <TarantinoScreen></TarantinoScreen>
          </template>
        </div>
      </div>
      <div class="sidebar-container">
        <Sidebar v-on:item-clicked="sidebarNavigation"></Sidebar>
      </div>
    </div>
  `,
  components: {
    Intro,
    Sidebar,
    FincherScreen,
    WrightScreen,
    TarantinoScreen
  },
  data() {
    return {
      introScreen: true,
      fincherScreen: false,
      wrightScreen: false,
      tarantinoScreen: false,
    }
  },
  methods: {
    sidebarNavigation(sidebarItem) {
      console.log(sidebarItem)
      switch(sidebarItem) {
        case 'Intro':
          this.introScreen = !this.introScreen
          this.fincherScreen = false
          this.wrightScreen = false
          this.tarantinoScreen = false
          break
        case 'Fincher':
          this.fincherScreen = !this.fincherScreen
          this.introScreen = false
          this.wrightScreen = false
          this.tarantinoScreen = false
          break
        case 'Wright':
          this.wrightScreen = !this.wrightScreen
          this.introScreen = false
          this.fincherScreen = false
          this.tarantinoScreen = false
          break
        case 'Tarantino':
          this.tarantinoScreen = !this.tarantinoScreen
          this.introScreen = false
          this.fincherScreen = false
          this.wrightScreen = false
          break
      }
    },
  },
};
