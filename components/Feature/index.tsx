import { Divider } from '@mantine/core';

const Feature = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-600 to-teal-900 py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold">Discover Our Innovative Features</h2>

        <div className="space-y-16">
          <FeatureCard
            description="Experience real-time feedback on your writing. Our algorithms analyze structure, argument strength, and style as you type, providing instant insights to refine your work."
            imageAlt="Instant Analysis Feature"
            imageUrl="/api/placeholder/400/300"
            reverse={false}
            title="Instant Analysis"
          />

          <Divider className="bg-teal-400 opacity-30" />

          <FeatureCard
            description="Elevate your writing with tailored suggestions. Our AI provides actionable recommendations to strengthen arguments, refine language, and polish your presentation."
            imageAlt="Improvement Suggestions Feature"
            imageUrl="/api/placeholder/400/300"
            reverse={true}
            title="Improvement Suggestions"
          />

          <Divider className="bg-teal-400 opacity-30" />

          <FeatureCard
            description="Gain expert-level writing advice with our AI. Trained on vast academic databases, it offers deep analysis of arguments, identifies logical fallacies, and suggests ways to strengthen your thesis."
            imageAlt="AI-Powered Insights Feature"
            imageUrl="/api/placeholder/400/300"
            reverse={false}
            title="AI-Powered Insights"
          />
        </div>
      </div>
    </div>
  );
};

type FeatureCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  reverse: boolean;
};

const FeatureCard = ({ title, description, imageUrl, imageAlt, reverse }: FeatureCardProps) => {
  return (
    <div
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}
    >
      <div className="md:w-1/2">
        <div className="rounded-xl bg-white/10 p-8 shadow-lg backdrop-blur-lg transition duration-300 hover:shadow-xl">
          <h3 className="mb-4 text-3xl font-semibold text-teal-200">{title}</h3>
          <p className="text-teal-50">{description}</p>
        </div>
      </div>
      <div className="md:w-1/2">
        <img
          alt={imageAlt}
          className="h-auto w-full rounded-xl object-cover shadow-lg"
          src={imageUrl}
        />
      </div>
    </div>
  );
};

export default Feature;
