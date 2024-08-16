import React from "react";

interface PricingCardProps {
  title: string;
  price: number;
  description: string;
  features: string[];
  iconUrl: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  iconUrl,
}) => {
  return (
    <div className="relative p-8 w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-2xl min-h-[400px] flex  items-center justify-center">
      <svg
        className="absolute top-0 left-0 w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,224L30,229.3C60,235,120,245,180,245.3C240,245,300,235,360,208C420,181,480,139,540,128C600,117,660,139,720,176C780,213,840,267,900,256C960,245,1020,171,1080,133.3C1140,96,1200,96,1260,112C1320,128,1380,160,1410,176L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute  top-0 left-0 w-full h-auto"
      >
        <path
          fill="#0056"
          fill-opacity="1"
          d="M0,64L30,90.7C60,117,120,171,180,192C240,213,300,203,360,213.3C420,224,480,256,540,234.7C600,213,660,139,720,90.7C780,43,840,21,900,58.7C960,96,1020,192,1080,197.3C1140,203,1200,117,1260,85.3C1320,53,1380,75,1410,85.3L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>

      <div className="relative p-8">
        <div className="flex items-center justify-between mb-2 relative z-10">
          <div>
            <span className="text-sm font-semibold text-gray-700">{title}</span>
            <div className="mt-6 mb-2 text-3xl font-bold text-gray-800">
              ${price}
            </div>
            <span className="text-sm text-gray-500">por hora</span>
          </div>
          <img
            src={iconUrl}
            alt="Icon"
            className="max-h-[8rem] h-auto object-contain"
          />
        </div>

        <div className="mt-6 mb-4 text-gray-600">{description}</div>
        <ul className="space-y-2 text-gray-600">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-green-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-6.5-6.5 1.414-1.414L10 12.172l5.086-5.086L16.5 8.5 10 15z" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full h-auto z-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,224L30,229.3C60,235,120,245,180,245.3C240,245,300,235,360,208C420,181,480,139,540,128C600,117,660,139,720,176C780,213,840,267,900,256C960,245,1020,171,1080,133.3C1140,96,1200,96,1260,112C1320,128,1380,160,1410,176L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0 left-0 w-full h-auto"
      >
        <path
          fill="#0056"
          fill-opacity="1"
          d="M0,64L30,90.7C60,117,120,171,180,192C240,213,300,203,360,213.3C420,224,480,256,540,234.7C600,213,660,139,720,90.7C780,43,840,21,900,58.7C960,96,1020,192,1080,197.3C1140,203,1200,117,1260,85.3C1320,53,1380,75,1410,85.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default PricingCard;
