export default function() {

  var duration = 2000;

  this.transition(
    this.fromRoute('index'),
    this.toRoute('blog'),
    this.debug(),
    this.use('explode', {
      matchBy: '.header-link',
      use: ['fadeOut', { duration } ]
    }),
      this.debug()
  );
}