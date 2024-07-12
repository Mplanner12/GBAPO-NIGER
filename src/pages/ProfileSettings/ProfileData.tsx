type ProfileDataType = {
  FirstName: string;
  MiddleName: string;
  LastName: string;
  ID: string;
  PhoneNumber: string;
  Email: string;
  Role: string;
  UserName: string;
  Branch: string;
};

const userInfo: any = localStorage.getItem('userDetails');
// console.log(userInfo);
const firstName = userInfo?.firstname;
const lastName = userInfo?.lastname;
const ID = userInfo?.id;
const PhoneNumber = userInfo?.phone;
const Email = userInfo?.email;
const Branch = userInfo?.branch;
const Role = userInfo?.role;
const UserName = userInfo?.username;

const userData = {
  firstName: firstName,
  lastName: lastName,
  email: Email,
  phone: PhoneNumber,
  branch: Branch,
  role: Role,
  username: UserName,
  id: ID,
};

export const ItemData: ProfileDataType[] = [
  {
    FirstName: userData.firstName,
    MiddleName: '',
    LastName: userData.lastName,
    UserName: userData.username,
    Branch: userData.branch,
    Role: userData.role,
    ID: userData.id,
    PhoneNumber: userData.phone,
    Email: userData.email,
  },
  // ...
];
