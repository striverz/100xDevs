interface UserGreat {
  name: string;
  age: number;
  email: string;
  password: string;
}
type UpdatedUser = Pick<UserGreat, "name" | "email">;

function makeOperation(updatedUser: UpdatedUser): void {
  console.log(`name ${updatedUser.name} mail ${updatedUser.email}`);
}

makeOperation({
  name: "Manikanta",
  email: "striverzarc@gmail.com",
});
