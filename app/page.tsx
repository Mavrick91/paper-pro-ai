import { Button } from '@mantine/core';

import BubbleBackground from '@/components/BubbleBackground';

export default function HomePage() {
  return (
    <main>
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <BubbleBackground />

        <div className="container z-10 mx-auto px-4 text-center">
          <h1 className="text-gradient mb-6 text-6xl font-bold md:text-7xl">
            Elevate Your Writing
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-white md:text-2xl">
            Harness the power of AI to transform your essays into masterpieces
          </p>
          <Button radius="xl" size="xl">
            Try PaperPro AI Now
          </Button>
        </div>
      </section>
    </main>
  );
}
