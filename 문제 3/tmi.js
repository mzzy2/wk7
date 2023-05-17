const tmi = [
    {
        question: "키우는 고양이의 이름은?",
        answer: "나래",
    },
    {
        question: "민트 초코 호 vs 불호?",
        answer: "호",   
    },
    {
        question: "가장 좋아하는 색?",
        answer: "요즘은 초록색",   
    },
    {
        question: "퍼스널컬러?",
        answer: "여름 쿨톤 브라이트",   
    },
    {
        question: "교환학생으로 가는 나라는?",
        answer: "벨기에",   
    }
];

const question = document.getElementById("tmi").firstElementChild;
const answer = document.getElementById("tmi").lastElementChild;
const todaysTmi = tmi[Math.floor(Math.random() * tmi.length)];

question.innerText = todaysTmi.question;
answer.innerText = todaysTmi.answer;
