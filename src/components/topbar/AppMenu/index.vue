<template>
  <b-collapse id="topbar-appmenu-collapse" class="navbar-collapse">
    <ul class="navbar-nav navbar-nav-scroll dropdown-hover" :class="ulClass">
      <HomePage :menuItems="menuItems[0].children!" />

      <AboutPage :menu-items="menuItems[1].children!" />

      <ServicesPage />

      <PortfolioMenuDropdown :menu-items="menuItems[2].children!" />
      <!-- <ProcessMenuDropdown :menu-items="menuItems[2].children!" /> -->
      <MegaMenuDropdown v-if="showMegaMenu" />
      <li v-if="showContactUs" class="nav-item">
        <router-link
          class="nav-link"
          :class="menuItemActive('contact', currentRouteName) && 'active'"
          :to="{ name: 'contact.v1' }"
        >
          Contact us
        </router-link>
      </li>
      <!-- <DemosMenu :menuItems="menuItems[0].children!" /> -->

      <!-- <li v-if="showDocs" class="nav-item">
        <a class="nav-link" href="https://mizzle-vue.vercel.app/docs/index.html" target="_blank">
          Docs
        </a>
      </li> -->
    </ul>
  </b-collapse>
</template>

<script lang="ts" setup>
import { getAppMenuItems, type MenuItemType } from '@/helpers/menu'
import HomePage from '@/components/topbar/AppMenu/HomePage.vue'
import AboutPage from '@/components/topbar/AppMenu/AboutPage.vue'
import MegaMenuDropdown from '@/components/topbar/AppMenu/MegaMenuDropdown.vue'
import PortfolioMenuDropdown from '@/components/topbar/AppMenu/PortfolioMenuDropdown.vue'
// import ProcessMenuDropdown from '@/components/topbar/AppMenu/ProcessMenuDropdown.vue'
import ServicesPage from '@/components/topbar/AppMenu/ServicesPage.vue'
// import DemosMenu from '@/components/topbar/AppMenu/DemosMenu.vue'
import { menuItemActive } from '@/components/topbar/AppMenu/getActiveClass'
import router from '@/router'
type AppMenuProps = {
  showMegaMenu?: boolean
  showResources?: boolean
  showContactUs?: boolean
  showDocs?: boolean
  ulClass?: string
}
const menuItems: MenuItemType[] = getAppMenuItems()

defineProps<AppMenuProps>()
const currentRouteName = router.currentRoute.value.name
</script>
