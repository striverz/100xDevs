interface UserC {
  name: string;
  age: number;
}

const userc: UserC = {
  name: "manikanta",
  age: 21,
};

userc.name = "Korimilli";

interface UserD {
  readonly name: string;
  age: number;
}

const userd: UserD = {
  name: "manikanta",
  age: 21,
};

//❌❌❌❌
// userd.name = "Korimilli"; //Cannot possible to change this one because of readOnly Property
