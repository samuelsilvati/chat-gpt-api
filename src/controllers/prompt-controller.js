const sendMessage = async (req, res) => {
  try {
    await res.status(200).json({
      mensagem: "Mensagem enviada com sucesso!",
    });
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);

    res.status(500).json({
      mensagem: "Erro ao enviar mensagem",
    });
  }
};

export { sendMessage };
