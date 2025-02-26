
interface PrivacySelectorProps {
  privacyType: "public" | "squad" | "secret";
  onPrivacyChange: (type: "public" | "squad" | "secret") => void;
}

const PrivacySelector = ({ privacyType, onPrivacyChange }: PrivacySelectorProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Privacy Level</label>
      <div className="flex gap-4">
        {[
          { type: "public", label: "Public" },
          { type: "squad", label: "Squad" },
          { type: "secret", label: "Secret" },
        ].map((privacy) => (
          <button
            key={privacy.type}
            onClick={() => onPrivacyChange(privacy.type as typeof privacyType)}
            className={`flex items-center gap-2 p-2 rounded-md border ${
              privacyType === privacy.type ? "border-primary" : "border-gray-200"
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                privacy.type === "public"
                  ? "bg-green-500"
                  : privacy.type === "squad"
                  ? "bg-blue-500"
                  : "bg-black"
              }`}
            />
            <span>{privacy.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PrivacySelector;
