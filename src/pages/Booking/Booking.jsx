import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  Clock3,
  Scissors,
  Sparkles,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

import "./Booking.css";

const services = [
  {
    id: 1,
    name: "Design de sobrancelhas",
    description: "Modelagem completa e personalizada.",
    duration: 40,
    price: 45,
    icon: Sparkles,
  },
  {
    id: 2,
    name: "Design com henna",
    description: "Design completo com aplicação de henna.",
    duration: 60,
    price: 60,
    icon: Scissors,
  },
  {
    id: 3,
    name: "Micropigmentação",
    description: "Procedimento completo com avaliação inicial.",
    duration: 120,
    price: 450,
    icon: Sparkles,
  },
];

const dates = [
  {
    id: "2026-07-31",
    weekday: "Sex",
    day: "31",
    month: "Jul",
    label: "Sexta-feira, 31 de julho",
  },
  {
    id: "2026-08-01",
    weekday: "Sáb",
    day: "01",
    month: "Ago",
    label: "Sábado, 1 de agosto",
  },
  {
    id: "2026-08-03",
    weekday: "Seg",
    day: "03",
    month: "Ago",
    label: "Segunda-feira, 3 de agosto",
  },
  {
    id: "2026-08-04",
    weekday: "Ter",
    day: "04",
    month: "Ago",
    label: "Terça-feira, 4 de agosto",
  },
  {
    id: "2026-08-05",
    weekday: "Qua",
    day: "05",
    month: "Ago",
    label: "Quarta-feira, 5 de agosto",
  },
];

const scheduleByDate = {
  "2026-07-31": [
    { time: "09:00", available: true },
    { time: "09:40", available: true },
    { time: "10:20", available: false },
    { time: "11:00", available: true },
    { time: "13:00", available: true },
    { time: "13:40", available: false },
    { time: "14:20", available: true },
    { time: "15:00", available: true },
  ],
  "2026-08-01": [
    { time: "08:30", available: true },
    { time: "09:10", available: false },
    { time: "09:50", available: true },
    { time: "10:30", available: true },
    { time: "11:10", available: true },
  ],
  "2026-08-03": [
    { time: "09:00", available: true },
    { time: "09:40", available: true },
    { time: "10:20", available: true },
    { time: "11:00", available: false },
    { time: "14:00", available: true },
    { time: "15:00", available: true },
  ],
  "2026-08-04": [
    { time: "10:00", available: true },
    { time: "10:40", available: true },
    { time: "11:20", available: false },
    { time: "13:30", available: true },
    { time: "14:10", available: true },
  ],
  "2026-08-05": [
    { time: "09:30", available: true },
    { time: "10:10", available: true },
    { time: "10:50", available: true },
    { time: "13:00", available: false },
    { time: "14:30", available: true },
  ],
};

