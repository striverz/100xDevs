interface Address {
  city: string;
  pincode: number;
  houseNumber: number;
}

interface UserA {
  firstName: string;
  lastName: string;
  address: Address;
}

interface UserB {
  name: string;
  phoneNumber: number;
  address: Address;
}

let userOne: UserA = {
  firstName: "Manikanta",
  lastName: "Korimilli",
  address: {
    city: "Kakinada",
    pincode: 533435,
    houseNumber: 230,
  },
};
