package com.fantasma.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fantasma.backend.entity.Pessoa;
import com.fantasma.backend.service.PessoaGerenciamentoService;

@RestController
@RequestMapping("/api/pessoa-gerenciamento")
public class PessoaGerenciamentoController {

	@Autowired
	private PessoaGerenciamentoService pessoaGerenciamentoService;
	
	@PostMapping("/senha-codigo")
	private String recuperarCodigo(@RequestBody Pessoa pessoa) {
		return pessoaGerenciamentoService.solicitarCodigo(pessoa.getEmail());
	}
	
	@PostMapping("/senha-alterar")
	private String alterarSenha(@RequestBody Pessoa pessoa) {
		return pessoaGerenciamentoService.alterarSenha(pessoa);
	}	
}
