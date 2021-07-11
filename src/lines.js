const lines = [
  {
    text: 'Be yourself; everyone else is already taken',
    author: 'Oscar Wilde',
  },
  {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: 'Albert Einstein',
  },
  {
    text: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: 'Bernard M. Baruch',
  },
  {
    text: 'You only live once, but if you do it right, once is enough.',
    author: 'Mae West',
  },
  {
    text: 'Be the change that you wish to see in the world.',
    author: 'Mahatma Gandhi',
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    author: 'Robert Frost',
  },
  {
    text: "If you tell the truth, you don't have to remember anything.",
    author: 'Mark Twain',
  },
  {
    text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: 'Maya Angelou',
  },
  {
    text: 'A friend is someone who knows all about you and still loves you.',
    author: 'Elbert Hubbard',
  },
  {
    text: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
    author: 'Mahatma Gandhi',
  },
  {
    text: 'Without music, life would be a mistake.',
    author: 'Friedrich Nietzsche',
  },
  {
    text: "It always seems impossible until it's done",
    author: 'Nelson Mandela',
  },
  {
    text: 'All our dreams can come true, if we have the courage to pursue them.',
    author: 'Walt Disney',
  },
  {
    text: 'The secret of getting ahead is getting started.',
    author: 'Mark Twain',
  },
  {
    text: 'It’s hard to beat a person who never gives up.',
    author: 'Babe Ruth',
  },
  {
    text: 'If people are doubting how far you can go, go so far that you can’t hear them anymore.',
    author: 'Michele Ruiz',
  },
  {
    text: 'Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.',
    author: 'Neil Gaiman',
  },
  {
    text: 'Do one thing every day that scares you.',
    author: 'Eleanor Roosevelt',
  },
  {
    text: 'Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.',
    author: 'Socrates',
  },
  {
    text: 'Happiness is not something ready made. It comes from your own actions.',
    author: 'Dalai Lama XIV',
  },
  {
    text: 'Whatever you are, be a good one.',
    author: 'Abraham Lincoln',
  },
  {
    text: 'The same boiling water that softens the potato hardens the egg. It’s what you’re made of. Not the circumstances.',
    author: 'unknown',
  },
  {
    text: 'If we have the attitude that it’s going to be a great day it usually is.',
    author: 'Catherine Pulsifier',
  },
  {
    text: 'Your passion is waiting for your courage to catch up.',
    author: 'Isabelle Lafleche',
  },
  {
    text: 'If something is important enough, even if the odds are stacked against you, you should still do it.',
    author: 'Elon Musk',
  },
  {
    text: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.',
    author: 'Aristotle',
  },
  {
    text: 'Some people want it to happen, some wish it would happen, others make it happen.',
    author: 'Michael Jordan',
  },
  {
    text: 'Great things are done by a series of small things brought together',
    author: 'Vincent Van Gogh',
  },
  {
    text: 'If you hire people just because they can do a job, they’ll work for your money. But if you hire people who believe what you believe, they’ll work for you with blood and sweat and tears.',
    author: 'Simon Sinek',
  },
  {
    text: 'The hard days are what make you stronger.',
    author: 'Aly Raisman',
  },
  {
    text: 'If you believe it’ll work out, you’ll see opportunities. If you don’t believe it’ll work out, you’ll see obstacles.',
    author: 'Wayne Dyer',
  },
  {
    text: 'You can waste your lives drawing lines. Or you can live your life crossing them.',
    author: 'Shonda Rhimes',
  },
  {
    text: 'In a gentle way, you can shake the world.',
    author: 'Mahatma Gandhi',
  },
  {
    text: 'If opportunity doesn’t knock, build a door.',
    author: 'Kurt Cobain',
  },
  {
    text: 'Work hard in silence, let your success be the noise.',
    author: 'Frank Ocean',
  },
  {
    text: 'Hard work beats talent when talent doesn’t work hard.',
    author: 'Tim Notke',
  },
  {
    text: 'The only difference between ordinary and extraordinary is that little extra.',
    author: 'Jimmy Johnson',
  },
  {
    text: 'The best way to appreciate your job is to imagine yourself without one.',
    author: 'Oscar Wilde',
  },
  {
    text: 'Unsuccessful people make their decisions based on their current situations. Successful people make their decisions based on where they want to be.',
    author: 'Benjamin Hardy',
  },
  {
    text: 'Never stop doing your best just because someone doesn’t give you credit.',
    author: 'Kamari aka Lyrikal',
  },
  {
    text: 'Work hard, be kind, and amazing things will happen.',
    author: 'Conan O’Brien',
  },
  {
    text: 'Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.',
    author: 'Earl Nightingale',
  },
  {
    text: 'If you cannot do great things, do small things in a great way.',
    author: 'Napoleon Hill',
  },
  {
    text: 'Nothing will work unless you do.',
    author: 'Maya Angelou',
  },
  {
    text: 'Don’t limit your challenges. Challenge your limits.',
    author: 'Unknown',
  },
  {
    text: 'Start where you are. Use what you have. Do what you can.',
    author: 'Arthur Ashe',
  },
  {
    text: 'Keep your face always toward the sunshine – and shadows will fall behind you.',
    author: 'Walt Whitman',
  },
  {
    text: 'Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.',
    author: 'Pele',
  },
  {
    text: 'I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.',
    author: 'Muhammad Ali',
  },
  {
    text: 'Success is liking yourself, liking what you do, and liking how you do it.',
    author: 'Maya Angelou',
  },
  {
    text: 'If you obey all the rules, you miss all the fun.',
    author: 'Katharine Hepburn',
  },
  {
    text: 'You must do the thing you think you cannot do.',
    author: 'Eleanor Roosevelt',
  },
  {
    text: 'I never lose. Either I win or learn.',
    author: 'Nelson Mandela',
  },
  {
    text: 'Today is your opportunity to build the tomorrow you want.',
    author: 'Ken Poirot',
  },
  {
    text: 'You don’t need to see the whole staircase, just take the first step.',
    author: 'Martin Luther King Jr.',
  },
  {
    text: 'Be happy with what you have while working for what you want.',
    author: 'Helen Keller',
  },
  {
    text: 'I am thankful for all of those who said NO to me. It’s because of them I’m doing it myself.',
    author: 'Wayne W. Dyer',
  },
  {
    text: 'Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.',
    author: 'Rumi',
  },
  {
    text: 'A winner is a dreamer who never gives up.',
    author: 'Nelson Mandela',
  },
  {
    text: 'Oh yes, the past can hurt. But the way I see it, you can either run from it or learn from it.',
    author: 'The Lion King',
  },
  {
    text: 'No one has ever made a difference by being like everyone else.',
    author: 'The Greatest Showman',
  },
  {
    text: 'The best way to predict your future is to create it.',
    author: 'Abraham Lincoln',
  },
  {
    text: 'Don’t watch the clock; do what it does. Keep going.',
    author: 'Sam Levenson',
  },
  {
    text: 'Falling down is how we grow. Staying down is how we die.',
    author: 'Brian Vaszily',
  },
  {
    text: 'There may be people that have more talent than you, but there’s no excuse for anyone to work harder than you.',
    author: 'Derek Jeter',
  },
  {
    text: 'Always be careful when you follow the masses. Sometimes the m is silent.',
    author: 'Unknown',
  },
  {
    text: 'If you fall – I’ll be there.',
    author: 'Floor',
  },
  {
    text: 'If you think you’re too small to make a difference, try sleeping with a mosquito.',
    author: 'Dalai Lama',
  },
  {
    text: 'I have not failed. I’ve just found 10,000 ways that won’t work.',
    author: 'Thomas A. Edison',
  },
  {
    text: 'I really appreciate people who correct me, because without them, I might have been repeating mistakes for a long time.',
    author: ' Mufti Menk',
  },
  {
    text: 'If you can’t make a mistake you can’t make anything.',
    author: 'Marva Collin',
  },
  {
    text: 'A goal is a dream with a deadline.',
    author: 'Napoleon Hill',
  },
  {
    text: 'There are two rules for success. 1: Never reveal everything you know.',
    author: 'Roger H. Lincoln',
  },
  {
    text: 'The trouble is, you think you have time.',
    author: 'Buddha',
  },
  {
    text: 'The greatest gift you could give someone is your time. Because when you give your time, you are giving a portion of your life you can’t get back.',
    author: 'Unknown',
  },
  {
    text: 'You can’t let your failures define you. You have to let your failures teach you.',
    author: 'Barack Obama',
  },
  {
    text: 'A reader lives a thousand lives before he dies. The man who never reads lives only one.',
    author: 'George R.R. Martin',
  },
  {
    text: 'To learn a language is to have one more window from which to look at the world.',
    author: 'Chinese Proverb',
  },
  {
    text: 'You were born to win, but to be a winner, you must plan to win, prepare to win, and expect to win.',
    author: 'Zig Ziglar',
  },
  {
    text: 'Losers quit when they fail. Winners fail until they succeed.',
    author: 'Robert T. Kiyosaki',
  },
]

export default lines
