# 🎬 Epic Captions

> Add stunning, customizable captions to your videos with the power of AI transcription and in-browser video processing.

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)

## ✨ Features

- 🎙️ **AI-Powered Transcription** - Automatic speech-to-text using AWS Transcribe with language detection
- 🎨 **Customizable Captions** - Adjust primary and outline colors to match your brand
- ✏️ **Edit Transcriptions** - Fine-tune the generated captions before applying
- 🎥 **In-Browser Processing** - Process videos directly in the browser using FFmpeg WebAssembly
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- ⚡ **Real-Time Progress** - Visual progress indicator during video processing

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js](https://nextjs.org/) | React framework with App Router |
| [React](https://react.dev/) | UI component library |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework |
| [AWS S3](https://aws.amazon.com/s3/) | Video file storage |
| [AWS Transcribe](https://aws.amazon.com/transcribe/) | AI speech-to-text |
| [FFmpeg.wasm](https://ffmpegwasm.netlify.app/) | In-browser video processing |
| [Axios](https://axios-http.com/) | HTTP client |

## 📋 Prerequisites

Before you begin, ensure you have:

- **Node.js** 18.x or higher
- **npm**, **yarn**, **pnpm**, or **bun** package manager
- **AWS Account** with access to S3 and Transcribe services

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/epic-captions.git
cd epic-captions
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
# AWS Configuration
AWS_ACCESS_KEY=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
REGION=your_aws_region
BUCKET_NAME=your_s3_bucket_name
```

### 4. AWS Setup

1. **Create an S3 Bucket**
   - Enable CORS for your bucket
   - Set appropriate bucket policies for public read access (for video playback)

2. **Configure IAM User**
   - Create an IAM user with programmatic access
   - Attach policies for S3 and Transcribe access:
     - `AmazonS3FullAccess` (or custom policy for your bucket)
     - `AmazonTranscribeFullAccess`

3. **S3 CORS Configuration**
   ```json
   [
     {
       "AllowedHeaders": ["*"],
       "AllowedMethods": ["GET", "PUT", "POST"],
       "AllowedOrigins": ["*"],
       "ExposeHeaders": []
     }
   ]
   ```

### 5. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
epic-captions/
├── public/                 # Static assets
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── transcribe/ # Transcription API endpoint
│   │   │   └── upload/     # File upload API endpoint
│   │   ├── [filename]/     # Dynamic video editing page
│   │   ├── about/          # About page
│   │   ├── pricing/        # Pricing page
│   │   ├── globals.css     # Global styles
│   │   ├── layout.js       # Root layout
│   │   └── page.js         # Home page
│   ├── components/
│   │   ├── DemoSection.js        # Demo video section
│   │   ├── PageHeaders.js        # Page header component
│   │   ├── ResultVideo.js        # Video player with captions
│   │   ├── TranscriptionEditor.js # Transcription editing UI
│   │   ├── TranscriptionItem.js   # Individual caption item
│   │   └── UploadForm.js          # Video upload component
│   ├── fonts/              # Custom fonts (Roboto)
│   ├── libs/               # Utility functions
│   └── vids/               # Video assets
├── .env.local              # Environment variables (create this)
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── package.json            # Dependencies and scripts
```

## 🎯 How It Works

1. **Upload** - User uploads a video file through the web interface
2. **Store** - Video is uploaded to AWS S3
3. **Transcribe** - AWS Transcribe processes the audio and generates captions
4. **Edit** - User can review and edit the generated transcription
5. **Apply** - FFmpeg.wasm burns the captions into the video in-browser
6. **Download** - User downloads the captioned video

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🌐 Deployment

### Deploy on Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/epic-captions)

1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform supporting Next.js:
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform)

## ⚠️ Important Notes

- **Browser Compatibility**: FFmpeg.wasm requires SharedArrayBuffer, which needs specific headers. Modern browsers (Chrome, Firefox, Edge) are supported.
- **Video Size**: Large videos may take longer to process in-browser. Consider file size limits for optimal performance.
- **AWS Costs**: AWS S3 and Transcribe usage incurs costs based on storage and transcription minutes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [FFmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm) for making video processing possible in the browser
- [AWS](https://aws.amazon.com/) for powerful cloud services
- [Tailwind CSS](https://tailwindcss.com/) for beautiful utility-first styling

---

<p align="center">
  Made with ❤️ by the Epic Captions Team
</p>
