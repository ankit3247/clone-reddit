const snoowrap = require('snoowrap');
function postLink(title, link, subreddit)
{
    const r = new snoowrap({
        userAgent: 'Fancy-Grape-2839',
        clientId: 'bE6Cs9n36o1OVtG2-1TrQg',
        clientSecret:'qSpeEMEXIjfxMHxHTqzLrYLEmHyWVA',
        username: 'TestUsername',
        password: 'TestPassword'

    });
    r.getSubreddit(subreddit).submitLink({
        title: title,
        url: link,
        sendReplies: true,

    });
}
postLink('Hii check out my newest video!',
'https://www.youtube.com/watch?v=qZXt1Aom3Cs&t=4417s','Vuejs');
console.log('Link Posted!');

    