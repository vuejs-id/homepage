module.exports = {
  title: 'Vue.js Indonesia',
  description: 'Vue.js Indonesian Community',
  ga: 'UA-82114244-1',
  themeConfig: {
    search: false,
    lastUpdated: false,
    repo: 'vuejs-id',
    docsRepo: 'vuejs-id/homepage',
    docsDir: 'docs',
    editLinks: false,
    editLinkText: 'Improve this page',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Meetup', link: '/meetup/' },
      {
        text: 'Tutorial',
        items: [
          { text: 'Medium', link: 'https://medium.com/vuejs-id' },
          { text: 'Video Tutorial', link: '/video-tutorial/' }
        ]
      },
      {
        text: 'Komunitas',
        items: [
          { text: 'Facebook', link: 'https://www.facebook.com/groups/1675298779418239/' },
          { text: 'Telegram', link: 'https://t.me/vuejsindonesia' }
        ]
      },
    ]
  }
}
