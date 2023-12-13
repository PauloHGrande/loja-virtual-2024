package com.fantasma.backend.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fantasma.backend.dto.PessoaClienteRequestDTO;
import com.fantasma.backend.entity.Pessoa;
import com.fantasma.backend.repository.PessoaClienteRepository;

@Service
public class PessoaClienteService {

	@Autowired
	private PessoaClienteRepository pessoaClienteRepository;
	
	@Autowired
	private PermissaoPessoaService permissaoPessoaService;
	
	public Pessoa registrar(PessoaClienteRequestDTO pessoaClienteRequestDTO) {
		Pessoa pessoa = new PessoaClienteRequestDTO().converter(pessoaClienteRequestDTO);
		pessoa.setDataCriacao(new Date());
		permissaoPessoaService.vincularPessoaPermissaoCliente(pessoa);
		return pessoaClienteRepository.saveAndFlush(pessoa);
	}
	
}