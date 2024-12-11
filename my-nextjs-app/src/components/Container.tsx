'use client';

export default function Container() {
  return (
    <div className="flex flex-col mt-10 bg-white justify-between items-center p-10 space-y-12 lg:flex-row lg:space-y-0 ssm:flex-col ssm:space-y-10 w-full ">
      {/* Nội dung phần tử con */}
      <div className="flex flex-col justify-center items-center w-full space-y-6">
        <a href="https://www.producthunt.com/posts/cx-genie-2?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-cx-genie-2">
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=486201&theme=light&period=daily"
            alt="Product Hunt Badge"
          />
        </a>
        <h1 className="font-bold text-4xl text-center">
          The Best Way to Achieve 24/7 Customer Support Excellence with AI
        </h1>
        <span className="text-center">
          Deliver Seamless, 5-Star Multi-Channel Support, Boost Customer Engagement and Drive Business Growth
        </span>
        <div className="flex justify-center h-10 w-full space-x-4">
          <a
            href="https://app.cxgenie.ai/sign-up?utm_source=&utm_campaign=&utm_blog=&others=%2F%23pricing"
            className="w-1/6 h-full"
          >
            <button className="bg-blue-500 text-white w-full text-lg rounded-md h-full">
              <div>Start for free</div>
            </button>
          </a>
          <button className="rounded-md border border-black text-lg w-1/6 h-full">
            <div>Book Demo</div>
          </button>
        </div>
      </div>
    </div>
  );
}
