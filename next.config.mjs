/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 외부 이미지 허용시 패턴설정 => 보안
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
