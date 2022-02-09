export default interface RootObject {
  message: string
  statusCode: number
  result: Result
}

interface Result {
  manufacturers: Manufacturer[]
  count: number
}

interface Manufacturer {
  meta: Meta
  contact: Contact
  role: Role
  _id: string
  uid: string
  password: string
  userType: string
  profileCompletion: number
  minOrderQty: number
  totalEmployee: number
  factorySize: number
  monthlyCapacity: number
  productGroups: ProductGroup[]
  segmentGroups: SegmentGroup[]
  targetGroups: SegmentGroup[]
  aboutUs: string
  isActive: boolean
  isVerified: boolean
  isDeleted: boolean
  addresses: Address[]
  partners: any[]
  compliances: any[]
  virtualTours: any[]
  createdAt: string
  updatedAt: string
}

interface Address {
  street: string
  city: string
  state: string
  country: string
  countryShortName: string
  zipCode: string
  _id: string
  uid?: string
}

interface SegmentGroup {
  uid: string
  name: string
  _id: string
}

interface ProductGroup {
  uid: string
  name: string
  percentage: number
  _id: string
}

interface Role {
  uid: string
  name: string
  userType: string
  privileges: Privilege[]
}

interface Privilege {
  feature: Feature
  action: Action
  _id: string
}

interface Action {
  uid: string
  name: string
  shortCode: string
}

interface Feature {
  uid: string
  name: string
}

interface Contact {
  countryCode: string
  phone: string
  isPhoneNumberVerified: boolean
  email: string
  isEmailVerified: boolean
}

interface Meta {
  logo: Logo
  companyName: string
  companyShortDesc: string
  banners: Banner[]
}

interface Banner {
  url: string
  name: string
  _id: string
}

interface Logo {
  url: string
  name: string
}
