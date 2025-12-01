import PageHeaders from "@/components/PageHeaders";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <PageHeaders
        h1Text={'About EpicCaptions'}
        h2Text={'Transform your videos with AI-powered captions'} />

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-purple-200">🎯 Our Mission</h3>
            <p className="text-white/80 leading-relaxed">
              Making video content accessible and engaging for everyone. We use cutting-edge AI to automatically generate accurate captions that enhance your videos.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-purple-200">⚡ How It Works</h3>
            <ul className="text-white/80 space-y-2">
              <li>• Upload your video file</li>
              <li>• AI transcribes speech automatically</li>
              <li>• Customize caption style & colors</li>
              <li>• Download your enhanced video</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-purple-200">🚀 Features</h3>
            <ul className="text-white/80 space-y-2">
              <li>• Automatic speech recognition</li>
              <li>• Multiple language support</li>
              <li>• Customizable caption styles</li>
              <li>• High-quality video output</li>
              <li>• Fast processing with FFmpeg</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-purple-200">💡 Why Captions?</h3>
            <p className="text-white/80 leading-relaxed">
              Captions increase engagement by 80%, improve accessibility, and help your content reach a global audience. Perfect for social media, education, and marketing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}