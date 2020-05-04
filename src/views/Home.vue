<template>
  <div class="home">
    <Title />
    <Point2 />
  </div>
</template>

<script>
// @ is an alias to /src
import Title from '@/components/Title.vue'
import Point2 from "../components/Point2";

export default {
  name: 'Home',
  components: {
    Point2,
    Title
  }
}
</script>
