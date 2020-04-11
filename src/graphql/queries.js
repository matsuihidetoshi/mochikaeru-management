/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getShop = /* GraphQL */ `
  query GetShop($id: ID!) {
    getShop(id: $id) {
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
export const listShops = /* GraphQL */ `
  query ListShops(
    $filter: ModelShopFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShops(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      key
      name
      price
      description
      owner
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        key
        name
        price
        description
        owner
      }
      nextToken
    }
  }
`;
export const getSideItem = /* GraphQL */ `
  query GetSideItem($id: ID!) {
    getSideItem(id: $id) {
      id
      key
      name
      price
      description
      owner
    }
  }
`;
export const listSideItems = /* GraphQL */ `
  query ListSideItems(
    $filter: ModelSideItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSideItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        key
        name
        price
        description
        owner
      }
      nextToken
    }
  }
`;
export const getNotice = /* GraphQL */ `
  query GetNotice($id: ID!) {
    getNotice(id: $id) {
      id
      key
      title
      content
      owner
    }
  }
`;
export const listNotices = /* GraphQL */ `
  query ListNotices(
    $filter: ModelNoticeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        key
        title
        content
        owner
      }
      nextToken
    }
  }
`;
