export const server = 'http://localhost:3000';
export const get_rival_dogs_url = server + '/dogs/rivals';
export function put_rival_dogs_url (dog) { return server + '/dogs/' + dog._id };
