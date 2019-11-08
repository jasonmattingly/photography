<template>
  <div>
    <Sidebar />
    <Gallery />
  </div>
</template>

<script>
import Gallery from '@/components/Gallery';
import Sidebar from '@/components/Sidebar';

export default {
  name: 'home',
  components: {
    Gallery,
    Sidebar,
  },
};
</script>
