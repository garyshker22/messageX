const message = document.querySelector('textarea')

const submit = (message) => {

    let str = message.value;
    let totalW = str.split('').length;

    let messageWords = []
    
    for (var i=0; i < str.length; i++){
        messageWords[str[i]] = (messageWords[str[i]] || 0)+1;
    }
    const max = Object.keys(messageWords).reduce(function (accomulated, current) {
        return messageWords[current] >= messageWords[accomulated] ? current : accomulated;
    });
    const result = []
    Object.keys(messageWords).map((word) => {
        if (messageWords[word] === messageWords[max])
            result.push(word);
            console.log(`The most frequent word of the message is "${result}"`)
    })


    console.log(`The number of words in the message is ${totalW}`)
    
    
    // Random phrases and its pictures (represented as an array of objects)
    const randomPhrasesAndPictures = [
        {
            phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey",
            imageURL: "https://lh3.googleusercontent.com/proxy/zHYUtIFhvkGC3VGNULLKzWEZuxYZQBGWsAHlgqbAYgOQz5rnEuKbDsDLPuXGcE-BbZyUsktqm_LCEM6imgT8gBA8IhL4SZgjscJBU6X5I4UbD4xxi6_8nGgy-VSApCkSBsCVBTRS7PRe75V6Ed72N4dFdMYs4MaB6WE"
        },
        {
            phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore",
            imageURL: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg"
        },
        {
            phrase: "You are a wizard, Harry (c) Hagrid",
            imageURL: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg"
        }
    ]

    var rnd = Math.floor(Math.random() * randomPhrasesAndPictures.length);
    document.getElementById("phrase").innerHTML = randomPhrasesAndPictures[index].phrase;
    document.getElementById("picture").src = randomPhrasesAndPictures[index].imageURL;
}
