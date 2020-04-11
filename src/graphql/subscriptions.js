/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateShop = /* GraphQL */ `
  subscription OnCreateShop($owner: String) {
    onCreateShop(owner: $owner) {
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
export const onUpdateShop = /* GraphQL */ `
  subscription OnUpdateShop($owner: String) {
    onUpdateShop(owner: $owner) {
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
export const onDeleteShop = /* GraphQL */ `
  subscription OnDeleteShop($owner: String) {
    onDeleteShop(owner: $owner) {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem($owner: String) {
    onCreateItem(owner: $owner) {
      id
      key
      name
      price
      description
      owner
    }
  }
`;
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem($owner: String) {
    onUpdateItem(owner: $owner) {
      id
      key
      name
      price
      description
      owner
    }
  }
`;
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem($owner: String) {
    onDeleteItem(owner: $owner) {
      id
      key
      name
      price
      description
      owner
    }
  }
`;
export const onCreateSideItem = /* GraphQL */ `
  subscription OnCreateSideItem($owner: String) {
    onCreateSideItem(owner: $owner) {
      id
      key
      name
      price
      description
      owner
    }
  }
`;
export const onUpdateSideItem = /* GraphQL */ `
  subscription OnUpdateSideItem($owner: String) {
    onUpdateSideItem(owner: $owner) {
      id
      key
      name
      price
      description
      owner
    }
  }
`;
export const onDeleteSideItem = /* GraphQL */ `
  subscription OnDeleteSideItem($owner: String) {
    onDeleteSideItem(owner: $owner) {
      id
      key
      name
      price
      description
      owner
    }
  }
`;
export const onCreateNotice = /* GraphQL */ `
  subscription OnCreateNotice($owner: String) {
    onCreateNotice(owner: $owner) {
      id
      key
      title
      content
      owner
    }
  }
`;
export const onUpdateNotice = /* GraphQL */ `
  subscription OnUpdateNotice($owner: String) {
    onUpdateNotice(owner: $owner) {
      id
      key
      title
      content
      owner
    }
  }
`;
export const onDeleteNotice = /* GraphQL */ `
  subscription OnDeleteNotice($owner: String) {
    onDeleteNotice(owner: $owner) {
      id
      key
      title
      content
      owner
    }
  }
`;
