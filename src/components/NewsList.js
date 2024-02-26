import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Navbar from './Navbar'
// import { generateComment } from '../utils/bardAPI';
import axios from 'axios'

const NewsList = () => {
  	const [articles, setArticles] = useState([]);
	const [categories, setCategories] = useState([
	'World',
	'Politics',
	'Business',
	'Technology',
	]);

	  const [activeCategory, setActiveCategory] = useState('World');
	// const [topics, setTopics] = useState(['world', 'US', 'sports', 'Ukraine war', 'India', 'China', 'Tech'])

	useEffect(() => {
		const fetchArticles = async () => {
			try {
				// Assuming '/api' endpoint returns the expected data directly
				const response =  await fetch(`/api/news/${encodeURIComponent(activeCategory)}`);
				if (response.ok) {
					const data = await response.json();
					console.log(data.articles, "<<<<<data>>>>>")
					setArticles(data.articles);
				} else {
					console.log('Failed to fetch articles');
				}
			} catch (error) {
				console.log('Error:', error);
			}
		};
	
		fetchArticles();
	}, [activeCategory]);

	const handleCategoryChange = (category) => {
		setActiveCategory(category);
		// Perform any other logic or API calls based on the selected category
	};

	// console.log(topics, 'topics')
	return (
		<div>
			<Navbar 
			categories={categories}
			activeCategory={activeCategory}
			onCategoryChange={handleCategoryChange}
			/>
		<div className="news-list-container">
			{
				// articles.map((topic) => {
				// 	<Navbar item={topic} />
				// })
			}
			{
				articles.map((article) => (
					<NewsItem key={article._id} article={article} />
				))
			}
		</div>
		</div>
	);
};

export default NewsList;
