<script lang="ts" setup />

<template>
  <div class="app">
    <header>
      <h1>1001 albums you must listen to before you die</h1>
    </header>

    <main>
      <div class="content">
        <slot />
      </div>
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
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .content {
    max-width: 900px;
  }
</style>