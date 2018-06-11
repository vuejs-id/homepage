<template>
  <div class="page">
    <div class="content">
      <h1>{{ $page.frontmatter.title }}</h1>
      <iframe
        :src="'https://www.youtube.com/embed/' + $page.frontmatter.youtube"
        width="100%"
        height="400"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
    </div>
    <div class="comment">
      <div id="disqus_thread"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const disqus_config = function () {
      this.page.identifier = this.$page.path;
    };
    (function() {
    var d = document, s = d.createElement('script');
    s.src = 'https://vuejs.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
  }
}
</script>

<style scoped>
  .comment {
    max-width: 740px;
    margin: 0 auto;
    padding: 2rem 2.5rem;
  }
</style>
