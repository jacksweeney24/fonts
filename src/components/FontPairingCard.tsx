import { FontPairing } from '@/types/fonts';

interface FontPairingCardProps {
  pairing: FontPairing;
}

export function FontPairingCard({ pairing }: FontPairingCardProps) {
  return (
    <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h2 
        className={`text-2xl mb-2`}
        style={{ fontFamily: pairing.heading.name }}
      >
        {pairing.heading.name}
      </h2>
      <p 
        className="mb-4"
        style={{ fontFamily: pairing.body.name }}
      >
        {pairing.description}
      </p>
      <div className="text-sm text-gray-600">
        <p>Heading: {pairing.heading.name}</p>
        <p>Body: {pairing.body.name}</p>
      </div>
    </div>
  );
} 