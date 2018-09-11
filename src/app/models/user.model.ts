export class User {
  id: string;
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  company: Company;
  isCompanyAdmin: boolean;
}

export class Company {
  name: String;
}
