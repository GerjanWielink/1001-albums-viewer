<script setup lang="ts">
import { albums } from '@/data/list';
import { AlbumCard, AlbumFilters } from "@/components";
import {computed, ref} from "vue";

const search = ref("")

const sortedAlbums = albums.sort((b, a) => (a.avg_rating || 0) - (b.avg_rating || 0))

const filteredAlbums = computed(() => {
  if(!search.value || search.value.length < 3) {
    return sortedAlbums.slice(0, 25)
  }

  return sortedAlbums.filter(({ artist, title }) => (
      artist.toLowerCase().includes(search.value) || title.toLowerCase().includes(search.value))
  )
})
</script>

<template>
  <div class="albums-view-page">
    <AlbumFilters v-model="search" />

    <div class="albums-list">
      <AlbumCard v-for="album in filteredAlbums" :key="album.path" :album="album"/>
    </div>
  </div>
</template>

<style scoped>
* {
  --columns: 1;
}

.albums-view-page {
  display: flex;
  flex-direction: column;
  gap: var(--padding-lg);
}

.albums-list {
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  gap: var(--padding-lg);
}
</style>