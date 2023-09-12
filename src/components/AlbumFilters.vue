<script lang="ts" setup>
import {ref, watch} from "vue";

  const value = ref("")

  const emit = defineEmits(['change'])

  watch(value, (value) => {
    emit('change', value)
  })
</script>

<template>
  <input type="text" placeholder="search" v-model="value">
</template>