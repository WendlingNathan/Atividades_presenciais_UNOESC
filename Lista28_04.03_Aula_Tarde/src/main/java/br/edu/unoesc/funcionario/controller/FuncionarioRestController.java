package br.edu.unoesc.funcionario.controller;

import java.math.BigDecimal;
import java.net.URI;
import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.edu.unoesc.funcionario.dto.FuncionarioDTO;
import br.edu.unoesc.funcionario.model.Funcionario;
import br.edu.unoesc.funcionario.service.FuncionarioService;

@RestController
@RequestMapping("/api/funcionarios")
public class FuncionarioRestController {
	private Logger logger = Logger.getLogger(FuncionarioRestController.class.getName()); 
	
	@Autowired
	private FuncionarioService servico;
	
	@GetMapping
	public Iterable<Funcionario> listar() {
		return servico.listar();
	}
	
	@GetMapping("/buscar-paginas")
	public ResponseEntity<Page<Funcionario>> listarPaginas(
			@RequestParam(value="nome", defaultValue="") String nome,
			@RequestParam(value="salario", defaultValue="0") Integer pagina,
			@RequestParam(value="tamPagina", defaultValue="24") Integer tamPagina,
			@RequestParam(value="ordenacao", defaultValue="nome") String campo,
			@RequestParam(value="direcao", defaultValue="ASC") String direcao) {
		
		return ResponseEntity.ok(servico.buscaPaginadaPorNome(nome,
				                                              pagina,
				                                              tamPagina,
				                                              campo,
				                                              direcao));
	}

	@GetMapping("/listar-paginas")
	public ResponseEntity<Page<FuncionarioDTO>> listarPaginado(Pageable pagina) {
		return ResponseEntity.ok(servico.listarPaginado(pagina));
	}
	
	@RequestMapping(value = "/{id}",
				    method = RequestMethod.GET,
				    produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Funcionario> porId(@PathVariable Long id) {
		Optional<Funcionario> funcionario = servico.porId(id);
		
		if (funcionario.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(funcionario.get());
	}
	
	@RequestMapping(value = "/xml/{id}", headers = "Accept=application/xml")
	public Funcionario porIdXML(@PathVariable Long id) {
		return servico.buscar(id);
	}
	
	@GetMapping("/find")
	List<Funcionario> porNome(@RequestParam("filtro") String nome) {
		return servico.buscarPorNome(nome);
	}
	
	@GetMapping(value = {"/salario/{salarioMin}/{salarioMax}", "/salario"})
	public List<Funcionario> porSalario(@PathVariable BigDecimal salarioMin,
										@PathVariable BigDecimal salarioMax) {
		return servico.buscarPorFaixaSalarial(salarioMin, salarioMax);
	}
	
    @PostMapping()
    //@ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Void> incluir(@RequestBody Funcionario funcionario) {
        funcionario = servico.incluir(funcionario);
        
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
        									 .path("/{id}")
        									 .buildAndExpand(funcionario.getId())
        									 .toUri();
        
        System.out.println(uri.toString());
        
        return ResponseEntity.created(uri).build();
    }
    
    @PostMapping(value = "/xml", 
    		//consumes = MediaType.APPLICATION_XML_VALUE,
    		produces = MediaType.APPLICATION_XML_VALUE)
    public Funcionario incluirXML(@RequestBody Funcionario funcionario) {
        return servico.incluir(funcionario);
    }
 
    @PutMapping("/{id}")
    public ResponseEntity<Funcionario> atualizar(@PathVariable("id") Long id, @RequestBody Funcionario funcionario) {
    	if (servico.porId(id).isEmpty()) {
    		return ResponseEntity.notFound().build();
    	}
    	
        return ResponseEntity.ok(servico.alterar(id, funcionario));
    }
 
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable("id") Long id) {
    	try {
    		servico.excluir(id);   		
    	} catch (ObjectNotFoundException e) {
    		return ResponseEntity.notFound().build();
    	}
    	
    	return ResponseEntity.noContent().build();
    }
    
    @GetMapping("/somar-query")
    public Double somarQuery(@RequestParam(value = "numero1", defaultValue = "0") Double numero1,
    						 @RequestParam(value = "numero2", defaultValue = "0") Double numero2) {
    	return numero1 + numero2;
    }
    
    @RequestMapping(value = "/somar-path/{numero1}/{numero2}", method = RequestMethod.GET)
    public Double somarPath(@PathVariable("numero1") String numero1,
    					    @PathVariable(value = "numero2") String numero2) {
    	logger.info("Calculando... " + numero1 + " + " + numero2);
    	
    	if (!ehNumerico(numero1) || !ehNumerico(numero2)) {
    		return 0d;
    	}
    	
    	return converterParaDouble(numero1) + converterParaDouble(numero2);
    }

	private boolean ehNumerico(String strNumero) {
		if (strNumero == null) {
			logger.info("Valor ausente!");
			return false;
		}
		
		// 10,65 => 10.65
		String numero = strNumero.replaceAll(",", ".");
		
		// Utilizando tratamento de exceções
		try {
			System.out.println(Double.parseDouble(numero));
			return true; // Significa que a string contém um Double válido
		} catch (NumberFormatException e) {
			return false;
		}
		
		// Utilizando expressões regulares
//		return numero.matches("[-+]?\\d*\\.?\\d*");
	}
	
	private Double converterParaDouble(String strNumero) {
		if (strNumero == null) {
			return 0d;
		}
		
		String numero = strNumero.replaceAll(",", ".");
		if (ehNumerico(numero)) {
			return Double.parseDouble(numero);
		}
		
		return 0d;
	}
}