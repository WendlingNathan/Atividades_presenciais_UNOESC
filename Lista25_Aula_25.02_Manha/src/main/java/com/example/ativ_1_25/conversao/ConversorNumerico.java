package com.example.ativ_1_25.conversao;

public  class ConversorNumerico {
	protected static boolean ehNumerico(String strNumero) {
		if (strNumero == null) return false;
		String numero = strNumero.replaceAll(",", ".");
		
		// Tratamento de exceções
		try {
			Double.parseDouble(numero);
			return true;
		} catch (NumberFormatException e) {
			return false;
		}
	}
	
	protected static Double converteParaDouble(String strNumero) {
		if (strNumero == null) return 0D;
		
		String numero = strNumero.replaceAll(",", ".");
		if (ehNumerico(numero)) return Double.parseDouble(numero);
		
		return 0D;
	}
}
