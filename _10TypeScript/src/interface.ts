function info1(user1: { firstName: string; lastName: string; age: number }) {
  console.log("Hello " + user1.firstName);
}

let user1: {
  firstName: string;
  lastName: string;
  age: number;
} = {
  firstName: "Manikanta",
  lastName: "Korimilli",
  age: 21,
};

info1(user1);
// There is a drawback for this following code which is repetative ness that can be neglected
// by using the concepts of the interface which is provided below

interface UserType {
  firstName: string;
  lastName: string;
  age: number;
}

function info(user2: UserType) {
  console.log("Hello " + user2.firstName);
}

let user2: UserType = {
  firstName: "Manikanta",
  lastName: "Korimilli",
  age: 21,
};

info(user2);
