"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export default function Home() {
  const [openQA, setOpenQA] = useState<number | null>(null);
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setRevealRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      revealRefs.current[index] = el;
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.06 }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  function toggleQA(index: number) {
    setOpenQA((prev) => (prev === index ? null : index));
  }

  return (
    <>
      {/* NAV */}
      <nav>
        <div className="nav-brand">{"\u25B6"} Edge AI Q&A 참고자료</div>
        <ul className="nav-tabs">
          <li>
            <a href="#urls">참고 URL</a>
          </li>
          <li>
            <a href="#edge">엣지 AI</a>
          </li>
          <li>
            <a href="#npu">NPU</a>
          </li>
          <li>
            <a href="#onnx">ONNX</a>
          </li>
          <li>
            <a href="#curriculum">커리큘럼</a>
          </li>
          <li>
            <a href="#qa">Q&A</a>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="hero-tag">
          {"\uD83D\uDCCB"} 교육 컨텐츠 제안서 발표 사전 준비 자료
        </div>
        <h1>
          라즈베리파이 5 {"\u00D7"} Hailo-8L NPU
          <br />
          <em>엣지 AI 교육 Q&A 참고자료</em>
        </h1>
        <p className="hero-desc">
          발표 전 청중 사전 교육 및 질의응답 대비를 위한 참고 사이트 · 핵심 개념
          · 예상 질문 정리
        </p>
        <div className="hero-topics">
          <span className="topic-chip hi">
            {"\uD83C\uDF53"} Raspberry Pi 5
          </span>
          <span className="topic-chip hi">
            {"\uD83E\uDDE0"} NPU / Hailo-8L
          </span>
          <span className="topic-chip hi">
            {"\u26A1"} ONNX Runtime
          </span>
          <span className="topic-chip">
            {"\uD83D\uDCE1"} 엣지 AI 개념
          </span>
          <span className="topic-chip">
            {"\uD83D\uDCDA"} 커리큘럼 설계
          </span>
        </div>
      </div>

      {/* URL BANK */}
      <div className="url-bank" id="urls">
        <div className="eyebrow">
          {"\uD83D\uDD17"} 핵심 참고 URL 전체 모음
        </div>
        <h2>발표·Q&A에 필요한 모든 참고 사이트</h2>
        <p className="sub">
          공식 문서 · 튜토리얼 · 커뮤니티 링크를 카테고리별로 정리했습니다
        </p>

        <div className="url-cats">
          {/* 라즈베리파이 공식 */}
          <div className="url-group">
            <div className="url-gh rpi">
              {"\uD83C\uDF53"} Raspberry Pi 공식
            </div>
            <ul className="url-list">
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://www.raspberrypi.com/software/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDCBF"}</span>
                  <div>
                    <span className="url-title">
                      Raspberry Pi Imager 다운로드
                    </span>
                    <span className="url-desc">
                      OS를 microSD에 굽는 공식 툴. 64-bit OS 선택 필수
                    </span>
                    <span className="url-addr">
                      raspberrypi.com/software/
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://www.raspberrypi.com/documentation/computers/ai.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDCD6"}</span>
                  <div>
                    <span className="url-title">
                      Raspberry Pi AI 공식 문서
                    </span>
                    <span className="url-desc">
                      Hailo 4.18 + TAPPAS 3.29.1 설치 가이드 공식 버전
                    </span>
                    <span className="url-addr">
                      raspberrypi.com/documentation/computers/ai.html
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://www.raspberrypi.com/documentation/accessories/ai-kit.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83E\uDD16"}</span>
                  <div>
                    <span className="url-title">AI Kit 공식 문서</span>
                    <span className="url-desc">
                      Hailo-8L M.2 모듈 포함 AI Kit 공식 설치 및 사용 가이드
                    </span>
                    <span className="url-addr">
                      raspberrypi.com/documentation/accessories/ai-kit.html
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://www.raspberrypi.com/documentation/accessories/ai-hat-plus.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83C\uDFA9"}</span>
                  <div>
                    <span className="url-title">AI HAT+ 공식 문서</span>
                    <span className="url-desc">
                      13 TOPS(Hailo-8L) 및 26 TOPS(Hailo-8) AI HAT+ 공식 문서
                    </span>
                    <span className="url-addr">
                      raspberrypi.com/documentation/accessories/ai-hat-plus.html
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Hailo 공식 */}
          <div className="url-group">
            <div className="url-gh hailo">
              {"\uD83E\uDDE0"} Hailo 공식
            </div>
            <ul className="url-list">
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://hailo.ai/products/hailo-software/model-explorer/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDD0D"}</span>
                  <div>
                    <span className="url-title">Hailo Model Explorer</span>
                    <span className="url-desc">
                      Hailo-8L용 RetinaFace · ArcFace 등 .HEF 모델 다운로드
                      공식 허브
                    </span>
                    <span className="url-addr">
                      hailo.ai/products/hailo-software/model-explorer/
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://github.com/hailo-ai/hailo_model_zoo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDCC1"}</span>
                  <div>
                    <span className="url-title">
                      Hailo Model Zoo (GitHub)
                    </span>
                    <span className="url-desc">
                      YOLO · RetinaFace 등 공식 최적화 모델 저장소
                    </span>
                    <span className="url-addr">
                      github.com/hailo-ai/hailo_model_zoo
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://hailo.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83C\uDFE2"}</span>
                  <div>
                    <span className="url-title">Hailo 공식 홈페이지</span>
                    <span className="url-desc">
                      엣지 AI 가속기 제품군 · 소프트웨어 스택 · 개발자 리소스
                    </span>
                    <span className="url-addr">hailo.ai</span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://github.com/hailo-ai/hailo-rpi5-examples"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDCA1"}</span>
                  <div>
                    <span className="url-title">
                      Hailo RPi5 공식 예제 (GitHub)
                    </span>
                    <span className="url-desc">
                      실시간 객체 감지, 포즈 추정 등 RPi5용 Python 예제 모음
                    </span>
                    <span className="url-addr">
                      github.com/hailo-ai/hailo-rpi5-examples
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://github.com/hailo-ai/hailort"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\u2699\uFE0F"}</span>
                  <div>
                    <span className="url-title">
                      HailoRT 추론 프레임워크 (GitHub)
                    </span>
                    <span className="url-desc">
                      Hailo 디바이스용 오픈소스 경량 고성능 추론 프레임워크
                    </span>
                    <span className="url-addr">
                      github.com/hailo-ai/hailort
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://github.com/hailo-ai/tappas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDD27"}</span>
                  <div>
                    <span className="url-title">
                      TAPPAS GStreamer 프레임워크 (GitHub)
                    </span>
                    <span className="url-desc">
                      GStreamer 기반 고성능 AI 파이프라인 템플릿 (객체 감지, 얼굴
                      인식 등)
                    </span>
                    <span className="url-addr">
                      github.com/hailo-ai/tappas
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://community.hailo.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDCAC"}</span>
                  <div>
                    <span className="url-title">Hailo 커뮤니티 포럼</span>
                    <span className="url-desc">
                      RPi5 설정, 모델 변환, 오류 해결을 논의하는 공식 커뮤니티
                    </span>
                    <span className="url-addr">community.hailo.ai</span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://hailo.ai/developer-zone/documentation/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDCCB"}</span>
                  <div>
                    <span className="url-title">Hailo 개발자 문서</span>
                    <span className="url-desc">
                      AI 프로세서 전체 문서, 데이터시트, 컴파일러 가이드 (회원
                      등록 필요)
                    </span>
                    <span className="url-addr">
                      hailo.ai/developer-zone/documentation/
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* ONNX Runtime */}
          <div className="url-group">
            <div className="url-gh onnx">
              {"\u26A1"} ONNX Runtime
            </div>
            <ul className="url-list">
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://onnxruntime.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\u26A1"}</span>
                  <div>
                    <span className="url-title">
                      ONNX Runtime 공식 사이트
                    </span>
                    <span className="url-desc">
                      Microsoft 오픈소스 추론 엔진 — ARM/RPi 포함 멀티플랫폼
                      지원
                    </span>
                    <span className="url-addr">onnxruntime.ai</span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://onnxruntime.ai/docs/tutorials/iot-edge/rasp-pi-cv.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83C\uDF53"}</span>
                  <div>
                    <span className="url-title">
                      ONNX Runtime {"\u00D7"} Raspberry Pi 공식 튜토리얼
                    </span>
                    <span className="url-desc">
                      RPi에서 Computer Vision 모델 추론 실행 공식 가이드
                    </span>
                    <span className="url-addr">
                      onnxruntime.ai/docs/tutorials/iot-edge/rasp-pi-cv.html
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://github.com/microsoft/onnxruntime"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDCBB"}</span>
                  <div>
                    <span className="url-title">ONNX Runtime GitHub</span>
                    <span className="url-desc">
                      소스코드 · Raspberry Pi 빌드 가이드 · Issue 트래커
                    </span>
                    <span className="url-addr">
                      github.com/microsoft/onnxruntime
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://onnx.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83C\uDF10"}</span>
                  <div>
                    <span className="url-title">
                      ONNX 공식 사이트 (포맷 표준)
                    </span>
                    <span className="url-desc">
                      Open Neural Network Exchange — AI 모델 표준 포맷 공식
                      홈페이지
                    </span>
                    <span className="url-addr">onnx.ai</span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://github.com/onnx/models"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDCE6"}</span>
                  <div>
                    <span className="url-title">ONNX Model Zoo</span>
                    <span className="url-desc">
                      사전 학습된 ONNX 모델 저장소 — YOLOv8, ResNet, MobileNet
                      등
                    </span>
                    <span className="url-addr">github.com/onnx/models</span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://onnxruntime.ai/docs/performance/model-optimizations/quantization.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDD2C"}</span>
                  <div>
                    <span className="url-title">
                      ONNX Runtime 양자화(Quantization) 가이드
                    </span>
                    <span className="url-desc">
                      INT8 동적/정적 양자화로 엣지 배포 최적화하는 공식 가이드
                    </span>
                    <span className="url-addr">
                      onnxruntime.ai/docs/.../quantization.html
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://github.com/microsoft/Olive"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83E\uDED2"}</span>
                  <div>
                    <span className="url-title">
                      Microsoft Olive 모델 최적화 툴
                    </span>
                    <span className="url-desc">
                      ONNX Runtime용 모델 변환, 양자화, 최적화를 자동화하는 CLI
                      툴체인
                    </span>
                    <span className="url-addr">
                      github.com/microsoft/Olive
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* 실습 튜토리얼 */}
          <div className="url-group">
            <div className="url-gh dev">
              {"\uD83D\uDEE0"} 실습 튜토리얼 (YOLOv8 · RetinaFace)
            </div>
            <ul className="url-list">
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://docs.ultralytics.com/models/yolov8/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83C\uDFAF"}</span>
                  <div>
                    <span className="url-title">
                      YOLOv8 공식 문서 (Ultralytics)
                    </span>
                    <span className="url-desc">
                      YOLOv8 구조 · 학습 · ONNX 변환 · 배포 전 과정 공식 가이드
                    </span>
                    <span className="url-addr">
                      docs.ultralytics.com/models/yolov8/
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://medium.com/@sanjoyg_39525"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\u270D\uFE0F"}</span>
                  <div>
                    <span className="url-title">
                      sanjoyg Medium 블로그 (핵심 실습 참고)
                    </span>
                    <span className="url-desc">
                      RPi5 + Hailo-8L 실습 시리즈의 핵심 저자 블로그
                    </span>
                    <span className="url-addr">
                      medium.com/@sanjoyg_39525
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://medium.com/@sanjoyg_39525/face-detection-on-rpi5-using-hailo8l-0e247ecc7c28"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDC64"}</span>
                  <div>
                    <span className="url-title">
                      얼굴 탐지 구현 (RPi5 + Hailo-8L)
                    </span>
                    <span className="url-desc">
                      RetinaFace + GStreamer 파이프라인으로 실시간 얼굴 탐지 구현
                    </span>
                    <span className="url-addr">
                      medium.com/@sanjoyg_39525/face-detection-on-rpi5...
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://medium.com/@sanjoyg_39525/face-recognition-matching-on-rpi5-using-hailo8l-75a00aeb49bc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83E\uDEAA"}</span>
                  <div>
                    <span className="url-title">
                      얼굴 인식 Recognition 구현
                    </span>
                    <span className="url-desc">
                      ArcFace 기반 특징점 매칭 및 신원 인식 구현 상세 가이드
                    </span>
                    <span className="url-addr">
                      medium.com/@sanjoyg_39525/face-recognition-matching...
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://github.com/Seeed-Projects/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDE80"}</span>
                  <div>
                    <span className="url-title">
                      AI Kit 종합 실습 (Zero to Hero)
                    </span>
                    <span className="url-desc">
                      RPi AI Kit으로 TensorFlow, Hailo NPU, Ultralytics 단계별
                      종합 실습
                    </span>
                    <span className="url-addr">
                      github.com/Seeed-Projects/Tutorial-of-AI-Kit...
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://wiki.seeedstudio.com/tutorial_of_ai_kit_with_raspberrypi5_about_yolov8n_object_detection/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\u26A1"}</span>
                  <div>
                    <span className="url-title">
                      YOLOv8n 객체 감지 136fps 달성 (Seeed Wiki)
                    </span>
                    <span className="url-desc">
                      136.7fps 달성 사례 포함 YOLOv8n 학습부터 RPi5 배포까지 전
                      과정
                    </span>
                    <span className="url-addr">
                      wiki.seeedstudio.com/.../yolov8n_object_detection/
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://core-electronics.com.au/guides/yolo-object-detection-on-the-raspberry-pi-ai-hat-writing-custom-python/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDC0D"}</span>
                  <div>
                    <span className="url-title">
                      YOLO 커스텀 Python 실습 (Core Electronics)
                    </span>
                    <span className="url-desc">
                      AI HAT+에서 커스텀 Python으로 YOLO 객체 감지 파이프라인 작성
                    </span>
                    <span className="url-addr">
                      core-electronics.com.au/.../yolo-object-detection...
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://datarootlabs.com/blog/hailo-ai-kit-raspberry-pi-5-setup-and-computer-vision-pipelines"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDCCA"}</span>
                  <div>
                    <span className="url-title">
                      Hailo AI Kit CV 파이프라인 (DataRootLabs)
                    </span>
                    <span className="url-desc">
                      YOLOv5 인스턴스 분할 + 옵티컬 플로우 트래킹 실전 구현
                    </span>
                    <span className="url-addr">
                      datarootlabs.com/blog/hailo-ai-kit...
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://docs.pytorch.org/tutorials/intermediate/realtime_rpi.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDD25"}</span>
                  <div>
                    <span className="url-title">
                      PyTorch 공식 RPi 실시간 추론 (40fps)
                    </span>
                    <span className="url-desc">
                      MobileNetV2를 RPi 4/5에서 최대 40fps 실시간 실행하는 공식
                      튜토리얼
                    </span>
                    <span className="url-addr">
                      docs.pytorch.org/.../realtime_rpi.html
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* 한국 커뮤니티 */}
          <div className="url-group">
            <div className="url-gh kr">
              {"\uD83C\uDDF0\uD83C\uDDF7"} 한국 커뮤니티
            </div>
            <ul className="url-list">
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://cafe.naver.com/iloveai/30024"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\u2615"}</span>
                  <div>
                    <span className="url-title">
                      네이버 일러브AI — Hailo 얼굴 인식 시스템 구현
                    </span>
                    <span className="url-desc">
                      HailoRT 4.18 기반 RPi5 얼굴 인식 상세 한국어 가이드
                    </span>
                    <span className="url-addr">
                      cafe.naver.com/iloveai/30024
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://cafe.naver.com/vl/4577"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDCC4"}</span>
                  <div>
                    <span className="url-title">
                      수정된 FaceRecognition 스크립트
                    </span>
                    <span className="url-desc">
                      RPi 카메라 소스 전환용 facerecognition.sh 수정 버전 공유
                    </span>
                    <span className="url-addr">
                      cafe.naver.com/vl/4577
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://blog.naver.com/roboholic84/223485800255"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83E\uDD16"}</span>
                  <div>
                    <span className="url-title">
                      Roboholic84 블로그 — Hailo 실습 정리
                    </span>
                    <span className="url-desc">
                      RPi5 + Hailo 환경 구축 실습 정리 한국어 블로그
                    </span>
                    <span className="url-addr">
                      blog.naver.com/roboholic84/223485800255
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://cafe.naver.com/cortexsh/6453"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDD2C"}</span>
                  <div>
                    <span className="url-title">
                      CortexSH 카페 — NPU 개념 및 실습
                    </span>
                    <span className="url-desc">
                      NPU 개념 · 엣지 AI 가속기 활용 · 실습 예제 커뮤니티 자료
                    </span>
                    <span className="url-addr">
                      cafe.naver.com/cortexsh/6453
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://tutorials.pytorch.kr/intermediate/realtime_rpi.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDD25"}</span>
                  <div>
                    <span className="url-title">
                      파이토치 한국어 — RPi 실시간 추론 튜토리얼
                    </span>
                    <span className="url-desc">
                      MobileNetV2 양자화로 RPi에서 30fps 실시간 추론 공식 한국어
                      가이드
                    </span>
                    <span className="url-addr">
                      tutorials.pytorch.kr/.../realtime_rpi.html
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://tutorials.pytorch.kr/advanced/super_resolution_with_onnxruntime.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDD04"}</span>
                  <div>
                    <span className="url-title">
                      파이토치 한국어 — ONNX 변환 튜토리얼
                    </span>
                    <span className="url-desc">
                      PyTorch 모델을 ONNX로 변환하고 ONNX Runtime에서 실행하는
                      한국어 가이드
                    </span>
                    <span className="url-addr">
                      tutorials.pytorch.kr/.../super_resolution...
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://community.hailo.ai/t/topic/7190"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDC64"}</span>
                  <div>
                    <span className="url-title">
                      Hailo 커뮤니티 한국어 — RPi5 얼굴인식
                    </span>
                    <span className="url-desc">
                      한국 개발자의 RPi5 + Hailo-8L 얼굴/사람 인식 부저 연동
                      실전 스레드
                    </span>
                    <span className="url-addr">
                      community.hailo.ai/t/topic/7190
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://www.aitimes.com/news/articleView.html?idxno=160363"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDCF0"}</span>
                  <div>
                    <span className="url-title">
                      AI타임스 — 라즈베리파이 Hailo AI 가속기
                    </span>
                    <span className="url-desc">
                      RPi5 AI Kit 출시 기사 — Hailo-8L 13 TOPS 스펙, 가격, 시장
                      분석
                    </span>
                    <span className="url-addr">
                      aitimes.com/news/articleView.html?idxno=160363
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://velog.io/@dust_potato/ONNX%EB%9E%80-1-%EA%B8%B0%EB%B3%B8-%EC%84%A4%EB%AA%85%EA%B3%BC-%EC%9B%90%EB%A6%AC"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\u270F\uFE0F"}</span>
                  <div>
                    <span className="url-title">
                      ONNX란? 기본 설명과 원리 (Velog)
                    </span>
                    <span className="url-desc">
                      ONNX 개념, computation graph, PyTorch 변환 코드 예시 한국어
                      정리
                    </span>
                    <span className="url-addr">
                      velog.io/@dust_potato/ONNX란...
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://pytorch.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83C\uDFE0"}</span>
                  <div>
                    <span className="url-title">
                      PyTorch 한국 사용자 모임
                    </span>
                    <span className="url-desc">
                      파이토치 한국 커뮤니티 공식 사이트 — 한국어 문서, 스터디,
                      번역 프로젝트
                    </span>
                    <span className="url-addr">pytorch.kr</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* 엣지 AI 도구 · 프레임워크 */}
          <div className="url-group">
            <div className="url-gh dev">
              {"\uD83E\uDDE9"} 엣지 AI 도구 {"\u00B7"} 프레임워크
            </div>
            <ul className="url-list">
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://github.com/openvinotoolkit/openvino"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDD37"}</span>
                  <div>
                    <span className="url-title">
                      OpenVINO 추론 최적화 툴킷 (Intel)
                    </span>
                    <span className="url-desc">
                      Intel 공식 AI 추론 최적화 — 라즈베리파이 포함 다양한 엣지
                      디바이스 지원
                    </span>
                    <span className="url-addr">
                      github.com/openvinotoolkit/openvino
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://ubuntu.com/blog/hackers-guide-to-the-raspberry-pi-ai-kit-on-ubuntu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDC27"}</span>
                  <div>
                    <span className="url-title">
                      Ubuntu RPi AI Kit 가이드
                    </span>
                    <span className="url-desc">
                      Ubuntu 24.04에서 Hailo-8L AI Kit Docker 방식 설정 가이드
                    </span>
                    <span className="url-addr">
                      ubuntu.com/blog/hackers-guide-to-the-raspberry-pi-ai-kit...
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://github.com/canonical/pi-ai-kit-ubuntu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDC33"}</span>
                  <div>
                    <span className="url-title">
                      Ubuntu RPi AI Kit Docker 예제 (GitHub)
                    </span>
                    <span className="url-desc">
                      Ubuntu에서 Docker 사용 Raspberry Pi AI Kit 실행 Canonical
                      공식 예제
                    </span>
                    <span className="url-addr">
                      github.com/canonical/pi-ai-kit-ubuntu
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://github.com/SharpAI/DeepCamera"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDCF9"}</span>
                  <div>
                    <span className="url-title">
                      오픈소스 AI CCTV 플랫폼 — DeepCamera
                    </span>
                    <span className="url-desc">
                      얼굴 인식, 낙상 감지, 차량 감지, Person Re-ID 지원
                      오픈소스 시스템
                    </span>
                    <span className="url-addr">
                      github.com/SharpAI/DeepCamera
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://mlcommons.org/working-groups/benchmarks/tiny/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDCCF"}</span>
                  <div>
                    <span className="url-title">
                      MLPerf Tiny 벤치마크 (MLCommons)
                    </span>
                    <span className="url-desc">
                      마이크로컨트롤러 등 극저전력 시스템을 위한 공식 ML 성능
                      벤치마크
                    </span>
                    <span className="url-addr">
                      mlcommons.org/working-groups/benchmarks/tiny/
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* 한국 기업 AI 블로그 */}
          <div className="url-group">
            <div className="url-gh corp">
              {"\uD83C\uDFE2"} 한국 기업 AI 블로그
            </div>
            <ul className="url-list">
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://news.samsungsemiconductor.com/kr/%EC%B0%A8%EC%84%B8%EB%8C%80-%EB%94%A5%EB%9F%AC%EB%8B%9D-%EA%B8%B0%EC%88%A0-%EC%98%A8-%EB%94%94%EB%B0%94%EC%9D%B4%EC%8A%A4on-device-ai%EB%9E%80/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDCF1"}</span>
                  <div>
                    <span className="url-title">
                      삼성반도체 — 온디바이스(On-Device) AI란?
                    </span>
                    <span className="url-desc">
                      온디바이스 AI 개념, 클라우드 AI 차이, 엑시노스 NPU 적용 사례 한국어
                      해설
                    </span>
                    <span className="url-addr">
                      news.samsungsemiconductor.com/kr/...
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://semiconductor.samsung.com/kr/news-events/tech-blog/on-the-edge-how-edge-ai-is-reshaping-the-future/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83C\uDF10"}</span>
                  <div>
                    <span className="url-title">
                      삼성반도체 — 엣지 AI가 미래를 재구성하다
                    </span>
                    <span className="url-desc">
                      엣지 AI 정의, 장점, 산업별 활용 사례를 삼성 반도체 관점에서 설명
                    </span>
                    <span className="url-addr">
                      semiconductor.samsung.com/kr/.../edge-ai...
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://semiconductor.samsung.com/kr/support/tools-resources/dictionary/the-neural-processing-unit-npu-a-brainy-next-generation-semiconductor/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83E\uDDE0"}</span>
                  <div>
                    <span className="url-title">
                      삼성반도체 용어사전 — NPU(신경 처리 장치)
                    </span>
                    <span className="url-desc">
                      NPU 정의, CPU/GPU와의 차이, 스마트폰 내 역할을 삼성이 정리한 공식
                      용어 해설
                    </span>
                    <span className="url-addr">
                      semiconductor.samsung.com/kr/.../dictionary/npu...
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://www.samsungsds.com/kr/insights/ondevice-ai-and-cloud-ai.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\u2696\uFE0F"}</span>
                  <div>
                    <span className="url-title">
                      삼성SDS — 클라우드 AI vs 온디바이스 AI
                    </span>
                    <span className="url-desc">
                      두 아키텍처의 기술적 차이와 상호보완 관계를 상세하게 정리
                    </span>
                    <span className="url-addr">
                      samsungsds.com/kr/.../ondevice-ai-and-cloud-ai...
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://news.skhynix.co.kr/all-around-ai-5/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDCBE"}</span>
                  <div>
                    <span className="url-title">
                      SK하이닉스 — 스마트폰과 온디바이스 AI의 미래
                    </span>
                    <span className="url-desc">
                      온디바이스 AI 개념, 메모리 반도체 연관성, NPU/HBM 역할 초보자 친화
                      설명
                    </span>
                    <span className="url-addr">
                      news.skhynix.co.kr/all-around-ai-5/
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://news.lxsemicon.com/9581"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDD2C"}</span>
                  <div>
                    <span className="url-title">
                      LX세미콘 — NPU란? AI 반도체 패러다임의 주인공
                    </span>
                    <span className="url-desc">
                      CPU/GPU/NPU 3자 비교, NPU가 AI 반도체 주인공이 된 이유, TOPS 해석
                      방법
                    </span>
                    <span className="url-addr">
                      news.lxsemicon.com/9581
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://blogs.nvidia.co.kr/blog/deeplearning_training/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDFE2"}</span>
                  <div>
                    <span className="url-title">
                      NVIDIA 한국어 — 딥러닝 훈련과 추론의 차이
                    </span>
                    <span className="url-desc">
                      AI 학습(Training)과 추론(Inference) 차이를 비유와 함께 한국어로 쉽게
                      설명
                    </span>
                    <span className="url-addr">
                      blogs.nvidia.co.kr/blog/deeplearning_training/
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://blogs.nvidia.co.kr/blog/what-is-edge-computing/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDFE9"}</span>
                  <div>
                    <span className="url-title">
                      NVIDIA 한국어 — 엣지 컴퓨팅이란?
                    </span>
                    <span className="url-desc">
                      엣지 컴퓨팅 개념, 클라우드와 차이, 활용 사례를 NVIDIA가 한국어로 설명
                    </span>
                    <span className="url-addr">
                      blogs.nvidia.co.kr/blog/what-is-edge-computing/
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://devocean.sk.com/blog/techBoardDetail.do?ID=166712&boardType=techBlog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDCE1"}</span>
                  <div>
                    <span className="url-title">
                      SK Devocean — 온디바이스 AI, 무엇이 다를까요?
                    </span>
                    <span className="url-desc">
                      클라우드 AI vs 온디바이스 AI 차이, NPU 필요성을 SK텔레콤 관점에서
                      설명
                    </span>
                    <span className="url-addr">
                      devocean.sk.com/.../166712
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://www.lgcns.com/blog/it-trend/51820/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83C\uDFED"}</span>
                  <div>
                    <span className="url-title">
                      LG CNS — 빅테크 기업의 온디바이스 AI 활용법
                    </span>
                    <span className="url-desc">
                      구글·애플·삼성 등 빅테크 온디바이스 AI 전략, NPU 칩 역할, 하이브리드
                      AI 개념
                    </span>
                    <span className="url-addr">
                      lgcns.com/blog/it-trend/51820/
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://blog-ko.superb-ai.com/real-time-ai-inference-edge-ai-innovation/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\u26A1"}</span>
                  <div>
                    <span className="url-title">
                      Superb AI — 현장 실시간 AI 추론의 혁신, 엣지 AI란?
                    </span>
                    <span className="url-desc">
                      엣지 AI 정의, AI 추론 개념, 실시간 처리 필요성을 체계적으로 한국어
                      설명
                    </span>
                    <span className="url-addr">
                      blog-ko.superb-ai.com/.../edge-ai-innovation/
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* AI 용어 사전 · 개념 해설 */}
          <div className="url-group">
            <div className="url-gh ref">
              {"\uD83D\uDCD6"} AI 용어 사전 {"\u00B7"} 개념 해설
            </div>
            <ul className="url-list">
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://learn.microsoft.com/ko-kr/azure/machine-learning/concept-onnx?view=azureml-api-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDCD8"}</span>
                  <div>
                    <span className="url-title">
                      Microsoft Learn 한국어 — ONNX 런타임 및 모델
                    </span>
                    <span className="url-desc">
                      ONNX 개념, ONNX Runtime 역할, Python API까지 Microsoft 공식 한국어
                      문서
                    </span>
                    <span className="url-addr">
                      learn.microsoft.com/ko-kr/.../concept-onnx
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://namu.wiki/w/%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%20%EC%B9%A9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83C\uDF31"}</span>
                  <div>
                    <span className="url-title">
                      나무위키 — 인공지능 칩 (NPU {"\u00B7"} AI 가속기)
                    </span>
                    <span className="url-desc">
                      CPU, GPU, NPU, TPU, FPGA 등 AI 칩 전반을 망라한 한국어 위키
                    </span>
                    <span className="url-addr">
                      namu.wiki/w/인공지능 칩
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://namu.wiki/w/%EC%98%A8%EB%94%94%EB%B0%94%EC%9D%B4%EC%8A%A4%20%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDCF2"}</span>
                  <div>
                    <span className="url-title">
                      나무위키 — 온디바이스 인공지능
                    </span>
                    <span className="url-desc">
                      온디바이스 AI 정의, 역사, 장단점, 주요 기기별 사례 한국어 위키 정리
                    </span>
                    <span className="url-addr">
                      namu.wiki/w/온디바이스 인공지능
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://ko.wikipedia.org/wiki/%EA%B0%9C%EB%B0%A9%ED%98%95_%EC%8B%A0%EA%B2%BD%EB%A7%9D_%EA%B5%90%ED%99%98"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDCD9"}</span>
                  <div>
                    <span className="url-title">
                      위키백과 — 개방형 신경망 교환 (ONNX)
                    </span>
                    <span className="url-desc">
                      ONNX 역사, 개발 주체(Meta+Microsoft), 지원 프레임워크 한국어
                      위키백과
                    </span>
                    <span className="url-addr">
                      ko.wikipedia.org/wiki/개방형_신경망_교환
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://ko.wikipedia.org/wiki/AI_%EA%B0%80%EC%86%8D%EA%B8%B0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDCDA"}</span>
                  <div>
                    <span className="url-title">
                      위키백과 — AI 가속기
                    </span>
                    <span className="url-desc">
                      AI 가속기의 정의와 분류를 정리한 한국어 위키백과 항목
                    </span>
                    <span className="url-addr">
                      ko.wikipedia.org/wiki/AI_가속기
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://www.aitimes.kr/news/articleView.html?idxno=30227"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDCF0"}</span>
                  <div>
                    <span className="url-title">
                      인공지능신문 — NPU란? 온디바이스 생성 AI의 핵심
                    </span>
                    <span className="url-desc">
                      NPU 구조적 특성, 이기종 컴퓨팅 개념, 온디바이스 AI 역할 심층 해설
                    </span>
                    <span className="url-addr">
                      aitimes.kr/news/.../30227
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://www.aitimes.com/news/articleView.html?idxno=137640"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDCBB"}</span>
                  <div>
                    <span className="url-title">
                      AI타임스 — GPU를 대신할 새로운 AI 반도체, NPU
                    </span>
                    <span className="url-desc">
                      GPU와 NPU 차이, NPU 등장 배경과 특성을 시리즈 기사로 설명
                    </span>
                    <span className="url-addr">
                      aitimes.com/news/.../137640
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://ahha.ai/2024/08/13/ondeviceai/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDCA1"}</span>
                  <div>
                    <span className="url-title">
                      AHHA Labs — 온디바이스 AI란? (2024 급부상 트렌드)
                    </span>
                    <span className="url-desc">
                      온디바이스 AI 개념, 클라우드 AI 비교, 경량화 필요성을 산업 관점에서
                      설명
                    </span>
                    <span className="url-addr">
                      ahha.ai/2024/08/13/ondeviceai/
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://ahha.ai/2024/12/09/ai-accelerator-2/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83C\uDFAF"}</span>
                  <div>
                    <span className="url-title">
                      AHHA Labs — AI 가속기 선택 가이드 (NPU{"\u00B7"}GPU{"\u00B7"}VPU)
                    </span>
                    <span className="url-desc">
                      NPU TOPS 개념, 가속기 유형별 비교, 산업 현장 선택 기준 상세 설명
                    </span>
                    <span className="url-addr">
                      ahha.ai/2024/12/09/ai-accelerator-2/
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://gaussian37.github.io/dl-concept-quantization/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDD22"}</span>
                  <div>
                    <span className="url-title">
                      gaussian37 — 딥러닝 양자화(Quantization)와 QAT
                    </span>
                    <span className="url-desc">
                      FP32{"\u2192"}INT8 변환 원리, 양자화 3종류, 모델 크기 1/4 효과를
                      코드와 함께 설명
                    </span>
                    <span className="url-addr">
                      gaussian37.github.io/dl-concept-quantization/
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://www.mobilint.com/post/what-is-an-npu-a-simplified-guide-to-get-you-started"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83E\uDDE9"}</span>
                  <div>
                    <span className="url-title">
                      Mobilint — NPU란 무엇인가요? 반도체 쉽게 알아가기
                    </span>
                    <span className="url-desc">
                      NPU 전문 반도체 기업이 직접 작성한 NPU 입문 한국어 설명
                    </span>
                    <span className="url-addr">
                      mobilint.com/post/what-is-an-npu...
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://brunch.co.kr/@synabreu/97"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83C\uDF3F"}</span>
                  <div>
                    <span className="url-title">
                      Brunch — TinyML 세계에 여러분을 초대합니다!
                    </span>
                    <span className="url-desc">
                      TinyML 개념, 초저전력 임베디드 디바이스 머신러닝, Arduino 활용 한국어
                      소개
                    </span>
                    <span className="url-addr">
                      brunch.co.kr/@synabreu/97
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://www.qualcomm.com/news/onq/2024/02/what-is-an-npu-and-why-is-it-key-to-unlocking-on-device-generative-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDD35"}</span>
                  <div>
                    <span className="url-title">
                      Qualcomm — NPU란? 온디바이스 생성 AI의 핵심 (영문)
                    </span>
                    <span className="url-desc">
                      Snapdragon NPU 구조, INT4 지원 45 TOPS, 온디바이스 생성 AI 원리
                      공식 설명
                    </span>
                    <span className="url-addr">
                      qualcomm.com/news/.../what-is-an-npu...
                    </span>
                  </div>
                </a>
              </li>
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://www.ibm.com/think/topics/npu-vs-gpu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83D\uDD37"}</span>
                  <div>
                    <span className="url-title">
                      IBM — NPU vs GPU: 무엇이 다른가? (영문)
                    </span>
                    <span className="url-desc">
                      NPU와 GPU 아키텍처 차이, 에너지 효율, 사용 사례를 IBM이 체계적으로
                      비교
                    </span>
                    <span className="url-addr">
                      ibm.com/think/topics/npu-vs-gpu
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* YouTube */}
          <div className="url-group">
            <div className="url-gh yt">
              {"\u25B6"} 유튜브 강의
            </div>
            <ul className="url-list">
              <li className="url-item">
                <a
                  className="url-link"
                  href="https://www.youtube.com/watch?v=LN6RGQI3CGw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="url-icon">{"\uD83C\uDFAC"}</span>
                  <div>
                    <span className="url-title">
                      RPi5 {"\u00D7"} Hailo-8L 엣지 AI 마스터 가이드 (원본
                      강의)
                    </span>
                    <span className="url-desc">
                      사람 감지 · 동일 인물 확인 · 쓰러짐 감지 구현 전 과정
                    </span>
                    <span className="url-addr">
                      youtube.com/watch?v=LN6RGQI3CGw
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="wrap">
        {/* 엣지 AI */}
        <div className="section reveal" id="edge" ref={setRevealRef(0)}>
          <div className="sec-eyebrow">01 / 엣지 AI 핵심 개념</div>
          <h2 className="sec-title">엣지 AI란 무엇인가?</h2>
          <p className="sec-sub">
            클라우드 없이 현장에서 직접 AI를 실행 — &quot;CCTV 자체에 두뇌를
            달아주는 것&quot;
          </p>

          <div className="concept-grid">
            <div className="cc or">
              <div className="cc-icon">{"\uD83D\uDCE1"}</div>
              <h3>엣지 AI 정의</h3>
              <p>
                데이터가 생성되는 현장(카메라, 센서)에서 AI 추론을 직접
                실행하는 방식. 클라우드로 데이터를 보낼 필요 없이 로컬에서 즉시
                분석하고 결과를 냅니다.
              </p>
            </div>
            <div className="cc bl">
              <div className="cc-icon">{"\u2696\uFE0F"}</div>
              <h3>Cloud AI vs Edge AI</h3>
              <p>
                <strong>클라우드:</strong> 영상 {"\u2192"} 서버 전송{" "}
                {"\u2192"} 분석 {"\u2192"} 결과 수신. 인터넷 필수, 수백ms
                지연, 보안 위험.
                <br />
                <strong>엣지:</strong> 영상 {"\u2192"} 현장 즉시 분석{" "}
                {"\u2192"} 결과만 전송. 오프라인 가능, 수ms 반응, 프라이버시
                보장.
              </p>
            </div>
            <div className="cc gr">
              <div className="cc-icon">{"\u2705"}</div>
              <h3>엣지 AI 핵심 장점</h3>
              <p>
                인터넷 없이 동작 · 즉각 반응 · 민감 데이터 외부 유출 없음 ·
                서버 비용 절감 · LED 전구 수준(5~15W) 저전력 운영
              </p>
            </div>
          </div>

          <table className="tbl">
            <thead>
              <tr>
                <th>구분</th>
                <th>클라우드 AI</th>
                <th>엣지 AI (RPi5+Hailo)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>인터넷 필요</td>
                <td className="tr">필수</td>
                <td className="tg">불필요</td>
              </tr>
              <tr>
                <td>응답 지연</td>
                <td className="tr">수십~수백 ms</td>
                <td className="tg">수 ms (실시간)</td>
              </tr>
              <tr>
                <td>데이터 보안</td>
                <td className="tr">외부 서버 전송</td>
                <td className="tg">완전 로컬 처리</td>
              </tr>
              <tr>
                <td>서버 비용</td>
                <td className="tr">지속 발생</td>
                <td className="tg">초기 HW만</td>
              </tr>
              <tr>
                <td>전력 소비</td>
                <td className="to">서버 수백 W</td>
                <td className="tg">~15W</td>
              </tr>
              <tr>
                <td>오프라인 동작</td>
                <td className="tr">불가</td>
                <td className="tg">완전 가능</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* NPU */}
        <div className="section reveal" id="npu" ref={setRevealRef(1)}>
          <div className="sec-eyebrow">02 / NPU 핵심 개념</div>
          <h2 className="sec-title">NPU란? — GPU와 무엇이 다른가</h2>
          <p className="sec-sub">
            AI 추론 전용으로 설계된 초저전력 고효율 프로세서
          </p>

          <div className="concept-grid">
            <div className="cc or">
              <div className="cc-icon">{"\uD83E\uDDE0"}</div>
              <h3>NPU 정의</h3>
              <p>
                Neural Processing Unit. ML/AI 추론 전용 칩. CPU·GPU처럼 범용
                연산은 못하지만 AI 추론에서는 압도적 효율. 한국어:{" "}
                <strong>AI 가속기</strong>.
              </p>
            </div>
            <div className="cc bl">
              <div className="cc-icon">{"\uD83C\uDFED"}</div>
              <h3>GPU — 학습(Training) 전용</h3>
              <p>
                AI 모델을 가르치는 <strong>대형 공장</strong>. 방대한 데이터
                학습 최적화. 수백~수천 W 소비, 데이터센터 환경 필요. 추론도
                되지만 비효율적.
              </p>
            </div>
            <div className="cc gr">
              <div className="cc-icon">{"\uD83C\uDFB0"}</div>
              <h3>NPU — 추론(Inference) 전용</h3>
              <p>
                학습된 모델을 현장에서 빠르게 실행하는{" "}
                <strong>현장 자판기</strong>. 새 학습 불가. 수 W 저전력, 초소형,
                현장 설치 가능. Hailo-8L = 13 TOPS.
              </p>
            </div>
          </div>

          <div className="hw-grid">
            <div className="hw-card">
              <div className="hw-head rpi">
                {"\uD83C\uDF53"} Raspberry Pi 5
              </div>
              <ul className="hw-rows">
                <li className="hw-row">
                  <span className="hw-key">CPU</span>
                  <span className="hw-val">Cortex-A76 2.4GHz 쿼드코어</span>
                </li>
                <li className="hw-row">
                  <span className="hw-key">RAM 권장</span>
                  <span className="hw-val g">8GB LPDDR4X</span>
                </li>
                <li className="hw-row">
                  <span className="hw-key">RAM 최소</span>
                  <span className="hw-val w">4GB (매우 빠듯)</span>
                </li>
                <li className="hw-row">
                  <span className="hw-key">NPU 연결</span>
                  <span className="hw-val">PCIe 2.0 인터페이스</span>
                </li>
                <li className="hw-row">
                  <span className="hw-key">카메라</span>
                  <span className="hw-val">22핀 Mini CSI</span>
                </li>
                <li className="hw-row">
                  <span className="hw-key">전원</span>
                  <span className="hw-val w">5V 5A 27W 필수</span>
                </li>
                <li className="hw-row">
                  <span className="hw-key">OS</span>
                  <span className="hw-val w">64-bit aarch64 필수</span>
                </li>
              </ul>
            </div>
            <div className="hw-card">
              <div className="hw-head hailo">
                {"\uD83E\uDDE0"} Hailo-8L AI Accelerator
              </div>
              <ul className="hw-rows">
                <li className="hw-row">
                  <span className="hw-key">성능</span>
                  <span className="hw-val g">
                    13 TOPS (초당 13조 연산)
                  </span>
                </li>
                <li className="hw-row">
                  <span className="hw-key">폼팩터</span>
                  <span className="hw-val">M.2 Key-M / AI HAT+</span>
                </li>
                <li className="hw-row">
                  <span className="hw-key">연결</span>
                  <span className="hw-val">PCIe FFC 케이블</span>
                </li>
                <li className="hw-row">
                  <span className="hw-key">HailoRT</span>
                  <span className="hw-val">v4.18.0</span>
                </li>
                <li className="hw-row">
                  <span className="hw-key">TAPPAS</span>
                  <span className="hw-val">v3.29.1</span>
                </li>
                <li className="hw-row">
                  <span className="hw-key">쿨링</span>
                  <span className="hw-val w">능동 쿨러 필수</span>
                </li>
                <li className="hw-row">
                  <span className="hw-key">역할</span>
                  <span className="hw-val g">추론(Inference) 전담</span>
                </li>
              </ul>
            </div>
          </div>

          <table className="tbl">
            <thead>
              <tr>
                <th>비교 항목</th>
                <th>CPU 단독 (RPi5만)</th>
                <th>NPU 추가 (Hailo-8L)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>YOLOv8 추론 FPS</td>
                <td className="tr">~2{"\u2013"}5 FPS (버벅임)</td>
                <td className="tg">~60 FPS (실시간)</td>
              </tr>
              <tr>
                <td>전력 효율</td>
                <td className="to">CPU 풀로드 급증</td>
                <td className="tg">NPU 전담으로 효율적</td>
              </tr>
              <tr>
                <td>실시간 처리</td>
                <td className="tr">어려움</td>
                <td className="tg">가능</td>
              </tr>
              <tr>
                <td>멀티 태스크</td>
                <td className="tr">CPU 100% 점유</td>
                <td className="tg">CPU 여유 유지</td>
              </tr>
              <tr>
                <td>추가 비용</td>
                <td className="tg">없음</td>
                <td className="to">HAT 구매 필요</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ONNX Runtime */}
        <div className="section reveal" id="onnx" ref={setRevealRef(2)}>
          <div className="sec-eyebrow">03 / ONNX Runtime</div>
          <h2 className="sec-title">ONNX Runtime {"\u00D7"} Raspberry Pi</h2>
          <p className="sec-sub">
            Microsoft 오픈소스 추론 엔진 — Hailo 없이도 RPi에서 AI 추론 가능한
            입문 경로
          </p>

          <div className="concept-grid">
            <div className="cc or">
              <div className="cc-icon">{"\u26A1"}</div>
              <h3>ONNX Runtime이란?</h3>
              <p>
                Microsoft 오픈소스 AI 추론 엔진. ONNX 포맷 모델을 Windows,
                Linux, ARM(RPi 포함) 등 다양한 플랫폼에서 최적화 실행. pip
                하나로 설치.
              </p>
            </div>
            <div className="cc bl">
              <div className="cc-icon">{"\uD83D\uDD04"}</div>
              <h3>ONNX 포맷이란?</h3>
              <p>
                Open Neural Network Exchange. PyTorch, TensorFlow 등 다양한
                프레임워크 모델을 하나의 표준 포맷으로 변환.{" "}
                <strong>&quot;AI 모델의 PDF 포맷&quot;</strong>.
              </p>
            </div>
            <div className="cc gr">
              <div className="cc-icon">{"\uD83C\uDF53"}</div>
              <h3>RPi에서 ONNX Runtime</h3>
              <p>
                pip 하나로 설치. YOLOv8 {"\u2192"} ONNX 변환 후 RPi에서 직접
                실행. Hailo 없이도 기본 추론 가능. 교육 입문 단계에 최적.
              </p>
            </div>
          </div>

          <div className="cw">
            <div className="cl">
              BASH — RPi에서 ONNX Runtime 설치 및 테스트
            </div>
            <div className="cb">
              <span className="cm"># ONNX Runtime 설치 (ARM64 지원)</span>
              <br />
              <span className="kw">pip install</span> onnxruntime
              <br />
              <br />
              <span className="cm">
                # YOLOv8 모델 ONNX 변환 (PC에서)
              </span>
              <br />
              <span className="kw">pip install</span> ultralytics
              <br />
              <span className="kw">yolo</span> export model=yolov8n.pt
              format=onnx imgsz=640
              <br />
              <br />
              <span className="cm">
                # RPi에서 ONNX 모델 추론 (Python)
              </span>
              <br />
              <span className="kw">import</span> onnxruntime{" "}
              <span className="kw">as</span> ort
              <br />
              session = ort.InferenceSession(
              <span className="st">&quot;yolov8n.onnx&quot;</span>)
              <br />
              outputs = session.run(<span className="kw">None</span>,{" "}
              {"{"}
              <span className="st">&quot;images&quot;</span>: input_tensor
              {"}"})
            </div>
          </div>

          <table className="tbl">
            <thead>
              <tr>
                <th>비교</th>
                <th>ONNX Runtime (CPU)</th>
                <th>Hailo-8L NPU</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>추가 HW 필요</td>
                <td className="tg">불필요</td>
                <td className="to">HAT 구매 필요</td>
              </tr>
              <tr>
                <td>설치</td>
                <td className="tm">pip install onnxruntime</td>
                <td className="tm">sudo apt install hailo-all</td>
              </tr>
              <tr>
                <td>추론 속도</td>
                <td className="to">보통 (CPU 의존)</td>
                <td className="tg">월등히 빠름 (13 TOPS)</td>
              </tr>
              <tr>
                <td>모델 포맷</td>
                <td className="tm">.onnx</td>
                <td className="tm">.hef (Hailo 전용)</td>
              </tr>
              <tr>
                <td>모델 변환</td>
                <td className="tg">PyTorch{"\u2192"}ONNX 용이</td>
                <td className="to">Hailo DFC 컴파일 필요</td>
              </tr>
              <tr>
                <td>학습 곡선</td>
                <td className="tg">낮음 (Python 표준)</td>
                <td className="to">높음 (GStreamer)</td>
              </tr>
              <tr>
                <td>교육 단계</td>
                <td className="tg">입문 — 먼저 학습 권장</td>
                <td className="tb">심화 — 이후 적합</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 커리큘럼 */}
        <div
          className="section reveal"
          id="curriculum"
          ref={setRevealRef(3)}
        >
          <div className="sec-eyebrow">04 / 교육 커리큘럼 설계</div>
          <h2 className="sec-title">
            RPi5 + 엣지 AI 교육 커리큘럼 구성안
          </h2>
          <p className="sec-sub">
            개념 이해 {"\u2192"} ONNX Runtime 입문 {"\u2192"} Hailo NPU 심화
            단계 구성 권장
          </p>

          <div className="cur-wrap">
            <table className="cur-tbl">
              <thead>
                <tr>
                  <th>단계</th>
                  <th>주제</th>
                  <th>핵심 내용</th>
                  <th>실습</th>
                  <th>난이도</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="wb">DAY 1-1</span>
                  </td>
                  <td>
                    <strong>엣지 AI 개념</strong>
                  </td>
                  <td>Cloud vs Edge · NPU vs GPU · AI 학습 vs 추론</td>
                  <td>슬라이드 · 토론</td>
                  <td>
                    <span className="db d1">기초</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="wb">DAY 1-2</span>
                  </td>
                  <td>
                    <strong>하드웨어 셋업</strong>
                  </td>
                  <td>
                    RPi5 OS 설치 · PCIe 활성화 · Hailo HAT 장착
                  </td>
                  <td>직접 설치 실습</td>
                  <td>
                    <span className="db d1">기초</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="wb">DAY 2-1</span>
                  </td>
                  <td>
                    <strong>ONNX Runtime 입문</strong>
                  </td>
                  <td>
                    ONNX 포맷 이해 · pip 설치 · 기본 추론 실행
                  </td>
                  <td>Python 코드 실행</td>
                  <td>
                    <span className="db d1">기초</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="wb">DAY 2-2</span>
                  </td>
                  <td>
                    <strong>YOLOv8 {"\u00D7"} ONNX</strong>
                  </td>
                  <td>모델 ONNX 변환 · RPi에서 객체 탐지</td>
                  <td>실시간 카메라 탐지</td>
                  <td>
                    <span className="db d2">중급</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="wb">DAY 3-1</span>
                  </td>
                  <td>
                    <strong>Hailo 소프트웨어 스택</strong>
                  </td>
                  <td>
                    HailoRT · TAPPAS · GStreamer 파이프라인 구조
                  </td>
                  <td>hailortcli 테스트</td>
                  <td>
                    <span className="db d2">중급</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="wb">DAY 3-2</span>
                  </td>
                  <td>
                    <strong>YOLOv8 실시간 탐지</strong>
                  </td>
                  <td>
                    60FPS 객체 탐지 · 카메라 연동 · 결과 시각화
                  </td>
                  <td>실시간 영상 탐지</td>
                  <td>
                    <span className="db d2">중급</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="wb">DAY 4-1</span>
                  </td>
                  <td>
                    <strong>RetinaFace 얼굴 탐지</strong>
                  </td>
                  <td>
                    GStreamer 파이프라인 · libcamerasrc 연동
                  </td>
                  <td>실시간 얼굴 탐지</td>
                  <td>
                    <span className="db d3">심화</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="wb">DAY 4-2</span>
                  </td>
                  <td>
                    <strong>ArcFace 얼굴 인식</strong>
                  </td>
                  <td>
                    특징점 추출 · 신원 매칭 · 출입 관리 시스템
                  </td>
                  <td>인물 등록 · 인식</td>
                  <td>
                    <span className="db d3">심화</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="wb">최종</span>
                  </td>
                  <td>
                    <strong>실전 프로젝트</strong>
                  </td>
                  <td>
                    사람 감지 + 동일 인물 확인 + 쓰러짐 감지 통합
                  </td>
                  <td>프로젝트 발표</td>
                  <td>
                    <span className="db d3">심화</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Q&A */}
        <div className="section reveal" id="qa" ref={setRevealRef(4)}>
          <div className="sec-eyebrow">05 / 발표 Q&A 예상 질문</div>
          <h2 className="sec-title">청중 예상 질문 &amp; 핵심 답변</h2>
          <p className="sec-sub">클릭하면 상세 답변이 펼쳐집니다</p>

          <div className="qa-list">
            {/* Q1 */}
            <div className="qa-item">
              <button
                className={`qa-q${openQA === 0 ? " open" : ""}`}
                onClick={() => toggleQA(0)}
              >
                <span className="qb">NPU</span>
                <span className="qt">
                  NPU와 GPU의 차이를 쉽게 설명해주세요
                </span>
                <span className="qa-arr">{"\u25B6"}</span>
              </button>
              <div className={`qa-a${openQA === 0 ? " open" : ""}`}>
                <p>
                  <strong>비유:</strong> GPU는 &quot;대형 공장&quot;입니다. AI
                  모델을 처음부터 가르치는 학습(Training)에 최적화,
                  수백~수천 와트 소비, 데이터센터에 있습니다.
                </p>
                <p>
                  NPU는 &quot;현장 자판기&quot;입니다. 이미 학습된 AI를
                  빠르게 실행(추론)하는 데 특화. 새것을 배우진 못하지만 작고,
                  전기 적게 먹고, 어디든 설치 가능합니다.
                </p>
                <div className="hbox">
                  <strong>핵심:</strong> GPU = 학습용(데이터센터) · NPU =
                  추론용(현장 엣지). Hailo-8L은 13 TOPS(초당 13조 연산)를 수
                  와트로 구현합니다.
                </div>
              </div>
            </div>

            {/* Q2 */}
            <div className="qa-item">
              <button
                className={`qa-q${openQA === 1 ? " open" : ""}`}
                onClick={() => toggleQA(1)}
              >
                <span className="qb">EDGE AI</span>
                <span className="qt">
                  왜 클라우드 AI 대신 엣지 AI를 써야 하나요?
                </span>
                <span className="qa-arr">{"\u25B6"}</span>
              </button>
              <div className={`qa-a${openQA === 1 ? " open" : ""}`}>
                <ul>
                  <li>
                    <strong>지연 시간:</strong> 클라우드는 수십~수백 ms 지연.
                    쓰러짐 감지 알람처럼 즉각 반응이 필요한 시스템에서
                    치명적입니다.
                  </li>
                  <li>
                    <strong>프라이버시:</strong> 병원·공장·가정 CCTV 영상이
                    외부 서버로 나가면 개인정보 문제 발생. 엣지는 영상이 기기
                    밖으로 나가지 않습니다.
                  </li>
                  <li>
                    <strong>비용:</strong> 클라우드는 사용량 비례 비용이 계속
                    발생. RPi5+Hailo는 초기 약 30만원 투자 후 추가 비용 없음.
                  </li>
                  <li>
                    <strong>오프라인:</strong> 인터넷이 끊겨도 동작.
                    공장·현장·도서 지역 등에서 필수.
                  </li>
                </ul>
              </div>
            </div>

            {/* Q3 */}
            <div className="qa-item">
              <button
                className={`qa-q${openQA === 2 ? " open" : ""}`}
                onClick={() => toggleQA(2)}
              >
                <span className="qb">ONNX</span>
                <span className="qt">
                  ONNX Runtime과 Hailo를 함께 쓰나요, 아니면 둘 중
                  선택인가요?
                </span>
                <span className="qa-arr">{"\u25B6"}</span>
              </button>
              <div className={`qa-a${openQA === 2 ? " open" : ""}`}>
                <p>
                  <strong>
                    역할이 다르므로 함께 사용하거나 상황에 맞게
                    선택합니다.
                  </strong>
                </p>
                <div className="ibox">
                  <strong>ONNX Runtime:</strong> Hailo 없이 RPi CPU에서 AI
                  추론 가능. pip 설치만으로 시작. 교육 입문에 적합. 속도는
                  느리지만 범용적.
                </div>
                <div className="hbox">
                  <strong>Hailo NPU:</strong> .onnx 모델을 .hef로 컴파일해
                  NPU에서 실행. 60FPS 실시간 처리. 압도적 속도지만 학습 곡선이
                  높음.
                </div>
                <p>
                  <strong>실전 워크플로우:</strong> PC에서 PyTorch 학습{" "}
                  {"\u2192"} ONNX 변환 {"\u2192"} ONNX Runtime으로 RPi 호환
                  검증 {"\u2192"} Hailo 컴파일러로 .hef 변환 {"\u2192"}{" "}
                  NPU에서 최고 성능 실행
                </p>
              </div>
            </div>

            {/* Q4 */}
            <div className="qa-item">
              <button
                className={`qa-q${openQA === 3 ? " open" : ""}`}
                onClick={() => toggleQA(3)}
              >
                <span className="qb">HW</span>
                <span className="qt">
                  RAM이 왜 8GB가 필요한가요? 4GB면 안 되나요?
                </span>
                <span className="qa-arr">{"\u25B6"}</span>
              </button>
              <div className={`qa-a${openQA === 3 ? " open" : ""}`}>
                <p>
                  4GB도 동작하지만 매우 빠듯합니다. 실제 메모리 분포:
                </p>
                <ul>
                  <li>
                    OS (Raspberry Pi OS 64-bit): <strong>~1.5GB</strong>
                  </li>
                  <li>
                    비디오 처리 (Full HD OpenCV):{" "}
                    <strong>500MB ~ 1GB</strong>
                  </li>
                  <li>
                    Hailo 런타임 + 드라이버: <strong>수백 MB</strong>
                  </li>
                  <li>
                    AI 모델 (YOLOv8 등): <strong>10MB ~ 100MB+</strong>
                  </li>
                </ul>
                <div className="hbox">
                  총합이 4GB에 근접 {"\u2192"} 멀티 카메라나 고해상도 처리 시
                  스왑 발생, 성능 급락.{" "}
                  <strong>8GB = 안정적 엣지 AI의 표준</strong>.
                </div>
              </div>
            </div>

            {/* Q5 */}
            <div className="qa-item">
              <button
                className={`qa-q${openQA === 4 ? " open" : ""}`}
                onClick={() => toggleQA(4)}
              >
                <span className="qb">SETUP</span>
                <span className="qt">
                  PCIe를 별도로 활성화해야 하는 이유가 뭔가요?
                </span>
                <span className="qa-arr">{"\u25B6"}</span>
              </button>
              <div className={`qa-a${openQA === 4 ? " open" : ""}`}>
                <p>
                  Raspberry Pi 5는 전력 소비·안전을 위해 기본적으로 PCIe를
                  비활성화합니다.
                </p>
                <p>
                  Hailo-8L은 PCIe로 Pi와 통신하므로,{" "}
                  <code>/boot/firmware/config.txt</code>에{" "}
                  <code>dtparam=pciex1</code>을 추가해 수동 활성화가
                  필요합니다.
                </p>
                <div className="hbox">
                  이 설정 없이 Hailo 장착 시 <code>lspci</code>에서 장치
                  미인식 {"\u2192"} 가장 자주 발생하는 초보 실수입니다.
                </div>
              </div>
            </div>

            {/* Q6 */}
            <div className="qa-item">
              <button
                className={`qa-q${openQA === 5 ? " open" : ""}`}
                onClick={() => toggleQA(5)}
              >
                <span className="qb">MODEL</span>
                <span className="qt">
                  YOLOv8을 선택한 이유는 무엇인가요?
                </span>
                <span className="qa-arr">{"\u25B6"}</span>
              </button>
              <div className={`qa-a${openQA === 5 ? " open" : ""}`}>
                <ul>
                  <li>
                    <strong>Hailo 최적화:</strong> Hailo 가속기가 YOLO
                    아키텍처에 특화되어 최고 시너지 발휘
                  </li>
                  <li>
                    <strong>모델 크기 선택지:</strong> Nano~XLarge까지 RPi5
                    성능에 맞게 선택 가능
                  </li>
                  <li>
                    <strong>다목적:</strong> 객체 탐지 외
                    분할·포즈 추정·분류까지 하나의 프레임워크로 커버
                  </li>
                  <li>
                    <strong>ONNX 연계:</strong>{" "}
                    <code>yolo export format=onnx</code> 한 줄로 변환
                  </li>
                  <li>
                    <strong>커뮤니티:</strong> Ultralytics 공식 지원 + 풍부한
                    한국어 자료
                  </li>
                </ul>
              </div>
            </div>

            {/* Q7 */}
            <div className="qa-item">
              <button
                className={`qa-q${openQA === 6 ? " open" : ""}`}
                onClick={() => toggleQA(6)}
              >
                <span className="qb">COST</span>
                <span className="qt">
                  전체 시스템 구축 비용은 얼마나 드나요?
                </span>
                <span className="qa-arr">{"\u25B6"}</span>
              </button>
              <div className={`qa-a${openQA === 6 ? " open" : ""}`}>
                <ul>
                  <li>
                    Raspberry Pi 5 (8GB): <strong>약 8~10만원</strong>
                  </li>
                  <li>
                    Hailo-8L AI HAT+: <strong>약 7~10만원</strong>
                  </li>
                  <li>
                    Camera Module v3: <strong>약 3~5만원</strong>
                  </li>
                  <li>
                    microSD 64GB+: <strong>약 1~2만원</strong>
                  </li>
                  <li>
                    5V 5A 어댑터: <strong>약 1.5만원</strong>
                  </li>
                  <li>
                    능동 쿨러: <strong>약 0.5~1만원</strong>
                  </li>
                </ul>
                <div className="hbox">
                  <strong>총합: 약 25~30만원</strong> — 클라우드 서버 비용과
                  비교 불가할 정도로 저렴. 전기세도 LED 전구 수준(5~15W)으로
                  거의 없음.
                </div>
              </div>
            </div>

            {/* Q8 */}
            <div className="qa-item">
              <button
                className={`qa-q${openQA === 7 ? " open" : ""}`}
                onClick={() => toggleQA(7)}
              >
                <span className="qb">CAMERA</span>
                <span className="qt">
                  구형 카메라 v1.3을 Pi 5에 연결할 수 있나요?
                </span>
                <span className="qa-arr">{"\u25B6"}</span>
              </button>
              <div className={`qa-a${openQA === 7 ? " open" : ""}`}>
                <p>
                  Camera v1.3은 15핀, Pi 5 CSI 포트는 22핀이라 그대로는 연결
                  불가합니다.
                </p>
                <ul>
                  <li>
                    <strong>필요 부품:</strong> 15{"\u2192"}22핀 FFC 변환
                    케이블 별도 구매 (&quot;15-22 pin camera adapter
                    cable&quot; 검색)
                  </li>
                  <li>
                    <strong>주의:</strong> 금속 접점 방향 확인 필수 — 반대
                    방향이면 인식 안됨
                  </li>
                  <li>
                    <strong>소프트웨어:</strong> OV5647 센서 지원을 위해{" "}
                    <code>sudo apt full-upgrade</code> 최신 업데이트 필수
                  </li>
                  <li>
                    <strong>확인:</strong> <code>libcamera-hello</code> 실행
                    후 화면 출력 확인
                  </li>
                </ul>
                <div className="hbox">
                  신규 프로젝트에는 Camera Module 2 또는 3 사용을 강력
                  권장합니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div
          style={{
            marginBottom: "0.75rem",
            color: "rgba(255,255,255,0.75)",
            fontWeight: 700,
          }}
        >
          {"\uD83D\uDCCB"} 엣지 AI 교육 컨텐츠 제안서 Q&A 참고자료 —
          루트브릭스 · 데이터공작소 TFT
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
            marginBottom: "0.5rem",
          }}
        >
          <a
            href="https://www.raspberrypi.com/documentation/computers/ai.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            RPi AI Docs
          </a>
          <a
            href="https://hailo.ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hailo Official
          </a>
          <a
            href="https://onnxruntime.ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ONNX Runtime
          </a>
          <a
            href="https://onnx.ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ONNX 포맷
          </a>
          <a
            href="https://docs.ultralytics.com/models/yolov8/"
            target="_blank"
            rel="noopener noreferrer"
          >
            YOLOv8 Docs
          </a>
          <a
            href="https://medium.com/@sanjoyg_39525"
            target="_blank"
            rel="noopener noreferrer"
          >
            sanjoyg Medium
          </a>
          <a
            href="https://cafe.naver.com/iloveai/30024"
            target="_blank"
            rel="noopener noreferrer"
          >
            일러브AI 카페
          </a>
          <a
            href="https://blog.naver.com/roboholic84/223485800255"
            target="_blank"
            rel="noopener noreferrer"
          >
            Roboholic84
          </a>
          <a
            href="https://cafe.naver.com/cortexsh/6453"
            target="_blank"
            rel="noopener noreferrer"
          >
            CortexSH
          </a>
          <a
            href="https://www.youtube.com/watch?v=LN6RGQI3CGw"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube 강의
          </a>
        </div>
      </footer>
    </>
  );
}
