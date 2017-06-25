
let duration = 1000;

export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('blog'),
    this.useAndReverse('explode', {

      // Liquid Fire matches elements on data-item-di
      // And will animate one to the other if the value matches.
      matchBy: '.test',
      use: ['flyTo', { duration } ]
    }, {

      // Everything that doesn't match uses crossFade
      use: ['crossFade', { duration }]
    })
  );
}
