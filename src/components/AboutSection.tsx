'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code, Coffee, Rocket } from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {
  const skills = [
    'JavaScript/TypeScript',
    'React/Next.js',
    'Python',
    'Node.js',
    'AWS',
    'Docker',
    'PostgreSQL',
    'Git/GitHub'
  ];

  const stats = [
    { icon: Code, label: 'Projetos', value: '50+' },
    { icon: Coffee, label: 'Cafés', value: '∞' },
    { icon: Rocket, label: 'Anos', value: '3+' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            Sobre Mim
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Desenvolvedor apaixonado por tecnologia e inovação
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Foto e Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <div className="relative w-48 h-48 mx-auto lg:mx-0 mb-8">
              <div className="w-full h-full bg-gradient-to-r from-neon-blue via-neon-green to-neon-purple rounded-full p-1">
                <div className="w-full h-full bg-gray-800 rounded-full overflow-hidden">
                  <Image 
                    src="/michel.jpeg" 
                    alt="Michel Henrique" 
                    width={192}
                    height={192}
                    className="w-full h-full object-cover rounded-full"
                    priority
                  />
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">Michel Henrique</h3>
            <p className="text-neon-blue font-semibold mb-6">Cloud-Native Software Engineer</p>

            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              <a 
                href="https://github.com/Chel0626" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-neon-blue/20 border border-gray-700 hover:border-neon-blue p-3 rounded-lg transition-all duration-300 neon-glow"
              >
                <Github size={24} className="text-white" />
              </a>
              <a 
                href="https://www.linkedin.com/in/michelhm/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-neon-blue/20 border border-gray-700 hover:border-neon-blue p-3 rounded-lg transition-all duration-300 neon-glow"
              >
                <Linkedin size={24} className="text-white" />
              </a>
              <a 
                href="mailto:mhmservicos91@gmail.com"
                className="bg-gray-800 hover:bg-neon-blue/20 border border-gray-700 hover:border-neon-blue p-3 rounded-lg transition-all duration-300 neon-glow"
              >
                <Mail size={24} className="text-white" />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center bg-gray-800/50 border border-gray-700 rounded-lg p-4"
                >
                  <stat.icon size={24} className="text-neon-green mx-auto mb-2" />
                  <div className="text-lg font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Biografia e Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <h4 className="text-xl font-bold text-white mb-4">Sobre Mim: Um Engenheiro de Software Cloud-Native em Formação</h4>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Olá! Sou estudante de Engenharia de Software com uma convicção que guia minha jornada: <strong className="text-neon-blue">o código não é o ponto de partida, mas a consequência de uma arquitetura bem pensada e de um problema bem compreendido.</strong>
                </p>
                
                <p>
                  Desde o início dos meus estudos, percebi que o mercado de tecnologia está evoluindo para além do desenvolvedor focado apenas na sintaxe. Para criar soluções verdadeiramente eficientes e inovadoras, é preciso ser um arquiteto, não apenas um construtor. Essa percepção me levou a buscar um aprendizado profundo no tripé que acredito ser o presente e o futuro do desenvolvimento moderno:
                </p>

                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-neon-blue mr-2">•</span>
                    <div>
                      <strong className="text-white">Arquitetura de Software:</strong> A base de tudo. O &ldquo;porquê&rdquo; e o &ldquo;como&rdquo; por trás do código, utilizando Design Patterns e princípios como SOLID para criar sistemas que são robustos, manuteníveis e flexíveis.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-blue mr-2">•</span>
                    <div>
                      <strong className="text-white">Cloud Computing:</strong> O ecossistema que dá vida, escala e resiliência às aplicações. Entendo a nuvem não como um simples servidor, mas como uma plataforma estratégica para a entrega de valor.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-blue mr-2">•</span>
                    <div>
                      <strong className="text-white">Inteligência Artificial & Machine Learning:</strong> A força multiplicadora. Vejo a IA como um parceiro de desenvolvimento, uma ferramenta para automatizar o trivial e nos liberar para focar no que é verdadeiramente complexo e criativo.
                    </div>
                  </li>
                </ul>

                <p>
                  Movido pela curiosidade e por uma proatividade natural, minha paixão é mergulhar em desafios e projetar soluções de ponta a ponta. Minha abordagem é a de um profissional que busca ser <strong className="text-neon-green">&ldquo;pró-eficiente&rdquo;</strong>: alguém com uma visão holística, que domina as metodologias e entende que o sucesso de um projeto vai muito além das linhas de código.
                </p>

                <p>
                  Este blog é o diário de bordo da minha jornada para me tornar esse profissional. Um espaço para explorar, documentar e compartilhar meus aprendizados. Se você também acredita que o futuro pertence aos arquitetos de soluções, conecte-se e vamos aprender juntos.
                </p>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <h4 className="text-xl font-bold text-white mb-4">Tecnologias</h4>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-center text-sm font-medium text-gray-300 hover:border-neon-blue hover:text-neon-blue transition-all duration-300"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}