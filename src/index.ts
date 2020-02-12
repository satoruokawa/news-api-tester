const NewsAPI = require('newsapi');
const dateFormat = require('dateformat');

let newsapi = new NewsAPI(process.env.KEY);
let now = new Date();
let yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);

newsapi.v2.everything({
    q: '人材派遣',
    from: dateFormat(yesterday, 'yyyy-mm-dd'),
    sortBy: 'relevancy'
}).then((response: any) => {
    let outputs = new Array<string>();
    response.articles.forEach((element: any) => {
        outputs.push(`${element.title} ${element.url}`)
    });
    console.log(outputs.slice(0, 5));
})