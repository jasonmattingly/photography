<template>
  <div>
    <Gallery />
    <Photo />
  </div>
</template>

<script>
import Gallery from '@/components/Gallery';
import Photo from '@/components/Photo';

export default {
  name: 'photo',
  components: {
    Gallery,
    Photo,
  },
};
</script>

