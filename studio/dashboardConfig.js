export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e1d44be6f100a28b4bc33c2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-idwdmua8',
                  apiId: '4623b690-1764-474f-97f1-a34337ed52e9'
                },
                {
                  buildHookId: '5e1d44be04a1eb4d797d5965',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-3pq6djkb',
                  apiId: 'a94f2fbb-41df-480f-9737-ac46c669bde5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wduntak/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-3pq6djkb.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
