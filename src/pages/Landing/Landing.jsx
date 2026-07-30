import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  LayoutDashboard,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
  WalletCards,
} from "lucide-react";

import "./Landing.css";

const benefits = [
  {
    icon: CalendarDays,
    title: "Agenda online",
    description:
      "Seus clientes escolhem o serviço, a data e um horário disponível.",
  },
  {
    icon: MessageCircle,
    title: "Menos mensagens",
    description:
      "Evite o vai e volta no WhatsApp para confirmar cada agendamento.",
  },
  {
    icon: Users,
    title: "Gestão de clientes",
    description:
      "Mantenha os dados, o histórico e os atendimentos organizados.",
  },
  {
    icon: WalletCards,
    title: "Controle financeiro",
    description:
      "Acompanhe serviços, recebimentos e resultados do seu negócio.",
  },
];

const segments = [
  "Salões de beleza",
  "Barbearias",
  "Clínicas",
  "Estúdios de estética",
  "Oficinas",
  "Lava-rápidos",
];

const schedule = [
  { time: "09:00", client: "Mariana Silva", service: "Design de sobrancelhas" },
  { time: "10:30", client: "Fernanda Lima", service: "Design + henna" },
  { time: "13:00", client: "Camila Souza", service: "Micropigmentação" },
];

