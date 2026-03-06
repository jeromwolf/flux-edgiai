# flux-edgiai

## Project Overview
엣지 AI 교육 Q&A 참고자료 홈페이지. RPi5 + Hailo-8L NPU + ONNX Runtime 기반 엣지 AI 교육 콘텐츠를 제공하는 정적 웹사이트.

## Tech Stack
- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Custom CSS variables + globals.css (Tailwind 설치되어 있으나 주로 커스텀 CSS 사용)
- **Fonts**: Google Fonts (JetBrains Mono, Noto Sans KR, Syne) via next/font
- **Deployment**: Vercel (GitHub 연동 자동 배포)
- **Repository**: https://github.com/jeromwolf/flux-edgiai
- **Live URL**: https://flux-edgiai.vercel.app

## Project Structure
```
src/app/
├── layout.tsx     # Root layout (Korean lang, fonts, metadata)
├── page.tsx       # Main page (client component, all content)
├── globals.css    # All styles (CSS variables, components)
└── favicon.ico
```

## Key Architecture Decisions
- **Single page app**: 모든 콘텐츠가 `page.tsx` 하나에 있음 (SPA 스타일)
- **"use client"**: Q&A 아코디언 토글(useState) + IntersectionObserver 스크롤 애니메이션(useEffect/useRef) 때문에 클라이언트 컴포넌트
- **CSS 방식**: Tailwind utility 대신 커스텀 CSS 변수 + 클래스 사용 (원본 HTML 디자인 유지)
- **정적 생성**: `next build`로 정적 HTML 생성, Vercel에서 CDN 배포

## Page Sections (6개)
1. 엣지 AI 핵심 개념 (01)
2. NPU 핵심 개념 (02)
3. ONNX Runtime (03)
4. 핵심 용어 정리 (04) — 10개 용어 카드
5. 교육 커리큘럼 설계 (05)
6. 발표 Q&A 예상 질문 (06) — 16개 Q&A

## URL Bank Categories (9개 그룹, 69개 URL)
- Raspberry Pi 공식 / Hailo 공식 / ONNX Runtime
- 실습 튜토리얼 / 한국 커뮤니티 / 엣지 AI 도구
- 한국 기업 AI 블로그 / AI 용어 사전 / 유튜브 강의

## CSS Class Conventions
- `.url-gh.{rpi|hailo|onnx|dev|kr|yt|corp|ref}` — URL 그룹 헤더 색상
- `.cc.{or|bl|gr}` — 개념 카드 상단 테두리 색상 (orange/blue/green)
- `.hbox` — 주황 하이라이트 박스, `.ibox` — 파란 하이라이트 박스
- `.term-card` — 용어 카드, `.qa-item` — Q&A 아코디언 아이템
- `.reveal` / `.in` — IntersectionObserver 스크롤 애니메이션

## Commands
```bash
npm run dev     # 개발 서버 (localhost:3000)
npm run build   # 프로덕션 빌드
npm run lint    # ESLint 실행
```

## Workflow
- `main` 브랜치에 push → Vercel 자동 배포
- 콘텐츠 수정: `src/app/page.tsx` 편집 → commit → push
- 스타일 수정: `src/app/globals.css` 편집 → commit → push

## User
- 사용자 이름: 켈리 (Kelly)
- AI 호칭: 일론 (Elon)
- 언어: 한국어
