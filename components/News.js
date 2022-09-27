/** @format */

const News = ({ article }) => {
  return (
    <>
      <a href={article.url} target="_Black">
        <div className=" hover:bg-slate-200 rounded-lg flex justify-between items-center px-4 py-2 space-x-1 cursor-pointer transition duration-200">
          <div className="space-y-0.5">
            <p className="">{article.title}</p>
            <h6 className="font-bold">{article.author}</h6>
            <h6 className="text-gray-400 font-thin text-sm">
              {article.source.name}
            </h6>
          </div>
          <div>
            <img
              src={article.urlToImage}
              alt=""
              className="rounded-xl w-[10rem]"
            />
          </div>
        </div>
      </a>
    </>
  );
};

export default News;