function formatCurrency(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export default function Booking() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [client, setClient] = useState({
    name: "",
    phone: "",
  });
  const [confirmed, setConfirmed] = useState(false);

  const availableTimes = useMemo(() => {
    if (!selectedDate) return [];

    return scheduleByDate[selectedDate.id] ?? [];
  }, [selectedDate]);

  function goNext() {
    if (step === 1 && selectedService) {
      setStep(2);
      return;
    }

    if (step === 2 && selectedDate && selectedTime) {
      setStep(3);
    }
  }

  function goBack() {
    if (step > 1) {
      setStep((currentStep) => currentStep - 1);
    }
  }
  function capitalizeFirstName(name) {
  const firstName = name.trim().split(/\s+/)[0] ?? "";

  if (!firstName) return "";

  return (
    firstName.charAt(0).toUpperCase() +
    firstName.slice(1).toLowerCase()
  );
}

  function handleDateSelection(date) {
    setSelectedDate(date);
    setSelectedTime("");
  }

  function handleClientChange(event) {
    const { name, value } = event.target;

    setClient((currentClient) => ({
      ...currentClient,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const cleanPhone = client.phone.replace(/\D/g, "");

    if (client.name.trim().length < 3) {
      alert("Informe seu nome completo.");
      return;
    }

    if (cleanPhone.length < 10) {
      alert("Informe um WhatsApp válido.");
      return;
    }

    setConfirmed(true);
  }

  function restartBooking() {
    setStep(1);
    setSelectedService(null);
    setSelectedDate(null);
    setSelectedTime("");
    setClient({
      name: "",
      phone: "",
    });
    setConfirmed(false);
  }

  if (confirmed) {
    return (
      <main className="booking-page booking-success-page">
        <section className="success-card">
          <div className="success-icon">
            <CheckCircle2 size={42} />
          </div>

          <span>Agendamento confirmado</span>

          <h1>Seu horário está reservado!</h1>

          <p>
          Pronto, {capitalizeFirstName(client.name)}. Seu agendamento foi registrado
com sucesso.
          </p>

          <div className="success-details">
            <div>
              <small>Serviço</small>
              <strong>{selectedService.name}</strong>
            </div>

            <div>
              <small>Data</small>
              <strong>{selectedDate.label}</strong>
            </div>

            <div>
              <small>Horário</small>
              <strong>{selectedTime}</strong>
            </div>

            <div>
              <small>Valor</small>
              <strong>{formatCurrency(selectedService.price)}</strong>
            </div>
          </div>

          <div className="success-actions">
            <button type="button" onClick={restartBooking}>
              Fazer outro agendamento
            </button>

            <Link to="/">
              Voltar ao início
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="booking-page">
      <header className="booking-header">
        <div className="booking-container booking-header-content">
          <Link to="/" className="booking-back-link">
            <ArrowLeft size={18} />
            Voltar
          </Link>

          <div className="booking-brand">
            <span className="booking-brand-icon">
              <CalendarDays size={20} />
            </span>

            <span>
              Nexor <strong>Agenda</strong>
            </span>
          </div>

          <span className="booking-safe-text">
            Agendamento seguro
          </span>
        </div>
      </header>

      <section className="booking-hero">
        <div className="booking-container">
          <div className="business-profile">
            <div className="business-avatar">
              JS
            </div>

            <div>
              <span>Studio Juliana</span>
              <small>Beleza, estética e cuidados pessoais</small>
            </div>
          </div>

          <h1>Agende seu horário</h1>

          <p>
            Escolha o serviço, a data e o melhor horário para você.
          </p>
        </div>
      </section>

      <section className="booking-content-section">
        <div className="booking-container booking-layout">
          <div className="booking-main-card">
            <div className="booking-steps">
              {[1, 2, 3].map((stepNumber) => (
                <div
                  className={`booking-step-item ${
                    step === stepNumber ? "active" : ""
                  } ${step > stepNumber ? "completed" : ""}`}
                  key={stepNumber}
                >
                  <span>
                    {step > stepNumber ? <Check size={15} /> : stepNumber}
                  </span>

                  <div>
                    <strong>
                      {stepNumber === 1 && "Serviço"}
                      {stepNumber === 2 && "Data e horário"}
                      {stepNumber === 3 && "Seus dados"}
                    </strong>
                  </div>
                </div>
              ))}
            </div>

            {step === 1 && (
              <div className="booking-panel">
                <div className="booking-panel-heading">
                  <span>Etapa 1 de 3</span>
                  <h2>Qual serviço você deseja?</h2>
                  <p>Selecione uma opção para continuar.</p>
                </div>

                <div className="service-options">
                  {services.map((service) => {
                    const Icon = service.icon;
                    const isSelected = selectedService?.id === service.id;

                    return (
                      <button
                        className={`service-option ${
                          isSelected ? "selected" : ""
                        }`}
                        key={service.id}
                        type="button"
                        onClick={() => setSelectedService(service)}
                      >
                        <span className="service-option-icon">
                          <Icon size={22} />
                        </span>

                        <span className="service-option-content">
                          <strong>{service.name}</strong>
                          <small>{service.description}</small>

                          <span className="service-option-meta">
                            <span>
                              <Clock3 size={14} />
                              {service.duration} minutos
                            </span>

                            <strong>{formatCurrency(service.price)}</strong>
                          </span>
                        </span>

                        <span className="service-selection-indicator">
                          {isSelected && <Check size={16} />}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="booking-panel">
                <div className="booking-panel-heading">
                  <span>Etapa 2 de 3</span>
                  <h2>Escolha a data e o horário</h2>
                  <p>Os horários ocupados ficam indisponíveis.</p>
                </div>

                <div className="date-options">
                  {dates.map((date) => (
                    <button
                      className={`date-option ${
                        selectedDate?.id === date.id ? "selected" : ""
                      }`}
                      key={date.id}
                      type="button"
                      onClick={() => handleDateSelection(date)}
                    >
                      <small>{date.weekday}</small>
                      <strong>{date.day}</strong>
                      <span>{date.month}</span>
                    </button>
                  ))}
                </div>

                {selectedDate ? (
                  <div className="time-selection">
                    <div className="time-selection-heading">
                      <div>
                        <span>Horários disponíveis</span>
                        <strong>{selectedDate.label}</strong>
                      </div>

                      <Clock3 size={21} />
                    </div>

                    <div className="booking-time-grid">
                      {availableTimes.map((slot) => (
                        <button
                          className={
                            selectedTime === slot.time ? "selected" : ""
                          }
                          disabled={!slot.available}
                          key={slot.time}
                          type="button"
                          onClick={() => setSelectedTime(slot.time)}
                        >
                          {slot.time}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="select-date-message">
                    <CalendarDays size={24} />
                    Selecione um dia para visualizar os horários.
                  </div>
                )}
              </div>
            )}

            {step === 3 && (
              <form className="booking-panel" onSubmit={handleSubmit}>
                <div className="booking-panel-heading">
                  <span>Etapa 3 de 3</span>
                  <h2>Informe seus dados</h2>
                  <p>Usaremos seu WhatsApp para confirmar o agendamento.</p>
                </div>

                <div className="client-form">
                  <label>
                    <span>Nome completo</span>

                    <div className="input-wrapper">
                      <UserRound size={19} />

                      <input
                        name="name"
                        type="text"
                        placeholder="Digite seu nome"
                        value={client.name}
                        onChange={handleClientChange}
                      />
                    </div>
                  </label>

                  <label>
                    <span>WhatsApp</span>

                    <div className="input-wrapper">
                      <span className="phone-prefix">+55</span>

                      <input
                        name="phone"
                        type="tel"
                        placeholder="(19) 99999-9999"
                        value={client.phone}
                        onChange={handleClientChange}
                      />
                    </div>
                  </label>

                  <div className="confirmation-message">
                    <CheckCircle2 size={19} />

                    <p>
                      Ao confirmar, o horário ficará reservado na agenda da
                      profissional.
                    </p>
                  </div>

                  <button className="confirm-booking-button" type="submit">
                    Confirmar agendamento
                    <Check size={18} />
                  </button>
                </div>
              </form>
            )}

            <div className="booking-navigation">
              <button
                className="booking-previous-button"
                disabled={step === 1}
                type="button"
                onClick={goBack}
              >
                <ArrowLeft size={17} />
                Voltar
              </button>

              {step < 3 && (
                <button
                  className="booking-next-button"
                  disabled={
                    (step === 1 && !selectedService) ||
                    (step === 2 && (!selectedDate || !selectedTime))
                  }
                  type="button"
                  onClick={goNext}
                >
                  Continuar
                  <ArrowRight size={17} />
                </button>
              )}
            </div>
          </div>

          <aside className="booking-summary">
            <span className="summary-label">Resumo do agendamento</span>

            <h3>Seu atendimento</h3>

            <div className="summary-list">
              <div>
                <small>Serviço</small>
                <strong>
                  {selectedService?.name ?? "Ainda não selecionado"}
                </strong>
              </div>

              <div>
                <small>Data</small>
                <strong>
                  {selectedDate?.label ?? "Ainda não selecionada"}
                </strong>
              </div>

              <div>
                <small>Horário</small>
                <strong>{selectedTime || "Ainda não selecionado"}</strong>
              </div>
            </div>

            {selectedService && (
              <div className="summary-total">
                <div>
                  <small>Duração aproximada</small>
                  <strong>{selectedService.duration} minutos</strong>
                </div>

                <div>
                  <small>Valor</small>
                  <strong>{formatCurrency(selectedService.price)}</strong>
                </div>
              </div>
            )}

            <div className="summary-information">
              <CalendarDays size={19} />

              <p>
                Você poderá entrar em contato com o estabelecimento caso
                precise cancelar ou alterar o horário.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}