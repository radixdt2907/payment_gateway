export default interface AddonsModel {
  name: string;
  addon_code: string;
  price_brackets: PriceBracketsModel[];
}

interface PriceBracketsModel {
  price: number;
}
