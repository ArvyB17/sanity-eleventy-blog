export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea6a67e03d6d4e7a3082bfc',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-jrymui1e',
                  apiId: '52a27f95-b414-446c-b79d-63e667a163f2'
                },
                {
                  buildHookId: '5ea6a67e4c181e1ec52d5334',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-9zcyq6y4',
                  apiId: 'ba90db0d-3399-4c34-afb2-ede5b42536f3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ArvyB17/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-9zcyq6y4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
