package Livraime.Unp.Livraime.config;

import Livraime.Unp.Livraime.modelo.Beneficiado;
import Livraime.Unp.Livraime.repositorio.BeneficiadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private BeneficiadoRepository beneficiadoRepository;

    @Override
    public void run(String... args) throws Exception {
        // Verifica se já existem beneficiados no banco
        if (beneficiadoRepository.count() == 0) {
            carregarBeneficiadosMock();
        }
    }

    private void carregarBeneficiadosMock() {
        List<Beneficiado> beneficiadosMock = Arrays.asList(
            // Beneficiados do usuário 1
            new Beneficiado(null, "João Silva", 12, LocalDate.of(2012, 5, 15), 
                           "Rio Grande do Norte", 
                          "Precisa de material escolar e uniforme", true, 1L),
            
            new Beneficiado(null, "Maria Oliveira", 9, LocalDate.of(2015, 8, 22), 
                           "Rio Grande do Norte", 
                          "Interessada em livros infantis", true, 1L),
            
            new Beneficiado(null, "Pedro Santos", 14, LocalDate.of(2010, 3, 10), 
                           "Rio Grande do Norte", 
                          "Gosta de esportes e precisa de tênis", true, 1L),

            // Beneficiados do usuário 2
            new Beneficiado(null, "Ana Costa", 11, LocalDate.of(2013, 11, 5), 
                           "São Paulo", 
                          "Precisa de óculos para estudar", true, 2L),
            
            new Beneficiado(null, "Lucas Lima", 8, LocalDate.of(2016, 2, 18), 
                           "São Paulo", 
                          "Adora desenhar e pintar", true, 2L),

            // Beneficiados do usuário 3
            new Beneficiado(null, "Carla Mendes", 13, LocalDate.of(2011, 7, 30), 
                           "Rio de Janeiro", 
                          "Sonha em ser médica", true, 3L),
            
            new Beneficiado(null, "Rafael Alves", 10, LocalDate.of(2014, 4, 12), 
                           "Rio de Janeiro", 
                          "Precisa de reforço escolar", true, 3L),
            
            new Beneficiado(null, "Juliana Rocha", 7, LocalDate.of(2017, 9, 25), 
                          "Rio de Janeiro", 
                          "Tem dificuldade de aprendizado", true, 3L),

            // Beneficiados do usuário 4
            new Beneficiado(null, "Diego Martins", 15, LocalDate.of(2009, 1, 8), 
                           "Minas Gerais", 
                          "Quer fazer curso de programação", true, 4L)
        );

        beneficiadoRepository.saveAll(beneficiadosMock);
        System.out.println("✅ " + beneficiadosMock.size() + " beneficiados mock carregados no banco!");
    }
}