export default {
  widgets: [
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
                  buildHookId: '60b00770b8436d324f439fd6',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ti5bcwdg',
                  apiId: '8e751e40-f60b-4ee7-a894-df89f9b939ca'
                },
                {
                  buildHookId: '60b007704bdf4d243d884b47',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-kzx9pi8p',
                  apiId: 'c1cbd1bc-f383-48cf-ae74-6de26c1fb78f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hsingh56/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-kzx9pi8p.netlify.app', category: 'apps'}
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
