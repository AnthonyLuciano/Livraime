package Livraime.Unp.Livraime.modelo;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class PlanosTest {

    @Test
    void deveRetornarBasicoPorCodigo() {
        planos resultado = planos.fromInput("1");
        System.out.println("Teste deveRetornarBasicoPorCodigo -> " + resultado);
        assertEquals(planos.BASICO, resultado);
    }

    @Test
    void deveRetornarBasicoPorAlias() {
        planos resultado1 = planos.fromInput("basico");
        planos resultado2 = planos.fromInput("iniciante");
        System.out.println("Teste deveRetornarBasicoPorAlias -> " + resultado1 + " / " + resultado2);
        assertEquals(planos.BASICO, resultado1);
        assertEquals(planos.BASICO, resultado2);
    }

    @Test
    void deveRetornarMedioPorCodigo() {
        planos resultado = planos.fromInput("2");
        System.out.println("Teste deveRetornarMedioPorCodigo -> " + resultado);
        assertEquals(planos.MEDIO, resultado);
    }

    @Test
    void deveRetornarMedioPorAlias() {
        planos resultado1 = planos.fromInput("medio");
        planos resultado2 = planos.fromInput("intermediario");
        System.out.println("Teste deveRetornarMedioPorAlias -> " + resultado1 + " / " + resultado2);
        assertEquals(planos.MEDIO, resultado1);
        assertEquals(planos.MEDIO, resultado2);
    }

    @Test
    void deveRetornarAvancadoPorCodigo() {
        planos resultado = planos.fromInput("3");
        System.out.println("Teste deveRetornarAvancadoPorCodigo -> " + resultado);
        assertEquals(planos.AVANCADO, resultado);
    }

    @Test
    void deveRetornarAvancadoPorAlias() {
        planos resultado1 = planos.fromInput("avancado");
        planos resultado2 = planos.fromInput("expert");
        System.out.println("Teste deveRetornarAvancadoPorAlias -> " + resultado1 + " / " + resultado2);
        assertEquals(planos.AVANCADO, resultado1);
        assertEquals(planos.AVANCADO, resultado2);
    }

    @Test
    void deveLancarExcecaoParaInputInvalido() {
        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            planos.fromInput("plano inexistente");
        });

        System.out.println("Teste deveLancarExcecaoParaInputInvalido -> " + exception.getMessage());
        assertTrue(exception.getMessage().contains("Nível inválido"));
    }
}
