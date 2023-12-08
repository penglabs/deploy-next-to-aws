export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="font-extrabold">
        <h1 className="text-6xl my-8">{process.env.YT_CHANNEL_NAME}</h1>
        <p className="text-xl">
          Deploying NextJs to AWS EC2 with Github Actions
        </p>
      </div>
    </main>
  );
}
