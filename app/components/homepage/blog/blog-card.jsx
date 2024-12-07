// @flow strict
import { timeConverter } from '@/utils/time-converter';
import Link from 'next/link';
import { BiChevronDown } from 'react-icons/bi';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';

function BlogCard({ blog }) {

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group flex flex-col"
    >
      <div className="h-40 lg:h-48 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <img
          src={blog?.cover_image|| "/png/placeholder.png" }
          height={1080}
          width={1920}
          alt={blog.title}
          className='h-full w-full group-hover:scale-110 transition-all duration-300'
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col flex-1 justify-between">
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          <p>{timeConverter(blog.published_at)}</p>
          <div className="flex items-center gap-3">
            {blog.public_reactions_count>0 && <p className="flex items-center gap-1">
              <BsHeartFill />
              <span>{blog.public_reactions_count}</span>
            </p>}
            {blog.comments_count > 0 &&
              <p className="flex items-center gap-1">
                <FaCommentAlt />
                <span>{blog.comments_count}</span>
              </p>
            }
          </div>
        </div>

        <Link target='_blank' href={blog.url}>
          <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
            {blog.title}
          </p>
        </Link>


        {blog.reading_time_minutes?<p className='mb-2 text-sm text-[#16f2b3]'>{`${blog.reading_time_minutes} Min Read`}</p>:<></>}


        <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
          {blog.description}
        </p>
        <div className="">
          <Link target='_blank' href={blog.url} className='bg-violet-500 text-white px-3 py-1.5 rounded-full text-xs flex flex-row items-center w-fit'>
              Read More <BiChevronDown size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;