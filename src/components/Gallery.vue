<template>
  <div>
<center><h1 class="header">south africa 2019<h1></center>
  <div class="gallery">

    <div class="gallery-panel"
         v-for="(photo, index) in photos"
         :class="`item_${index}`"
         :key="photo.id">
      <router-link :to="`/photo/${photo.id}`">
        <img
          :src="require(`../assets/thumbnail-photos/${photo.filename}`)"
        >
      </router-link>
    </div>
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
@import url('https://fonts.googleapis.com/css?family=Julius+Sans+One');
  .header {
    margin-left: 240px;
    margin-top: 40px;
    font-family: 'Julius Sans One';
  }
  .gallery {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 5vw);
    grid-gap: .5rem;
    max-width: 80rem;
    margin-left: 290px;
    margin-right: 50px;
    margin-top: 20px;
    /*margin-top: 10px;*/
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

  .item_0 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .item_1 {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
}
  .item_2 {
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 6;
}
  .item_3 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 6;
}
  .item_4 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 6;
    grid-row-end: 9;
}
  .item_5 {
    grid-column-start: 3;
    grid-column-end: 6;
    grid-row-start: 6;
    grid-row-end: 9;
}
  .item_6 {
    grid-column-start: 6;
    grid-column-end: 9;
    grid-row-start: 6;
    grid-row-end: 9;
}

</style>
