package br.edu.unoesc.funcionario.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import br.edu.unoesc.funcionario.model.Funcionario;
import br.edu.unoesc.funcionario.service.FuncionarioService;

@Controller
@RequestMapping("/funcionarios")
public class FuncionarioController {
	@Autowired
	private FuncionarioService servico;
	
	@GetMapping("/paginas")
	public String listarPaginas(
						@RequestParam(value="nome", defaultValue="") String nome,
						@RequestParam(value="salario", defaultValue="0") Integer pagina,
						@RequestParam(value="tamPagina", defaultValue="24") Integer tamPagina,
						@RequestParam(value="ordenacao", defaultValue="nome") String campo,
						@RequestParam(value="direcao", defaultValue="ASC") String direcao,
						ModelMap modelo) {
	Page<Funcionario> buscaPaginada = servico.buscaPaginadaPorNome(nome, pagina, tamPagina, campo, direcao);
	
	modelo.addAttribute("pagina", buscaPaginada);
	modelo.addAttribute("NumRegistros", buscaPaginada.getNumberOfElements());
	modelo.addAttribute("nome", nome);
	modelo.addAttribute("tamanhoPagina", tamPagina);
	modelo.addAttribute("campoOrdenacao", campo);
	modelo.addAttribute("direcaoOrdenada", direcao);
	modelo.addAttribute("direcaoReversa", direcao.equals("ASC") ? "DESC" : "ASC");
	
	return "paginacao";
	}
}	
