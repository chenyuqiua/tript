<template>
  <div class="browse">
    <favor-list-item :itemdate="itemDate"></favor-list-item>
  </div>
</template>

<script setup>
import useFavorStore from '@/stores/modules/favor';
import FavorListItem from './favor-list-item.vue';

const browseStore = useFavorStore()
const itemDate = browseStore?.browsetItem
</script>

<style lang="less" scoped>
</style>