# flux-edgiai

**엣지 AI 교육 Q&A 참고자료** — RPi5 + Hailo-8L NPU + ONNX Runtime

> 라즈베리파이 5 × Hailo-8L NPU 엣지 AI 교육을 위한 참고 사이트 · 핵심 개념 · 용어 정리 · 예상 질문 모음

## Live

https://flux-edgiai.vercel.app

## Features

- **참고 URL 모음** (69개) — 공식 문서, 튜토리얼, 한국어 커뮤니티, 기업 블로그, 용어 사전
- **엣지 AI 핵심 개념** — Cloud AI vs Edge AI 비교, 장점 정리
- **NPU 핵심 개념** — GPU vs NPU 비교, RPi5 + Hailo-8L 하드웨어 스펙
- **ONNX Runtime** — ONNX 포맷 설명, RPi 설치 가이드, Hailo 비교
- **핵심 용어 정리** (10개) — 온디바이스 AI, 추론, 학습, 양자화, TOPS, HEF, GStreamer 등
- **교육 커리큘럼** — DAY 1~4 + 최종 프로젝트 구성안
- **Q&A** (16개) — 청중 예상 질문과 핵심 답변 아코디언

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router, TypeScript)
- Custom CSS (CSS Variables)
- [Vercel](https://vercel.com/) 자동 배포
- Google Fonts (JetBrains Mono, Noto Sans KR, Syne)

## Getting Started

```bash
# 의존성 설치
npm install

# 개발 서버
npm run dev

# 프로덕션 빌드
npm run build
```

http://localhost:3000 에서 확인

## Deployment

`main` 브랜치에 push하면 Vercel이 자동으로 빌드 & 배포합니다.

## Project Structure

```
src/app/
├── layout.tsx      # 루트 레이아웃 (메타데이터, 폰트)
├── page.tsx        # 메인 페이지 (전체 콘텐츠)
├── globals.css     # 전체 스타일
└── favicon.ico
```

## License

MIT
