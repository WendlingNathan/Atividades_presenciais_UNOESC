package br.edu.unoesc.exemplo.thymeleaf;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {
	@RequestMapping("/tl")
	String tl(Model model) {
		model.addAttribute("mensagem", "Informação armazenada no modelo");
		
		Produto p1 = new Produto("Mesa", 10, new BigDecimal("3.33"));
		Produto p2 = new Produto("Cadeira", 20, new BigDecimal("33.33"));
		
		List<Produto> produtos = new ArrayList<Produto>();
		produtos.add(p1);
		produtos.add(p2);
		
		model.addAttribute("produto", p1);
		model.addAttribute("produtos", produtos);
		
		Instant agora = Instant.now();
		model.addAttribute("data", agora);
		
		SimpleDateFormat df = new SimpleDateFormat();
		df.applyPattern("dd 'de' MMMM 'de' yyyy");
		model.addAttribute("data_formatada", df.format(Date.from(agora)));
		
		model.addAttribute("valor", new BigDecimal("123.45"));
		
		return "index";
	}
}