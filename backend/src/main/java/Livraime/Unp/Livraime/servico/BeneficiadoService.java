package Livraime.Unp.Livraime.servico;

import Livraime.Unp.Livraime.controller.dto.response.BeneficiadoCompletoDTO;
import Livraime.Unp.Livraime.controller.dto.response.BeneficiadosPorUsuarioResponseDTO;
import Livraime.Unp.Livraime.controller.dto.response.BeneficiaryDataDTO;
import Livraime.Unp.Livraime.modelo.Beneficiado;
import Livraime.Unp.Livraime.repositorio.BeneficiadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.stream.Collectors;

@Service
public class BeneficiadoService {
    
    @Autowired
    private BeneficiadoRepository beneficiadoRepository;

    // Dados mockados mais realistas
    private final Map<Integer, String> livrosPorIdade = Map.ofEntries(
        Map.entry(5, "A Lagartinha Comilona"),
        Map.entry(6, "O Grufalão"), 
        Map.entry(7, "Onde Vivem os Monstros"),
        Map.entry(8, "O Pequeno Príncipe"),
        Map.entry(9, "Harry Potter e a Pedra Filosofal"),
        Map.entry(10, "As Crônicas de Nárnia"),
        Map.entry(11, "Percy Jackson e o Ladrão de Raios"),
        Map.entry(12, "O Diário de Anne Frank"),
        Map.entry(13, "O Senhor dos Anéis"),
        Map.entry(14, "1984"),
        Map.entry(15, "Dom Casmurro")
    );

    private final List<String> mensagensMotivacionais = List.of(
        "Continue estudando, você está no caminho certo!",
        "Seu progresso é inspirador!",
        "Cada dia de estudo te aproxima dos seus sonhos!",
        "Você tem um potencial incrível!",
        "A educação é a chave para um futuro brilhante!",
        "Seu esforço está fazendo a diferença!",
        "Mantenha o foco, grandes conquistas estão por vir!",
        "Você é capaz de alcançar tudo que desejar!",
        "A persistência é o segredo do sucesso!",
        "Seu crescimento é motivo de orgulho!"
    );

    private final List<String> progressosEducacionais = List.of(
        "Está aprendendo a ler fluentemente",
        "Já domina as operações matemáticas básicas",
        "Desenvolveu ótima capacidade de interpretação de texto",
        "Está aprendendo programação básica",
        "Mostra grande interesse por ciências",
        "Tem facilidade com línguas estrangeiras",
        "Desenvolveu habilidades artísticas notáveis",
        "Está se saindo muito bem em história e geografia",
        "Mostra talento para resolver problemas complexos",
        "Tem se destacado em atividades em grupo"
    );

    private final Random random = new Random();

    public List<Beneficiado> buscarBeneficiadosPorUsuario(Long clienteAssinanteId) {
        return beneficiadoRepository.findByClienteAssinanteId(clienteAssinanteId);
    }

    /**
     * Busca beneficiados por usuário e retorna no formato DTO completo
     * @param usuarioId ID do usuário assinante
     * @return DTO com lista de beneficiados e informações completas
     */
    public BeneficiadosPorUsuarioResponseDTO buscarBeneficiadosCompletosPorUsuario(Long usuarioId) {
        List<Beneficiado> beneficiados = beneficiadoRepository.findByClienteAssinanteId(usuarioId);
        
        if (beneficiados.isEmpty()) {
            return new BeneficiadosPorUsuarioResponseDTO(List.of());
        }
        
        List<BeneficiadoCompletoDTO> beneficiadosDTO = beneficiados.stream()
            .map(this::mapearParaBeneficiadoCompletoDTO)
            .collect(Collectors.toList());
            
        return new BeneficiadosPorUsuarioResponseDTO(beneficiadosDTO);
    }

    /**
     * Mapeia um Beneficiado para BeneficiadoCompletoDTO
     * @param beneficiado Entidade do banco
     * @return DTO com informações formatadas
     */
    private BeneficiadoCompletoDTO mapearParaBeneficiadoCompletoDTO(Beneficiado beneficiado) {
        BeneficiaryDataDTO beneficiaryData = new BeneficiaryDataDTO(
            beneficiado.getNome(),
            beneficiado.getIdade(),
            "UNP " + beneficiado.getEstado()
        );

        // Agora com dados dinâmicos baseados na idade e perfil
        String lastBook = buscarLivroAdequado(beneficiado.getIdade());
        String message = gerarMensagemPersonalizada(beneficiado);
        String progress = calcularProgressoEducacional(beneficiado);

        return new BeneficiadoCompletoDTO(beneficiaryData, lastBook, message, progress);
    }

