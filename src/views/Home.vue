<template>
  <div class="home">
    <Title />
    <Point1 />
    <Point2 />
  </div>
</template>

<script>
// @ is an alias to /src
import Title from '@/components/Title.vue'
import Point1 from "../components/Point1";
import Point2 from "../components/Point2";

export default {
  name: 'Home',
  components: {
    Point1,
    Point2,
    Title
  }
}
</script>
