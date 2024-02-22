const student1 = {
    name: "John Doe",
    age: 16,
    scores: {
        math: 20,
        english: 50,
    },
    city: "Kyiv"
}

function displayStudentInfo({scores: { math, english, music = 0 }, ...rest }) {
    console.log("hello," + rest.name);
    console.log(`Current age ${rest.age}`);

    console.log(`Your Math score is ${math}`);
    console.log(`Your English score is ${english}`);
    console.log(`Your Music score is ${music}`);

    console.log(rest);
    // const scoresKey = Object.keys(scores);
    // scoresKey.forEach((key) => {
    //     console.log(`Your ${key} score is ${scores[key]}`);
    // })
}

displayStudentInfo(student1);


// const {name: firstName, age} = student1;

// console.log(firstName, age)



const rgba = [250, 255, 255];

const [red, green, blue, bright = 0] = rgba;

console.log(bright);