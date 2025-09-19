export default function Loading() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <h1 className="text-xl font-semibold text-gray-900 mb-2">
          Loading GET AI Assistant
        </h1>
        <p className="text-gray-600">
          Initializing quantum processing and neural networks...
        </p>
      </div>
    </div>
  );
}
