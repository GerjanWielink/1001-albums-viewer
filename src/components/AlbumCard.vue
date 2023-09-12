<script lang="ts" setup>
import { Card } from "@/components/index";
import type { AlbumType } from '@/data/list';

const { album } = defineProps<{album: AlbumType}>()
const { title, artist, summary, imgUrl, avg_rating, nr_of_votes, genres } = album;

</script>

<template>
  <Card class="album-card">
    <div class="cover">
      <img :src="imgUrl">
    </div>
    <div class="album-details">
      <div class="header">
        <div class="title">
          <b>{{ artist }}</b>
          <p>
            {{ title }}
          </p>
          <p class="rating">
            {{ avg_rating }} out of {{ nr_of_votes }} votes
          </p>
          <hr>
        </div>

        <div class="genres">
          <span :key="genre" v-for="genre in genres">{{ genre }}</span>
        </div>
      </div>
    </div>
  </Card>
</template>

<style scoped>
.album-card {
  display: grid;
  grid-gap: var(--padding-md);
  grid-template-columns: 100px auto;
}

.cover > img {
  width: 100px;
  height: 100px;
}

hr {
  max-width: 150px;
}

.album-details > .header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.genres > span {
  margin-right: var(--padding-sm);
  background-color: var(--color-tertiary);
  color: var(--color-secondary);
  padding: 0.2px 6px;
  border-radius: 3px;
  display: inline-grid;
  place-content: center;
  font-size: 10px;
}

p.rating {
  color: var(--color-secondary);
  font-size: small;
}

</style>