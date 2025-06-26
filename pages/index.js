import { useState } from "react";

export default function Home() {
  const [nome, setNome] = useState("");
  const [classe, setClasse] = useState("");
  const [ip, setIp] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);
  const [copySuccess, setCopySuccess] = useState("");
  const [ipError, setIpError] = useState("");

  const classesOptions = [
    "OFF TANK", "ARCANO ELEVADO", "ARCANO SILENCE", "MAIN HEALER",
    "RAIZ FERREA", "QUEBRAREINOS", "INCUBO", "BRUXO",
    "DPS - Frost", "DPS - Fire", "DPS - Aguia", "DPS - Xbow"
  ];

  async function handleSubmit(e) {
    e.preventDefault();

    if (!nome || !classe || !ip) {
      setMessage("Por favor, preencha todos os campos.");
      return;
    }

    if (!/^\d+$/.test(ip)) {
      setIpError("O IP deve conter apenas números.");
      return;
    }

    const ipNumber = parseInt(ip, 10);
    if (ipNumber > 2300) {
      setIpError("O IP deve ser no máximo 2300.");
      return;
    }

    setIpError("");
    setIsSubmitting(true);
    setMessage("Enviando...");
    setAlreadySubmitted(false);
    setCopySuccess("");

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, classe, ip }),
      });

      if (response.ok) {
        setMessage("Inscrição enviada com sucesso!");
        setNome("");
        setClasse("");
        setIp("");
        setAlreadySubmitted(true);
      } else {
        setMessage("Erro ao enviar inscrição.");
      }
    } catch (error) {
      setMessage("Erro ao enviar inscrição.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function copyCommand() {
    navigator.clipboard.writeText("#forcecityoverload true")
      .then(() => {
        setCopySuccess("✅ Comando copiado!");
        setTimeout(() => setCopySuccess(""), 2000);
      })
      .catch(() => {
        setCopySuccess("❌ Falha ao copiar.");
      });
  }

  return (
    <>
      <div style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#333"
      }}>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>DG Avalon - Neve Eterna</h1>
        <form onSubmit={handleSubmit}>
          <label style={{ display: "block", marginBottom: "8px" }}>
            Nome:
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              disabled={isSubmitting}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "4px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                boxSizing: "border-box"
              }}
            />
          </label>

          <label style={{ display: "block", marginBottom: "8px" }}>
            Classe:
            <select
              value={classe}
              onChange={(e) => setClasse(e.target.value)}
              disabled={isSubmitting}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "4px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                boxSizing: "border-box"
              }}
            >
              <option value="">Selecione a classe</option>
              {classesOptions.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </label>

          <label style={{ display: "block", marginBottom: "8px" }}>
            IP:
            <input
              type="text"
              inputMode="numeric"
              pattern="\d*"
              value={ip}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setIp(value);

                if (value && parseInt(value, 10) > 2300) {
                  setIpError("O IP digitado supera o limite permitido.");
                } else {
                  setIpError("");
                }
              }}
              disabled={isSubmitting}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "4px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                boxSizing: "border-box"
              }}
            />
            {ipError && (
              <p style={{ color: "red", marginTop: "4px", fontSize: "12px" }}>{ipError}</p>
            )}
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              marginTop: "16px",
              width: "100%",
              padding: "10px",
              backgroundColor: isSubmitting ? "#aaa" : "#0070f3",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: isSubmitting ? "not-allowed" : "pointer",
              fontWeight: "bold",
              fontSize: "16px"
            }}
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>
        </form>

        {message && (
          <p style={{
            marginTop: "20px",
            textAlign: "center",
            color: message.includes("sucesso") ? "green" : "red"
          }}>
            {message}
          </p>
        )}

        {alreadySubmitted && (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <p>Copie o comando abaixo e envie no chat do jogo:</p>
            <div style={{
              margin: "10px auto",
              padding: "12px",
              backgroundColor: "#f0f0f0",
              border: "1px solid #ccc",
              borderRadius: "6px",
              fontFamily: "monospace",
              fontSize: "16px",
              maxWidth: "280px",
              userSelect: "all"
            }}>
              #forcecityoverload true
            </div>
            <button
              onClick={copyCommand}
              style={{
                marginTop: "8px",
                padding: "8px 16px",
                backgroundColor: "#0070f3",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Copiar Comando
            </button>
            {copySuccess && (
              <p style={{ marginTop: "8px", color: "green" }}>{copySuccess}</p>
            )}
          </div>
        )}
      </div>

      <footer style={{
        marginTop: "20px",
        textAlign: "center",
        fontSize: "12px",
        color: "#888"
      }}>
        Desenvolvido por Guuzs
      </footer>
    </>
  );
}
