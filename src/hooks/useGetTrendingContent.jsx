import { useEffect, useState } from "react";
import { useContentStore } from "../store/content";
import axios from "axios";

const useGetTrendingContent = () => {
	const [trendingContent, setTrendingContent] = useState(null);
	const { contentType } = useContentStore();

	const apiUrl = import.meta.env.VITE_BACKEND_URL;

	useEffect(() => {
		const getTrendingContent = async () => {
			const res = await axios.get(apiUrl + `/api/v1/${contentType}/trending`);
			setTrendingContent(res.data.content);
		};

		getTrendingContent();
	}, [contentType, apiUrl]);

	return { trendingContent };
};
export default useGetTrendingContent;
