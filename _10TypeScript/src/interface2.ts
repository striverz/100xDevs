interface User {
  firstName: string;
  lastName: string;
  age: number;
  address?: {
    city: string;
    pincode: number;
  };
}

let userA: User = {
  firstName: "Manikanta",
  lastName: "Korimilli",
  age: 21,
  address: {
    city: "Kakinada",
    pincode: 533435,
  },
};

let userB: User = {
  firstName: "Satish",
  lastName: "Medisettin",
  age: 24,
};
