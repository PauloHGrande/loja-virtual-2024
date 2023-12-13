package com.fantasma.backend.service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

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

	@Autowired
	private EmailService emailService;
	
	public Pessoa registrar(PessoaClienteRequestDTO pessoaClienteRequestDTO) {
		Pessoa pessoa = new PessoaClienteRequestDTO().converter(pessoaClienteRequestDTO);
		pessoa.setDataCriacao(new Date());
		Pessoa novaPessoa = pessoaClienteRepository.saveAndFlush(pessoa);
		permissaoPessoaService.vincularPessoaPermissaoCliente(pessoa);
		// Forma Simples de Envio de Email
		//emailService.enviarEmailTexto(pessoa.getEmail(), "Cadastro da Loja Fantasma...", 
		//		"O Cadastro na Loja foi realizado com sucesso!, Em breve receberá a senha de acesso por e-mail!!!");
		// Forma com Template de envio de Email.
		Map<String, Object> proprMap = new HashMap<>();
		proprMap.put("nome", novaPessoa.getNome());
		proprMap.put("mensagem", "O Cadastro na Loja foi realizado com sucesso!, Em breve receberá a senha de acesso por e-mail!!!");
		emailService.enviarEmailTemplate(novaPessoa.getEmail(), "Cadastro da Loja Fantasma...", proprMap);
		return novaPessoa;
	}
	
}
