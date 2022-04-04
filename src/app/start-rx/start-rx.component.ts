import { Component, OnInit } from '@angular/core';
import { concatMap, from, interval, Observable, of, timer } from 'rxjs';

@Component({
  selector: 'app-start-rx',
  templateUrl: './start-rx.component.html',
  styleUrls: ['./start-rx.component.css']
})
export class StartRxComponent implements OnInit {

  constructor() {

     this.try1();

    // this.try4();

    // this.try2();
    // this.try3();
   }


   try3() {
     const source = [1,2,3];

     const myObs = of(source);
     //------- | + -1-2-3 |
     //3000 -> | + -1-2-3 |
    const o = timer(3000)
                .pipe(concatMap( () => source));

    o.subscribe( (x) => console.log(x));
    


   }



   try2() {
     const myPromise = new Promise( (resolve,reject) => {
       setTimeout(
          () => resolve('resolved!!!!!!!')
          ,2000)
     });

     //myPromise.then( (x) => console.log('my promise result is ',x))
     
     // הגדרת הזרם
     const observableFromPromise = from(myPromise);

     observableFromPromise.subscribe(
        (x) => console.log('hey from observable ' + x)
     )

   }




   try4() {
    // הגדרנו את הזרם 
    const myIntervalObservable = interval(1000);

    // נירשם לזרם
    myIntervalObservable
      .subscribe(
                  (myData) => {
                    console.log(myData)
                  })
      
   }


  try1() {
    /*
      Observable - הנצפה - עליו מסתכלים - זרם האירועים
      Observer = הצופה 
      Subscribe - ההרשמה
      aa על הזרם 
        next -  פריט מידע חדש מגיע
        error - תקלה קרתה
        complete -  הזרם נגמר
    */
   // הגדרתי את זרם המידע
   // הגדרתי מה יקרה לכל אחד מהצופים
    const myFirstObservable = new Observable( (observer) => {
      observer.next('m - פריט מידע ראשון');
      observer.next('m - פריט מידע שני');
      observer.error('bzzzzzz errr!!!!!!!');
      observer.complete();
    } );


    /*  1.....2.....|  */

    /* הצופה */ 
    const observer = (someData:any) => console.log(someData);

    /* תהליך ההרשמה */
    myFirstObservable
      .subscribe( {
        next: observer,
        error: (err) =>console.error(err),
        complete: () => console.log('completed!!!')
      }  )


  }


  ngOnInit(): void {
  }

}
