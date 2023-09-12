<script lang="ts" setup>
import { Card } from "@/components/index";
import type { AlbumType } from '@/data/list';

const { album } = defineProps<{album: AlbumType}>()
const { title, artist, summary, imgUrl, avg_rating, nr_of_votes, genres, path } = album;

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
            <a :href="`https://1001albumsgenerator.com${path}`">{{ title }}</a>
          </p>
          <p class="rating">
            {{ avg_rating }} out of {{ nr_of_votes }} votes
          </p>
        </div>

        <div class="genres">
          <span :key="genre" v-for="genre in genres">{{ genre }}</span>
        </div>
      </div>
      <hr>
      <p class="summary">
        {{ summary }}
      </p>
    </div>
  </Card>
</template>

<style scoped>
* {
  --art-size: 200px;
}


.cover {
  display: flex;
  align-items: center;
}

.album-card {
  display: grid;
  grid-gap: var(--padding-md);
  grid-template-columns: max-content auto;
}

.cover > img {
  width: var(--art-size);
  height: var(--art-size);
  transition: all ease-in-out 0.2s;
}

.cover > img:hover {
  width: calc(2 * var(--art-size));
  height: calc(2 * var(--art-size));
}

hr {
  max-width: 150px;
}

.album-details > .header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: var(--padding-sm);
}

.genres > span {
  margin-right: var(--padding-sm);
  background-color: var(--color-tertiary);
  color: var(--color-primary);
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

p.summary {
  color: var(--color-primary);
  font-size: small;
  overflow: auto;
  height: 100px;
}


@media(max-width: 600px) {
  .album-card {
    grid-template-columns: unset;
    grid-template-rows: max-content auto;
  }

  .cover > img:hover {
    width: var(--art-size);
    height: var(--art-size);
  }

  .album-details > .header {
    display: flex;
    flex-direction: column;
  }
}
</style>