package Livraime.Unp.Livraime.servico;

import Livraime.Unp.Livraime.modelo.Usuario;
import Livraime.Unp.Livraime.modelo.Plano;
import Livraime.Unp.Livraime.modelo.Subscription;
import Livraime.Unp.Livraime.modelo.Beneficiado;
import Livraime.Unp.Livraime.modelo.Donation;
import Livraime.Unp.Livraime.repositorio.UsuarioRepository;
import Livraime.Unp.Livraime.repositorio.BeneficiadoRepository;
import Livraime.Unp.Livraime.repositorio.SubscriptionRepository;
import Livraime.Unp.Livraime.repositorio.DonationRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Random;

@Service
public class PlanoService {

    private final UsuarioRepository usuarioRepository;
    private final BeneficiadoRepository beneficiadoRepository;
    private final SubscriptionRepository subscriptionRepository;
    private final DonationRepository donationRepository;

    public PlanoService(UsuarioRepository usuarioRepository, 
                       BeneficiadoRepository beneficiadoRepository,
                       SubscriptionRepository subscriptionRepository,
                       DonationRepository donationRepository) {
        this.usuarioRepository = usuarioRepository;
        this.beneficiadoRepository = beneficiadoRepository;
        this.subscriptionRepository = subscriptionRepository;
        this.donationRepository = donationRepository;
    }

    public void vincularPlanoAUsuario(String cpf, String planoInput) {
        Usuario usuario = usuarioRepository.findByCpf(cpf)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado com CPF: " + cpf));
        Plano plano = Plano.fromInput(planoInput);
        usuario.setPlano(plano);
        usuarioRepository.save(usuario);
        criarSubscription(usuario);
        criarDoacao(usuario, 2);
        criarBeneficiadosFicticios(usuario.getId());
    }

    private void criarSubscription(Usuario usuario){
        Subscription subscription = new Subscription();
        subscription.setUsuario(usuario); // Usando o relacionamento ManyToOne
        subscriptionRepository.save(subscription);
    }

    private void criarDoacao(Usuario usuario, int quantidadeLivros) {
        Donation donation = new Donation();
        donation.setUsuario(usuario); // Usando o relacionamento ManyToOne
        donation.setQuantidade(quantidadeLivros);
        donationRepository.save(donation);
    }

    private void criarBeneficiadosFicticios(int usuarioId) {
        List<String> nomes = List.of(
            "Ana Silva", "Carlos Oliveira", "Mariana Santos", 
            "João Pereira", "Beatriz Costa", "Lucas Rodrigues"
        );

        List<String> mensagens = List.of(
            "Obrigada pelos livros! Estou aprendendo muito!",
            "Os livros estão me ajudando na escola, muito obrigado!",
            "Adorei as histórias, estou lendo todos os dias!",
            "Muito grato pela oportunidade de aprender mais!",
            "Os livros são incríveis, obrigada pelo carinho!",
            "Estou me divertindo muito com as leituras, obrigado!"
        );

        Random random = new Random();
        
        
        for (int i = 0; i < 2; i++) { // Criar 2 beneficiados fictícios
            Beneficiado beneficiado = new Beneficiado();
            beneficiado.setNome(nomes.get(random.nextInt(nomes.size())));
            beneficiado.setIdade(8 + random.nextInt(8)); // Idade entre 8-15 anos
            beneficiado.setDataNascimento(LocalDateTime.now().minusYears(beneficiado.getIdade()).toLocalDate());
            beneficiado.setEndereco("Endereço fictício " + (i + 1));
            beneficiado.setCidade("Cidade Exemplo");
            beneficiado.setEstado("SP");
            beneficiado.setDescricaoNecessidades(mensagens.get(random.nextInt(mensagens.size())));
            beneficiado.setAtivo(true);
            beneficiado.setClienteAssinanteId((long) usuarioId); // Convertendo para Long
            
            beneficiadoRepository.save(beneficiado);
        }
    }
}