export default function Landing() {
  function scrollToDemo() {
    document
      .getElementById("demonstracao")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main className="landing-page">
      <header className="landing-header">
        <div className="landing-container header-content">
          <a className="brand" href="#inicio" aria-label="Nexor Agenda">
            <span className="brand-icon">
              <CalendarDays size={21} />
            </span>

            <span>
              Nexor <strong>Agenda</strong>
            </span>
          </a>

          <nav className="desktop-navigation" aria-label="Navegação principal">
            <a href="#recursos">Recursos</a>
            <a href="#segmentos">Para quem é</a>
            <a href="#demonstracao">Demonstração</a>
          </nav>

          <div className="header-actions">
            <button className="button button-ghost" type="button">
              Entrar
            </button>

           <Link className="button button-primary button-small" to="/agendar">
  Testar agora
  <ArrowRight size={17} />
</Link>
          </div>
        </div>
      </header>

      <section className="hero-section" id="inicio">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="landing-container hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={16} />
              Agendamentos simples para negócios modernos
            </div>

            <h1>
              Sua agenda organizada.
              <span> Seu negócio crescendo.</span>
            </h1>

            <p className="hero-description">
              Centralize horários, clientes, serviços e pagamentos em um sistema
              moderno. Seus clientes agendam online e você ganha tempo para
              cuidar do negócio.
            </p>

            <div className="hero-actions">
              <Link className="button button-primary button-large" to="/agendar">
  Criar minha agenda
  <ArrowRight size={19} />
</Link>

              <button
                className="button button-secondary button-large"
                type="button"
                onClick={scrollToDemo}
              >
                Ver demonstração
              </button>
            </div>

            <div className="hero-trust">
              <div>
                <Check size={17} />
                Sem cartão para testar
              </div>

              <div>
                <Check size={17} />
                Fácil de configurar
              </div>

              <div>
                <Check size={17} />
                Funciona no celular
              </div>
            </div>
          </div>

          <div className="product-preview" id="demonstracao">
            <div className="preview-window">
              <div className="preview-topbar">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="preview-address">
                  app.nexoragenda.com
                </div>

                <div className="preview-status">
                  <span />
                  Online
                </div>
              </div>

              <div className="dashboard-preview">
                <aside className="preview-sidebar">
                  <div className="sidebar-logo">
                    <CalendarDays size={20} />
                  </div>

                  <div className="sidebar-item active">
                    <LayoutDashboard size={19} />
                  </div>

                  <div className="sidebar-item">
                    <CalendarDays size={19} />
                  </div>

                  <div className="sidebar-item">
                    <Users size={19} />
                  </div>

                  <div className="sidebar-item">
                    <WalletCards size={19} />
                  </div>
                </aside>

                <div className="preview-main">
                  <div className="preview-heading">
                    <div>
                      <span>Visão geral</span>
                      <h3>Boa tarde, Juliana!</h3>
                    </div>

                    <button type="button">
                      Novo agendamento
                    </button>
                  </div>

                  <div className="preview-metrics">
                    <article>
                      <div className="metric-icon">
                        <CalendarDays size={18} />
                      </div>
                      <span>Agendamentos hoje</span>
                      <strong>8</strong>
                      <small>3 ainda disponíveis</small>
                    </article>

                    <article>
                      <div className="metric-icon">
                        <Users size={18} />
                      </div>
                      <span>Clientes ativos</span>
                      <strong>127</strong>
                      <small>+12 neste mês</small>
                    </article>

                    <article>
                      <div className="metric-icon">
                        <WalletCards size={18} />
                      </div>
                      <span>Receita do mês</span>
                      <strong>R$ 4.860</strong>
                      <small>+18% no período</small>
                    </article>
                  </div>

                  <div className="schedule-card">
                    <div className="schedule-header">
                      <div>
                        <span>Agenda de hoje</span>
                        <strong>Quarta-feira, 29 de julho</strong>
                      </div>

                      <button type="button">
                        Ver agenda
                        <ChevronRight size={16} />
                      </button>
                    </div>

                    <div className="schedule-list">
                      {schedule.map((appointment) => (
                        <div className="schedule-item" key={appointment.time}>
                          <div className="schedule-time">
                            <Clock3 size={16} />
                            {appointment.time}
                          </div>

                          <div className="schedule-client">
                            <strong>{appointment.client}</strong>
                            <span>{appointment.service}</span>
                          </div>

                          <span className="confirmed-badge">Confirmado</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="floating-card floating-card-client">
              <span className="floating-icon">
                <Users size={18} />
              </span>

              <div>
                <small>Novo cliente</small>
                <strong>Agendamento confirmado</strong>
              </div>
            </div>

            <div className="floating-card floating-card-security">
              <span className="floating-icon">
                <ShieldCheck size={18} />
              </span>

              <div>
                <small>Agenda protegida</small>
                <strong>Dados sincronizados</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section" id="recursos">
        <div className="landing-container">
          <div className="section-heading">
            <span>Todos os recursos em um lugar</span>
            <h2>Menos bagunça. Mais controle.</h2>
            <p>
              O Nexor Agenda reúne as ferramentas essenciais para organizar sua
              rotina e oferecer uma experiência melhor aos seus clientes.
            </p>
          </div>

          <div className="benefits-grid">
            {benefits.map(({ icon: Icon, title, description }) => (
              <article className="benefit-card" key={title}>
                <div className="benefit-icon">
                  <Icon size={24} />
                </div>

                <h3>{title}</h3>
                <p>{description}</p>

                <button type="button">
                  Saiba mais
                  <ArrowRight size={16} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="segments-section" id="segmentos">
        <div className="landing-container segments-grid">
          <div className="segments-content">
            <span className="section-label">Feito para vários segmentos</span>

            <h2>Um sistema que se adapta ao seu negócio.</h2>

            <p>
              Personalize o nome, a identidade visual, os serviços, os horários
              e a equipe. A mesma plataforma pode atender diversos tipos de
              profissionais e empresas.
            </p>

            <ul className="segments-list">
              {segments.map((segment) => (
                <li key={segment}>
                  <Check size={17} />
                  {segment}
                </li>
              ))}
            </ul>
          </div>

          <div className="booking-card">
            <div className="booking-profile">
              <div className="booking-avatar">JS</div>

              <div>
                <span>Studio Juliana</span>
                <small>Beleza e estética</small>
              </div>
            </div>

            <div className="booking-progress">
              <span className="completed">1</span>
              <i />
              <span className="active">2</span>
              <i />
              <span>3</span>
              <i />
              <span>4</span>
            </div>

            <div className="booking-content">
              <span className="booking-step">Escolha um horário</span>
              <h3>Quarta-feira, 29 de julho</h3>

              <div className="time-grid">
                <button type="button">09:00</button>
                <button type="button">09:30</button>
                <button type="button" disabled>
                  10:00
                </button>
                <button type="button">10:30</button>
                <button type="button" className="selected">
                  11:00
                </button>
                <button type="button">11:30</button>
              </div>

              <button className="booking-button" type="button">
                Continuar
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="landing-container">
          <div className="cta-card">
            <div>
              <span>Comece a organizar seu negócio hoje</span>
              <h2>Sua agenda merece algo melhor que um caderno.</h2>
              <p>
                Crie sua conta, configure seus serviços e comece a receber
                agendamentos online.
              </p>
            </div>

            <button className="button button-light button-large" type="button">
              Começar gratuitamente
              <ArrowRight size={19} />
            </button>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <div className="landing-container footer-content">
          <a className="brand footer-brand" href="#inicio">
            <span className="brand-icon">
              <CalendarDays size={20} />
            </span>

            <span>
              Nexor <strong>Agenda</strong>
            </span>
          </a>

          <p>
            Gestão simples para negócios que trabalham com horários.
          </p>

          <span>© 2026 Nexor Systems.</span>
        </div>
      </footer>
    </main>
  );
}