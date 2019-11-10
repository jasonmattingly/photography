<template>
  <div>
    <Sidebar />
    <Me />
  </div>
</template>

<script>
import Me from '@/components/Me';
import Sidebar from '@/components/Sidebar';

export default {
  name: 'home',
  components: {
    Me,
    Sidebar,
  },
};
</script>