        /**
     * Busca livro adequado para a idade do beneficiado
     * @param idade Idade do beneficiado
     * @return Nome do livro recomendado
     */
    private String buscarLivroAdequado(int idade) {
        // Se encontrar livro específico para a idade, usa ele
        if (livrosPorIdade.containsKey(idade)) {
            return livrosPorIdade.get(idade);
        }
        
        // Se não, busca livros em uma faixa etária próxima (±2 anos)
        List<String> livrosProximos = livrosPorIdade.entrySet().stream()
            .filter(entry -> Math.abs(entry.getKey() - idade) <= 2)
            .map(Map.Entry::getValue)
            .collect(Collectors.toList());
            
        if (!livrosProximos.isEmpty()) {
            return livrosProximos.get(random.nextInt(livrosProximos.size()));
        }
        
        // Fallback: livro mais próximo disponível
        return livrosPorIdade.values().stream()
            .skip(random.nextInt(livrosPorIdade.size()))
            .findFirst()
            .orElse("O Pequeno Príncipe");
    }

    /**
     * Gera mensagem personalizada para o beneficiado
     * @param beneficiado Dados do beneficiado
     * @return Mensagem personalizada
     */
    private String gerarMensagemPersonalizada(Beneficiado beneficiado) {
        // Usa o hash do nome + random para mais variedade
        int baseIndex = Math.abs(beneficiado.getNome().hashCode()) % mensagensMotivacionais.size();
        int randomOffset = random.nextInt(3); // 0, 1 ou 2
        int finalIndex = (baseIndex + randomOffset) % mensagensMotivacionais.size();
        
        return mensagensMotivacionais.get(finalIndex);
    }

    /**
     * Calcula o progresso educacional do beneficiado
     * @param beneficiado Dados do beneficiado
     * @return Descrição do progresso
     */
    private String calcularProgressoEducacional(Beneficiado beneficiado) {
        // Combina hash do nome com idade para mais variedade
        int baseValue = Math.abs(beneficiado.getNome().hashCode() + beneficiado.getIdade());
        int index = baseValue % progressosEducacionais.size();
        
        return progressosEducacionais.get(index);
    }

    /**
     * Gera uma mensagem de boas-vindas aleatória para novo beneficiado
     */
    public String gerarMensagemBoasVindas() {
        List<String> boasVindas = List.of(
            "Bem-vindo à nossa família de aprendizado!",
            "Que jornada incrível está começando!",
            "Estamos muito felizes em tê-lo conosco!",
            "Prepare-se para descobertas maravilhosas!",
            "Seu potencial vai brilhar conosco!"
        );
        return boasVindas.get(random.nextInt(boasVindas.size()));
    }

    /**
     * Sugere uma atividade extra baseada na idade
     */
    public String sugerirAtividade(int idade) {
        Map<String, List<String>> atividadesPorFaixa = Map.of(
            "5-8", List.of("Contação de histórias", "Desenho livre", "Brincadeiras educativas"),
            "9-12", List.of("Clube de leitura", "Oficina de ciências", "Aulas de informática"),
            "13-15", List.of("Projetos de programação", "Debates literários", "Pesquisa científica")
        );
        
        String faixa;
        if (idade <= 8) faixa = "5-8";
        else if (idade <= 12) faixa = "9-12";
        else faixa = "13-15";
        
        List<String> atividades = atividadesPorFaixa.get(faixa);
        return atividades.get(random.nextInt(atividades.size()));
    }

    /**
     * Método adicional: Buscar beneficiado por ID
     */
    public Beneficiado buscarPorId(Long id) {
        return beneficiadoRepository.findById(id).orElse(null);
    }

    /**
     * Método adicional: Listar todos os beneficiados
     */
    public List<Beneficiado> listarTodos() {
        return beneficiadoRepository.findAll();
    }
}