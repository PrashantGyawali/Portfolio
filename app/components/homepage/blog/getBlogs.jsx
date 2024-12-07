import  * as cheerio from "cheerio"
import { blog_website } from "@/utils/data/blogData";
import { blog_image_count } from "@/utils/data/blogData";

export default async function getBlogs() {
	const res = await fetch(blog_website,{ next: { revalidate: 7200 } });
	if (!res.ok) {
		return [];
	}
    const html = await res.text();
    const blogs=[];
    const $ = cheerio.load(html);


    $(".blog-post").each((i, ele) => {
        const blogData={};
        blogData.title= $(ele).find("h3").text();
        blogData.published_at=$(ele).find(".blog-post-meta").text();
        blogData.description=$(ele).find("p").eq(1).text();
        blogData.url=blog_website+$(ele).find("a").attr("href").slice(2);
        blogData.comments_count=0;
        blogData.reading_time_minutes=0;
        blogData.public_reactions_count=0;

        const imageIndex=i%blog_image_count+1;
        blogData.cover_image=`/blogs/background${imageIndex}.jpg`;
        blogs.push(blogData);
    });
    return blogs;
}
