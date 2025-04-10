export default function Loading() {
    return (
        <div>
            <h1>Loading...</h1>
            <div className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
            </div>
            <div className="flex justify-center mt-4">
                <svg
                    className="animate-spin h-5 w-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="2" x2="12" y2="6" />
                    <line x1="12" y1="18" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="6" y2="12" />
                    <line x1="18" y1="12" x2="22" y2="12" />
                    <line x1="4.22" y1="4.22" x2="7.76" y2="7.76" />
                    <line x1="16.24" y1="16.24" x2="19.78" y2="19.78" />
                    <line x1="4.22" y1="19.78" x2="7.76" y2="16.24" />
                    <line x1="16.24" y1="7.76" x2="19.78" y2="4.22" />
                </svg>

        </div>

        <div className="flex justify-center mt-4">
            <p className="text-gray-500">Loading data...</p>
        </div>
        </div>
    );
}