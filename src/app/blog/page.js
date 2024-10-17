'use client';

import { useEffect, useState } from 'react';

export default function BlogPage(props) {
  const [blogs, setBlogs] = useState([]);
  const [blogIndex, setBlogIndex] = useState(0);

  function estimateReadingTime(fullHtml) {
    // Create a temporary DOM element to parse the full HTML string
    const tempElement = document.createElement('div');
    tempElement.innerHTML = fullHtml;

    // Get the text content of the temporary element
    const textContent = tempElement.innerText || tempElement.textContent;

    // Split the text content into words and filter out empty strings
    const words = textContent.trim().split(/\s+/);
    const wordCount = words.length;

    // Average reading speed in words per minute
    const averageReadingSpeed = 250; // Adjust this value as needed

    // Calculate reading time in minutes
    const readingTimeMinutes = wordCount / averageReadingSpeed;

    // Format the result
    const readingTime = Math.ceil(readingTimeMinutes); // Round up to the nearest minute

    return readingTime;
  }


  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('/api/blogs');
      const blogs = await response.json();

      setBlogs(blogs);
      setBlogIndex(0);

      let blog = blogs[0];
      console.log(blog);

      let create = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(blog.createdAt));
      let read = estimateReadingTime(JSON.parse(blog.description).html);
      let title = blog.title;
      props.setBlogInfo({ create, read, title })
    };

    fetchBlogs();
  }, []);

  return (
    <div className="w-full grid grid-cols-12">
      <div className="col-span-9 flex flex-col items-center bg-black text-white p-4">
        <div className="max-w-4xl w-full">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">
              We're thrilled to announce the launch of our most ambitious community initiative yet – the Odyssey.
            </h1>
            <p className="mb-4">
              This isn't just a competition; it's a grand celebration of our dedicated community of Synesxi. We're offering a staggering $4000 in prizes, making this our most significant giveaway to date. With three weekly competitions and a grand leaderboard for the ultimate monthly prize, the Odyssey is set to be an exhilarating ride.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              The Weekly Competitions: A Test of Skill and Strategy
            </h2>
            <p className="mb-4">
              Each week of the Odyssey will bring a new competition, each with its own unique challenges and rewards. Whether it's creating memes, engaging with our socials or sharing a current crypto news story, each competition will offer a new and exciting way to engage with the community. There will be three weekly competitions: Contentious, Hot News Weekly & AMA Hangouts. Submitting your entry alone will earn XP and enter you into a draw to win EHX tokens, whilst the winner will also win $100.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              The Leaderboard: The Ultimate Showdown
            </h2>
            <p className="mb-4">
              Throughout the month, your XP from each competition will accumulate on the leaderboard. The more active you are, the more XP you earn, and the higher you climb. At the end of the month, the top five participants will share the grand prize, with a further five participants earning prizes through a raffle.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Key Information:</h3>
            <ul className="list-disc list-inside">
              <li>Start date: 19th July</li>
              <li>End date: 17th August</li>
              <li>Requirements: Complete Zealy quests (see below for more info)</li>
              <li>Prize pool: $4000</li>
              <li>Raffle entry: Anyone that has at least 5000 XP</li>
              <li>Winners will be announced on Telegram & Discord</li>
            </ul>
          </div>

          <div className="mb-8">
            <img
              src="path/to/your/image.jpg"
              alt="User Interface Designed with you in Mind"
              className="w-full mb-8 rounded"
            />
            <h2 className="text-2xl font-bold mb-4">Zealy Quests: A New Frontier in Crypto Competitions</h2>
            <p className="mb-4">
              We're utilizing Zealy's innovative web3 quest model for this competition. Zealy's platform provides a seamless and engaging experience, allowing you to easily enter competitions, earn XP, and watch your progress as you ascend the leaderboard.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Understanding Zealy Quests</h3>
            <ul className="list-disc list-inside">
              <li>Registration: The first step is to sign up on Zealy's platform by connecting your crypto wallet or via email then head to our page and complete a quest (eg: Follow Twitter) <a href="https://zealy.io/c/synesxi/questboard" className="text-blue-400">https://zealy.io/c/synesxi/questboard</a></li>
              <li>Entering Competitions: Each week, new competitions will open automatically. To enter, simply click on the competition and follow the instructions to submit your entry.</li>
              <li>Earning XP: Simply submitting your competition entry earns you XP (Experience Points). However, winners will also earn bonus XP as will some raffle winners for each competition. There are also other ways to earn extra XP, including inviting friends and following socials.</li>
              <li>Climbing the Leaderboard: Your XP is automatically added to your profile on the leaderboard. Some quests require a manual review so you may have to wait an hour or two for your newly acquired XP to update.</li>
              <li>Winning Prizes: The prize distribution operates on two levels. Every week, winners are selected from individual competitions and awarded prizes accordingly. As we reach the culmination of the month, the grand spectacle unfolds with the participant at the summit of the leaderboard claiming the grand prize. The excitement, thus, is not only weekly, but builds up to a monthly crescendo.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Tips and Strategies: Your Roadmap to Victory</h3>
            <p className="mb-4">
              Succeeding in the Odyssey isn't just about skill; it's also about strategy. Here are some tips to help you maximize your chances of winning:
            </p>
            <ul className="list-disc list-inside">
              <li><strong>Stay Active:</strong> The more competitions you enter, the more XP you earn. Make sure to participate in every competition to maximize your XP.</li>
              <li><strong>Engage with the Community:</strong> The community is a valuable resource. Engage with other participants, share strategies, and learn from each other.</li>
              <li><strong>Stay Informed:</strong> Stay motivated throughout the month, and remember that every bit of XP brings you closer to the grand prize.</li>
            </ul>
            <p className="mb-4">
              Have Fun! Most importantly, have fun! The Eterna Odyssey is a celebration of our community. Enjoy the journey, and the prize will follow.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">The Call to Adventure: Are You Ready?</h3>
            <p className="mb-4">
              We're incredibly excited about the Odyssey and we hope you are too. This is a chance to showcase your skills, compete with fellow Synesxi, and win amazing prizes. So gear up, get ready, and let's make this the most exciting event in Synesxi's history!
            </p>
            <p className="mb-4">
              Synesxi, it is time to rise to the challenge. Let the Odyssey begin!
            </p>
            <p className="mb-4">
              Links:
            </p>
            <ul className="list-disc list-inside">
              <li><a href="https://zealy.io/c/synesxi/questboard" className="text-blue-400">Zealy: https://zealy.io/c/synesxi/questboard</a></li>
              <li><a href="https://t.me/synesxi" className="text-blue-400">Telegram: https://t.me/synesxi</a></li>
              <li><a href="https://twitter.com/Helena_Hybrid" className="text-blue-400">Twitter: https://twitter.com/Helena_Hybrid</a></li>
            </ul>
          </div>
        </div>
        {/* <div className="max-w-4xl w-full">
          {blogs[blogIndex] && <iframe
            style={{width: "100%", height: "500px"}}
            sandbox
            srcdoc={JSON.parse(blogs[blogIndex].description).html}
          >
          </iframe>}
        </div> */}
      </div>

      <div className="col-span-3">
        <div className="w-full max-w-xs bg-blue-600 p-4 rounded-lg mb-8">
          <h3 className="text-xl font-bold mb-4">Get Synesxi news first</h3>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="E-mail address"
              className="p-2 mb-4 rounded"
            />
            <button type="submit" className="bg-black text-white p-2 rounded">
              Sign up
            </button>
            <label className="flex items-center mt-2">
              <input type="checkbox" className="mr-2" />
              I'm okay getting e-mails and having that activity tracked to
              improve my experience.
            </label>
          </form>
        </div>

        <div className="w-full max-w-xs">
          <h3 className="text-xl font-bold mb-4">You may also like:</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <img
              src="path/to/image.jpg"
              alt="Synesxi's Epic Extravaganza"
              className="w-full mb-4 rounded"
            />
            <p className="text-sm text-gray-400 mb-2">
              July 18, 2023 • 6 min read
            </p>
            <h4 className="text-lg font-bold mb-2">
              Synesxi's Epic Extravaganza: Your Chance to Win from a $4000 Prize
              Pool!
            </h4>
            <p className="mb-4">
              We're thrilled to announce the launch of our most ambitious
              community initiative yet – the Eterna Odyssey. This...
            </p>
            <a href="#" className="text-blue-400">
              Learn more
            </a>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg mt-8">
            <p className="text-sm text-gray-400 mb-2">
              July 11, 2023 • 4 min read
            </p>
            <h4 className="text-lg font-bold mb-2">
              Using Sentiment Analysis to Predict Cryptocurrency Market Trends
            </h4>
            <p className="mb-4">
              TL;DR: Sentiment analysis is a powerful tool for predicting cryptocurrency market trends by analyzing the collective sentiment expressed...
            </p>
            <a href="#" className="text-blue-400">
              Learn more
            </a>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg mt-8">
            <p className="text-sm text-gray-400 mb-2">
              July 11, 2023 • 4 min read
            </p>
            <h4 className="text-lg font-bold mb-2">
              The Importance of Cross-Chain Trading in Cryptocurrency
            </h4>
            <p className="mb-4">
              TL;DR: Cross-chain trading is a crucial element in the cryptocurrency world, offering enhanced liquidity, diversification of investment opportunities...
            </p>
            <a href="#" className="text-blue-400">
              Learn more
            </a>
          </div>
        </div>
        {/* {blogs.map((blog, index) => {
          return (
            <div key={index} className={index === blogIndex ? "w-full max-w-xs bg-blue-600 p-4 rounded-lg mb-8 text-white cursor-pointer}" : "w-full max-w-xs bg-blue-300 p-4 rounded-lg mb-8 text-white cursor-pointer"} onClick={() => setBlogIndex(index)}>
              {blog.title}
            </div>
          );
        })} */}
      </div>
    </div>
  );
}