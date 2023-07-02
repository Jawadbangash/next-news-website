import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
// import { generateComment } from '../utils/bardAPI';
import axios from 'axios'

const NewsList = () => {
  const [articles, setArticles] = useState([]);

//   const handleClick = async () => {
//     const input = 'Your input text here'; // Provide your input text
//     const generatedComment = await generateComment(input);
//     setComment(generatedComment);
//   };

  useEffect(() => {
			console.log(process.env.NEXT_PUBLIC_API_KEY, process, process.env)
			//   async function fetchNews() {
			// 	try {
			// 	  const response = await axios.get(
			// 		'https://newsapi.org/v2/everything?q=tesla&from=2023-05-22&sortBy=publishedAt&apiKey=b7f111332ea241dd9d93a86228743d53'
			// 		// {
			// 		//   prompt: 'India and moodi',
			// 		//   max_tokens: 50,
			// 		//   temperature: 0.5,
			// 		//   api_key: ,
			// 		// }
			// 	  );
			// 		if (response.ok) {
			// 			const data = await response.json()
			// 			setArticles(data.articles)
			// 			console.log(articles, '<<<<<article>>>>>')
			// 		}  else {
			// 			console.log('Failed to fetch articles');
			// 		}
			// 	  // return response.data.choices[0].text;
			// 	} catch (error) {
			// 	  console.error('Error generating comment:', error);
			// 	  return null;
			// 	}
			//   }
		  
			//   fetchNews()

	const fetchArticles = async () => {

		// const options = {
		//     method: 'GET',
		//     url: 'https://api.newscatcherapi.com/v2/search',
		//     params: {q: 'Vietnam', lang: 'en', sort_by: 'relevancy', page: '1'},
		//     headers: {
		//       'x-api-key': ''
		//     }
		//   };

	  try {
		const response = await fetch(
			
		  'https://newsapi.org/v2/everything?q=ukraine&from=2023-06-23&sortBy=publishedAt&apiKey=' + 'b7f111332ea241dd9d93a86228743d53',
		//   {
		// 	headers: {
		// 	  'x-api-key': '', // Replace with your NewsCatcher API key
		// 	  'Accept': 'application/json',
		// 	},
		//   }
		);

		if (response.ok) {
		  const data = await response.json();
		  console.log(data.articles, "<<<<<data>>>>>" )
		  setArticles(data.articles);
		} else {
		  console.log('Failed to fetch articles');
		}
	  } catch (error) {
		console.log('Error:', error);
	  }
	};

	fetchArticles();


	//<<<<<<<1>>>>>>>>

	// bard api calls
	
	/*   async function generateAritcle() {
	  try {
		const response = await axios.post(
		  'https://api.bardlabs.com/v1/completions',
		  {
			prompt: 'India and moodi',
			max_tokens: 50,
			temperature: 0.5,
			api_key: ,
		  }
		);
	
		return response.data.choices[0].text;
	  } catch (error) {
		console.error('Error generating comment:', error);
		return null;
	  }
	}

	generateAritcle()
	*/

	//<<<<<<2>>>>>>>

	// api call for bard using fetch 

	// const makeArticles1 = async () => {

	//   try {
	// 	const response = await fetch(
			
	// 		'https://api.bardlabs.com/v1/completions',
	// 		{
	// 		  prompt: 'Intel to open a new chip facility in us',
	// 		  max_tokens: 50,
	// 		  temperature: 0.5,
	// 		  api_key: '',
	// 		}
	// 	)

	// 	if (response.ok) {
	// 	  const data = await response.json();
	// 	  setArticles(data.articles);
	// 	} else {
	// 	  console.log('Failed to fetch articles');
	// 	}
	//   } catch (error) {
	// 	console.log('Error:', error);
	//   }
	// };

	// makeArticles1();

  }, []);

  return (
	<div className="news-list-container">
	  {articles.map((article) => (
		<NewsItem key={article._id} article={article} />
	  ))}
	</div>
  );
};

export default NewsList;
