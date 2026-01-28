"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { Envelope, Play, FilmSlate, InstagramLogo, LinkedinLogo, YoutubeLogo } from "@phosphor-icons/react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const works = [
  {
    title: "VFX Lighting Reel",
    role: "VFX Lighting Artist",
    description: "Portfolio Showreel",
    link: "https://youtu.be/EM5tJK-B_hA?si=-WBZWy9AMMmKipaI",
  },
  {
    title: "Project Highlight 1",
    role: "VFX Lighting Artist",
    description: "Lighting & Compositing",
    link: "https://youtu.be/lCe0Zic3Lko",
  },
  {
    title: "Project Highlight 2",
    role: "VFX Lighting Artist",
    description: "Lighting & Rendering",
    link: "https://youtu.be/kFqKk1vqNNM",
  },
];

const projects = [
  "몸값",
  "귀공자",
  "콘크리트 마켓",
  "재벌집 막내아들",
  "대행사",
  "법쩐",
  "화란",
  "발레리나",
  "황야",
  "D.P 2",
  "크로스",
  "유쾌한 왕따",
  "폭군",
  "히어로는 아닙니다만",
  "조명가게",
  "조게캐셔로",
  "넉오프",
  "슬픈열대",
  "에스콰이어",
  "백번의 추억",
  "서울자가에 대기업 다니는 김부장 이야기",
];

const stats = [
  { number: "21+", label: "작품 참여" },
  { number: "4년", label: "경력" },
];

export default function Home() {
  const heroRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-950/80 border-b border-gray-800"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-light text-gray-100">김리나</span>
          <div className="flex gap-6 text-sm text-gray-300">
            <a href="#about" className="hover:text-gray-100 transition-colors">
              소개
            </a>
            <a href="#works" className="hover:text-gray-100 transition-colors">
              작품
            </a>
            <a href="#contact" className="hover:text-gray-100 transition-colors">
              연락처
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[200vh] bg-gray-950 w-full overflow-clip"
      >
        {/* Google Gemini Effect Background */}
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
          className="h-screen"
        />

        {/* Hero Content */}
        <div className="sticky top-0 h-screen flex items-center justify-center px-6">
          <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="relative z-10 text-center max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300 text-sm">
              VFX Lighting Artist 김리나
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-2xl md:text-4xl font-extralight mb-6 tracking-tight"
          >
            <span className="gradient-text">빛으로 이야기를</span>
            <br />
            <span className="text-gray-100">그리는 사람</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            안녕하세요, 조명감독 김리나입니다.
            <br />
            빛과 그림자로 감정을 전달하고, 영상에 생명을 불어넣습니다.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <a href="https://www.artstation.com/kimlina" target="_blank" rel="noopener noreferrer">
                <Play className="w-4 h-4" weight="fill" />
                작품 보기
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">
                연락하기
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-gray-400 rounded-full" />
          </motion.div>
        </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 border-y border-gray-800 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-extralight text-gray-200 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-100">
                빛의 예술가,
                <br />
                <span className="gradient-text">김리나입니다</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  12년간 영화와 드라마의 조명을 담당하며, 빛으로 이야기의 감정을
                  전달하는 일을 해왔습니다.
                </p>
                <p>
                  넷플릭스를 포함한 다양한 플랫폼의 작품들에서 조명감독으로
                  활동하며, 한국 영상 콘텐츠의 시각적 완성도를 높이는 데
                  기여하고 있습니다.
                </p>
                <p>
                  매 작품마다 감독의 비전을 이해하고, 배우의 감정선을 섬세하게
                  살려내는 조명 설계를 추구합니다.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Maya", "Nuke", "Arnold", "Substance Painter"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700">
                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                  <div className="text-center">
                    <FilmSlate className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-sm">프로필 이미지</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gray-700/50 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-gray-600 rounded-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="py-24 px-6 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-100">
              주요 작품
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              빛과 그림자로 완성한 작품들을 소개합니다
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {works.map((work, index) => (
              <motion.a
                key={work.title}
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-gray-900 border border-gray-800 rounded-xl overflow-hidden cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-950 flex items-center justify-center">
                  <Play className="w-12 h-12 text-gray-600 group-hover:text-gray-400 transition-colors" weight="fill" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light text-gray-100 mb-1">
                    {work.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {work.description} · {work.role}
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gray-700/0 group-hover:bg-gray-700/10 transition-colors" />
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline" size="lg">
              <a href="https://www.artstation.com/kimlina" target="_blank" rel="noopener noreferrer">
                Artstation에서 더 보기
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Filmography Section */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-100">
              Filmography
            </h2>
            <p className="text-gray-400">
              VFX Lighting Artist로 참여한 프로젝트
            </p>
          </motion.div>

          <div className="flex flex-col gap-2">
            {projects.map((project, index) => (
              <motion.a
                key={project}
                href={`https://www.google.com/search?q=${encodeURIComponent(project + " 영화")}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="px-4 py-3 border-b border-gray-800 text-gray-300 hover:bg-gray-900 hover:text-gray-100 transition-colors flex items-center justify-between group"
              >
                <span>{project}</span>
                <span className="text-gray-600 group-hover:text-gray-400 text-sm">→</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-100">
              함께 작업하고 싶으신가요?
            </h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto">
              새로운 프로젝트에 대한 문의나 협업 제안을 환영합니다.
              <br />
              아래 버튼을 클릭하여 연락해 주세요.
            </p>

            <Button size="lg" className="gap-2">
              <Envelope className="w-4 h-4" />
              이메일 보내기
            </Button>

            <div className="mt-12 flex justify-center gap-8 text-gray-500">
              <a
                href="#"
                className="hover:text-gray-300 transition-colors"
                aria-label="Instagram"
              >
                <InstagramLogo size={28} weight="fill" />
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors"
                aria-label="YouTube"
              >
                <YoutubeLogo size={28} weight="fill" />
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={28} weight="fill" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          <p>&copy; 2024 김리나. All rights reserved.</p>
          <p>조명감독 포트폴리오</p>
        </div>
      </footer>
    </main>
  );
}
