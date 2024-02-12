export interface IProduct {
  id?: number ;
  Name: string;
  Price: number;
  RemainingQuantity: number;
  ImgUrl?: string;
  CategoryID:number;
  totalPriceOfSelectedQuatities? : number;
  selectedQuantitiesToBuy? :number;
  brand : string;
}
