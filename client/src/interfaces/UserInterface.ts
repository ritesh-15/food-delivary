export interface UserInterface {
  name: string;
  email: string;
  number: number | string;
  addresses: {
    cordinates: {
      lat: number;
      lng: number;
    };
    placeName: string;
    state: string;
    country: string;
    locality: string;
    pinCode: number;
    district: string;
  }[];
  isRestaurantOwner: boolean;
  isAdmin: boolean;
  isSuspended: boolean;
  _id: string;
  createdAt: Date;
}
