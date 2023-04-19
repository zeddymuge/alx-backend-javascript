/* eslint-disable import/named */
// eslint-disable-next-line import/named
import { signUpUser } from './4-user-promise';
import { uploadPhoto } from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((result) => result.map((res) => (
      {
        status: res.status,
        value: res.status === 'fulfilled' ? res.value : res.reason,
      }
    )));
}
