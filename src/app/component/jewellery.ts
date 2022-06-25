export interface jewellery{
    filter(arg0: (item: any) => boolean): any;

    id:number;
    name:string;
    category:string;
    price:number;
    discounted_price:number;
    units:number;
    rating:number;
    desc:{};
    img:string;
  
  }