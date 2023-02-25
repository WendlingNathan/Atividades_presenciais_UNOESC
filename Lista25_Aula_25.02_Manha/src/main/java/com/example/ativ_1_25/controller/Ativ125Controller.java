package com.example.ativ_1_25.controller;

import java.util.logging.Logger;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.ativ_1_25.conversao.ConversorNumerico;
import com.example.ativ_1_25.operacoes.Calculadora;

@RestController
@RequestMapping("/rest/atividade")
public class Ativ125Controller extends ConversorNumerico {
	Logger logger = Logger.getLogger(Ativ125Controller.class.getName());
	
	Calculadora calculadora = new Calculadora();
	
	// Somas
	@GetMapping("/somar-query")
	public Double somarQuery(@RequestParam(value = "numero1", defaultValue = "0") Double numero1,
							 @RequestParam(value = "numero2", defaultValue = "0") Double numero2) {
		logger.info("-> Calculando soma...");
		return calculadora.calcSomarQuery(numero1, numero2);
	}
	
	@RequestMapping(value = "/somar-path/{numero1}/{numero2}", method = RequestMethod.GET)
	public Double somarPath(@PathVariable(value = "numero1") String numero1,
							 @PathVariable(value = "numero2") String numero2) {
		logger.info("-> Calculando soma...");
		
		if (!ehNumerico(numero1) || !ehNumerico(numero2)) {
			return 0D;
		}
		
		return calculadora.calcSomarPath(numero1, numero2);
	}
	
	// Subtrações
	@GetMapping("/subtrair-query")
	public Double subtrairQuery(@RequestParam(value = "numero1", defaultValue = "0") Double numero1,
							 @RequestParam(value = "numero2", defaultValue = "0") Double numero2) {
		logger.info("-> Calculando subtração...");
		return calculadora.calcSubtrairQuery(numero1, numero2);
	}
	
	@RequestMapping(value = "/subtrair-path/{numero1}/{numero2}", method = RequestMethod.GET)
	public Double subtrairPath(@PathVariable(value = "numero1") String numero1,
							 @PathVariable(value = "numero2") String numero2) {
		logger.info("-> Calculando subtração...");
		
		if (!ehNumerico(numero1) || !ehNumerico(numero2)) {
			return 0D;
		}
		
		return calculadora.calcSubtrairPath(numero1, numero2);
	}
	
	// Multiplicações
	@GetMapping("/multiplicar-query")
	public Double multiplicarQuery(@RequestParam(value = "numero1", defaultValue = "0") Double numero1,
							 @RequestParam(value = "numero2", defaultValue = "0") Double numero2) {
		logger.info("-> Calculando multiplicação...");
		return calculadora.calcMultiplicacaoQuery(numero1, numero2);
	}
	
	@RequestMapping(value = "/multiplicar-path/{numero1}/{numero2}", method = RequestMethod.GET)
	public Double multiplicarPath(@PathVariable(value = "numero1") String numero1,
							 @PathVariable(value = "numero2") String numero2) {
		logger.info("-> Calculando multiplicação...");
		
		if (!ehNumerico(numero1) || !ehNumerico(numero2)) {
			return 0D;
		}
		
		return calculadora.calcMultiplicacaoPath(numero1, numero2);
	}
	
	// Divisões
	@GetMapping("/dividir-query")
	public Double dividirQuery(@RequestParam(value = "numero1", defaultValue = "0") Double numero1,
							 @RequestParam(value = "numero2", defaultValue = "0") Double numero2) {
		logger.info("-> Calculando divisão...");
		try { 
			if (Double.isInfinite(calculadora.calcDividirQuery(numero1, numero2))) {
				return 0D;
			}
			
			return calculadora.calcDividirQuery(numero1, numero2);
			
		} catch (ArithmeticException e) {
			return 0D;
		}
	}
	
	@RequestMapping(value = "/dividir-path/{numero1}/{numero2}", method = RequestMethod.GET)
	public Double dividirPath(@PathVariable(value = "numero1") String numero1,
							 @PathVariable(value = "numero2") String numero2) {
		logger.info("-> Calculando divisão...");
		try { 
			if (Double.isInfinite(calculadora.calcDividirPath(numero1, numero2))) {
				return 0D;
			}
			
			return calculadora.calcDividirPath(numero1, numero2);
			
		} catch (ArithmeticException e) {
			return 0D;
		}
	}
	
	// Médias
	@GetMapping("/media-query")
	public Double mediaQuery(@RequestParam(value = "numero1", defaultValue = "0") Double numero1,
							 @RequestParam(value = "numero2", defaultValue = "0") Double numero2) {
		logger.info("-> Calculando média...");
		return calculadora.calcMediaQuery(numero1, numero2);
	}
	
	@RequestMapping(value = "/media-path/{numero1}/{numero2}", method = RequestMethod.GET)
	public Double mediaPath(@PathVariable(value = "numero1") String numero1,
							 @PathVariable(value = "numero2") String numero2) {
		logger.info("-> Calculando média...");
		
		if (!ehNumerico(numero1) || !ehNumerico(numero2)) {
			return 0D;
		}
		
		return calculadora.calcMediaPath(numero1, numero2);
	}
	
	// Potências
	@GetMapping("/potencia-query")
	public Double potenciaQuery(@RequestParam(value = "numero1", defaultValue = "0") Double numero1,
							    @RequestParam(value = "numero2", defaultValue = "0") Double numero2) {
		logger.info("-> Calculando potência...");
		return calculadora.calcPotenciaQuery(numero1, numero2);
	}
	
	@RequestMapping(value = "/potencia-path/{numero1}/{numero2}", method = RequestMethod.GET)
	public Double potenciaPath(@PathVariable(value = "numero1") String numero1,
							 @PathVariable(value = "numero2") String numero2) {
		logger.info("-> Calculando potência...");
		
		if (!ehNumerico(numero1) || !ehNumerico(numero2)) {
			return 0D;
		}
		
		return calculadora.calcPotenciaPath(numero1, numero2);
	}
	
	// Raízes
	@GetMapping("/raiz-query")
	public Double raizQuery(@RequestParam(value = "numero1", defaultValue = "0") Double numero1) {
		logger.info("-> Calculando raíz...");
		try {
			if(Double.isNaN(calculadora.calcRaizQuery(numero1))) {
				logger.info("-> Operação impossível! Motivo: Não há raíz de números negativos!");
				return 0D;
			}
			
			return calculadora.calcRaizQuery(numero1);
			
		} catch (ArithmeticException e) {
			return 0D;
		}
	}
	
	@RequestMapping(value = "/raiz-path/{numero1}", method = RequestMethod.GET)
	public Double raizPath(@PathVariable(value = "numero1") String numero1) {
		logger.info("-> Calculando raíz...");
		
		try {
			if(Double.isNaN(calculadora.calcRaizPath(numero1))) {
				logger.info("Operação impossível! Motivo: Não há raíz de números negativos!");
				return 0D;
			}
			
			if (!ehNumerico(numero1)) {
				logger.info("-> Número/caractere incorreto!");
				return 0D;
			}
			
			return calculadora.calcRaizPath(numero1);
			
		} catch (Exception e) {
			return 0D;
		}
	}
}