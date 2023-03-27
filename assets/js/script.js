$(document).ready(function () {
    var quoteSource = [
        {
            quote: "Nothing can make our lives, or the lives of other people, more beautiful than perpetual kindness.",
            name: "Tolstoy"
        },
        {
            quote: "Believe you can and you're halfway there.",
            name: "Theodore Roosevelt"
        },
        {
            quote: "It does not matter how slowly you go as long as you do not stop.",
            name: "Confucius"
        },
        {
            quote: "Remember that sometimes not getting what you want is a wonderful stroke of luck.",
            name: "Dalai Lama"
        },
        {
            quote: "You cannot do kindness too soon, for you never know how soon it will be too late.",
            name: "Ralph Waldo Emerson"
        },
        {
            quote: "Be kind whenever possible. It is always possible.",
            name: "Dalai Lama"
        },
        {
            quote: "A part of kindness consists in loving people more than they deserve.",
            name: "Joseph Joubert"
        },
        {
            quote: "Remember, there’s no such thing as a small act of kindness. Every act creates a ripple with no logical end.",
            name: "Scott Adams"
        },
        {
            quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
            name: "Mother Teresa"
        },
        {
            quote: "Love and kindness are never wasted. They always make a difference. They bless the one who receives them, and they bless you, the giver.",
            name: "Barbara De Angelis"
        },
        {
            quote: "What we all have in common is an appreciation of kindness and compassion; all the religions have this. Love. We all lean towards love.",
            name: "Richard Gere"
        },
        {
            quote: "Be yourself; everyone else is already taken.",
            name: "Oscar Wilde"
        },
        {
            quote: "Human kindness has never weakened the stamina or softened the fiber of a free people.",
            name: "Franklin D. Roosevelt"
        },
        {
            quote: "Always remember that you are absolutely unique. Just like everyone else.",
            name: "Margaret Mead"
        },
        {
            quote: "Do not take life too seriously. You will never get out of it alive.",
            name: "Elbert Hubbard"
        },
        {
            quote: "Kindness can become its own motive. We are made kind by being kind.",
            name: "Eric Hoffer"
        },
        {
            quote: "When you callously ignore the suffering of others, you lose the capacity to share their happiness, too.",
            name: "Albert Schweitzer"
        },
        {
            quote: "Practice random kindness and senseless acts of beauty.",
            name: "Anne Herbert"
        },
        {
            quote: "A kind gesture can reach a wound that only compassion can heal",
            name: "Steve Maraboli"
        },
        {
            quote: "What wisdom can you find that is greater than kindness?",
            name: "Jean-Jacques Rousseau"
        },
        {
            quote: "Always be a little kinder than necessary.",
            name: "James M. Barrie"
        },
        {
            quote: "Always do whatever's next.",
            name: "George Carlin"
        },
        {
            quote: "A kind word is like a spring day..",
            name: "Russian proverb"
        },
        {
            quote: "Hapiness is not something ready made. It comes from your own actions.",
            name: "Dalai Lama"
        }

    ];


    $('#quoteButton').click(function (evt) {
        var quote = $('#quoteContainer p').text();
        var quoteGenius = $('#quoteGenius').text();
        evt.preventDefault();
        var sourceLength = quoteSource.length;
        var randomNumber = Math.floor(Math.random() * sourceLength);
        for (i = 0; i <= sourceLength; i += 1) {
            var newQuoteText = quoteSource[randomNumber].quote;
            var newQuoteGenius = quoteSource[randomNumber].name;
            var timeAnimation = 500;
            var quoteContainer = $('#quoteContainer');
            quoteContainer.fadeOut(timeAnimation, function () {
                quoteContainer.html('');
                quoteContainer.append('<p>' + newQuoteText + '</p>' + '<p id="quoteGenius">' + '-								' + newQuoteGenius + '</p>');
                quoteContainer.fadeIn(timeAnimation);
            });

            break;
        };

    });


});

