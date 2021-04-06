<template>
  <div class="image-wrapper">
    <loading-spinner />
  </div>
</template>

<script>
import LoadingSpinner from '../../icons/Spin'
export default {
  components: {
    'loading-spinner': LoadingSpinner,
  },
}
</script>

<style>
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.image-wrapper {
  animation: rotation 2s linear infinite;
}
</style>
