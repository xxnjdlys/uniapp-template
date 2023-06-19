<script lang="ts" setup>
import type { UniPopupInstance } from '@uni-helper/uni-ui-types'
import { getDoc } from '@/api'

const { data } = getDoc()
const popup = ref<UniPopupInstance>()
function popOpen() {
  popup.value?.open?.('center')
}
</script>

<template>
  <view>详情页</view>
</template>

<route  lang="json">
{
"style": {
"navigationStyle": "default",
"navigationBarTitleText": "详情页面111"
}
}
</route>
