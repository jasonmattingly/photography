<template>
  <div>
    <Sidebar />
    <Gallery />
    <Photo />
  </div>
</template>

<script>
import Gallery from '@/components/Gallery';
import Photo from '@/components/Photo';
import Sidebar from '@/components/Sidebar';

export default {
  name: 'photo',
  components: {
    Gallery,
    Photo,
    Sidebar,
  },
};
</script>

