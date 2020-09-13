export class User {
  $key: string;
  userName: string;
  emailId: string;
  password: string;
  location: {
    lat: number;
    lon: number;
  };
  phoneNumber: string;
  createdOn: string;
  isAdmin: boolean;
  avatar: string;
}

export class UserDetail {
  $key: string;
  firstName: string;
  lastName: string;
  userName: string;
  emailId: string;
  address1: string;
  address2: string;
  country: string;
  state: string;
  zip: number;
}


export const MockUser:User = {
  $key: "1234",
  userName: "Haylee",
  emailId: "982545631@qq.com",
  password: "1234",
  location: {
    lat: 123,
    lon: 123,
  },
  phoneNumber: "15871398179",
  createdOn: "20191024",
  isAdmin: true,
  avatar: ""
}
export const MockUserDetail: UserDetail= {
  $key: "1234",
  firstName: "Haylee",
  lastName: "Haylee",
  userName: "Haylee",
  emailId: "982545631@qq.com",
  address1: "123",
  address2: "123",
  country: "China",
  state: "string",
  zip:1
}