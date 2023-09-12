<template>
  <div>
    <slot />
  </div>
</template>

<style scoped>
  div {
    padding: var(--padding-md);
    background-color: var(--color-content-background);
    border-radius: var(--radius-md);
    box-shadow: var(--box-shadow-under);
  }
</style>