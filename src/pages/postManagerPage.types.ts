export interface Post {
  id: number
  title: string
  body: string
  tags: string[]
  reactions: {
    likes: number
    dislikes: number
  }
  views: number
  userId: number
  author?: User
}

export interface User {
  id: number
  username: string
  image: string
}

export interface UserDetail extends User {
  firstName: string
  lastName: string
  maidenName: string
  age: number
  gender: string
  email: string
  phone: string
  password: string
  birthDate: string
  bloodGroup: string
  height: number
  weight: number
  eyeColor: string
  hair: {
    color: string
    type: string
  }
  ip: string
  address: {
    address: string
    city: string
    state: string
    stateCode: string
    postalCode: string
    coordinates: {
      lat: number
      lng: number
    }
    country: string
  }
  macAddress: string
  university: string
  bank: {
    cardExpire: string
    cardNumber: string
    cardType: string
    currency: string
    iban: string
  }
  company: {
    department: string
    name: string
    title: string
    address: {
      address: string
      city: string
      state: string
      stateCode: string
      postalCode: string
      coordinates: {
        lat: number
        lng: number
      }
      country: string
    }
  }
  ein: string
  ssn: string
  userAgent: string
  crypto: {
    coin: string
    wallet: string
    network: string
  }
  role: string
}

export interface Tag {
  slug: string
  name: string
  url: string
}

export type TagResponse = Tag[]

export interface Comment {
  id: number
  body: string
  postId: number | null
  likes: number
  user: {
    id: number
    username: string
    fullName: string
  }
  userId?: number
}

export interface PostResponse {
  posts: Post[]
  total: number
  skip: number
  limit: number
}

export interface UserResponse {
  users: User[]
  total: number
  skip: number
  limit: number
}
