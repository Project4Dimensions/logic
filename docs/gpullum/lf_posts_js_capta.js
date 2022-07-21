/* JSLint edition 2022-07-02 beta (jslint.com)
 * Options
 *   Env…
 *     browser
 *     devel
 * Allow…
 *     long
 * Report: Warnings (0)
 *   There are no warnings.
 */

const lfPosts = [
    {
        "A_number": "360",
        "B_image": "https://chronicle-brightspot.s3.amazonaws.com/38/14/67b33560f566a2ef0db936cd317c/1500x500.jpg",
        "C_alt": "typewriter",
        "D_title": "How Writing to Deadlines Can Hold Your Life Together",
        "E_link": "https://www.chronicle.com/blogs/linguafranca/2018/12/18/how-writing-to-deadlines-can-hold-your-life-together/",
        "F_dateISO": "2018-12-18",
        "G_dateUK": "18 December 2018",
        "H_desc": "Geoff Pullum reflects on the surprising benefits of having to write a Lingua Franca post every week for seven years.",
        "I_page": "https://www.chronicle.com/blogs/linguafranca?p=1"
    },
    {
        "A_number": "359",
        "B_image": "https://chronicle-brightspot.s3.amazonaws.com/1f/0e/f1dcb82012b779dcdcb0b6b27b5c/orwell-360x450-0.jpg",
        "C_alt": "orwell",
        "D_title": "How Google's Autotype Contradicts Orwell's Advice",
        "E_link": "https://www.chronicle.com/blogs/linguafranca/2018/12/13/how-googles-autotype-contradicts-orwells-advice/",
        "F_dateISO": "2018-12-13",
        "G_dateUK": "13 December 2018",
        "H_desc": "To Geoff Pullum’s amusement, Gmail now offers phrases that are exactly the opposite of what the author of Nineteen Eighty-Four said writers should use.",
        "I_page": "https://www.chronicle.com/blogs/linguafranca?p=1"
    },
    {
        "A_number": "358",
        "B_image": "https://chronicle-brightspot.s3.amazonaws.com/42/6b/67307809e42f45c274f66e53921f/giovanni-battista-piranesi-the-drawbridge-google-art-project.jpg",
        "C_alt": "stairs",
        "D_title": "The Web Page That Cannot Exist",
        "E_link": "https://www.chronicle.com/blogs/linguafranca/2018/12/03/the-web-page-that-cannot-exist/",
        "F_dateISO": "2018-12-03",
        "G_dateUK": "3 December 2018",
        "H_desc": "A tiny error on a conference web page provides Geoff Pullum with a concrete example for teaching abstract concepts in philosophy.",
        "I_page": "https://www.chronicle.com/blogs/linguafranca?p=2"
    },
    {
        "A_number": "357",
        "B_image": "https://chronicle-brightspot.s3.amazonaws.com/27/31/40a904545b6462b3dca2fe574af9/brexit.jpg",
        "C_alt": "brexit",
        "D_title": "A Pocket Brexicon for Americans",
        "E_link": "https://www.chronicle.com/blogs/linguafranca/2018/11/26/a-pocket-brexicon-for-americans/",
        "F_dateISO": "2018-11-26",
        "G_dateUK": "26 November 2018",
        "H_desc": "Academics visiting Britain from the United States this holiday season will have trouble understanding some new words in the newspapers. Geoff Pullum has prepared a helpful Brexit glossary.",
        "I_page": "https://www.chronicle.com/blogs/linguafranca?p=2"
    },
    {
        "A_number": "356",
        "B_image": "",
        "C_alt": "no image",
        "D_title": "Blasphemy and the Strange World of Linguistic Crimes",
        "E_link": "https://www.chronicle.com/blogs/linguafranca/2018/11/07/blasphemy-and-the-strange-world-of-linguistic-crimes/",
        "F_dateISO": "2018-11-07",
        "G_dateUK": "7 November 2018",
        "H_desc": "The medieval crime of saying things that outrage the pious exists in the 21st century, says Geoff Pullum, making a “safe space” for religion written into the law in some lands.",
        "I_page": "https://www.chronicle.com/blogs/linguafranca?p=3"
    },
    {
        "A_number": "355",
        "B_image": "https://chronicle-brightspot.s3.amazonaws.com/13/37/6b5b083841e0d2e52bb5ad18c8f4/screen-shot-2018-10-27-at-11-07-13-am.png",
        "C_alt": "featherbeds",
        "D_title": "A Moment of Sympathy for the Old Fogeys and Snoots",
        "E_link": "https://www.chronicle.com/blogs/linguafranca/2018/10/28/a-moment-of-sympathy-for-the-old-fogeys-and-snoots/",
        "F_dateISO": "2018-10-28",
        "G_dateUK": "28 October 2018",
        "H_desc": "In the matter of “can not” vs. “cannot,” Geoff Pullum detects a flicker of fellow-feeling for the judgmental prescriptive usage pontificators of the world.",
        "I_page": "https://www.chronicle.com/blogs/linguafranca?p=4"
    },    {
        "A_number": "354",
        "B_image": "https://chronicle-brightspot.s3.amazonaws.com/29/89/dd4be933449e54a5043a38aab8b1/spaghetti-allo-scoglio.jpg",
        "C_alt": "spaghetti",
        "D_title": "Why Linguistics Matters",
        "E_link": "https://www.chronicle.com/blogs/linguafranca/2018/10/24/why-linguistics-matters/",
        "F_dateISO": "2018-10-24",
        "G_dateUK": "24 October 2018",
        "H_desc": "Geoff Pullum was asked to write a book about his field for a lay audience and publisher. Two favorable referee reports left him feeling alone and deprived of counsel, so he resorted to the judgment of that harshest but most biased of referees, the one inside his head.",
        "I_page": "https://www.chronicle.com/blogs/linguafranca?p=4"
    },
    {
        "A_number": "273",
        "B_image": "http://chronicle-brightspot.s3.amazonaws.com/f8/47/cccf90d0f2f6f15ed10b56546296/8d4613c8eea3bfee4d27a56b2543509b.jpg",
        "C_alt": "john cleese",
        "D_title": "Word-Processing Misery",
        "E_link": "https://www.chronicle.com/blogs/linguafranca/2017/03/13/word-processing-hell/",
        "F_dateISO": "2017-03-13",
        "G_dateUK": "13 March 2017",
        "H_desc": "Geoff Pullum bemoans the cruel fate that has dragged him away from linguistics and into realms like file conversion software.",
        "I_page": "https://www.chronicle.com/blogs/linguafranca?p=45"
    },
    {
        "A_number": "87",
        "B_image": "",
        "C_alt": "no image",
        "D_title": "Speech Recognition vs. Language Processing",
        "E_link": "https://www.chronicle.com/blogs/linguafranca/2013/05/22/speech-recognition-vs-language-processing/",
        "F_dateISO": "2013-05-22",
        "G_dateUK": "22 May 2013",
        "H_desc": "Voice interaction with machines has been brought up to a useful level not so much by accurate identification of speech, says Geoff Pullum, but by structuring the space of possible conversations.",
        "I_page": "https://www.chronicle.com/blogs/linguafranca?p=139"
    },
    {
        "A_number": "86",
        "B_image": "http://www.blindfiveyearold.com/wp-content/uploads/2008/12/google-phrase-match-and-exact-match.png",
        "C_alt": "google",
        "D_title": "Keyword Search, Plus a Little Magic",
        "E_link": "https://www.chronicle.com/blogs/linguafranca/2013/05/12/keyword-search-plus-a-little-magic/",
        "F_dateISO": "2013-05-12",
        "G_dateUK": "12 May 2013",
        "H_desc": "Looking for keywords in files was dumb until the discovery of a magic additive that made it usable, Geoff Pullum explains.",
        "I_page": "https://www.chronicle.com/blogs/linguafranca?p=139"
    },
    {
        "A_number": "85",
        "B_image": "",
        "C_alt": "no image",
        "D_title": "Why Are We Still Waiting for Natural Language Processing?",
        "E_link": "https://www.chronicle.com/blogs/linguafranca/2013/05/08/natural-language-processing/",
        "F_dateISO": "2013-05-08",
        "G_dateUK": "8 May 2013",
        "H_desc": "Geoff Pullum says computer systems should be able to understand simple English questions--and answer them.",
        "I_page": "https://www.chronicle.com/blogs/linguafranca?p=140"
    },
    {
        "A_number": "84",
        "B_image": "https://creativeartsconsulting.files.wordpress.com/2012/04/slash-alt.jpg",
        "C_alt": "/{slash}",
        "D_title": "Being a Conjunction (slash Coordinator)",
        "E_link": "https://www.chronicle.com/blogs/linguafranca/2013/04/29/being-a-coordinator/",
        "F_dateISO": "2013-04-29",
        "G_dateUK": "29 April 2013",
        "H_desc": "Yes, a new word (“slash”) has joined the category of “conjunctions”; but, Geoff Pullum argues, that category should be renamed.",
        "I_page": "https://www.chronicle.com/blogs/linguafranca?p=140"
    },
    {
        "A_number": "83",
        "B_image": "",
        "C_alt": "no image",
        "D_title": "We Do Not Seek to Rule",
        "E_link": "https://www.chronicle.com/blogs/linguafranca/2013/04/25/we-do-not-seek-to-rule/",
        "F_dateISO": "2013-04-25",
        "G_dateUK": "25 April 2013",
        "H_desc": "",
        "I_page": "https://www.chronicle.com/blogs/linguafranca?p=141"
    },
    {
        "A_number": "82",
        "B_image": "",
        "C_alt": "no image",
        "D_title": "King Jong-un",
        "E_link": "https://www.chronicle.com/blogs/linguafranca/2013/04/16/king-jong-un/",
        "F_dateISO": "2013-04-16",
        "G_dateUK": "16 April 2013",
        "H_desc": "",
        "I_page": "https://www.chronicle.com/blogs/linguafranca?p=141"
    },
    {
        "A_number": "81",
        "B_image": "https://chronicle-brightspot.s3.amazonaws.com/e8/3d/29bc4663ae449208a1d74a593b92/images.jpg",
        "C_alt": "running dog",
        "D_title": "Orwell and the Not Unblack Dog",
        "E_link": "https://www.chronicle.com/blogs/linguafranca/2013/04/07/orwell-and-the-not-unblack-dog/",
        "F_dateISO": "2013-04-07",
        "G_dateUK": "7 April 2013",
        "H_desc": "Geoff Pullum explains one of his reasons for seeing George Orwell’s “Politics and the English Language” as not just silly but intellectually dishonest.",
        "I_page": "https://www.chronicle.com/blogs/linguafranca?p=142"
    },
    {
        "A_number": "80",
        "B_image": "https://chronicle-brightspot.s3.amazonaws.com/66/9b/9f5c9e0b1ea11318180a733c9b8a/blogtagcloud.jpg",
        "C_alt": "words art",
        "D_title": "Elimination of the Fittest",
        "E_link": "https://www.chronicle.com/blogs/linguafranca/2013/04/03/elimination-of-the-fittest/",
        "F_dateISO": "2013-04-03",
        "G_dateUK": "3 April 2013",
        "H_desc": "Why, asks Geoff Pullum, does anybody take seriously George Orwell’s famous recommendation to avoid the phrases that figure most frequently in current writing?",
        "I_page": "https://www.chronicle.com/blogs/linguafranca?p=142"
    },
    {
        "A_number": "79",
        "B_image": "",
        "C_alt": "no image",
        "D_title": "Fair Comment and Privileged Occasions",
        "E_link": "https://www.chronicle.com/blogs/linguafranca/2013/03/25/fair-comment-and-privileged-occasions/",
        "F_dateISO": "2013-03-25",
        "G_dateUK": "25 March 2013",
        "H_desc": "Even under an extraordinarily plaintiff-friendly legal system, says Geoff Pullum, surely a librarian should not have been deemed vulnerable to a libel suit for comments on book quality?",
        "I_page": "https://www.chronicle.com/blogs/linguafranca?p=143"
    },
    {
        "A_number": "78",
        "B_image": "https://news.bbcimg.co.uk/media/images/66407000/jpg/_66407525_66407524.jpg",
        "C_alt": "street name",
        "D_title": "Being an Apostrophe",
        "E_link": "https://www.chronicle.com/blogs/linguafranca/2013/03/21/being-an-apostrophe/",
        "F_dateISO": "2013-03-21",
        "G_dateUK": "21 March 2013",
        "H_desc": "A local government council that proposed dropping apostrophes from street-name signs faced fury from the guardians of punctuation. The guardians are mistaken, says Geoff Pullum.",
        "I_page": "https://www.chronicle.com/blogs/linguafranca?p=143"
    },
    {
        "A_number": "77",
        "B_image": "http://chronicle-brightspot.s3.amazonaws.com/b9/91%2Ffbb02b435012190df1302d8fc1bd/thierry-ph45-qrs.jpg",
        "C_alt": "quite right",
        "D_title": "Quite",
        "E_link": "https://www.chronicle.com/blogs/linguafranca/2013/03/12/quite/",
        "F_dateISO": "2013-03-12",
        "G_dateUK": "12 March 2013",
        "H_desc": "The maligned adverb “quite” seems to have two opposite meanings, some people say. Not true, Geoff Pullum explains.",
        "I_page": "https://www.chronicle.com/blogs/linguafranca?p=144"
    },
    {
        "A_number": "76",
        "B_image": "",
        "C_alt": "no image",
        "D_title": "",
        "E_link": "",
        "F_dateISO": "2013-03-03",
        "G_dateUK": "3 March 2013",
        "H_desc": "",
        "I_page": "https://www.chronicle.com/blogs/linguafranca?p=144"
    }
];
