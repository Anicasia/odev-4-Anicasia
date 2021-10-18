import { gql } from "@apollo/client";


export const GET_WEATHER_QUERY = gql`
  query getCityByName($name: String!) {
    getCityByName(name: $name) {
      name
      country
      weather {
        summary {
          description
          icon
        }
        temperature {
          actual
        }
        wind {
          speed
        }
        clouds {
          humidity
        }
      }
    }
  }
`;
