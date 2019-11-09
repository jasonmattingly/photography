<template>
  <div class="gallery">
    <div class="gallery-panel"
         v-for="photo in photos"
         :key="photo.id">
      <router-link :to="`/photo/${photo.id}`">
        <img :src="require(`../assets/thumbnail-photos/${photo.filename}`)">
      </router-link>
    </div>
  </div>
</template>

<script>
import photos from '@/photos.json';

export default {
  name: 'Gallery',
  data() {
    return {
      gallery_name: 'south_africa_2019',
      photos,
    };
  },
  computed: {
    selectedGalleryPhotos() {
      return photos.filter(photo => photo.gallery_name.includes(this.gallery_name));
    },
  },
};
</script>
<style>
  .gallery {
    display: grid;
    /*grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));*/
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 5vw);
    grid-gap: .1rem;
    max-width: 80rem;
    margin-left: 290px;
    margin-right: 40px;
    margin-top: 40px;
    padding-left: 30px;
/*    margin: 5rem auto;*/
    /*padding: 0 5rem;*/
  }
  .gallery-panel img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.1rem;
  }

  .item_1 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
  }

</style>
