// Original file: investAPI/src/docs/contracts/instruments.proto

export const CouponType = {
  COUPON_TYPE_UNSPECIFIED: 'COUPON_TYPE_UNSPECIFIED',
  COUPON_TYPE_CONSTANT: 'COUPON_TYPE_CONSTANT',
  COUPON_TYPE_FLOATING: 'COUPON_TYPE_FLOATING',
  COUPON_TYPE_DISCOUNT: 'COUPON_TYPE_DISCOUNT',
  COUPON_TYPE_MORTGAGE: 'COUPON_TYPE_MORTGAGE',
  COUPON_TYPE_FIX: 'COUPON_TYPE_FIX',
  COUPON_TYPE_VARIABLE: 'COUPON_TYPE_VARIABLE',
  COUPON_TYPE_OTHER: 'COUPON_TYPE_OTHER',
} as const;

export type CouponType =
  | 'COUPON_TYPE_UNSPECIFIED'
  | 0
  | 'COUPON_TYPE_CONSTANT'
  | 1
  | 'COUPON_TYPE_FLOATING'
  | 2
  | 'COUPON_TYPE_DISCOUNT'
  | 3
  | 'COUPON_TYPE_MORTGAGE'
  | 4
  | 'COUPON_TYPE_FIX'
  | 5
  | 'COUPON_TYPE_VARIABLE'
  | 6
  | 'COUPON_TYPE_OTHER'
  | 7

export type CouponType__Output = typeof CouponType[keyof typeof CouponType]
