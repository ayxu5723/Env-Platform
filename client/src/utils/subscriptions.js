import { gql } from '@apollo/client';

export const UPDATE_DONATION = gql`
  subscription updateDonation {
    donation {
      name
      donationAmount
    }
  }
`;