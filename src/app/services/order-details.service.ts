import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails = [
    {
      id: 1,
      foodName: "Sanduiche Natural de Frango",
      foodDetails:"Sanduiche Natural de Frango",
      foodPrice: 200,
      foodImg: "https://cdn5.soreceitasfaceis.com/wp-content/uploads/2016/05/sanduiche_natural_de_frango.jpg"
    },
    {
      id: 2,
      foodName: "Pizza De Frango & Vegetais",
      foodDetails:"Cebola| Tomate|Frango | Milho verde, Queijo",
      foodPrice: 369,
      foodImg: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg"
    },
    {
      id: 3,
      foodName: "Hamburguer",
      foodDetails:"O Mais Gostoso",
      foodPrice: 149,
      foodImg: "https://classic.exame.com/wp-content/uploads/2016/09/size_960_16_9_hamburguer6.jpg?quality=70&strip=info&w=920"
    },
    {
      id: 4,
      foodName: "enrolado Frango & Vegetais",
      foodDetails:"O Mais Saboroso",
      foodPrice: 140,
      foodImg: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg"
    },
    {
      id: 5,
      foodName: "Hamburguer",
      foodDetails:"O Mais Gostoso",
      foodPrice: 149,
      foodImg: "https://classic.exame.com/wp-content/uploads/2016/09/size_960_16_9_hamburguer6.jpg?quality=70&strip=info&w=920"
    },
    {
      id: 6,
      foodName: "enrolado Frango & Vegetais",
      foodDetails:"O Mais Saboroso",
      foodPrice: 140,
      foodImg: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg"
    }


   
  ]

}
