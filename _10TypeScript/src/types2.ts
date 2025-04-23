interface Employee {
  name: string;
  startDate: Date;
}

interface Manager {
  name: string;
  department: string;
}

type TeamLead = Employee & Manager; //type TeamLead = Employee |  Manager; => if we use the | operator in this then the operation of intersection will happen inventually

const teamLead: TeamLead = {
  name: "Ravi",
  startDate: new Date(),
  department: "SoftWare Engineer",
};

function check(teamLead: TeamLead) {
  console.log(teamLead.name);
  console.log(teamLead.startDate);
  console.log(teamLead.department);
}
check(teamLead);
