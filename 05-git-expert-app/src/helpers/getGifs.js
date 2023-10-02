
export const getGifs = async (categoria) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=ZmFOD8u5nINIlarCbA4aLqBDN28ZFZNa&q=${categoria}&limit=10`

	const response = await fetch(url);
	const { data = [] } = await response.json()

	const gifs = data.map(img => ({
		id: img.id,
		title: img.title,
		url: img.images.downsized_medium.url
	}))

	console.log("en el archivo getGif.js", gifs)

	return gifs;
}