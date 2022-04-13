import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface IHeadProps {
  title?: string
  metaTitle?: string
  copyright?: string
  language?: string
  keywords?: string
  description?: string
  author?: string
  url?: string
  ogImage?: string
}

export type IDate = {
  day?: string | number
  month?: string
  year?: string | number
}

export interface IBookingColumn {
  from: IDate
  to: IDate
}

export interface IBookingFormDataCheckin {
  title?: string
  content?: string
}

export interface IBookingFormDataCheckOut {
  title?: string
  content?: string
}

export interface IBookingFormDataItems {
  icon?: string | IconProp
  content?: string
}

export interface IBookingFormDataRadios {
  label?: string
  id?: string
  name?: string
}

export interface IBookingFormData {
  title?: string
  type?: string
  checkin?: IBookingFormDataCheckin
  checkout?: IBookingFormDataCheckOut
  items?: IBookingFormDataItems[]
  name?: string
  options?: string[]
  radios?: IBookingFormDataRadios[]
}

export interface IBookingForm {
  data?: IBookingFormData[]
  from?: IDate
  to?: IDate
}
