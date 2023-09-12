<script lang="ts" setup />

<template>
  <div class="app">
    <header>
      <h1>1001 albums you must listen to before you die</h1>
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
  header {
    padding: var(--padding-md);
    background-color: var(--color-content-background);
    box-shadow: var(--box-shadow-under);
  }

  main {
    padding: var(--padding-lg);
  }
</style>