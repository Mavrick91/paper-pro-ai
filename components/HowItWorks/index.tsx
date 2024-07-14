'use client';

import { Card, Container, SimpleGrid, Text } from '@mantine/core';

const HowItWorks = () => {
  return (
    <section className="bg-gray-100 py-16" id="how-it-works">
      <Container>
        <h2 className="mb-16 text-center text-4xl font-extrabold">How It Works</h2>
        <SimpleGrid cols={3} spacing="lg">
          <Card
            className="flex flex-col items-center shadow-lg"
            padding="lg"
            radius="md"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.6))',
              color: 'white',
              borderRadius: '15px',
            }}
          >
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="text-6xl font-bold text-gray-300">01</div>
              <Text className="!text-2xl !font-bold">Submit Your Essay</Text>
              <Text className="mt-2 text-gray-400">
                Upload your essay to our secure platform for analysis.
              </Text>
            </div>
          </Card>
          <Card
            className="flex flex-col items-center shadow-lg"
            padding="lg"
            radius="md"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.6))',
              color: 'white',
              borderRadius: '15px',
            }}
          >
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="text-6xl font-bold text-gray-300">02</div>
              <Text className="!text-2xl !font-bold">AI Analysis</Text>
              <Text className="mt-2 text-gray-400">
                Our advanced AI reviews your writing in seconds.
              </Text>
            </div>
          </Card>
          <Card
            className="flex flex-col items-center shadow-lg"
            padding="lg"
            radius="md"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.6))',
              color: 'white',
              borderRadius: '15px',
            }}
          >
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="text-6xl font-bold text-gray-300">03</div>
              <Text className="!text-2xl !font-bold">Detailed Feedback</Text>
              <Text className="mt-2 text-gray-400">
                Receive comprehensive feedback and suggestions for improvement.
              </Text>
            </div>
          </Card>
        </SimpleGrid>
      </Container>
    </section>
  );
};

export default HowItWorks;
