import { Button } from '@mantine/core';
import React from 'react';

type PricingCardProps = {
  title: string;
  description: string;
  price: string;
  features: string[];
  buttonText: string;
};

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  price,
  features,
  buttonText,
}) => (
  <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white p-6 text-center text-gray-900 shadow xl:p-8 dark:border-gray-600 dark:bg-gray-800 dark:text-white">
    <h3 className="mb-4 text-4xl font-bold">{title}</h3>
    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">{description}</p>
    <div className="my-8 flex items-baseline justify-center">
      <span className="mr-2 text-5xl font-extrabold">{price}</span>
      <span className="text-gray-500 dark:text-gray-400">/month</span>
    </div>
    <div className="flex grow flex-col justify-between">
      <ul className="mb-8 space-y-4 text-left" role="list">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <svg
              className="size-5 shrink-0 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                fillRule="evenodd"
              ></path>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button color="teal.4">{buttonText}</Button>
    </div>
  </div>
);

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      title: 'Basic',
      description: 'Ideal for individual students seeking occasional feedback.',
      price: '$5',
      features: [
        'Feedback on 5 essays per month',
        'Structure and style suggestions',
        'Grammar and spelling check',
        'Basic argument analysis',
      ],
      buttonText: 'Get started',
    },
    {
      title: 'Pro',
      description: 'Best for students who need regular feedback.',
      price: '$10',
      features: [
        'Feedback on 10 essays per month',
        'In-depth analysis of arguments',
        'Structure, style, and coherence improvements',
        'Advanced grammar and spelling check',
        'Access to premium writing tips and resources',
      ],
      buttonText: 'Get started',
    },
    {
      title: 'Ultimate',
      description: 'Perfect for frequent users needing extensive feedback.',
      price: '$20',
      features: [
        'Unlimited essay feedback',
        'Detailed reports and suggestions',
        'Customizable feedback criteria',
        'Advanced grammar, spelling, and plagiarism check',
        'Priority support',
        'Access to exclusive educational resources and tools',
      ],
      buttonText: 'Get started',
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900" id="pricing">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-12">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Enhance Your Writing Skills
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Our AI-powered tool provides personalized feedback to help you improve your essays. Get
            insights on structure, argument strength, style, and more.
          </p>
        </div>
        <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
