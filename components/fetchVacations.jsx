import { rawRequest, gql } from "graphql-request";

const fetchVacations = async () => {
  const endpoint =
    "https://graphql.contentful.com/content/v1/spaces/lrkho8l4xh4u/environments/master?access_token=Q8JjMb6KJ0qzBmKUDbumHZrlURDfHpUJiwF5Dw9sUQQ";
  const query = gql`
    query {
      vacationCollection {
        items {
          city
          description
          date
          imageCollection {
            items {
              url
            }
          }
        }
      }
    }
  `;

  const { data, status } = await rawRequest(endpoint, query);
  const fetchedVacations = data.vacationCollection.items;

  return {
    fetchedVacations,
    status,
  };
};

export default fetchVacations;
