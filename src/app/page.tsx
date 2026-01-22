"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { Envelope, Play, Trophy, FilmSlate, InstagramLogo, LinkedinLogo, YoutubeLogo } from "@phosphor-icons/react";

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
    title: "어둠 속의 빛",
    year: "2024",
    role: "조명감독",
    platform: "Netflix",
    description: "미스터리 스릴러",
  },
  {
    title: "서울의 밤",
    year: "2023",
    role: "조명감독",
    platform: "Netflix",
    description: "로맨틱 드라마",
  },
  {
    title: "시간의 문",
    year: "2023",
    role: "조명감독",
    platform: "Netflix",
    description: "SF 판타지",
  },
  {
    title: "마지막 여정",
    year: "2022",
    role: "조명감독",
    platform: "Netflix",
    description: "액션 어드벤처",
  },
];

const stats = [
  { number: "15+", label: "작품 참여" },
  { number: "8", label: "넷플릭스 작품" },
  { number: "12년", label: "경력" },
  { number: "3", label: "수상 경력" },
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
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-purple-950/80 border-b border-purple-800"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold text-purple-100">김리나</span>
          <div className="flex gap-6 text-sm text-purple-300">
            <a href="#about" className="hover:text-purple-100 transition-colors">
              소개
            </a>
            <a href="#works" className="hover:text-purple-100 transition-colors">
              작품
            </a>
            <a href="#contact" className="hover:text-purple-100 transition-colors">
              연락처
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[200vh] bg-purple-950 w-full overflow-clip"
      >
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="Hero background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-950/50 via-purple-950/70 to-purple-950" />
        </div>

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
            <span className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-purple-800/50 border border-purple-700 text-purple-300 text-sm">
              <Image src="/netflix-logo.svg" alt="Netflix" width={70} height={19} />
              조명감독
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
          >
            <span className="gradient-text">빛으로 이야기를</span>
            <br />
            <span className="text-purple-100">그리는 사람</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-purple-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            안녕하세요, 조명감독 김리나입니다.
            <br />
            빛과 그림자로 감정을 전달하고, 영상에 생명을 불어넣습니다.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <a href="https://www.artstation.com/artwork/P69xe3" target="_blank" rel="noopener noreferrer">
                <Play className="w-4 h-4" />
                작품 보기
              </a>
            </Button>
            <Button variant="outline" size="lg">
              연락하기
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
            className="w-6 h-10 rounded-full border-2 border-purple-600 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-purple-400 rounded-full" />
          </motion.div>
        </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 border-y border-purple-800 bg-purple-900/50">
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
                <div className="text-4xl md:text-5xl font-black text-purple-200 mb-2">
                  {stat.number}
                </div>
                <div className="text-purple-400 text-sm">{stat.label}</div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-100">
                빛의 예술가,
                <br />
                <span className="gradient-text">김리나입니다</span>
              </h2>
              <div className="space-y-4 text-purple-300 leading-relaxed">
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
                {["자연광 활용", "무드 라이팅", "컬러 그레이딩", "야간 촬영"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-purple-800 border border-purple-700 rounded-full text-sm text-purple-300"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-purple-800 to-purple-900 rounded-2xl overflow-hidden border border-purple-700">
                <div className="absolute inset-0 flex items-center justify-center text-purple-600">
                  <div className="text-center">
                    <FilmSlate className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-sm">프로필 이미지</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-700/50 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-purple-600 rounded-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="py-24 px-6 bg-purple-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-100">
              주요 작품
            </h2>
            <p className="text-purple-400 max-w-2xl mx-auto">
              빛과 그림자로 완성한 작품들을 소개합니다
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {works.map((work, index) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-purple-900 border border-purple-800 rounded-xl overflow-hidden cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-800 to-purple-950 flex items-center justify-center">
                  <Play className="w-12 h-12 text-purple-600 group-hover:text-purple-400 transition-colors" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Image src="/netflix-logo.svg" alt="Netflix" width={60} height={16} />
                    <span className="text-purple-500 text-sm">{work.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-purple-100 mb-1">
                    {work.title}
                  </h3>
                  <p className="text-purple-400 text-sm">
                    {work.description} · {work.role}
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-purple-700/0 group-hover:bg-purple-700/10 transition-colors" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg">
              전체 작품 보기
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-100">
              수상 및 인정
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                year: "2024",
                award: "대한민국 영상기술대상",
                category: "조명 부문 최우수상",
              },
              {
                year: "2023",
                award: "아시아 필름 어워드",
                category: "기술 공헌상",
              },
              {
                year: "2022",
                award: "한국영화촬영감독조명협회",
                category: "올해의 조명감독",
              },
            ].map((item, index) => (
              <motion.div
                key={item.award}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-purple-900/50 border border-purple-800 rounded-xl p-6 text-center"
              >
                <Trophy className="w-10 h-10 text-purple-500 mx-auto mb-4" />
                <div className="text-purple-500 text-sm mb-2">{item.year}</div>
                <h3 className="text-lg font-bold text-purple-100 mb-1">
                  {item.award}
                </h3>
                <p className="text-purple-400 text-sm">{item.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-100">
              함께 작업하고 싶으신가요?
            </h2>
            <p className="text-purple-400 mb-10 max-w-xl mx-auto">
              새로운 프로젝트에 대한 문의나 협업 제안을 환영합니다.
              <br />
              아래 버튼을 클릭하여 연락해 주세요.
            </p>

            <Button size="lg" className="gap-2">
              <Envelope className="w-4 h-4" />
              이메일 보내기
            </Button>

            <div className="mt-12 flex justify-center gap-8 text-purple-500">
              <a
                href="#"
                className="hover:text-purple-300 transition-colors"
                aria-label="Instagram"
              >
                <InstagramLogo size={28} weight="fill" />
              </a>
              <a
                href="#"
                className="hover:text-purple-300 transition-colors"
                aria-label="YouTube"
              >
                <YoutubeLogo size={28} weight="fill" />
              </a>
              <a
                href="#"
                className="hover:text-purple-300 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={28} weight="fill" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-purple-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-purple-500 text-sm">
          <p>&copy; 2024 김리나. All rights reserved.</p>
          <p>조명감독 포트폴리오</p>
        </div>
      </footer>
    </main>
  );
}
