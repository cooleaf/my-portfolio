import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-white">赵晓光</div>
            <div className="hidden sm:flex space-x-8">
              <Link href="#home" className="text-slate-300 hover:text-white transition-colors">首页</Link>
              <Link href="#about" className="text-slate-300 hover:text-white transition-colors">关于</Link>
              <Link href="#projects" className="text-slate-300 hover:text-white transition-colors">项目</Link>
              <Link href="#contact" className="text-slate-300 hover:text-white transition-colors">联系</Link>
            </div>
            {/* 移动端菜单按钮 */}
            <div className="sm:hidden">
              <button className="text-slate-300 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero 区域 */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            赵晓光
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-blue-400 mb-6 font-medium">
            技术领导者 | 架构师 | 创新者
          </p>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            20年+ 技术研发与管理经验，专注数字化转型、IoT平台、AI应用创新
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/25"
            >
              查看项目
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg text-slate-200 bg-slate-800 hover:bg-slate-700 transition-all border border-slate-700"
            >
              联系我
            </a>
          </div>
        </div>
      </section>

      {/* 关于区域 */}
      <section id="about" className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">关于我</h2>
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
            <p className="text-slate-300 mb-6 text-lg leading-relaxed">
              现任碧桂园服务 CTO & 副总裁，负责集团数字化战略与技术平台建设。
              曾任职华为软件教练 & 杰出架构师、Resideo/Honeywell Engineering Fellow。
            </p>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              专注领域：企业数字化转型、IoT 平台架构、AI/ML 应用、云原生技术、
              智慧社区、能源管理数字化。
            </p>
            <div className="flex flex-wrap gap-3">
              {["架构设计", "技术战略", "团队管理", "IoT", "AI/ML", "云原生", "数字化转型"].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-blue-950/50 text-blue-300 rounded-full text-sm border border-blue-900/50">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 项目展示 */}
      <section id="projects" className="py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">重点项目</h2>
          <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            领导并参与多个大型数字化项目，推动技术创新与业务增长
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 项目1 */}
            <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/10 group">
              <div className="h-52 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <span className="text-white text-5xl">🏢</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">碧拓平台数字化</h3>
                <p className="text-slate-400 mb-5 leading-relaxed">
                  物业行业领先的数字化平台，涵盖市拓、IFM、大运营等核心业务模块，
                  服务数百万用户。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-950 text-blue-300 rounded-full text-xs border border-blue-900">React</span>
                  <span className="px-3 py-1 bg-blue-950 text-blue-300 rounded-full text-xs border border-blue-900">Node.js</span>
                  <span className="px-3 py-1 bg-blue-950 text-blue-300 rounded-full text-xs border border-blue-900">微服务</span>
                </div>
              </div>
            </div>

            {/* 项目2 */}
            <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden hover:border-green-500/50 transition-all hover:shadow-xl hover:shadow-green-500/10 group">
              <div className="h-52 bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <span className="text-white text-5xl">⚡</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">两轮充电平台</h3>
                <p className="text-slate-400 mb-5 leading-relaxed">
                  覆盖全国的智慧充电网络，75,000+ 设备在线，累计服务收入 2.36亿，
                  支持先用后付等创新功能。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-950 text-green-300 rounded-full text-xs border border-green-900">IoT</span>
                  <span className="px-3 py-1 bg-green-950 text-green-300 rounded-full text-xs border border-green-900">支付</span>
                  <span className="px-3 py-1 bg-green-950 text-green-300 rounded-full text-xs border border-green-900">小程序</span>
                </div>
              </div>
            </div>

            {/* 项目3 */}
            <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/10 group">
              <div className="h-52 bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <span className="text-white text-5xl">🤖</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">零号助理 AI</h3>
                <p className="text-slate-400 mb-5 leading-relaxed">
                  企业内部 AI 助手平台，月活 6400+ 用户，提供公文自动化、
                  智能问答、个人年度报告等功能。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-950 text-purple-300 rounded-full text-xs border border-purple-900">AI/ML</span>
                  <span className="px-3 py-1 bg-purple-950 text-purple-300 rounded-full text-xs border border-purple-900">LLM</span>
                  <span className="px-3 py-1 bg-purple-950 text-purple-300 rounded-full text-xs border border-purple-900">RAG</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 联系区域 */}
      <section id="contact" className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">联系我</h2>
          <p className="text-slate-400 mb-12 text-lg">
            欢迎交流技术、数字化转型、架构设计等话题
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:xguangzhao@163.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 hover:bg-slate-800 hover:border-slate-600 transition-all"
            >
              <span className="mr-2">📧</span>
              xguangzhao@163.com
            </a>
            <a
              href="https://www.linkedin.com/in/cooleaf/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 rounded-lg text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/25"
            >
              <span className="mr-2">💼</span>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-slate-950 border-t border-slate-900 text-slate-500 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2026 赵晓光. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
