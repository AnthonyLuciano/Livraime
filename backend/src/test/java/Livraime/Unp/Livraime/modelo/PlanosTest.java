package Livraime.Unp.Livraime.modelo;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class PlanoTest {

    @Test
    void deveRetornarBasicoPorCodigo() {
        Plano resultado = Plano.fromInput("1");
        System.out.println("Teste deveRetornarBasicoPorCodigo -> " + resultado);
        assertEquals(Plano.BASICO, resultado);
    }

    @Test
    void deveRetornarBasicoPorAlias() {
        Plano resultado1 = Plano.fromInput("basico");
        Plano resultado2 = Plano.fromInput("iniciante");
        System.out.println("Teste deveRetornarBasicoPorAlias -> " + resultado1 + " / " + resultado2);
        assertEquals(Plano.BASICO, resultado1);
        assertEquals(Plano.BASICO, resultado2);
    }

    @Test
    void deveRetornarMedioPorCodigo() {
        Plano resultado = Plano.fromInput("2");
        System.out.println("Teste deveRetornarMedioPorCodigo -> " + resultado);
        assertEquals(Plano.MEDIO, resultado);
    }

    @Test
    void deveRetornarMedioPorAlias() {
        Plano resultado1 = Plano.fromInput("medio");
        Plano resultado2 = Plano.fromInput("intermediario");
        System.out.println("Teste deveRetornarMedioPorAlias -> " + resultado1 + " / " + resultado2);
        assertEquals(Plano.MEDIO, resultado1);
        assertEquals(Plano.MEDIO, resultado2);
    }

    @Test
    void deveRetornarAvancadoPorCodigo() {
        Plano resultado = Plano.fromInput("3");
        System.out.println("Teste deveRetornarAvancadoPorCodigo -> " + resultado);
        assertEquals(Plano.AVANCADO, resultado);
    }

    @Test
    void deveRetornarAvancadoPorAlias() {
        Plano resultado1 = Plano.fromInput("avancado");
        Plano resultado2 = Plano.fromInput("expert");
        System.out.println("Teste deveRetornarAvancadoPorAlias -> " + resultado1 + " / " + resultado2);
        assertEquals(Plano.AVANCADO, resultado1);
        assertEquals(Plano.AVANCADO, resultado2);
    }

    @Test
    void deveLancarExcecaoParaInputInvalido() {
        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            Plano.fromInput("plano inexistente");
        });

        System.out.println("Teste deveLancarExcecaoParaInputInvalido -> " + exception.getMessage());
        assertTrue(exception.getMessage().contains("Nível inválido"));
    }
}
