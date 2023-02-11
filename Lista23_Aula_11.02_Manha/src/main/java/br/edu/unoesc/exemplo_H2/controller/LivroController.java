package br.edu.unoesc.exemplo_H2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.edu.unoesc.exemplo_H2.model.Livro;
import br.edu.unoesc.exemplo_H2.repository.LivroRepository;

@RestController
@RequestMapping("/api/livros")
public class LivroController {
	@Autowired
	private LivroRepository repositorio;
	
	@GetMapping("/find")
	List<Livro> listarComFiltro(@RequestParam("filtro") String filtro) {
		return repositorio.findByAutorContainingIgnoreCase(filtro);
	}
	
	@GetMapping
	public Iterable<Livro> listarTudo() {
		return repositorio.findAll();
	}
}
