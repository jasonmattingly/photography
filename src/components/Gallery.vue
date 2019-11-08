<template>
  <div class="gallery">
    <div class="gallery-panel"
         v-for="photo in photos"
         :key="photo.id">
      <router-link :to="`/photo/${photo.id}`">
        <img :src="require(`../assets/thumbnail-photos/${photo.filename}`)">
      </router-link>
    </div>
    <div class="gallery-panel"
         v-for="photo in photos"
         :key="photo.id">
      <router-link :to="`/photo/${photo.id}`">
        <img :src="require(`../assets/thumbnail-photos/${photo.filename}`)">
      </router-link>
    </div>
    <div class="gallery-panel"
         v-for="photo in photos"
         :key="photo.id">
      <router-link :to="`/photo/${photo.id}`">
        <img :src="require(`../assets/thumbnail-photos/${photo.filename}`)">
      </router-link>
    </div>
    <div class="gallery-panel"
         v-for="photo in photos"
         :key="photo.id">
      <router-link :to="`/photo/${photo.id}`">
        <img :src="require(`../assets/thumbnail-photos/${photo.filename}`)">
      </router-link>
    </div>
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
      photos,
    };
  },
};
</script>

<style>
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    grid-gap: 1rem;
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
    height: 16vw;
    object-fit: cover;
    border-radius: 0.75rem;
  }
</style>
