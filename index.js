let btn = document.querySelector("#click");
let input = document.querySelector("#inputed");
let month = document.querySelector("#jan");
let text = document.querySelector("#txt");

const obj = {
  january:
    "People born in the first month of the year are quite headstrong, and do not bend their will to the opinions of others. They have a strict code of conduct when it comes to their workplace and will not let anything come in the way of their ambitions. They are natural leaders, but are not very accommodative to the opinions of others. They make very good teachers.",
  february:
    "February babies are blessed with a wealth of creativity. They like intellectual discussions, but abhor shallow people. They are free in spirit and are quite bohemian in their outlook towards life. They love travelling and adventures and feel at home with nature. They are very loyal friends and caring partners.",
  march:
    "Having the same amount of creativity and imagination, these people are reserved and introspective. They like to keep to themselves and work in their own minds. They express their emotions with the help of art but generally prefer to be left alone. They are kind, gentle and compassionate on the outside, but are not particularly keen on revealing their emotions. They look for peace and quiet wherever they go, since noisy places disturb them.",
  april:
    "People born in April love to be the cynosure of all eyes. They are quite dominant and do not like being bossed around. They are straightforward, often unpleasantly so, and have no reservations about telling others what they think of them. Their charisma is magnetic and they attract many friends and foes. Impulsive, they seldom think before they act.",
  may: "Most talented musicians, actors and performers are born in May. They are socially active, and can make friends wherever they go. They need fun and intelligence in equal amounts. However, they are fickle and get bored very easily. They also change their opinions and desires frequently.",
  june: "These people are extremely sensitive and lovable. They are not very outspoken and this is what is admirable about them. They use their foresight to make creative opportunities for themselves. They do not wear their hearts on a sleeve but are more perceptive towards the feelings of others than most people. They are very romantic but also easily jealous.",
  july: "People born in July share most of their traits with the June babies but they have a more cheerful countenance. They are naturally adventurous, kind and sympathetic. They tend to be loners and sarcastic as well as a little eccentric. People born in July are susceptible to bouts of depression. They are amiable individuals but cannot be approached all the time. They are very temperamental and are easily hurt.",
  august:
    "The ones born in August are given to community service. They are kind-hearted who hold family values above all else. They are inspiring individuals who are philanthropic and spiritual. They have no financial problems since their hardworking nature earns them a lot of money.",
  september:
    "Intelligent, spiritual and melancholic- these words sum up a person born in September. They are always organized with their thoughts and actions and are generally geniuses in their own fields. They cannot deal with criticism, some of which is self-inflicted. Their self-censoring nature keeps them from achieving their goals at times. They look too deeply into situations, which is a problem.",
  october:
    "People born in October are Fortune's children, and have luck on their side at all times. They achieve their targets all the time. They are very difficult to argue with because they put up a relentless fight. If angered, they can become very vindictive. They are lovers of art and literature and quick to envy. They are authentic and honest and are not given to pretense.",
  november:
    "The penultimate month of the year brings empathy, positivity and clairvoyance in the lives of those born in it. They are sharp and unfathomable. Generosity is one of their strong traits. They are motivational, brave and driven, but do not like to be praised. They have no control over their emotions except anger- they have excellent anger management skills.",
  december:
    "Persons born in the last month of the year have a lot of luck in finding their perfect partner and the best jobs. They are very responsive towards their friends but this leads to the shunning of responsibilities. They are risk-takers, and put themselves in potential danger sometimes. They are not fond of rules and reservations and are highly patriotic.",
};

btn.addEventListener("click", () => {
  if (obj.hasOwnProperty(input.value) === true) {
    text.innerHTML = obj[input.value];
    month.innerHTML = input.value;
  } else {
    text.innerHTML = "Sorry, this kind of month doesn't exist, try again boss.";
    month.innerHTML = "Hello m*thF**K";
  }
});
