interface Address {
  city: string;
  pinCode: number | string;
  landmark: string;
  street: string;
}

export interface UserInterface {
  name: string;
  email: string;
  number: number | string;
  addresses: Address[];
  isRestaurantOwner: boolean;
  isAdmin: boolean;
  isSuspended: boolean;
  _id: string;
}
