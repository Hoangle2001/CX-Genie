'use client';

export default function Demo() {
  return (
    <div className="flex flex-col mt-10 bg-white justify-between min-h-screen items-center p-10 space-y-12 ssm:space-y-10 w-full">
      <h2 className="text-3xl text-center font-bold">
        Watch this quick video to see how to get started
      </h2>
      <div className="flex justify-center w-full">
        <video controls className="w-4/5  rounded-2xl" style={{ boxShadow: '16px 16px 0 0 rgba(0, 0, 0, 0.1)' }}>
          <source
            src="https://storage.cxgenie.ai/landing/demo-09-09-2024.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
