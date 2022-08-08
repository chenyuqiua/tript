<template>
  <div class="browse">
    <favor-list-item :itemdate="browseStore"></favor-list-item>
  </div>
</template>

<script setup>
import useFavorStore from '@/stores/modules/favor';
import { storeToRefs } from 'pinia';
import FavorListItem from './favor-list-item.vue';

const browseStore = useFavorStore()
const { browsetItem } = storeToRefs(browseStore)
</script>

<style lang="less" scoped>
</style>