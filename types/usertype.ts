type User = {
    address: {
      address: string;
      city: string;
      coordinates: {
        // Assuming coordinates have numeric values, you can adjust the types accordingly
        latitude: number;
        longitude: number;
      };
      postalCode: string;
      state: string;
    };
    age: number;
    bank: {
      cardExpire: string;
      cardNumber: string;
      cardType: string;
      currency: string;
      iban: string;
    };
    birthDate: string; // Assuming date is represented as a string
    bloodGroup: string;
    company: {
      address: {
        // Assuming address is an object with street, city, state, etc.
        street: string;
        city: string;
        state: string;
        // Add other properties as needed
      };
      department: string;
      name: string;
      title: string;
    };
    domain: string;
    ein: string;
    email: string;
    eyeColor: string;
    firstName: string;
    gender: string;
    hair: {
      color: string;
      type: string;
    };
    height: number;
    id: number;
    image: string;
    ip: string;
    lastName: string;
    macAddress: string;
    maidenName: string;
    password: string;
    phone: string;
    ssn: string;
    university: string;
    userAgent: string;
    username: string;
    weight: number;
  };

  export default User;