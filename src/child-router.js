export class ChildRouter{
  heading = 'Child Router';

  configureRouter(config, router){
    config.map([
      { route: ['','welcome'], name: 'welcome',     moduleId: './welcome',      nav: true, title:'Welcome' },
      { route: 'flickr',       name: 'flickr',      moduleId: './flickr',       nav: true, title:'flickr' },
      { route: 'child-router', name: 'childRouter', moduleId: './child-router', nav: true, title:'Child Router' }
    ]);

    this.router = router;
  }
}

