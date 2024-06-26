import { Role } from './Enum';

export interface User {
    firstname: string,
    lastname: string,
    email: string,
    phoneNumber: string,
    age: number,
    areaOfConcentration: string,
    weight: number,
    height: number,
    role: Role.client | Role.trainer | Role.admin,
    gender: string,
}

export interface DbUser {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    phone_number: string,
    age: number,
    area_of_concentration: string,
    weight: number,
    height: number,
    plan_id: string,
    role: Role.client | Role.trainer | Role.admin,
    gender: string,
    password: string
}

export interface AreaOfConcentration {
    title: string,
    description: string
}

export interface DbAreaOfConcentration {
    id: number,
    title: string,
    description: string
}

export interface Subscription {
    durationMonths: number,
    description: string,
    price: number
}

export interface DbSubscription {
    id: number,
    duration_months: number,
    description: string,
    price: number
}

export interface Review {
    description: string,
    rating: number,
    reviewerId: number,
    reviewerType: Role.client | Role.trainer,
    reviewDate: string
}

export interface DbReview {
    id: number,
    description: string,
    rating: number,
    reviewer_id: number,
    reviewer_type: Role.client | Role.trainer,
    review_date: string
}