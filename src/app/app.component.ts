import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuth = false;

lastUpdate = new Promise((resolve, reject) => {

    const date = new Date();

    setTimeout(

      () => {

        resolve(date);

      }, 2000

    );

  });


post = [
{    
  title: 'Mon premier post',
  content: 'Alios autem dicere aiunt multo etiam inhumanius (quem locum breviter paulo ante perstrinxi) praesidii adiumentique causa, non benevolentiae neque caritatis, amicitias esse expetendas; itaque, ut quisque minimum firmitatis haberet minimumque virium, ita amicitias appetere maxime; ex eo fieri ut mulierculae magis amicitiarum praesidia quaerant quam viri et inopes quam opulenti et calamitosi quam ii qui putentur beati.',
  loveIts: '0',
  created_at: new Date()
},
    {    
  title: 'Mon deuxième post',
  content: 'Accedebant enim eius asperitati, ubi inminuta vel laesa amplitudo imperii dicebatur, et iracundae suspicionum quantitati proximorum cruentae blanditiae exaggerantium incidentia et dolere inpendio simulantium, si principis periclitetur vita, a cuius salute velut filo pendere statum orbis terrarum fictis vocibus exclamabant.',
  loveIts: '0',
  created_at: new Date()
},
    {    
  title: 'Encore un autre post',
  content: 'Quo cognito Constantius ultra mortalem modum exarsit ac nequo casu idem Gallus de futuris incertus agitare quaedam conducentia saluti suae per itinera conaretur, remoti sunt omnes de industria milites agentes in civitatibus perviis.',
  loveIts: '0',
  created_at: new Date()
}
];

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
onAllumer() {
    console.log("On allume tout");
    this.isAuth = true;
}
}
