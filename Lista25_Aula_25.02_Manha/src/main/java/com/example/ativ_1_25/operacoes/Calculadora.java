package com.example.ativ_1_25.operacoes;

import com.example.ativ_1_25.conversao.ConversorNumerico;

public class Calculadora extends ConversorNumerico{
	
	// Somas
	public Double calcSomarQuery(Double numero1, Double numero2) {
		return numero1 + numero2;
	}
	
	public Double calcSomarPath(String numero1, String numero2) {
		return ConversorNumerico.converteParaDouble(numero1) + converteParaDouble(numero2);
	}
	
	// Subtrações
	public Double calcSubtrairQuery(Double numero1, Double numero2) {
		return numero1 - numero2;
	}
	
	public Double calcSubtrairPath(String numero1, String numero2) {
		return ConversorNumerico.converteParaDouble(numero1) - converteParaDouble(numero2);
	}
	
	// Multiplicações
	public Double calcMultiplicacaoQuery(Double numero1, Double numero2) {
		return numero1 * numero2;
	}
	
	public Double calcMultiplicacaoPath(String numero1, String numero2) {
		return ConversorNumerico.converteParaDouble(numero1) * converteParaDouble(numero2);
	}
	
	// Divisões
	public Double calcDividirQuery(Double numero1, Double numero2) {
		return numero1 / numero2;
	}
	
	public Double calcDividirPath(String numero1, String numero2) {
		return ConversorNumerico.converteParaDouble(numero1) / converteParaDouble(numero2);
	}
	
	// Médias
	public Double calcMediaQuery(Double numero1, Double numero2) {
		return (numero1 + numero2) / 2;
	}
	
	public Double calcMediaPath(String numero1, String numero2) {
		return (ConversorNumerico.converteParaDouble(numero1) + converteParaDouble(numero2)) / 2;
	}
	
	// Potências
	public Double calcPotenciaQuery(Double numero1, Double numero2) {
		return Math.pow(numero1, numero2);
	}
	
	public Double calcPotenciaPath(String numero1, String numero2) {
		return Math.pow(ConversorNumerico.converteParaDouble(numero1), converteParaDouble(numero2));
	}
	
	// Raízes
	public Double calcRaizQuery(Double numero1) {
		return Math.sqrt(numero1);
	}
	
	public Double calcRaizPath(String numero1) {
		return Math.sqrt(ConversorNumerico.converteParaDouble(numero1));
	}
}
