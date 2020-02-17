import { database } from '~/lib/firebase';

export default function getProducts() {
    return new Promise((resolve, reject) => {
        database
            .ref('products')
            .once('value')
            .then(snapshot => resolve(snapshot.val()))
            .catch(err => reject(err));
    });
}
