export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const { nome, classe, ip } = req.body;

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbxu4wZ4MKcawl_C2JUPYc9Z1WeQ_T9wMu_xx50Cj1q2C4rk0A7IzjOizWXWZp-Zj56e/exec', {
      method: 'POST',
      body: JSON.stringify({ nome, classe, ip }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const result = await response.json();

    if (result.status === 'success') {
      return res.status(200).json({ message: 'Inscrição registrada com sucesso!' });
    } else {
      return res.status(500).json({ message: 'Erro no Web App.' });
    }
  } catch (err) {
    console.error('Erro ao enviar para o Web App:', err);
    return res.status(500).json({ message: 'Erro na inscrição.' });
  }
}
