package com.fantasma.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fantasma.backend.dto.PessoaClienteRequestDTO;
import com.fantasma.backend.entity.Pessoa;
import com.fantasma.backend.service.PessoaClienteService;

@RestController
@RequestMapping("/api/cliente")
public class PessoaClienteController {

	@Autowired
	private PessoaClienteService pessoaClienteService;
	
	
	@PostMapping("/")
	public Pessoa registrar(@RequestBody PessoaClienteRequestDTO pessoaClienteRequestDTO) {
		return pessoaClienteService.registrar(pessoaClienteRequestDTO);
	}
	
}