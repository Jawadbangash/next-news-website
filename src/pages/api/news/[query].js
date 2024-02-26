export default async function handler(req, res) {
    // Capture the dynamic part of the path
    const { query } = req.query; // `query` now holds the dynamic value passed to /api/news/[query]

    const apiKey = process.env.NEWS_API_KEY; 
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&apiKey=${apiKey}`;

    try {
        const apiResponse = await fetch(url);
        if (!apiResponse.ok) throw new Error('Failed to fetch');
        
        const apiData = await apiResponse.json();
        res.status(200).json(apiData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}