<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle arrow-none d-flex justify-content-between align-items-center w-100"
      href="#"
      :class="menuItemActive('process', currentRouteName) && 'active'"
    >
      Process
    </a>
  </li>
</template>
<script lang="ts" setup>
import router from '@/router'
import type { MenuItemType } from '@/helpers/menu'
import { menuItemActive } from '@/components/topbar/AppMenu/getActiveClass'

import { BIconArrowRight } from 'bootstrap-icons-vue'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import portfolioList1Img from '@/assets/images/portfolio/list/01.jpg'
import portfolioList2Img from '@/assets/images/portfolio/list/02.jpg'

type PortfolioMenuDropdownProps = {
  menuItems: MenuItemType[]
}

defineProps<PortfolioMenuDropdownProps>()

const currentRouteName = router.currentRoute.value.name
</script>
