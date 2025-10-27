package Livraime.Unp.Livraime.modelo;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class PlanosTest {

    @Test
    void deveRetornarBasicoPorCodigo() {
        Planos resultado = Planos.fromInput("1");
        System.out.println("Teste deveRetornarBasicoPorCodigo -> " + resultado);
        assertEquals(Planos.BASICO, resultado);
    }

    @Test
    void deveRetornarBasicoPorAlias() {
        Planos resultado1 = Planos.fromInput("basico");
        Planos resultado2 = Planos.fromInput("iniciante");
        System.out.println("Teste deveRetornarBasicoPorAlias -> " + resultado1 + " / " + resultado2);
        assertEquals(Planos.BASICO, resultado1);
        assertEquals(Planos.BASICO, resultado2);
    }

    @Test
    void deveRetornarMedioPorCodigo() {
        Planos resultado = Planos.fromInput("2");
        System.out.println("Teste deveRetornarMedioPorCodigo -> " + resultado);
        assertEquals(Planos.MEDIO, resultado);
    }

    @Test
    void deveRetornarMedioPorAlias() {
        Planos resultado1 = Planos.fromInput("medio");
        Planos resultado2 = Planos.fromInput("intermediario");
        System.out.println("Teste deveRetornarMedioPorAlias -> " + resultado1 + " / " + resultado2);
        assertEquals(Planos.MEDIO, resultado1);
        assertEquals(Planos.MEDIO, resultado2);
    }

    @Test
    void deveRetornarAvancadoPorCodigo() {
        Planos resultado = Planos.fromInput("3");
        System.out.println("Teste deveRetornarAvancadoPorCodigo -> " + resultado);
        assertEquals(Planos.AVANCADO, resultado);
    }

    @Test
    void deveRetornarAvancadoPorAlias() {
        Planos resultado1 = Planos.fromInput("avancado");
        Planos resultado2 = Planos.fromInput("expert");
        System.out.println("Teste deveRetornarAvancadoPorAlias -> " + resultado1 + " / " + resultado2);
        assertEquals(Planos.AVANCADO, resultado1);
        assertEquals(Planos.AVANCADO, resultado2);
    }

    @Test
    void deveLancarExcecaoParaInputInvalido() {
        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            Planos.fromInput("plano inexistente");
        });

        System.out.println("Teste deveLancarExcecaoParaInputInvalido -> " + exception.getMessage());
        assertTrue(exception.getMessage().contains("Nível inválido"));
    }
}
