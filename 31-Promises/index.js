const testPromise = new Promise((resolve, reject) => {
    console.log('new Promise work!');

    setTimeout(() => reject('error promise!'), 5000);
})

console.log(testPromise);

testPromise
    .then((value) => {
        console.log("Promise result", value);
    })
    .catch((error) => {
        console.log("Error promise", error);
    })


function uploadPhoto(photo) {
    return new Promise((resolve, reject) => {
        console.log(`Uploading ${photo.name}.....`);

        setTimeout(() => {
            const isDone = Math.random() > 0.5;

            if(isDone) {
                resolve(`Successfully uploaded ${photo.name}`);
            } else {
                reject(`Failed to upload ${photo.name}`);
            }
        }, 5000)
    })
}

const photo = {
    name: "Photo 1",
    url: 'url'
}

uploadPhoto(photo)
    .then((value) => {
        console.log(value);
    })
    .catch((value) => {
        console.log(value);
    })