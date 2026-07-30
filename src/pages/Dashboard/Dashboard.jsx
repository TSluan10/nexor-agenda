import {
  ArrowLeft,
  CalendarDays,
  ChevronRight,
  Clock3,
  LayoutDashboard,
  LogOut,
  Menu,
  Plus,
  Search,
  Settings,
  TrendingUp,
  UserRound,
  Users,
  WalletCards,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./Dashboard.css";

const appointments = [
  {
    id: 1,
    time: "09:00",
    client: "Mariana Silva",
    service: "Design de sobrancelhas",
    duration: "40 min",
    price: "R$ 45,00",
    status: "Confirmado",
  },
  {
    id: 2,
    time: "10:30",
    client: "Fernanda Lima",
    service: "Design com henna",
    duration: "60 min",
    price: "R$ 60,00",
    status: "Confirmado",
  },
  {
    id: 3,
    time: "13:00",
    client: "Camila Souza",
    service: "Micropigmentação",
    duration: "120 min",
    price: "R$ 450,00",
    status: "Aguardando",
  },
  {
    id: 4,
    time: "15:30",
    client: "Patrícia Alves",
    service: "Design de sobrancelhas",
    duration: "40 min",
    price: "R$ 45,00",
    status: "Confirmado",
  },
];

const activity = [
  {
    id: 1,
    title: "Novo agendamento",
    description: "Mariana agendou Design de sobrancelhas.",
    time: "Há 12 minutos",
  },
  {
    id: 2,
    title: "Cliente confirmado",
    description: "Fernanda confirmou o atendimento das 10:30.",
    time: "Há 35 minutos",
  },
  {
    id: 3,
    title: "Pagamento registrado",
    description: "Pagamento de R$ 60,00 recebido.",
    time: "Há 1 hora",
  },
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function closeSidebar() {
    setSidebarOpen(false);
  }

  return (
    <main className="dashboard-page">
      <aside
        className={`dashboard-sidebar ${sidebarOpen ? "open" : ""}`}
      >
        <div className="dashboard-sidebar-header">
          <Link className="dashboard-logo" to="/">
            <span>
              <CalendarDays size={21} />
            </span>

            <strong>
              Nexor <b>Agenda</b>
            </strong>
          </Link>

          <button
            className="dashboard-close-sidebar"
            type="button"
            onClick={closeSidebar}
            aria-label="Fechar menu"
          >
            <X size={21} />
          </button>
        </div>

        <nav className="dashboard-navigation">
          <span className="dashboard-navigation-label">Menu principal</span>

          <Link className="dashboard-navigation-item active" to="/dashboard">
            <LayoutDashboard size={19} />
            Visão geral
          </Link>

          <button className="dashboard-navigation-item" type="button">
            <CalendarDays size={19} />
            Agenda
          </button>

          <button className="dashboard-navigation-item" type="button">
            <Users size={19} />
            Clientes
          </button>

          <button className="dashboard-navigation-item" type="button">
            <WalletCards size={19} />
            Financeiro
          </button>

          <span className="dashboard-navigation-label secondary">
            Configurações
          </span>

          <button className="dashboard-navigation-item" type="button">
            <Settings size={19} />
            Preferências
          </button>
        </nav>

        <div className="dashboard-sidebar-footer">
          <div className="dashboard-user">
            <div className="dashboard-user-avatar">JS</div>

            <div>
              <strong>Juliana Souza</strong>
              <span>Studio Juliana</span>
            </div>
          </div>

          <button type="button" aria-label="Sair">
            <LogOut size={19} />
          </button>
        </div>
      </aside>

      {sidebarOpen && (
        <button
          className="dashboard-overlay"
          type="button"
          onClick={closeSidebar}
          aria-label="Fechar menu"
        />
      )}

      <section className="dashboard-content">
        <header className="dashboard-topbar">
          <div className="dashboard-topbar-left">
            <button
              className="dashboard-menu-button"
              type="button"
              onClick={() => setSidebarOpen(true)}
              aria-label="Abrir menu"
            >
              <Menu size={22} />
            </button>

            <div>
              <span>Visão geral</span>
              <strong>Quinta-feira, 30 de julho</strong>
            </div>
          </div>

          <div className="dashboard-topbar-actions">
            <div className="dashboard-search">
              <Search size={18} />

              <input
                type="search"
                placeholder="Pesquisar cliente..."
              />
            </div>

            <Link className="dashboard-new-booking" to="/agendar">
              <Plus size={18} />
              Novo agendamento
            </Link>
          </div>
        </header>

        <div className="dashboard-main">
          <section className="dashboard-welcome">
            <div>
              <span>Bom trabalho hoje</span>
              <h1>Boa noite, Juliana!</h1>
              <p>
                Você tem 4 atendimentos agendados para hoje.
              </p>
            </div>

            <Link to="/">
              <ArrowLeft size={17} />
              Voltar ao site
            </Link>
          </section>

          <section className="dashboard-metrics">
            <article className="dashboard-metric-card">
              <div className="dashboard-metric-header">
                <span className="dashboard-metric-icon purple">
                  <CalendarDays size={21} />
                </span>

                <span className="dashboard-metric-change positive">
                  <TrendingUp size={14} />
                  12%
                </span>
              </div>

              <span className="dashboard-metric-label">
                Agendamentos hoje
              </span>

              <strong>4</strong>

              <small>2 horários ainda disponíveis</small>
            </article>

            <article className="dashboard-metric-card">
              <div className="dashboard-metric-header">
                <span className="dashboard-metric-icon blue">
                  <Users size={21} />
                </span>

                <span className="dashboard-metric-change positive">
                  <TrendingUp size={14} />
                  8%
                </span>
              </div>

              <span className="dashboard-metric-label">
                Clientes ativos
              </span>

              <strong>127</strong>

              <small>12 novos clientes neste mês</small>
            </article>

            <article className="dashboard-metric-card">
              <div className="dashboard-metric-header">
                <span className="dashboard-metric-icon green">
                  <WalletCards size={21} />
                </span>

                <span className="dashboard-metric-change positive">
                  <TrendingUp size={14} />
                  18%
                </span>
              </div>

              <span className="dashboard-metric-label">
                Receita do mês
              </span>

              <strong>R$ 4.860</strong>

              <small>R$ 730 acima do mês anterior</small>
            </article>

            <article className="dashboard-metric-card">
              <div className="dashboard-metric-header">
                <span className="dashboard-metric-icon orange">
                  <Clock3 size={21} />
                </span>

                <span className="dashboard-metric-change neutral">
                  Hoje
                </span>
              </div>

              <span className="dashboard-metric-label">
                Próximo atendimento
              </span>

              <strong>09:00</strong>

              <small>Mariana Silva</small>
            </article>
          </section>

          <section className="dashboard-grid">
            <article className="dashboard-card dashboard-agenda-card">
              <div className="dashboard-card-header">
                <div>
                  <span>Agenda do dia</span>
                  <h2>Próximos atendimentos</h2>
                </div>

                <button type="button">
                  Ver agenda completa
                  <ChevronRight size={17} />
                </button>
              </div>

              <div className="dashboard-appointments">
                {appointments.map((appointment) => (
                  <div
                    className="dashboard-appointment"
                    key={appointment.id}
                  >
                    <div className="dashboard-appointment-time">
                      <Clock3 size={17} />
                      <strong>{appointment.time}</strong>
                    </div>

                    <div className="dashboard-appointment-client">
                      <div className="dashboard-client-avatar">
                        <UserRound size={18} />
                      </div>

                      <div>
                        <strong>{appointment.client}</strong>
                        <span>{appointment.service}</span>
                      </div>
                    </div>

                    <div className="dashboard-appointment-details">
                      <span>{appointment.duration}</span>
                      <strong>{appointment.price}</strong>
                    </div>

                    <span
                      className={`dashboard-status ${
                        appointment.status === "Confirmado"
                          ? "confirmed"
                          : "waiting"
                      }`}
                    >
                      {appointment.status}
                    </span>

                    <button
                      className="dashboard-appointment-action"
                      type="button"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </article>

            <aside className="dashboard-side-column">
              <article className="dashboard-card dashboard-summary-card">
                <div className="dashboard-card-header compact">
                  <div>
                    <span>Resumo de hoje</span>
                    <h2>Atendimentos</h2>
                  </div>
                </div>

                <div className="dashboard-progress-group">
                  <div className="dashboard-progress-heading">
                    <span>Concluídos</span>
                    <strong>2 de 4</strong>
                  </div>

                  <div className="dashboard-progress">
                    <span style={{ width: "50%" }} />
                  </div>
                </div>

                <div className="dashboard-summary-list">
                  <div>
                    <span className="summary-dot completed" />
                    <span>Concluídos</span>
                    <strong>2</strong>
                  </div>

                  <div>
                    <span className="summary-dot confirmed" />
                    <span>Confirmados</span>
                    <strong>1</strong>
                  </div>

                  <div>
                    <span className="summary-dot waiting" />
                    <span>Aguardando</span>
                    <strong>1</strong>
                  </div>

                  <div>
                    <span className="summary-dot available" />
                    <span>Horários livres</span>
                    <strong>2</strong>
                  </div>
                </div>
              </article>

              <article className="dashboard-card dashboard-activity-card">
                <div className="dashboard-card-header compact">
                  <div>
                    <span>Atualizações</span>
                    <h2>Atividade recente</h2>
                  </div>
                </div>

                <div className="dashboard-activity-list">
                  {activity.map((item) => (
                    <div className="dashboard-activity-item" key={item.id}>
                      <span className="dashboard-activity-dot" />

                      <div>
                        <strong>{item.title}</strong>
                        <p>{item.description}</p>
                        <small>{item.time}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </aside>
          </section>
        </div>
      </section>
    </main>
  );
}