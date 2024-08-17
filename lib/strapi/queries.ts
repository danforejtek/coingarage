import { gql } from "graphql-request"

export const ARTICLES = gql`
  query Articles($page: Int, $pageSize: Int) {
    articles(sort: "date_created:desc", pagination: { page: $page, pageSize: $pageSize }) {
      data {
        id
        attributes {
          title
          perex
          image {
            data {
              attributes {
                url
              }
            }
          }
          date_created
          date_edited
          content
          createdAt
          updatedAt
          publishedAt
          locale
        }
      }
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
    }
  }
`
