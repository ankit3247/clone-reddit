<template>
  <div class="hello mt-3">
    <ul class="list unstyled">
     <li v-for="post in posts" class="media m-3">
       
    <img class="mr-3" :src="post.data.thumbnail" alt="Generic palceholder image">
    
      <div class="media-body">
      <h5 class="mt-0 mb-1">{{post.data.title}}</h5>
      <p>
        <h3 class="text-danger">{{post.data.ups}}ups</h3>
        <p>created{{post.data.created}}</p>
        <span class="badge badge-secondary">{{post.data.num_crossposts}}comments</span>
        
      </p>
  </div>
  </li>
   </ul>
</div>
</template>

<script>

export default {
  name: 'Posts',
  data() {
    return {
      posts:[],
    };
  },
  mounted() {
    this.load();
  },
  methods:{
    load(){
      const url = 'https://www.reddit.com/r/DOG/.json';
      fetch(url)
          .then(response => response.json())
          .then((result) =>{
            console.log(result.data.children);
            this.posts = result.data.children;

          });

    },
    
  },
};
</script>


<style scoped>

</style>
