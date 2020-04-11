/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createShop = /* GraphQL */ `
  mutation CreateShop(
    $input: CreateShopInput!
    $condition: ModelShopConditionInput
  ) {
    createShop(input: $input, condition: $condition) {
      id
      name
      shortName
      key
      description
      zipcode
      prefecture
      city
      address
      otherAddress
      tel
      email
      receptionHours
      deliveryHours
      close
      payments
      url
      map
      status
      owner
    }
  }
`;
export const updateShop = /* GraphQL */ `
  mutation UpdateShop(
    $input: UpdateShopInput!
    $condition: ModelShopConditionInput
  ) {
    updateShop(input: $input, condition: $condition) {
      id
      name
      shortName
      key
      description
      zipcode
      prefecture
      city
      address
      otherAddress
      tel
      email
      receptionHours
      deliveryHours
      close
      payments
      url
      map
      status
      owner
    }
  }
`;
export const deleteShop = /* GraphQL */ `
  mutation DeleteShop(
    $input: DeleteShopInput!
    $condition: ModelShopConditionInput
  ) {
    deleteShop(input: $input, condition: $condition) {
      id
      name
      shortName
      key
      description
      zipcode
      prefecture
      city
      address
      otherAddress
      tel
      email
      receptionHours
      deliveryHours
      close
      payments
      url
      map
      status
      owner
    }
  }
`;
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
      id
      key
      name
      price
      description
      owner
    }
  }
`;
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
      id
      key
      name
      price
      description
      owner
    }
  }
`;
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
      id
      key
      name
      price
      description
      owner
    }
  }
`;
export const createSideItem = /* GraphQL */ `
  mutation CreateSideItem(
    $input: CreateSideItemInput!
    $condition: ModelSideItemConditionInput
  ) {
    createSideItem(input: $input, condition: $condition) {
      id
      key
      name
      price
      description
      owner
    }
  }
`;
export const updateSideItem = /* GraphQL */ `
  mutation UpdateSideItem(
    $input: UpdateSideItemInput!
    $condition: ModelSideItemConditionInput
  ) {
    updateSideItem(input: $input, condition: $condition) {
      id
      key
      name
      price
      description
      owner
    }
  }
`;
export const deleteSideItem = /* GraphQL */ `
  mutation DeleteSideItem(
    $input: DeleteSideItemInput!
    $condition: ModelSideItemConditionInput
  ) {
    deleteSideItem(input: $input, condition: $condition) {
      id
      key
      name
      price
      description
      owner
    }
  }
`;
export const createNotice = /* GraphQL */ `
  mutation CreateNotice(
    $input: CreateNoticeInput!
    $condition: ModelNoticeConditionInput
  ) {
    createNotice(input: $input, condition: $condition) {
      id
      key
      title
      content
      owner
    }
  }
`;
export const updateNotice = /* GraphQL */ `
  mutation UpdateNotice(
    $input: UpdateNoticeInput!
    $condition: ModelNoticeConditionInput
  ) {
    updateNotice(input: $input, condition: $condition) {
      id
      key
      title
      content
      owner
    }
  }
`;
export const deleteNotice = /* GraphQL */ `
  mutation DeleteNotice(
    $input: DeleteNoticeInput!
    $condition: ModelNoticeConditionInput
  ) {
    deleteNotice(input: $input, condition: $condition) {
      id
      key
      title
      content
      owner
    }
  }
`;
