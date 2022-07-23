import instance from './auth';

export async function postContact(contact) {
    const {data: result} = await instance.post('/contacts', contact);
    return result;
}

export async function deleteContact(id) {
    await instance.delete(`/contacts/${id}`);
    return id;
}

export async function fetchContactsList() {
    const { data } = await instance.get('/contacts');
    return data;
}