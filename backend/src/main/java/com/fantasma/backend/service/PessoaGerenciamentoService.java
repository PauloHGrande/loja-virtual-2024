package com.fantasma.backend.service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fantasma.backend.entity.Pessoa;
import com.fantasma.backend.repository.PessoaRepository;

@Service
public class PessoaGerenciamentoService {
	
	@Autowired
	private PessoaRepository pessoaRepository;
	
	@Autowired
	private EmailService emailService;
	
	public String solicitarCodigo(String email) {				
		Pessoa pessoa = pessoaRepository.findByEmail(email);
		pessoa.setCodigoRecuperacaoSenha(getCodigoRecuperacaoSenha(pessoa.getId()));
		pessoa.setDataEnvioCodigo(new Date());
		pessoaRepository.saveAndFlush(pessoa);
		emailService.enviarEmailTexto(pessoa.getEmail(), "Código de Recuperação de Senha", "Olá, seu código de recuperação de Senha é: " + pessoa.getCodigoRecuperacaoSenha());
		return "Código Enviado!";
	}
	
	public String alterarSenha(Pessoa pessoa) {
		Pessoa pessoaBanco = pessoaRepository.findByEmailAndCodigoRecuperacaoSenha(pessoa.getEmail(), pessoa.getCodigoRecuperacaoSenha());
		if(pessoaBanco!=null) {
			Date diferenca = new Date(new Date().getTime() - pessoaBanco.getDataEnvioCodigo().getTime());
			if(diferenca.getTime()/1000<900) {  // Tempo em 15 Minutos
				pessoaBanco.setSenha(pessoa.getSenha());
				pessoaBanco.setCodigoRecuperacaoSenha(null);
				pessoaRepository.saveAndFlush(pessoaBanco);
				return "Senha alterada com Sucesso!";
			} else {
				return "Tempo Expirado, Solicite um novo Código";
			}
		} else {
			return "Email ou Código não Encontrado!";
		}		
	}
	
	private String getCodigoRecuperacaoSenha(Long id) {
		DateFormat format = new SimpleDateFormat("ddMMyyyyHHmmssmm");
		return format.format(new Date())+id;
	}
}
