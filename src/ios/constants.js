//URL base for server. May change based on environment
export const server = 'http://localhost:3000';

//URL to get two dogs to pick from
//NOTE: May be based on a calculation...
export const get_rival_dogs_url = server + '/dogs/rivals';

//URL to update a dog's properties
export function put_rival_dogs_url (dog) { return server + '/dogs/' + dog._id };

//URL to get the top ten dogs
export const get_leaders_dogs_url = server + '/dogs';
